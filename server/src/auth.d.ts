// fastify-jwt.d.ts
import '@fastify/jwt'

// source: https://github.com/fastify/fastify-jwt
declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string
      name: string
      avatarUrl: string
    }
  }
}
