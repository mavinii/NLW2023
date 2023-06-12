import Image from 'next/image'
import timeLineMemoriesLogo from '../assets/timeline-memories-logo.svg'

// Hero page
export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={timeLineMemoriesLogo} alt="TimeLine Memories Logo" />

      <div className="max-w-[513px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your TimeLine of Memories
        </h1>
        <p className="text-lg leading-relaxed">
          This is a powerful tool to save your memories and share them with your
          friends, or just keep them for yourself.
        </p>
      </div>

      <a
        className="hover: inline-block rounded-full bg-green-500 px-5 py-5 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href="#"
      >
        SAVE MEMORIES
      </a>
    </div>
  )
}
