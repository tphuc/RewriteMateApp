"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"

import { cn } from "@/lib/utils"
import { Pen } from "../icons"
import { Cross, X } from "lucide-react"

export default function AIInput() {

    return (
        <div className="relative w-full mx-auto">
            

            {/* main container */}
            <div
                className={clsx(
                    "relative flex  items-center gap-2 px-2 py-1.5 border-0.5 rounded-full transition-all duration-300 bg-background dark:bg-[#222222aa]",
                  
                )}

            >
            

                {/* icon placeholder */}
                <div
                    className={clsx(
                        "relative z-10 flex items-center bg-gradient-to-b p-1 from-white/20 to-transparent p-1.5 justify-center w-6 h-6 rounded-full transition-opacity duration-300",
                    )}
                    style={{
                        mixBlendMode:"exclusion",
                    }}
                >
                    <Pen className="w-4 h-4 opacity-50" />
                </div>

                {/* input */}
                <input

                    placeholder="Describe your changes..."
                    className={clsx(
                        "relative z-10 flex-1 bg-transparent outline-none font-medium text-sm text-foreground/90 placeholder-foreground/40 transition",
                    )}
                />

                
            </div>
        </div>
    )
}