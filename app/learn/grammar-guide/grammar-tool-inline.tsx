'use client'

import { useState } from "react"
import { checkGrammar } from "@/app/(free-tools)/grammar-checker/actions"
import { Loader2, Copy, Check, Sparkles } from "lucide-react"

export default function GrammarToolInline() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")

  const handleCheck = async () => {
    if (!text.trim()) return
    setLoading(true)
    setError("")
    setResult("")
    try {
      const corrected = await checkGrammar(text)
      if (!corrected) throw new Error("No response")
      setResult(corrected)
    } catch {
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

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        rows={4}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-sky-500/50"
      />

      <div className="flex items-center gap-3">
        <button
          onClick={handleCheck}
          disabled={loading || !text.trim()}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500/90 to-blue-500 px-5 py-2 text-sm text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          {loading ? "Checking..." : "Check Grammar"}
        </button>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {result && (
        <div className="rounded-2xl bg-background border border-border p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Corrected Text</p>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1 text-xs font-medium hover:opacity-80 transition-opacity"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">{result}</div>
        </div>
      )}
    </div>
  )
}
