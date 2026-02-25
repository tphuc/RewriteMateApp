// ContactButton.tsx
"use client"

import { Button } from "@/components/ui/button"

export function ContactButtonClient() {
  const handleClick = () => {
    window.location.href = "mailto:hi@rewritemate.app"
  }

  return (
    <div  className="cursor-pointer py-1 font-medium text-foreground/90 hover:text-foreground" onClick={handleClick}>
      Contact
    </div>
  )
}