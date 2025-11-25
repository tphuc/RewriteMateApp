import React from "react";
import RewriteKeyboard from "./rewrite-keyboard";
import { Battery } from "./icons";

/**
 * iOS Simulator Mockup
 * - TailwindCSS + React single-file component
 * - Default export is a ready-to-drop-in component
 * - Props: width (px or tailwind-like string), showControls
 *
 * Usage:
 * <IOSSimulator width={420} showControls />
 *
 * This file intentionally keeps styling to Tailwind classes so you can
 * drop it in a Next.js / Create React App project with Tailwind configured.
 */

type Props = {
  width?: number | string; // px number or tailwind style like "w-96"
  showControls?: boolean;
  children?: React.ReactNode; // app content to render inside the simulated screen
};

const StatusBar: React.FC = () => (
  <div className="relative flex items-center justify-between w-full py-1 mt-4 text-[11px] text-white/90">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full " />
      <span className="hidden font-semibold sm:inline">9:41</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="hidden font-semibold sm:inline">5G</span>
    
        <Battery className="w-4 h-4"/>
      
    </div>
  </div>
);

const HomeIndicator: React.FC = () => (
  <div className="flex justify-center">
    <div className="w-20 h-1.5 bg-white/60 rounded-full transform translate-y-1" />
  </div>
);

export default function IOSSimulator({ width = 320, showControls = true, children }: Props) {
  // allow passing tailwind-like width strings, or number in px
  const wrapperStyle = typeof width === "number" ? { width: `${width}px` } : undefined;

  return (
    <div className="p-6 relative flex flex-col items-center gap-4">
      <div className="relative" style={wrapperStyle}>
        {/* Device shell */}
  
          {/* outer bezel */}
          <div className="relative rounded-[60px] p-2 overflow-hidden border-2 border-neutral-700" style={{ boxShadow: '0px 0px 2px 0px #fff' }}>
            <div className="bg-black w-full h-full relative">
            {/* Top notch / status area */}
            <div className="absolute top-0 left-0 right-0 h-12 z-20">
              <div className="max-w-[400px] mx-auto">
                <StatusBar />
              </div>
            </div>

            {/* Screen area */}
            <div className="relative bg-gradient-to-b from-background to-secondary/50 overflow-hidden flex flex-col rounded-[50px]" style={{ height: width as number * 1.94 }}>
              {/* notch visual (center) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 z-30 pointer-events-none">
                <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="140" height="32" rx="18" fill="black" fillOpacity="0.75" />
                </svg>
              </div>

              {/* content area (safe area) */}
              <div className="relative p-2 flex-1" >
              <div className="w-full mt-20">
      <div className="relative">

        {/* Highlighted background */}
        <span className="bg-[#0A2A66]/80 text-white px-1 py-0.5">
          Mastery comes through focus, not multitasking.
        </span>

        {/* Left selection handle */}
        <div
          className="
            absolute -left-1 -top-2 
            w-3 h-3 bg-[#1A73FF] rounded-full
            border-2 border-black
          "
        />

        {/* Right selection handle */}
        <div
          className="
            absolute left-23 -bottom-2 
            w-3 h-3 bg-[#1A73FF] rounded-full
            border-2 border-black
          "
        />

      </div>
    </div>
              </div>

              <div className="bg-[#1a1a1a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] relative backdrop-blur-2xl w-full" style={{height:280, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
                <RewriteKeyboard/>
              </div>

            
            </div>
            </div>
          </div>

       


     
      </div>
    </div>
  );
}

/*
  Notes:
  - The component uses only Tailwind classes. Make sure Tailwind is configured.
  - The hardcoded screen height (780) is chosen to approximate a tall iPhone in px.
  - You can easily wrap the inner content with SafeArea or add resizable props.
*/
