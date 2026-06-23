'use client'

import { useState } from "react"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, BookOpen, PenLine, FileText, Mail, Briefcase, Quote, BookText, GraduationCap } from "lucide-react"

const topics = [
  { href: "/learn/grammar-guide", label: "Grammar Guide", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/learn/writing-guide", label: "Writing Guide", icon: <PenLine className="w-4 h-4" /> },
  { href: "/learn/essay-writing", label: "Essay Writing", icon: <FileText className="w-4 h-4" /> },
  { href: "/learn/email-writing", label: "Email Writing Tips", icon: <Mail className="w-4 h-4" /> },
  { href: "/learn/career", label: "Career & Professional", icon: <Briefcase className="w-4 h-4" /> },
  { href: "/learn/punctuation-guide", label: "Punctuation Guide", icon: <Quote className="w-4 h-4" /> },
  { href: "/learn/vocabulary", label: "Vocabulary & Word Choice", icon: <BookText className="w-4 h-4" /> },
  { href: "/learn", label: "All Guides", icon: <GraduationCap className="w-4 h-4" /> },
]

function LearnList({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className={isMobile ? "flex flex-col gap-1" : "grid grid-cols-2 gap-1 min-w-[280px]"}>
      {topics.map((topic) => (
        <Link
          key={topic.label}
          href={topic.href}
          className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
        >
          <span className="text-amber-500">{topic.icon}</span>
          {topic.label}
        </Link>
      ))}
    </div>
  )
}

export default function LearnDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="hidden md:block">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="inline-flex items-center gap-1 font-medium text-sm cursor-pointer hover:text-foreground/80 transition-colors">
              Learn
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            sideOffset={8}
            className="p-2 rounded-2xl border-border/50 shadow-lg"
          >
            <LearnList />
          </PopoverContent>
        </Popover>
      </div>

      <div className="md:hidden w-full">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-1 font-medium w-full"
        >
          Learn
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="mt-2 pl-2 border-l-2 border-border ml-1">
            <LearnList isMobile />
          </div>
        )}
      </div>
    </>
  )
}
