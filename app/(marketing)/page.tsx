import { AppStoreBtn } from "@/components/appstore-btn";
import CustomInstructionsList from "@/components/custom-instruction-list";
import DownloadMacOSBtn from "@/components/download-macos-btn";
import EditModal from "@/components/EditModal";
import { EditModalTasks } from "@/components/EditModalTasks";
import { FaqSection } from "@/components/faq";
import Footer from "@/components/footer";
import GetEarlyAccess from "@/components/get-early-access";
import { HeroTitle } from "@/components/HeroTitle";
import { AppleLogoSvg, BriefCase, BubbleLeftRight, DeveloperCode, PaintPallete, Sparkles, TextBubble } from "@/components/icons";
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
import IOSFeatures from "./ios-features";
import PricingCard from "./pricing";
import Footer2 from "./footer";

const roles = [
  {
    icon: <DeveloperCode className="w-8 h-8 fill-background" />,
    title: "Developers",
    description:
      "Clean up explanations without losing technical accuracy. Refine documentation and PR notes while keeping your original intent intact.",
  },
  {
    icon: <PaintPallete className="w-8 h-8 fill-background" />,
    title: "Designers",
    description:
      "Clarify your thinking without flattening your voice. Adjust tone and structure while staying true to how you communicate.",
  },
  {
    icon: <TextBubble className="w-8 h-8 fill-background" />,
    title: "Content & Marketing",
    description:
      "Polish what you’ve already written. Improve clarity, flow, and consistency without rewriting from scratch.",
  },
  {
    icon: <BubbleLeftRight className="w-8 h-8 fill-background" />,
    title: "Sales & Support",
    description:
      "Fine-tune replies before you send them. Soften tone, tighten wording, and keep your message clear under pressure.",
  },
  {
    icon: <BriefCase className="w-8 h-8 fill-background" />,
    title: "Founders & Operators",
    description:
      "Refine important messages before they go out. Keep your voice consistent across updates, strategy docs, and announcements.",
  },
]

export default function Home() {
  return (
    <div className="relative bg-background min-h-screen scrollbar-hide">

      <main className="space-y-2 mx-auto max-w-screen-lg mt-30 md:mt-[5%] pb-[5%] px-3 rounded-4xl overflow-hidden">


        <div className="relative grow-progress-2 space-y-4">
          {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent w-full h-[30%]  z-10" /> */}

          <div className="relative  max-w-screen-lg px-4 mx-auto">
            <div className="relative z-10">
              <img
                src='/hero-macos.avif'
                className="w-full rounded-xl w-full"
                style={{ objectFit: "contain", }}
              />
              <img
                src='/hero-ios.avif'
                className="absolute z-20 -bottom-[5%] right-[2%] md:right-[0%] scale-[0.96] rounded-xl w-[30%]"
                style={{ objectFit: "contain", }}
              />
            </div>

            <div className="absolute z-0 mx-auto bottom-10 left-[20%] w-[60%] h-[200px] 
  bg-gradient-to-br from-sky-600/80 via-sky-500/80 to-blue-400/80 
  blur-3xl"
            />
          </div>
          <div className="relative pb-5 space-y-4">

            <h1 className="relative mx-auto max-w-xl text-center text-4xl md:text-6xl font-bold tracking-tight leading-tight">
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

          <div className='flex items-center justify-center flex-1 gap-2'>
            <Link
              href="https://apps.apple.com/app/rewritemate/id6755306532"
              className="relative rounded-full hover:opacity-90 text-white flex overflow-hidden items-center shadow-xs flex-nowrap gap-2  whitespace-nowrap bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-2 text-center font-medium"
            >
               Try for Free
            </Link>
          </div>

          {/* <DownloadMacOSBtn /> */}

          {/* <GetEarlyAccess/> */}
          {/* <Link style={{ zIndex: 20 }} href='https://apps.apple.com/vn/app/rewritemate/id6755306532'>
              <AppStoreBtn
                variant="light"
                className="scale-[1.1]"
              />

            </Link> */}


        </div>
        {/* <div className="flex items-center justify-center">
          <a href="https://launchigniter.com/product/rewritemate-ai-keyboard?ref=badge-rewritemate-ai-keyboard" target="_blank">
            <img src="https://launchigniter.com/api/badge/rewritemate-ai-keyboard?theme=light" alt="Featured on LaunchIgniter" width="212" height="55" />
          </a>
        </div> */}



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


      </main>

      <div className="bg-secondary relative w-full h-full">
        <IOSFeatures />
      </div>


      <div className="bg-[#111112] relative w-full">

        <div className="relative grow-progress max-w-screen-lg py-10 px-4 mx-auto">

          <img
            src='/hero-macos.avif'
            className="w-full z-10 relative rounded-xl w-full"
            style={{ objectFit: "contain", }}
          />
          <div className="absolute z-0 mx-auto bottom-10 left-[15%] w-[70%] h-[300px] 
  bg-gradient-to-b from-sky-500/50 via-blue-500/50 to-sky-300/50 
  blur-3xl"
          />

        </div>

        <section className="text-background/90 grow-progress py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Built for the way you work
              </h2>
              <p className="mt-4 opacity-80 text-xl leading-relaxed">
                RewriteMate helps professionals communicate clearly across every workflow.
              </p>
            </div>

            <div className="grid gap-y-12 gap-x-16 md:grid-cols-2">
              {roles.map((role) => (
                <div key={role.title} className="group">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {role.icon}
                    </span>
                    <span className="text-2xl md:text-3xl font-medium tracking-tight">
                      {role.title}
                    </span>
                  </div>

                  <p className="mt-4 opacity-80 text-lg leading-relaxed max-w-md">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>


      <PricingCard />
      {/* <PricingPlansPage /> */}
      <FaqSection />
      {/* <Footer /> */}

      <div className="flex items-center gap-2 justify-center py-4 border-t border-border/50 bg-secondary/50 border-b w-full overflow-x-scroll scrollbar-hide no-scrollbar">
        <a href="https://twelve.tools" target="_blank">
          <img src="https://twelve.tools/badge0-white.svg" alt="Featured on Twelve Tools" width="200" height="54" />
        </a>
        <a href="https://sidehunt.io/project/rewritemate-ai-keyboard" target="_blank" rel="noopener">
          <img src="https://sidehunt.io/badges/sidehunt-badge-light.svg" alt="Featured on Sidehunt" width="200" height="60" />
        </a>
        <a href="https://startuups.com//projects/rewritemate-ai-keyboard" target="_blank" rel="noopener">
  <img src="https://startuups.com//images/badges/startuupscom.badge.svg" alt="Featured on startuups" width="150" height="54" />
</a>
      </div>
      <Footer2 />




    </div>
  );
}
