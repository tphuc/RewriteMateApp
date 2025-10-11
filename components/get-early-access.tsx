"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Check } from "lucide-react"

export default function GetEarlyAccess() {
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch(`${API_URL}/alpha-signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit")
      }

      setMessage("Request received! We'll be in touch soon.")
      setEmail("")
    } catch (err: any) {
      setMessage(`${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  if (!showForm) {
    return (
      <Button
        onClick={() => setShowForm(true)}
        size='lg'
        className="z-20 hover:bg-primary transition duration-200 ease-in rounded-full text-lg cursor-pointer hover:scale-[1.02]"
      >
        Get early access
      </Button>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 flex items-center gap-3 mt-2"
    >
     

      {message ? (
        <p className="text-md bg-secondary/20 border rounded-lg px-4 py-2 font-medium text-foreground">
          {message}
        </p>
      ): <>
       <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-secondary/50 border backdrop-blur-[2px] rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button
        type="submit"
        disabled={loading}
        className="z-20 rounded-lg text-lg cursor-pointer"
      >
        {loading ? "Submitting..." : "Submit"}
        <Check className="w-4 h-4"/>
      </Button>
      </>}
    </form>
  )
}