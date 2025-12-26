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

export default function Nav() {
  return (
    <nav className="absolute top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-screen-md items-center justify-between gap-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="RewriteMate Logo"
            width={42}
            height={42}
            className="rounded-[12px] border border-background/80"
          />
         
        </Link>
        <div className="hidden md:flex text-lg font-semibold">RewriteMate</div>

        <div className="flex-1" />

        {/* Desktop CTA */}
        <Link
          href="/ios"
          className="rounded-full whitespace-nowrap  bg-white px-3 py-1 text-center text-md lg:text-lg font-medium text-black md:px-4"
        >
          Download for iOS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>

            <DrawerContent  className="rounded-t-2xl px-6 pb-8">
              <DialogTitle hidden/>
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
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
      <Link
        href="/blog"
        className="w-full text-lg font-semibold md:w-auto"
      >
        Blog
      </Link>

      <ContactButtonClient />
    </div>
  )
}