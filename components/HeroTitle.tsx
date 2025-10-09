'use client';

import { motion } from "framer-motion"

export function HeroTitle() {
  return (
    <h1 className="text-6xl font-bold tracking-tight text-white max-w-2xl text-center px-6 leading-tight tracking-tight">
      The fastest way to{" "}
      <span
        className="bg-gradient-to-r from-[#22d3ee] via-[#f0abfc] to-[#22d3ee]
                   bg-[length:200%_auto] text-transparent bg-clip-text
                   animate-gradient-x"
      >
        rewrite
      </span>{" "}
      anything on your Mac
    </h1>
  )
}