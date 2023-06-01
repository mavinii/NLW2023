import { PrismaClient } from '@prisma/client'

// This allows Prisma to log all queries to database
export const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
})
