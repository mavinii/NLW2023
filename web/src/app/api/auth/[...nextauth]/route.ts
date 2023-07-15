import { authConfig } from '@/lib/auth'
import NextAuth from 'next-auth/next'
// import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
