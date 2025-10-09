"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}
const DEFAULT_AURORA_COLORS = [
  "#22d3ee", // cyan
  "#4ade80", // green
  "#a78bfa", // violet
  "#f0abfc", // pink
  "#2dd4bf", // teal
] as const;

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  colors = DEFAULT_AURORA_COLORS,
  ...props
}: AuroraBackgroundProps & { colors?: readonly string[] }) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-950 text-foreground",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(120deg,#22d3ee_8%,#0B3436_14%,#a78bfa_20%,#f0abfc_26%,#f0abfc_32%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_5%,transparent_8%,transparent_10%,#000_12%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_2%,transparent_5%,transparent_10%,#fff_12%)",
              "--cyan-400": colors[0],
              "--teal-400": colors[4],
              "--green-400": colors[1],
              "--violet-400": colors[2],
              "--pink-400": colors[3],
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px]
              [background-image:var(--white-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              opacity-60 blur-[20px] saturate-[1.2] filter will-change-transform
              [--aurora:repeating-linear-gradient(120deg,var(--cyan-400)_8%,var(--green-400)_14%,var(--violet-400)_20%,var(--pink-400)_26%,var(--teal-400)_32%)]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_4%,var(--transparent)_10%,var(--transparent)_12%,var(--background)_16%)]
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
              after:absolute after:inset-0
              after:[background-image:var(--white-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:[background-attachment:fixed]
              after:mix-blend-overlay after:content-[""]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};