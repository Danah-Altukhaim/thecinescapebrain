import { PrismaClient, Prisma } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: any };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function withTenant<T>(
  tenantId: string,
  fn: (tx: any) => Promise<T>,
): Promise<T> {
  return prisma.$transaction(async (tx: any) => {
    await tx.$executeRaw(Prisma.sql`SELECT set_config('app.tenant_id', ${tenantId}, true)`);
    return fn(tx);
  });
}
