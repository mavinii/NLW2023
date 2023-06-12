import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

// This is a function that receives the app instance for routes registration
export async function memoriesRoutes(app: FastifyInstance) {
  // Before all routes, verify if the user is authenticated
  app.addHook('preHandler', async (request) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      console.log(err)
    }
  })

  /**
   * Verify with JWT token if user is authenticated
   * if so, list all memories
   * Orders the memories by createdAt
   * Maps the memories to a new array of objects and concatenates the content
   */
  app.get('/memories', async (request) => {
    const memories = await prisma.memory.findMany({
      where: {
        userId: request.user.sub,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => ({
      id: memory.id,
      coverUrl: memory.coverUrl,
      excerpt: memory.content.substring(0, 100).concat('...'),
    }))
  })

  /**
   * This route lists a specific memory by id
   * This validates the id param with zod
   * User can only see their own memories
   * Find a unique id of throw an error
   */
  app.get('/memories/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (!memory.isPublic && memory.userId !== request.user.sub) {
      return reply.status(401).send({
        error: 'You are not authorized to see this memory',
      })
    }

    return memory
  })

  /**
   * This route creates a new memory
   * Converts the isPublic to boolean
   * Validates the content, coverUrl and isPublic with zod
   * Creates a new memory with the validated data
   */
  app.post('/memories', async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const createMemory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: request.user.sub,
      },
    })

    return createMemory
  })

  /**
   * This route updates a specific memory by id
   * Two things are happening here:
   * First: this validates the id param with zod and then,
   * Second: validates the content, coverUrl and isPublic param with zod
   * And then it does the update and returns the updated memory
   */
  app.put('/memories/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    let updatedMemory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (updatedMemory.userId !== request.user.sub) {
      return reply.status(401).send({
        error: 'You are not authorized to update this memory',
      })
    }

    updatedMemory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return updatedMemory
  })

  /**
   * This route deletes a specific memory by id
   * This validates the id param with zod
   * Find a unique id and delete it or throw an error
   */
  app.delete('/memories/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const deleteMemory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (deleteMemory.userId !== request.user.sub) {
      return reply.status(401).send({
        error: 'You are not authorized to update this memory',
      })
    }

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
