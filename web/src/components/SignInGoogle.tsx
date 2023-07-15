import Image from 'next/image'
import { signIn } from 'next-auth/react'

export function SignInGoogle() {
  const handleClickGoogle = () => {
    signIn('google')
  }

  return (
    <button
      onClick={handleClickGoogle}
      className="mt-8 flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    >
      <Image
        src={'https://authjs.dev/img/providers/google.svg'}
        alt="Google Logo"
        width={20}
        height={20}
      />
      <span className="ml-4">Sign in with Google</span>
    </button>
  )
}
