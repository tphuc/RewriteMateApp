import { AppStoreBtn } from "@/components/appstore-btn";
import CustomInstructionsList from "@/components/custom-instruction-list";
import DownloadMacOSBtn from "@/components/download-macos-btn";
import EditModal from "@/components/EditModal";
import { EditModalTasks } from "@/components/EditModalTasks";
import { FaqSection } from "@/components/faq";
import Footer from "@/components/footer";
import GetEarlyAccess from "@/components/get-early-access";
import { HeroTitle } from "@/components/HeroTitle";
import { AppleLogoSvg, Sparkles } from "@/components/icons";
import IOSSimulator from "@/components/ios-simulator";
import { MacTitle } from "@/components/MacTitle";
import PricingPlansPage from "@/components/pricing-plans";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Apple, Check, MousePointer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Features from "./features";


export default function Home() {
  return (
    <div className="relative max-w-screen min-h-screen px-2 scrollbar-hide">

      <main className="space-y-2 mx-auto bg-secondary max-w-screen-lg mt-[30%] pb-[5%] px-3 md:mt-[10%] rounded-4xl border overflow-hidden">


        <HeroTitle />

        <div className="z-20 gap-4 flex flex-col lg:flex-row px-4 items-center justify-center">
       


          <Link className="z-20 whitespace-nowrap border-1 dark:border-foreground shadow-xs inline-flex font-semibold items-center gap-2 rounded-full bg-gradient-to-b from-foreground/80 to-foreground  px-5 py-2 text-background hover:opacity-90" href='https://apps.apple.com/vn/app/rewritemate/id6755306532'>
            Download for iOS
            <AppleLogoSvg
              className={`h-4 w-4`}
            />
          </Link>

          <DownloadMacOSBtn />

          {/* <GetEarlyAccess/> */}
          {/* <Link style={{ zIndex: 20 }} href='https://apps.apple.com/vn/app/rewritemate/id6755306532'>
              <AppStoreBtn
                variant="light"
                className="scale-[1.1]"
              />

            </Link> */}


        </div>
        <div className="flex items-center justify-center">
          <a href="https://launchigniter.com/product/rewritemate-ai-keyboard?ref=badge-rewritemate-ai-keyboard" target="_blank">
            <img src="https://launchigniter.com/api/badge/rewritemate-ai-keyboard?theme=light" alt="Featured on LaunchIgniter" width="212" height="55" />
          </a>
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

      {/* <Features /> */}

      {/* <div className="min-h-[50vh] w-full relative">
        <br />

        <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 relative max-w-[98vw]">
          <p className="text-muted-foreground/80">Open writing tool instantly with configurable hotkeys</p>
          <KbdGroup>
            <Kbd className="size-8 text-lg rounded-lg border">⇧</Kbd>
            <Kbd className="size-8 text-lg rounded-lg border">⌥</Kbd>
            <Kbd className="size-8 text-lg rounded-lg border">W</Kbd>
          </KbdGroup>
        </div>




        <div className="relative py-[12%] px-4">
          <h1 className="text-4xl md:text-5xl max-w-2xl mx-auto font-semibold tracking-tight pb-4">Works Everywhere</h1>
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto text-muted-foreground">Rewrite anywhere you write — <br /> from Notes and Mail to Notion, Docs, or Slack. </p>
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto text-muted-foreground">No switching apps, no losing flow.</p>
          <br />
          <div className="relative  mx-auto max-w-2xl">
            <div className="bg-secondary p-2 rounded-3xl inline-flex items-center justify-center gap-4 border">
              <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/apple-mail.webp' style={{ width: 46, height: 46 }} width={300} height={300} alt='Mail' />
              <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/apple-notes.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='Notes' />
              <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/notion-logo.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='Notion' />
              <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='https://storage.googleapis.com/tubememo-public/rewritemate/logo.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='RewriteMate' />
            </div>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto w-full px-4">

          <h1 className="w-full text-4xl md:text-5xl max-w-2xl ml-auto font-semibold tracking-tight pb-4 text-right">
            Custom Instructions
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto text-muted-foreground text-right">Save your own rewrite prompts <br /> as custom tasks. </p>


          <br />
          <div className="relative mx-auto max-w-2xl flex flex-col items-end" >
            <div className="relative h-full">

              <div className="relative flex flex-col items-end" style={{ maxWidth: "96vw" }}>
              
                <div className="max-w-md flex gap-2 flex-row overflow-x-scroll">
                  <div className="bg-gradient-to-b from-blue-500/90 to-blue-800 px-4 py-2 rounded-2xl text-white fill-white">
                    <Sparkles className="w-6 h-6 text-white" />
                    <span>Proofread Text</span>
                  </div>

                  <div className="bg-gradient-to-b from-blue-500/90 to-blue-800 px-4 py-2 rounded-2xl text-white fill-white">
                    <Sparkles className="w-6 h-6 text-white" />
                    Paraphrase Text
                  </div>

                  <div className="bg-gradient-to-b from-blue-500/90 to-blue-800 px-4 py-2 rounded-2xl text-white fill-white">
                    <Sparkles className="w-6 h-6 text-white" />
                    Translate Text
                  </div>
                </div>
              
              </div>

            </div>


          </div>
        </div>

      </div> */}
      <PricingPlansPage />
      <FaqSection />
      <Footer />
    </div>
  );
}
