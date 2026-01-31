'use client';

import { motion } from "framer-motion"
import { PointerHighlight } from "./ui/pointer-highlight";

export function HeroTitle() {
  return (
    <div className="relative">
       <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent w-full h-[30%]  z-10" />
      <img
        src='/showcase-ios-1.webp'
        className="w-full rounded-xl md:h-[500px]"
        style={{ objectFit: "contain" }}
      />
      <div className="relative -mt-[5%] pb-5 space-y-2">

      <h1  className="relative leading-none text-3xl md:text-5xl font-bold tracking-tighter text-foreground mx-auto max-w-xl text-center leading-tighter tracking-tight">
      Your Smart AI Keyboard <br/>  Writing Assistant
      </h1>
      <p className="text-center max-w-md mx-auto text-xl">
      Instantly improve, rephrase, and refine any text. The better writing tool, built for iOS and macOS.
      </p>
      </div>
    </div>


  )
}

// <div className="mx-auto max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl">
// There has to be some
// <PointerHighlight
//   rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
//   pointerClassName="text-yellow-500"
// >
//   <span className="relative z-10">background to animate too</span>
// </PointerHighlight>
// </div>