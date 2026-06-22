'use client'

import { useState } from "react"
import { checkGrammar } from "./actions"
import { Loader2, Copy, Check, ArrowRight, SpellCheck } from "lucide-react"
import Link from "next/link"

export default function GrammarTool() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")
  const [usageCount, setUsageCount] = useState(0)

  const handleCheck = async () => {
    if (!text.trim()) return

    setLoading(true)
    setError("")
    setResult("")

    try {
      const corrected = await checkGrammar(text)
      if (!corrected) {
        throw new Error("No response received")
      }
      setResult(corrected)
      setUsageCount((c) => c + 1)
    } catch (e) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleCheck()
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Free Grammar Checker
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Check any text for grammar, spelling, and punctuation errors. Get
          clear corrections with an explanation of what was fixed — no sign-up
          required.
        </p>
      </div>

      <div className="rounded-3xl bg-secondary p-6 md:p-8 space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Paste or type your text here..."
          rows={5}
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base resize-y focus:outline-none focus:ring-2 focus:ring-sky-500/50"
        />

        <div className="flex items-center gap-3">
          <button
            onClick={handleCheck}
            disabled={loading || !text.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500/90 to-blue-500 px-6 py-2.5 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <SpellCheck className="w-4 h-4" />
            )}
            {loading ? "Checking..." : "Check Grammar"}
          </button>
        </div>

        {error && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            {error}
          </p>
        )}
      </div>

      {result && (
        <div className="rounded-3xl bg-secondary p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              Corrected Text
            </h2>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-background px-3 py-1.5 text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="rounded-2xl bg-background p-4 text-sm leading-relaxed whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}

      {usageCount > 0 && (
        <div className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-6 md:p-8 text-center space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            Need more than a grammar check?
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            RewriteMate rewrites, rephrases, adjusts tone, and translates
            text directly inside your keyboard on iOS and macOS.
          </p>
          <Link
            href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-6 py-2 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get RewriteMate Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      <div className="text-center text-xs text-muted-foreground space-y-1">
        <p>Free tier uses AI-powered grammar checking. Limited to 5 checks per session.</p>
      </div>
    </div>
  )
}
