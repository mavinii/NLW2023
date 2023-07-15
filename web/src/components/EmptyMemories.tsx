'use client'

import { User } from 'lucide-react'
import { SignInGoogle } from './SignInGoogle'
import { SignInGithub } from './SignInGithub'

export function EmptyMemories() {
  return (
    <div className="mx-auto rounded-xl border border-black/20 bg-slate-200 p-8 shadow-sm">
      <div className="flex justify-center">
        <a href="#">
          <User className="h-12 w-12 rounded-full bg-gray-300 text-gray-50" />
        </a>
      </div>
      <SignInGoogle />
      <SignInGithub />
    </div>
  )
}
