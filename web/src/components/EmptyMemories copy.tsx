// Right Column of the main page
export function EmptyMemories() {
  return (
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
  )
}
