import { User } from 'lucide-react'

// Perfil, Register and Login
export function SignIn() {
  return (
    <div className="flex items-center gap-3 text-left">
      <a href="#">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <User className="h-5 w-5 text-gray-100" />
        </div>
      </a>

      <p className="text-sm leading-snug">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="underline hover:text-gray-50"
        >
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
  )
}
