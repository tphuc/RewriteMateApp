

import { ContactButtonClient } from '@/components/contact-button'
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
          width={42}
          height={42}
          className="rounded-[12px] border-1 border-background/80"
        />
        <span className="font-semibold text-lg">RewriteMate</span>
      </Link>

      {/* Right: Contact Button */}
      <div className='flex-1'/>
      <Link className='text-lg font-semibold' href='/ios'>iOS</Link>

      <ContactButtonClient/>
      </div>
    </nav>
  )
}