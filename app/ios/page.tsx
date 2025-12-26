import { AppStoreBtn } from "@/components/appstore-btn";
import CustomInstructionsList from "@/components/custom-instruction-list";
import DownloadMacOSBtn from "@/components/download-macos-btn";
import EditModal from "@/components/EditModal";
import { EditModalTasks } from "@/components/EditModalTasks";
import { FaqSection } from "@/components/faq";
import Footer from "@/components/footer";
import GetEarlyAccess from "@/components/get-early-access";
import { HeroTitle } from "@/components/HeroTitle";
import IOSSimulator from "@/components/ios-simulator";
import { MacTitle } from "@/components/MacTitle";
import PricingPlansPage from "@/components/pricing-plans";
import { StyledImage } from "@/components/styled-image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Apple, Check, MousePointer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative max-w-screen min-h-screen  scrollbar-hide">
      <div className="relative w-full  min-h-screen flex items-center justify-center">
        <main className="space-y-2 pt-[30%] md:pt-[10%]">


          {/* <HeroTitle />

          <div className="z-20 pt-10 gap-4 flex items-center justify-center">
            <DownloadMacOSBtn />

          </div> */}

          <div className="min-h-[50vh] pb-20 w-full relative">

            <div className="flex flex-col lg:flex-row w-full min-h-[60vh] mx-auto items-center px-4 gap-4 max-w-screen-md">
              <div className="space-y-6">
                <h1 className="text-4xl tracking-tighter max-w-sm md:text-5xl font-bold">
                  iOS Keyboard Extension
                </h1>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="leading-5 text-secondary-foreground">
                      Rewrite anything on your phone with one tap
                    </p>
                  </li>

                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="leading-5 text-secondary-foreground">
                      Customize prompts and instructions to match your voice
                    </p>
                  </li>

                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="leading-5 text-secondary-foreground">
                      Works inside any app — messages, emails, notes, socials
                    </p>
                  </li>
                </ul>

                <Link style={{ zIndex: 20 }} className="px-2 border-[0px]" href='https://apps.apple.com/vn/app/rewritemate/id6755306532'>
                  <AppStoreBtn
                    variant="light"
                    className="scale-[1.1]"
                  />

                </Link>
              </div>
              <IOSSimulator />
            </div>

            <br />

            {/* Left fade */}

            {/* Scroll container */}
            <div
              className="
    relative
      mx-auto
      flex
      flex-nowrap
      gap-2
      overflow-x-auto
      no-scrollbar

      lg:grid
      lg:grid-cols-3
      lg:gap-4
      lg:max-w-screen-md
      lg:overflow-x-visible
    "
            >
              
                <StyledImage
                  alt="rewritemate-ios-keyboard-1"
                  className="rounded-lg shrink-0 h-auto"
                  style={{
                    width: 280,

                  }}
                  src="/ios1.webp"
                />
            
              <StyledImage
                alt="rewritemate-ios-keyboard-2"
                className="rounded-lg shrink-0 h-auto"
                style={{
                  width: 280,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.8)"
                }}
                src="/ios2.webp"
              />
              <StyledImage
                alt="rewritemate-ios-keyboard-3"
                className="rounded-lg shrink-0 h-auto"
                style={{
                  width: 280,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.8)"
                }}
                src="/ios3.webp"
              />
              <StyledImage
                alt="rewritemate-ios-keyboard-4"
                className="rounded-lg shrink-0 h-auto"
                style={{
                  width: 280,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.8)"
                }}
                src="/ios4.webp"
              />
              <StyledImage
                alt="rewritemate-ios-keyboard-5"
                className="rounded-lg shrink-0 h-auto"
                style={{
                  width: 280,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.8)"
                }}
                src="/ios5.webp"
              />
            </div>
          </div>






        </main>
      </div>

      <FaqSection />
      <Footer />
    </div>
  );
}
