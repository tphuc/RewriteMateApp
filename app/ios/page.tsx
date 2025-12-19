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
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Apple, Check, MousePointer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative max-w-screen min-h-screen  scrollbar-hide">
      <AuroraBackground className="relative w-full min-h-screen flex items-center">
        <main className="space-y-2 pt-[30%] px-3 md:pt-[10%]">


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

            <br/>
            <div className="mx-auto gap-4 max-w-screen-lg flex overflow-x-scroll no-scrollbar">
           
              <img alt='rewritemate-ios-keyboard-2' className="w-[300px] rounded-xl" src='/rewritemate-ios1.webp'/>
              <img alt='rewritemate-ios-keyboard-2' className="w-[300px] rounded-xl" src='/rewritemate-ios2.webp'/>
              <img alt='rewritemate-ios-keyboard-2' className="w-[300px] rounded-xl" src='/rewritemate-ios3.webp'/>
            </div>



          </div>

       

        </main>
      </AuroraBackground>

      <FaqSection />
      <Footer />
    </div>
  );
}
