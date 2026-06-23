'use client'

import { useState } from "react"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, Pen, SpellCheck, ScanSearch, Bot, UserCircle, FileText, MessageSquarePlus, Quote, Hash } from "lucide-react"

const tools = [
  { href: "/free-rewriter", label: "AI Rewriter", icon: <Pen className="w-4 h-4" /> },
  { href: "/grammar-checker", label: "Grammar Checker", icon: <SpellCheck className="w-4 h-4" /> },
  { href: "#", label: "Plagiarism Checker", icon: <ScanSearch className="w-4 h-4" />, disabled: true },
  { href: "#", label: "AI Detector", icon: <Bot className="w-4 h-4" />, disabled: true },
  { href: "#", label: "AI Humanizer", icon: <UserCircle className="w-4 h-4" />, disabled: true },
  { href: "/free-rewriter", label: "Paraphrasing Tool", icon: <FileText className="w-4 h-4" /> },
  { href: "#", label: "AI Chat", icon: <MessageSquarePlus className="w-4 h-4" />, disabled: true },
  { href: "#", label: "Citation Generator", icon: <Quote className="w-4 h-4" />, disabled: true },
  { href: "#", label: "Word Counter", icon: <Hash className="w-4 h-4" />, disabled: true },
]

function ToolList({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className={isMobile ? "flex flex-col gap-1" : "grid grid-cols-2 gap-1"}>
      {tools.map((tool) =>
        tool.disabled ? (
          <span
            key={tool.label}
            className="flex gap-2.5 px-3 py-2 text-sm text-muted-foreground/50 cursor-not-allowed rounded-lg"
          >
            <span className="text-muted-foreground/40 py-1">{tool.icon}</span>
            <span>{tool.label}</span>
          </span>
        ) : (
          <Link
            key={tool.label}
            href={tool.href}
            className="flex gap-2.5 px-3 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
          >
            <span className="text-sky-500 py-1">{tool.icon}</span>
            <span>{tool.label}</span>
          </Link>
        )
      )}
    </div>
  )
}

export default function ToolsDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop: Popover */}
      <div className="hidden md:block">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="inline-flex items-center gap-1 font-medium  cursor-pointer hover:text-foreground/80 transition-colors">
              Resources
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            className="p-2 rounded-2xl border-border/50 shadow-lg"
          >
            <ToolList />
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile: expandable section */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-1 font-medium w-full"
        >
          Free Tools
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="mt-2 pl-2 border-l-2 border-border ml-1">
            <ToolList isMobile />
          </div>
        )}
      </div>
    </>
  )
}
