import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Writing Guide — Write Clearly & Confidently | RewriteMate",
  description:
    "Learn how to write clearly and confidently. Practical tips on structure, tone, editing, and common weaknesses. Use RewriteMate's AI keyboard to polish your writing in any app.",
  alternates: { canonical: "https://rewritemate.app/learn/writing-guide" },
};

export default function WritingGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Writing Guide</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Write clearly, concisely, and with confidence. Learn the principles of good writing,
          then use RewriteMate&apos;s AI keyboard to polish words in any app — Messages, Mail,
          Notes, Slack, and more.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Download RewriteMate Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </section>

      {/* Four Pillars */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">The Four Pillars of Good Writing</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Clarity", icon: <PenLine className="w-5 h-5" />, desc: "Your reader should never have to re-read a sentence to understand it. Use plain language, short sentences, and familiar words." },
            { title: "Conciseness", icon: <PenLine className="w-5 h-5" />, desc: "Say what you need to say and stop. Remove filler words like very, really, actually, and just." },
            { title: "Structure", icon: <PenLine className="w-5 h-5" />, desc: "Organize your writing so the main point comes first. Use headings, short paragraphs, and bullet points to guide the reader." },
            { title: "Tone", icon: <PenLine className="w-5 h-5" />, desc: "Match your tone to your audience. Professional for work, friendly for coworkers, warm for customer communication." },
          ].map((p) => (
            <div key={p.title} className="rounded-xl bg-secondary p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sky-500">{p.icon}</span>
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">The Writing Process</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { step: "1. Plan", desc: "Know your audience and your goal before you write. What do you want the reader to know, feel, or do?" },
            { step: "2. Draft", desc: "Write without editing. Get your ideas down first. Don&apos;t worry about perfection — you will fix it in the next step." },
            { step: "3. Revise", desc: "Read your draft aloud. Cut unnecessary words. Check that your argument flows logically." },
            { step: "4. Edit", desc: "Fix grammar, spelling, and punctuation. Use a grammar checker to catch what you missed." },
          ].map((s) => (
            <div key={s.step} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{s.step}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Weaknesses */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Common Writing Weaknesses</h2>
        <div className="space-y-3">
          {[
            { issue: "Passive Voice", before: "The report was written by the team.", after: "The team wrote the report." },
            { issue: "Wordiness", before: "In the event that the meeting is cancelled, we will notify you.", after: "If the meeting is cancelled, we will notify you." },
            { issue: "Jargon", before: "We need to leverage our core competencies.", after: "We should use our strengths." },
            { issue: "Redundancy", before: "The end result was a final conclusion.", after: "The result was a conclusion." },
          ].map((w) => (
            <div key={w.issue} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{w.issue}</h3>
              <p className="text-sm text-muted-foreground mt-2"><span className="text-red-400">Before:</span> {w.before}</p>
              <p className="text-sm text-muted-foreground"><span className="text-green-400">After:</span> {w.after}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RewriteMate CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Polish Your Writing in Seconds</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          RewriteMate helps you rewrite, proofread, adjust tone, and translate text — directly inside any app. No switching tabs. No copy-paste.
        </p>
        <Link
          href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> AI Rewriter</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Grammar Checker</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Tone Adjuster</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "What makes writing good?", a: "Good writing is clear, concise, and tailored to its audience. It communicates the intended message without confusion or unnecessary words." },
            { q: "How can I improve my writing skills?", a: "Practice regularly, read good writing, and use tools like RewriteMate to get instant feedback on grammar, tone, and clarity." },
            { q: "How does RewriteMate help with writing?", a: "RewriteMate is an AI keyboard that works in any app on iOS and macOS. Select text, choose a command, and the AI rewrites it — proofreading, adjusting tone, shortening, expanding, or translating." },
            { q: "Is there a free version?", a: "Yes. RewriteMate has a free tier with built-in commands. Upgrade to Pro for unlimited rewrites and custom commands." },
          ].map((faq) => (
            <details key={faq.q} className="rounded-xl bg-secondary p-4 group">
              <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground/40 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center space-y-3">
        <p className="text-lg font-semibold tracking-tight">Start writing better today</p>
        <Link
          href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
