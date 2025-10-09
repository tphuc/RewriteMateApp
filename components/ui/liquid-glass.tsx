'use client';

import { cn } from "@/lib/utils";

export function LiquidGlassContainer({ children, className }: {children: any, className?: string}) {
    return (
      <>
        <svg style={{ display: 'none' }}>
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.01"
              numOctaves="1"
              seed="5"
              result="turbulence"
            />
            {/* Seeds: 14, 17, */}
  
            <feComponentTransfer in="turbulence" result="mapped">
              <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
              <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
              <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>
  
            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
  
            <feSpecularLighting
              in="softMap"
              surfaceScale="5"
              specularConstant="1"
              specularExponent="100"
              lighting-color="white"
              result="specLight"
            >
              <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>
  
            <feComposite
              in="specLight"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
              result="litImage"
            />
  
            <feDisplacementMap
              in="SourceGraphic"
              in2="softMap"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
        <div className={cn("relative flex font-semibold overflow-hidden shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]", className)}>
          <div className="absolute z-0 inset-0 backdrop-blur-[3px] [filter:url(#glass-distortion)] overflow-hidden"></div>
          <div className="absolute z-1 inset-0 bg-white/50"></div>
          <div className="absolute inset-0 z-2 overflow-hidden shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5)]"></div>
          <div className="relative z-3 text-[2rem] text-black w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      </>
    );
  }