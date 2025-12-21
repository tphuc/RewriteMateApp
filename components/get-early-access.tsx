"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import { z } from "zod"

const emailSchema = z.email("Please enter a valid email address")

export default function GetEarlyAccess() {
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const isEmailValid = () => {
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError("Please enter a valid email address")
      return false
    }
    setError(null)
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)
    setHasSubmitted(true)

    if (!isEmailValid()) return

    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/alpha-signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to submit")

      setMessage("Request received! We'll be in touch soon.")
      setEmail("")
      setHasSubmitted(false)
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!showForm) {
    return (
      <Button
        onClick={() => setShowForm(true)}
        className="z-20 hover:bg-primary transition duration-200 ease-in rounded-full text-md font-semibold cursor-pointer py-1 hover:scale-[1.02]"
      >
        Join macOS Early Access
      </Button>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 flex flex-col sm:flex-row items-center gap-3 mt-2"
    >
      {message ? (
        <p className="text-md bg-secondary/20 border rounded-lg px-4 py-2 font-medium text-foreground">
          {message}
        </p>
      ) : (
        <div>
          <div className="flex flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`bg-secondary/50 h-10 border backdrop-blur-[2px] rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-1 ${
                hasSubmitted && error
                  ? "border-red-500 ring-red-500"
                  : "focus:ring-cyan-500"
              }`}
            />

            <Button
              type="submit"
              disabled={loading || !email}
              className="z-20 h-10 rounded-lg text-lg cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
              <Check className="w-4 h-4" />
            </Button>
          </div>

          {hasSubmitted && error && (
            <span className="text-sm text-red-500 mt-1">{error}</span>
          )}
        </div>
      )}
    </form>
  )
}