

import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="px-6 py-4 absolute top-0 z-50 w-full">
      {/* Left: Logo */}
      <div className='mx-auto max-w-screen-md flex items-center flex items-center justify-between'>
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="RewriteMate Logo"
          width={36}
          height={36}
          className="rounded-lg border-4 border-background/50"
        />
        <span className="font-semibold text-lg">RewriteMate</span>
      </Link>

      {/* Right: Contact Button */}
      <Link
        href="#contact"
        className="text-lg font-semibold"
      >
        Contact
      </Link>
      </div>
    </nav>
  )
}