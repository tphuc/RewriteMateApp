import EditModal from "@/components/EditModal";
import { HeroTitle } from "@/components/HeroTitle";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative max-w-screen min-h-screen  scrollbar-hide">
      <AuroraBackground className="relative w-full min-h-screen flex items-center">
        <main className="space-y-2 pt-[10%]">


          <HeroTitle />
          <p className="text-center text-muted-foreground">Available for Mac OS 14.0+</p>
          <div className="mt-[10%]">
          <EditModal originalText="How long does it took to travel from Newyork to Washinton DC" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-background to-transparent" />
        
        </main>
      </AuroraBackground>
      <footer className="min-h-screen row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
