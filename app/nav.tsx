'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { ContactButtonClient } from '@/components/contact-button'
import { DialogTitle } from '@radix-ui/react-dialog'

const AppleLogoSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={25}
    viewBox="0 0 19 25"
    fill="currentColor"
    {...props}
  >
    <path
      fill="inherit"
      d="M13.7 5.602c-1.747 0-3.177 1.066-4.09 1.066-.973 0-2.239-1.066-3.762-1.066-2.895 0-5.825 2.46-5.825 6.96 0 2.813 1.079 5.778 2.426 7.688 1.149 1.617 2.156 2.918 3.61 2.918 1.43 0 2.062-.926 3.843-.926 1.805 0 2.215.926 3.797.926 1.57 0 2.614-1.441 3.61-2.86 1.101-1.628 1.57-3.21 1.582-3.292-.094-.024-3.094-1.254-3.094-4.688 0-2.976 2.355-4.312 2.496-4.418-1.559-2.238-3.938-2.308-4.594-2.308Zm-.821-1.899c.715-.867 1.219-2.05 1.219-3.246 0-.164-.012-.328-.036-.457-1.171.047-2.578.773-3.41 1.758-.668.75-1.277 1.945-1.277 3.14 0 .188.035.364.047.422.07.012.187.035.316.035 1.043 0 2.356-.703 3.14-1.652Z"
    />
  </svg>
)

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80  backdrop-blur-md">
      <div className="relative h-full w-full mx-auto   px-4 py-3 rounded-full flex max-w-screen-lg items-center justify-between gap-3">
        {/* <div
        className="absolute inset-0 z-10 h-full w-full rounded-full pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(100,100,100,0.3)",
        }}
      /> */}
        {/* Logo */}
        <div className='flex items-center justify-center flex-1 gap-2'>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://storage.googleapis.com/tubememo-public/rewritemate/logo.webp"
              alt="RewriteMate Logo"
              width={30}
              height={30}
              className="rounded-[4px] shadow-xs"
            />

          </Link>
          <div className="hidden md:flex text-lg font-semibold">RewriteMate</div>
        </div>


        {/* Desktop CTA https://apps.apple.com/vn/app/rewritemate/id6755306532 */}
        {/* <Link
          href="/macos"
          className="rounded-full cursor-pointer hover:opacity-90 text-white flex items-center flex-nowrap gap-2  whitespace-nowrap bg-gradient-to-b from-sky-500 to-blue-500 pl-4 pr-3 py-1 text-center shadow-dark font-semibold"
        >
           macOS
          <AppleLogoSvg className='w-4 h-4'/>
        </Link> */}

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify items-center justify-center">
          <NavLinks />
        </div>

        <div className='hidden md:flex items-center justify-center flex-1 gap-2'>
          <Link
            href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="relative rounded-full hover:opacity-90 text-white flex overflow-hidden items-center shadow-xs flex-nowrap gap-2  whitespace-nowrap bg-gradient-to-tr from-blue-500/90 to-blue-500 pl-4 pr-3 py-1.5 shadow-xs text-center"
          >
            Try for Free
            {/* <AppleLogoSvg className='w-4 h-4'/> */}
          </Link>
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="rounded-t-2xl px-6 pb-8">
              <DialogTitle hidden />
              {/* Optional grab handle spacing */}
              <div className="mt-4 flex flex-col gap-4">
                <NavLinks />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  )
}

const NavLinks = () => {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
      <Link
        href="/macos"
        className="w-full font-medium md:w-auto"
      >
        Mac
      </Link>

      <Link
        href="/"
        className="w-full font-medium md:w-auto"
      >
        iOS
      </Link>


      <Link
        href="/blog"
        className="w-full font-medium md:w-auto"
      >
        Blog
      </Link>



      <ContactButtonClient />
    </div>
  )
}