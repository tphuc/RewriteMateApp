import { Discord, Instagram, Threads, Tiktok, X } from "@/components/icons"
import Link from "next/link"


export default function Footer2() {
  return (
    <div className="bg-secondary text-foreground">

      <div className="max-w-screen-xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-12 py-10">

          {/* Logo */}
          <div className="col-span-full md:col-span-1">
            <div className=" flex items-center justify-center ">
              <img src="https://storage.googleapis.com/tubememo-public/rewritemate/logo.webp" width={256} height={256} className="w-20 h-20" />
            </div>

          </div>



          <div>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-foreground/90 transition">Download for iOS</Link></li>
              <li><Link href="/macos" className="hover:text-foreground/90 transition">Download for macOS</Link></li>
              <li><Link href="/#pricing" className="hover:text-foreground/90 transition">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground/90 transition">Features</Link></li>
              {/* <li><Link href="#" className="hover:text-foreground/90 transition">Updates</Link></li> */}
              {/* <li><Link href="#" className="hover:text-foreground/90 transition">Use Cases</Link></li> */}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold mb-5">Resources</h3>
            <ul className="space-y-3">
              {/* <li><Link href="#" className="hover:text-foreground/90 transition">Help</Link></li> */}
              <li><Link href="#" className="hover:text-foreground/90 transition">Blog</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground/90 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-foreground/90 transition">Terms of Use</Link></li>
              {/* <li><Link href="#" className="hover:text-foreground/90 transition">Media Kit</Link></li> */}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold mb-5">About</h3>
            <ul className="space-y-3 ">
              <li><Link href="mailto:hi@rewritemate.app" className="hover:text-foreground/90 transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-foreground/90 transition">Suggest a Feature</Link></li>
            </ul>
          </div>




          {/* Social */}


        </div>



        <div className="max-w-screen-xl border-t px-4 flex flex-col lg:flex-row pb-8 pt-4 gap-4 items-center justify-between">
          <div className="opacity-80">
            © {new Date().getFullYear()} RewriteMate. All rights reserved
          </div>

          <div className="text-foreground stroke-foreground flex items-center gap-4">
            <a href="https://www.instagram.com/rewritemate.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>

            <a href="https://www.threads.com/@rewritemate.app" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <Threads className="w-4 h-4" />
            </a>

            <a href="https://x.com/rewritemateapp" target="_blank" rel="noopener noreferrer" aria-label="X">
              <X className="w-4 h-4" />
            </a>

            <a href="https://discord.gg/wG6rrs2BT5" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Discord className="w-4 h-4" />
            </a>
          </div>

        </div>



      </div>

    </div>
  )
}


