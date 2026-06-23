'use client'

import { useState } from "react"
import { checkGrammar } from "./actions"
import { Loader2, Copy, Check, ArrowRight, SpellCheck, PenLine, MessagesSquare, Volume2, FileText } from "lucide-react"
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
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 space-y-16">
      {/* Hero + Tool */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Free Grammar Checker
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Write with confidence using RewriteMate&apos;s AI-powered grammar checker.
            Spot grammatical errors, spelling mistakes, and punctuation issues
            while refining clarity and enhancing your writing style.
          </p>
        </div>

        <div className="rounded-3xl bg-secondary p-6 md:p-8 space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            Let&apos;s get started.
          </p>
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
      </div>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          How the Grammar Checker Works
        </h2>
        <p className="text-center text-muted-foreground max-w-lg mx-auto">
          Our AI checks your text in three simple steps and gives you instant feedback.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Add your text",
              desc: "Paste or type any text into the editor. RewriteMate will scan it and underline any issues it finds.",
            },
            {
              step: "02",
              title: "Review corrections",
              desc: "Our AI highlights grammar mistakes, spelling errors, and punctuation problems. Each correction includes a note explaining what was changed.",
            },
            {
              step: "03",
              title: "Copy & use",
              desc: "Copy the corrected text with one click and paste it anywhere — emails, messages, documents, or social posts.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-2xl bg-secondary p-6 space-y-2">
              <span className="text-3xl font-bold text-muted-foreground/20">{s.step}</span>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            More Than a Grammar Check
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            RewriteMate does more than catch typos. It helps you write better everywhere.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: <PenLine className="w-5 h-5" />,
              title: "Instant Proofreading",
              desc: "Polish your writing with corrections for grammar mistakes, spelling errors, and punctuation mishaps. Every fix includes an explanation so you learn as you go.",
            },
            {
              icon: <MessagesSquare className="w-5 h-5" />,
              title: "Clarity Improvements",
              desc: "Ensure your message is easy to understand. The AI suggests clearer phrasing and more concise wording so your reader always gets the point.",
            },
            {
              icon: <Volume2 className="w-5 h-5" />,
              title: "Tone Adjustments",
              desc: "Build stronger connections with tone recommendations. Switch between professional, casual, friendly, or formal to match any audience.",
            },
            {
              icon: <FileText className="w-5 h-5" />,
              title: "Easy Paraphrasing",
              desc: "Find new ways to express the same idea. RewriteMate can rephrase any sentence so you never sound repetitive.",
            },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4 rounded-2xl bg-secondary p-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center text-sky-500 shrink-0">
                {f.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Use RewriteMate */}
      <section className="rounded-3xl bg-secondary p-8 md:p-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
          Why Use RewriteMate&apos;s Grammar Checker?
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Most grammar checkers only flag errors. RewriteMate goes further — it
            <strong> explains each correction</strong> so you understand why something was wrong and
            how to fix it. Over time, you will naturally write with fewer mistakes.
          </p>
          <p>
            Unlike other online grammar checkers that require a subscription for basic features,
            RewriteMate&apos;s grammar checker is <strong>completely free to use</strong> with no sign-up
            required. Paste your text, click check, and get instant results.
          </p>
          <p>
            When you need more than grammar — rewriting entire paragraphs, adjusting tone, or
            translating to another language — the <strong>full RewriteMate app</strong> is available
            as a keyboard extension on iOS and a menu bar app on macOS. It works in every app,
            not just a web editor.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-6 py-2.5 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Try RewriteMate Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="text-center text-xs text-muted-foreground space-y-1">
        <p>Free tier uses AI-powered grammar checking. Limited to 5 checks per session.</p>
      </div>
    </div>
  )
}
