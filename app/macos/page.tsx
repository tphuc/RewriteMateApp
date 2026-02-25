import { AppStoreBtn } from "@/components/appstore-btn";
import CustomInstructionsList from "@/components/custom-instruction-list";
import { ImageFlow } from "@/components/custom-mdx";
import DownloadMacOSBtn from "@/components/download-macos-btn";
import EditModal from "@/components/EditModal";
import { EditModalTasks } from "@/components/EditModalTasks";
import { FaqSection } from "@/components/faq";
import Footer from "@/components/footer";
import GetEarlyAccess from "@/components/get-early-access";
import { HeroTitle } from "@/components/HeroTitle";
import { AppleLogoSvg } from "@/components/icons";
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
import Footer2 from "../(marketing)/footer";

export default function Home() {
  return (
    <div className="relative max-w-screen min-h-screen  scrollbar-hide">
      <main className="space-y-2 mx-auto bg-secondary max-w-screen-lg mt-[30%] pb-[5%] px-3 md:mt-[10%] rounded-4xl border overflow-hidden">
        <div className="relative pt-[5%] space-y-4">
          <div className=" bg-gradient-to-b from-secondary via-secondary/80 to-transparent w-full h-[5%]  z-10" />
          <img
            src='/macos.avif'
            className="w-full rounded-xl md:h-[500px]"
            style={{ objectFit: 'contain' }}
          />
          <div className="relative  pb-5 space-y-2">

            <h1 className="relative mx-auto max-w-xl text-center text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Your Better <br /> AI Writing Assistant
              </span>
            </h1>
            <p className="text-center max-w-md mx-auto text-xl">
              Instantly improve, rephrase, and refine any text. The better writing tool, built for iOS and macOS.
            </p>
          </div>
        </div>

        <div className="z-20 gap-4 flex flex-col lg:flex-row px-4 items-center justify-center">



          {/* <Link className="z-20 whitespace-nowrap border-1 dark:border-foreground shadow-xs inline-flex font-semibold items-center gap-2 rounded-full bg-gradient-to-b from-foreground/80 to-foreground  px-5 py-2 text-background hover:opacity-90" href='https://apps.apple.com/vn/app/rewritemate/id6755306532'>
    Download for iOS
    <AppleLogoSvg
      className={`h-4 w-4`}
    />
  </Link> */}

          <DownloadMacOSBtn />

          {/* <GetEarlyAccess/> */}
          {/* <Link style={{ zIndex: 20 }} href='https://apps.apple.com/vn/app/rewritemate/id6755306532'>
      <AppStoreBtn
        variant="light"
        className="scale-[1.1]"
      />

    </Link> */}


        </div>


        <p className="mx-auto max-w-sm text-center">Requires macOS 14+</p>
        {/* <div className="mt-[10%] mx-auto px-2 relative" style={{maxWidth:"min(500px, 98vw)", overflow:"hidden"}}>
    <div  className="relative border-1 rounded-3xl space-y-4 pb-[10%] mx-auto p-4 bg-background/80 backdrop-blur-sm">
      <MacTitle />
      <div className='absolute overflow-hidden top-0 left-0 w-full h-full rounded-3xl' style={{
        boxShadow: "inset 0px 0px 1px 0 rgba(200, 200, 200, 0.1), inset -0.5px -0.5px 0.5px 0.5px rgba(20, 20, 20, 0.2)"
      }} />
      <span className="bg-gradient-to-b  from-secondary/80 to-secondary">I want my emails to sound not too formal but still serious.</span>
      <div className="absolute top-[50%] right-[38%] text-muted-foreground"><MousePointer className="fill-muted-foreground/80" /></div>
    </div>

    <div className="-mt-[10%]  z-10 relative">
      <EditModal originalText="I want my emails to sound professional without feeling overly formal." />

    </div>


  </div> */}
        <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-background to-transparent" />

      </main>

      <FaqSection />
      <Footer2/>
    </div>
  );
}
