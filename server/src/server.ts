import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

// This allows Prisma to register archives of routes separated by files
app.register(memoriesRoutes)

// Fastify routes using promises
app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running on port http://localhost:3333'))
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
