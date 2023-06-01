import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

// here will be all the routes for the memories
export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const users = await prisma.user.findMany()
    return `it works! ${users}`
  })
}
