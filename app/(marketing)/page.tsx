import CustomInstructionsList from "@/components/custom-instruction-list";
import EditModal from "@/components/EditModal";
import { EditModalTasks } from "@/components/EditModalTasks";
import { FaqSection } from "@/components/faq";
import Footer from "@/components/footer";
import GetEarlyAccess from "@/components/get-early-access";
import { HeroTitle } from "@/components/HeroTitle";
import { MacTitle } from "@/components/MacTitle";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { MousePointer } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative max-w-screen min-h-screen  scrollbar-hide">
      <AuroraBackground className="relative w-full min-h-screen flex items-center">
        <main className="space-y-2 pt-[10%]">


          <HeroTitle />
          <p className="text-center text-muted-foreground">Available for Mac OS 14.0+</p>
          <div className="z-20 pt-4 flex items-center justify-center">
          <GetEarlyAccess/>
          </div>
          <div className="mt-[10%]">
            <div className="relative border-1 rounded-3xl space-y-4 pb-[10%] max-w-md mx-auto p-4 bg-background/80 backdrop-blur-sm">
              <MacTitle />
              <div className='absolute overflow-hidden top-0 left-0 w-full h-full rounded-3xl' style={{
                boxShadow: "inset 0px 0px 1px 0 rgba(200, 200, 200, 0.1), inset -0.5px -0.5px 0.5px 0.5px rgba(20, 20, 20, 0.2)"
              }} />
              <span className="bg-gradient-to-b from-secondary/80 to-secondary">I want my emails to sound not too formal but still serious.</span>
              <div className="absolute top-[50%] right-[38%] text-muted-foreground"><MousePointer className="fill-muted-foreground/80" /></div>
            </div>
           
            <div className="-mt-[10%] z-10">
              <EditModal originalText="I want my emails to sound professional without feeling overly formal." />

            </div>


          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-background to-transparent" />

        </main>
      </AuroraBackground>
      <div className="min-h-[50vh] w-full relative">
        <br />
      
        <div className="mx-auto flex items-center justify-center gap-4 relative max-w-sm">
        <p className="text-muted-foreground/80">Open writing tool instantly with configurable hotkeys</p>
          <KbdGroup >
            <Kbd className="size-8 text-lg rounded-lg border">⇧</Kbd>
            <Kbd className="size-8 text-lg rounded-lg border">⌥</Kbd>
            <Kbd className="size-8 text-lg rounded-lg border">W</Kbd>
          </KbdGroup>
        </div>

        <div className="relative py-[12%] px-4">
          <h1 className="text-4xl md:text-5xl max-w-2xl mx-auto font-semibold tracking-tight pb-4">Works Everywhere on macOS</h1>
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto text-muted-foreground">Rewrite anywhere you write — <br /> from Notes and Mail to Notion, Docs, or Slack. </p>
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto text-muted-foreground">No switching apps, no losing flow.</p>
          <br />
          <div className="relative  mx-auto max-w-2xl">
            <div className="bg-secondary p-2 rounded-3xl inline-flex items-center justify-center gap-4">
              <Image src='/apple-mail.webp' style={{ width: 46, height: 46 }} width={300} height={300} alt='apple-mail' />
              <Image src='/apple-notes.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='apple-notes' />
              <Image src='/notion-logo.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='apple-mail' />
            </div>
          </div>
        </div>

        <div className="relative py-[5%] max-w-2xl mx-auto w-full px-4">

          <h1 className="w-full text-4xl md:text-5xl max-w-2xl ml-auto font-semibold tracking-tight pb-4 text-right">
            Custom Instructions
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto text-muted-foreground text-right">Save your own rewrite prompts <br /> as custom tasks. </p>


          <br />
          <div className="relative mx-auto max-w-2xl flex flex-col items-end">
            <div className="relative h-full">

              <div className="relative flex flex-col items-end">
                <div className="absolute top-0 w-full z-10 h-[40%] bg-gradient-to-b from-background via-background/60 to-transparent"></div>
                <EditModalTasks />
                <div className="absolute bottom-0 w-full z-10 h-[40%] bg-gradient-to-t from-background via-background/10 to-transparent"></div>
              </div>

            </div>

            <div className="flex justify-end w-full -mt-10 z-20">
              <CustomInstructionsList />
            </div>
          </div>
        </div>

      </div>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
