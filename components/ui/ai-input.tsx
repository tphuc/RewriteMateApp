"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"

import { cn } from "@/lib/utils"
import { Pen } from "../icons"
import { Cross, X } from "lucide-react"

export default function AIInput() {
    const [text, setText] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const colors = [
        "#7572FF",
        "#24a6d4",
        "#B657FF",
        "#BA7ED9",
        "#C88A7E",
    ]

    const [cycle, setCycle] = useState({ current: 0, next: 1, fraction: 0 })
    const [borderRotation, setBorderRotation] = useState(0)

    const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16)
        const g = parseInt(hex.slice(3, 5), 16)
        const b = parseInt(hex.slice(5, 7), 16)
        return { r, g, b }
    }

    const lerpColor = (hex1: string, hex2: string, fraction: any) => {
        const c1 = hexToRgb(hex1)
        const c2 = hexToRgb(hex2)
        const r = Math.round(c1.r + fraction * (c2.r - c1.r))
        const g = Math.round(c1.g + fraction * (c2.g - c1.g))
        const b = Math.round(c1.b + fraction * (c2.b - c1.b))
        return `rgb(${r}, ${g}, ${b})`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setBorderRotation((prev) => prev + 1.8)
            setCycle((prev) => {
                const newFraction = prev.fraction + 0.01
                if (newFraction >= 1.0) {
                    const newCurrent = prev.next
                    const newNext = (prev.next + 1) % colors.length
                    return { current: newCurrent, next: newNext, fraction: 0 }
                }
                return { ...prev, fraction: newFraction }
            })
        }, 40)
        return () => clearInterval(interval)
    }, [])

    const { current: currentIndex, next: nextIndex, fraction } = cycle

    const leftShadowColor = lerpColor(colors[currentIndex], colors[nextIndex], fraction)
    const rightShadowColor = lerpColor(colors[nextIndex], colors[(nextIndex + 1) % colors.length], fraction)

    const ambientIndex1 = (currentIndex + 2) % colors.length
    const ambientIndex2 = (nextIndex + 2) % colors.length
    const ambientColor = lerpColor(colors[ambientIndex1], colors[ambientIndex2], fraction)
    const ambientRgb = ambientColor.replace(/rgb\(|\)/g, "").replace(/\s+/g, ",")

    const conicGradient = `conic-gradient(from ${borderRotation}deg at top left, ${colors.join(", ")}, ${colors[0]})`

    return (
        <div className="relative w-full mx-auto">
            {/* top shadow */}
            {isFocused && (
                <div className="absolute -top-1 left-0 w-full h-1 flex rounded-full blur-sm opacity-30">
                    <div
                        className="w-1/2 h-full"
                        style={{ backgroundColor: leftShadowColor }}
                    />
                    <div
                        className="w-1/2 h-full"
                        style={{ backgroundColor: rightShadowColor }}
                    />
                </div>
            )}

            {/* bottom shadow */}
            {isFocused && (
                <div className="absolute -bottom-1 left-0 w-full h-1 flex rounded-full blur-sm opacity-30">
                    <div
                        className="w-1/2 h-full"
                        style={{ backgroundColor: leftShadowColor }}
                    />
                    <div
                        className="w-1/2 h-full"
                        style={{ backgroundColor: rightShadowColor }}
                    />
                </div>
            )}

            {/* main container */}
            <div
                className={clsx(
                    "relative flex  items-center gap-2 px-2 py-2 rounded-full transition-all duration-300 ",
                    isFocused
                        ? "bg-secondary/5"
                        : "bg-secondary/10"
                )}

            >
                <div className={cn('absolute  left-0 w-full h-full rounded-full blur-[0.5px] backdrop-blur-[2px]', isFocused && 'bg-[#000] blur-[1px]')} style={{
                    boxShadow: "inset 1px 1px 1px 0 rgba(200, 200, 200, 0.2), inset -1px -1px 1px 1px rgba(200, 200, 200, 0.2)",
                } as any} 
                />
                {isFocused && (
                    <div
                        className="absolute inset-0 z-0 rounded-full blur-[10px] opacity-[38%] pointer-events-none"
                        style={{ background: conicGradient }}
                    />
                )}

                {/* icon placeholder */}
                <div
                    className={clsx(
                        "relative z-10 flex items-center bg-gradient-to-b p-1 from-white/20 to-transparent p-1.5 justify-center w-6 h-6 rounded-full transition-opacity duration-300",
                        isFocused ? "opacity-90" : "opacity-50"
                    )}
                >
                    <Pen className="w-4 h-4 opacity-50" />
                </div>

                {/* input */}
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Describe your changes..."
                    className={clsx(
                        "relative z-10 flex-1 bg-transparent outline-none font-medium text-sm text-white placeholder-white/40 transition",
                        isLoading && "animate-pulse"
                    )}
                />

                {/* clear button */}
                {text && (
                    <button
                        onClick={() => setText("")}
                        className="relative z-10 text-muted-foreground hover:text-foreground p-1 transition-colors"
                    >
                        <X className="w-4 h-4"/>
                    </button>
                )}
            </div>
        </div>
    )
}