import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

// Routes separated by files
app.register(memoriesRoutes)

// The OAhth of GitHub as route
app.register(authRoutes)

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
