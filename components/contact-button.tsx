// ContactButton.tsx
"use client"

import { Button } from "@/components/ui/button"

export function ContactButtonClient() {
  const handleClick = () => {
    window.location.href = "mailto:hi@rewritemate.app"
  }

  return (
    <div  className="text-lg cursor-pointer px-3 py-1 rounded-lg font-semibold text-foreground/90 hover:text-foreground" onClick={handleClick}>
      Contact
    </div>
  )
}