import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  process.env.IS_PRISMA_ENABLED === 'true'
    ? globalForPrisma.prisma ??
      new PrismaClient({
        log: ['query'],
      })
    : undefined;

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.IS_PRISMA_ENABLED === 'true'
) {
  globalForPrisma.prisma = prisma;
}
