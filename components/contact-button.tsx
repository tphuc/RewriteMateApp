// ContactButton.tsx
"use client"

import { Button } from "@/components/ui/button"

export function ContactButtonClient() {
  const handleClick = () => {
    window.location.href = "mailto:hi@rewritemate.app"
  }

  return (
    <Button variant={'ghost'} className="bg-transparent text-lg font-semibold text-foreground" onClick={handleClick}>
      Contact
    </Button>
  )
}