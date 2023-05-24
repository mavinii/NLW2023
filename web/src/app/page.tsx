import { User } from 'lucide-react'
import Image from 'next/image'

import timeLineMemoriesLogo from '../assets/timeline-memories-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* Left Column */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/20 px-28 py-16">
        {/* Blur Purple */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-400 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Perfil */}
        <div className="flex items-center gap-3 text-left">
          <a href="#">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <User className="h-5 w-5 text-gray-100" />
            </div>
          </a>

          <p className="text-sm leading-snug">
            <a href="#" className="underline hover:text-gray-50">
              Register
            </a>{' '}
            or{' '}
            <a href="#" className="underline hover:text-gray-50">
              login
            </a>{' '}
            <br />
            and starting saving your memories!
          </p>
        </div>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={timeLineMemoriesLogo} alt="TimeLine Memories Logo" />

          <div className="max-w-[513px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your TimeLine of Memories
            </h1>
            <p className="text-lg leading-relaxed">
              This is a powerful tool to save your memories and share them with
              your friends, or just keep them for yourself.
            </p>
          </div>

          <a
            className="hover: inline-block rounded-full bg-green-500 px-5 py-5 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href="#"
          >
            SAVE MEMORIES
          </a>
        </div>

        {/* Footer */}
        <div className="flex w-full items-center justify-between">
          <p className="text-sm leading-relaxed">
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            by{' '}
            <a
              target="_blank"
              href="https://github.com/mavinii"
              className="underline hover:text-gray-50"
              rel="noreferrer"
            >
              @Marcos Oliveira
            </a>
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You have no memories yet.
            <br />
            <a href="#" className="underline hover:text-gray-50">
              Register
            </a>{' '}
            or{' '}
            <a href="#" className="underline hover:text-gray-50">
              Log in
            </a>{' '}
            to create your first memory!
          </p>
        </div>
      </div>
    </main>
  )
}
