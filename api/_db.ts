const { PrismaClient } = require("@prisma/client");

const globalForPrisma = globalThis as unknown as { prisma?: any };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function withTenant<T>(
  tenantId: string,
  fn: (tx: any) => Promise<T>,
  isAdmin = false,
): Promise<T> {
  return prisma.$transaction(async (tx: any) => {
    if (isAdmin) {
      await tx.$executeRawUnsafe(`SET LOCAL app.is_admin = 'true'`);
    }
    await tx.$queryRawUnsafe(`SELECT set_config('app.tenant_id', $1, true)`, tenantId);
    return fn(tx);
  });
}
