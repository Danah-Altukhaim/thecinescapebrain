/**
 * Seed dev fixtures: two tenants (Future Kid + test-co), canonical modules, sample entries,
 * an API key per tenant, and one crafted "bad KB" row for gap-scan tests.
 *
 * Run: `pnpm seed`
 */
import bcrypt from "bcrypt";
import { randomBytes, createHash } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import type { FieldDefinition } from "@brain/shared";

// Seed runs under the BYPASSRLS migrate role.
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_MIGRATE_URL ?? process.env.DATABASE_URL! } },
});

const branchFields: FieldDefinition[] = [
  { key: "name", label: "Name", type: "text", required: true, localized: true },
  { key: "governorate", label: "Governorate", type: "select", required: true, localized: false,
    options: ["Hawalli", "Jahra", "Ahmadi", "Farwaniya", "Al-Asimah"] },
  { key: "status", label: "Status", type: "select", required: true, localized: false,
    options: ["Active", "CLOSED", "Temp Closed"] },
  { key: "google_maps_url", label: "Maps", type: "url", required: false, localized: false },
  { key: "hours_regular", label: "Hours (regular)", type: "textarea", required: true, localized: false },
];

const promoFields: FieldDefinition[] = [
  { key: "name", label: "Name", type: "text", required: true, localized: false },
  { key: "type", label: "Type", type: "select", required: true, localized: false,
    options: ["Promo", "Seasonal", "Bank", "Update", "Ops"] },
  { key: "message", label: "Customer message", type: "textarea", required: true, localized: true },
  { key: "start_date", label: "Start", type: "date", required: false, localized: false },
  { key: "end_date", label: "End", type: "date", required: false, localized: false },
];

const faqFields: FieldDefinition[] = [
  { key: "question", label: "Question", type: "text", required: true, localized: true },
  { key: "answer", label: "Answer", type: "textarea", required: true, localized: true },
];

async function seedTenant(slug: string, name: string) {
  const tenant = await prisma.tenant.upsert({
    where: { slug },
    create: { slug, name, timezone: "Asia/Kuwait" },
    update: {},
  });

  const [branches, promos, faqs] = await Promise.all([
    prisma.module.upsert({
      where: { tenantId_slug: { tenantId: tenant.id, slug: "branches" } },
      create: {
        tenantId: tenant.id, slug: "branches", label: "Branches", icon: "map-pin",
        fieldDefinitions: branchFields as object,
      },
      update: { fieldDefinitions: branchFields as object },
    }),
    prisma.module.upsert({
      where: { tenantId_slug: { tenantId: tenant.id, slug: "promotions" } },
      create: {
        tenantId: tenant.id, slug: "promotions", label: "Promotions", icon: "tag",
        fieldDefinitions: promoFields as object,
      },
      update: { fieldDefinitions: promoFields as object },
    }),
    prisma.module.upsert({
      where: { tenantId_slug: { tenantId: tenant.id, slug: "faqs" } },
      create: {
        tenantId: tenant.id, slug: "faqs", label: "FAQs", icon: "help-circle",
        fieldDefinitions: faqFields as object,
      },
      update: { fieldDefinitions: faqFields as object },
    }),
  ]);

  const editor = await prisma.user.upsert({
    where: { tenantId_email: { tenantId: tenant.id, email: "sara@example.com" } },
    create: {
      tenantId: tenant.id,
      email: "sara@example.com",
      name: "Sara (Editor)",
      role: "CLIENT_EDITOR",
      passwordHash: await bcrypt.hash("password1", 10),
    },
    update: {},
  });

  const admin = await prisma.user.upsert({
    where: { tenantId_email: { tenantId: tenant.id, email: "admin@pairai.com" } },
    create: {
      tenantId: tenant.id,
      email: "admin@pairai.com",
      name: "PAIR Admin",
      role: "PAIR_ADMIN",
      passwordHash: await bcrypt.hash("password1", 10),
    },
    update: {},
  });

  // Seed one branch, one promo, one FAQ
  await prisma.entry.upsert({
    where: {
      tenantId_moduleId_externalId: {
        tenantId: tenant.id,
        moduleId: branches.id,
        externalId: "salmiya",
      },
    },
    create: {
      tenantId: tenant.id,
      moduleId: branches.id,
      externalId: "salmiya",
      createdBy: editor.id,
      status: "active",
      data: {
        name_en: "Souq Salmiya Mall",
        name_ar: "سوق السالمية",
        governorate: "Hawalli",
        status: "Active",
        google_maps_url: "https://maps.example/salmiya",
        hours_regular: "Sun-Thu 10:00-22:00; Fri-Sat 10:00-23:00",
      },
    },
    update: {},
  });

  await prisma.entry.upsert({
    where: {
      tenantId_moduleId_externalId: {
        tenantId: tenant.id,
        moduleId: promos.id,
        externalId: "nbk-summer",
      },
    },
    create: {
      tenantId: tenant.id,
      moduleId: promos.id,
      externalId: "nbk-summer",
      createdBy: editor.id,
      status: "active",
      data: {
        name: "NBK Summer Promo",
        type: "Bank",
        message_en: "30% off rides with NBK cards this July!",
        message_ar: "خصم 30% على الألعاب عند الدفع ببطاقة NBK خلال يوليو",
        start_date: "2026-07-01T00:00:00.000Z",
        end_date: "2026-07-31T23:59:59.000Z",
      },
    },
    update: {},
  });

  // Crafted bad-KB FAQ: missing Arabic, should trigger a translation_gap suggestion
  await prisma.entry.upsert({
    where: {
      tenantId_moduleId_externalId: {
        tenantId: tenant.id,
        moduleId: faqs.id,
        externalId: "refund-policy",
      },
    },
    create: {
      tenantId: tenant.id,
      moduleId: faqs.id,
      externalId: "refund-policy",
      createdBy: editor.id,
      status: "active",
      data: {
        question_en: "What's your refund policy?",
        answer_en: "Full refunds within 14 days with receipt.",
        // intentionally no _ar fields, gap-scan should flag this
      },
    },
    update: {},
  });

  // API key
  const raw = `tb_live_${randomBytes(24).toString("hex")}`;
  const hash = createHash("sha256").update(raw).digest("hex");
  await prisma.apiKey.upsert({
    where: { keyHash: hash },
    create: {
      tenantId: tenant.id,
      keyHash: hash,
      keyPrefix: raw.slice(0, 12),
      label: "Seed bot key",
      scopes: ["read:kb", "write:analytics"],
    },
    update: {},
  });

  console.log(`Seeded ${slug}: api_key = ${raw}`);
  return { tenant, admin, editor };
}

async function main() {
  await seedTenant("future-kid", "Future Kid");
  await seedTenant("test-co", "Test Co");
  console.log("Seed complete.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
