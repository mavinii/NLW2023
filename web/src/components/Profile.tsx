import { getUserInfo } from '@/lib/auth'
import Image from 'next/image'

// Profile after user is authenticated
export function Profile() {
  const { name, avatarUrl } = getUserInfo()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="text-sm leading-snug">
        <span className="font-bold">
          {name}
          <a href="#" className="block text-red-600 hover:text-red-400">
            exit
          </a>
        </span>
      </p>
    </div>
  )
}
