'use client';

import { motion } from "framer-motion"
import { PointerHighlight } from "./ui/pointer-highlight";

export function HeroTitle() {
  return (
    <h1 className="relative text-5xl md:text-6xl font-bold tracking-tighter text-white/90 max-w-2xl text-center px-6 leading-tight tracking-tight">
      The fastest way to{" "}
      <span style={{background:"rgba(0,0,0,0.2)"}} className="relative overflow-hidden border border px-3 rounded-3xl">
      <div className='absolute top-0 left-0 w-full h-full rounded-3xl blur-[1px]' style={{
          boxShadow: "inset 0px 0px 0.5px 0 rgba(200, 200, 200, 0.2), inset 0px 0px 0.5px 0px rgba(200, 200, 200, 0.2)"
        }} />
      <span
        className="relative bg-gradient-to-r from-[#22d3ee] via-[#f0abfc] to-[#22d3ee]
                   bg-[length:200%_auto] text-transparent bg-clip-text
                   animate-gradient-x"
      > 
      
        rewrite
      </span>
      </span>
      {" "}
      anything on your Mac
    </h1>


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