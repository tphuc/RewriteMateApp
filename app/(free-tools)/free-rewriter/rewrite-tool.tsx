'use client'

import { useState } from "react"
import { rewriteText } from "./actions"
import { Loader2, Copy, Check, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const tones = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "friendly", label: "Friendly" },
  { value: "formal", label: "Formal" },
  { value: "creative", label: "Creative" },
]

export default function RewriteTool() {
  const [text, setText] = useState("")
  const [tone, setTone] = useState("professional")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")
  const [usageCount, setUsageCount] = useState(0)

  const handleRewrite = async () => {
    if (!text.trim()) return

    setLoading(true)
    setError("")
    setResult("")

    try {
      const rewritten = await rewriteText(text, { tone })
      if (!rewritten) {
        throw new Error("No response received")
      }
      setResult(rewritten)
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
      handleRewrite()
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Free AI Text Rewriter
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Paste your text below and rewrite it instantly. Change the tone,
          fix grammar, and make your writing shine — no sign-up needed.
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

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            >
              {tones.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleRewrite}
              disabled={loading || !text.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500/90 to-blue-500 px-6 py-2.5 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              {loading ? "Rewriting..." : "Rewrite"}
            </button>
          </div>
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
              Rewritten Text
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
            Like what you see?
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            RewriteMate gives you unlimited rewrites with custom instructions —
            right inside your keyboard on iOS and macOS.
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
        <p>Free tier uses AI-generated rewrites. Limited to 5 rewrites per session.</p>
      </div>
    </div>
  )
}
