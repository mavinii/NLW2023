import { cookies } from 'next/headers'

import { SignIn } from '@/components/Signin'
import { Hero } from '@/components/Hero'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* Left Column */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/20 px-28 py-16">
        {/* Blur Purple */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-400 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {isAuthenticated ? <Profile /> : <SignIn />}

        <Hero />
        <Copyright />
      </div>

      {/* Right Column */}
      <div className="flex flex-col p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
