import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import axios from 'axios'
import { prisma } from '../lib/prisma'

// It receives the app instance for routes registration from github auth
export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    // This is the response from GitHub
    const accessTokenResponse = await axios.post(
      'http://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    // This is the access token from GitHub
    const { accessToken } = accessTokenResponse.data

    // This is the response from GitHub
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    // This object is validing the response from GitHub with zod
    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string(),
      avatar_url: z.string().url(),
    })

    // Validate the user response from GitHub with zod
    const userInfo = userSchema.parse(userResponse.data)

    // Validate if the user already exists
    let user = await prisma.user.findUnique({
      where: {
        githubID: userInfo.id,
      },
    })

    // If the user doesn't exists, create it
    if (!user) {
      user = await prisma.user.create({
        data: {
          githubID: userInfo.id,
          login: userInfo.login,
          name: userInfo.name,
          avatarUrl: userInfo.avatar_url,
        },
      })
    }

    // Generate the JWT token
    const token = app.jwt.sign(
      {
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      {
        sub: user.id,
        expiresIn: '30 days',
      },
    )

    return {
      token,
    }
  })
}
