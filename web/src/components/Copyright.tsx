// Copyright footer section
export function Copyright() {
  return (
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
  )
}
