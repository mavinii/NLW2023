import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

/**
 * This saves the cookie with the token and redirects to the home page.
 * The home page will read the token from the cookie and save it in the
 * session.
 * The cookie is set to expire in 30 days.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl)
  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = new URL('/', request.nextUrl)

  const cookiesExpiresInSeconds = 60 * 60 * 24 * 30 // 30 days

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; Max-Age=${cookiesExpiresInSeconds}`,
    },
  })
}
