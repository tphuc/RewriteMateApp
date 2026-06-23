import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Punctuation Guide — Rules & Examples | RewriteMate",
  description:
    "Master punctuation with clear rules and examples. Covers periods, commas, semicolons, colons, dashes, quotation marks, and apostrophes. Fix punctuation with RewriteMate's AI grammar checker.",
  alternates: { canonical: "https://rewritemate.app/learn/punctuation-guide" },
};

export default function PunctuationGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Punctuation Guide</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Punctuation gives structure to your writing. Learn the rules, avoid common mistakes,
          and use RewriteMate to catch punctuation errors in any app.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
            Download RewriteMate Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Period (.)</h2>
        <p className="text-muted-foreground">Use a period to end a declarative sentence. It is the most common punctuation mark and the safest way to end most sentences.</p>
        <div className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">The meeting starts at 3pm. Please bring the quarterly report.</div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Comma (,)</h2>
        <p className="text-muted-foreground">The comma is the most versatile — and most misused — punctuation mark. Use it to separate ideas, list items, and clarify meaning.</p>
        <div className="space-y-3">
          {[
            { rule: "Lists", example: "We need design, development, and marketing approval." },
            { rule: "After introductory phrases", example: "After the meeting, we reviewed the next steps." },
            { rule: "Before conjunctions", example: "She wrote the draft, and he edited it." },
            { rule: "With non-essential clauses", example: "Our CEO, who founded the company in 2020, announced the news." },
          ].map((c) => (
            <div key={c.rule} className="rounded-xl bg-secondary p-4">
              <h3 className="font-semibold text-sm">{c.rule}</h3>
              <p className="text-sm text-muted-foreground mt-1 italic">{c.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Semicolon (;)</h2>
        <p className="text-muted-foreground">Use a semicolon to connect two complete sentences that are closely related. It is stronger than a comma but softer than a period.</p>
        <div className="rounded-xl bg-secondary p-4 text-sm space-y-2">
          <p className="text-muted-foreground">The project is on schedule; we expect to launch next week.</p>
          <p className="text-muted-foreground">Also use semicolons to separate list items that contain commas: We visited Paris, France; Rome, Italy; and Berlin, Germany.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Colon (:)</h2>
        <p className="text-muted-foreground">Use a colon to introduce a list, a quote, an explanation, or an example. What comes before the colon must be a complete sentence.</p>
        <div className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">We need three things: a budget, a timeline, and a point person.</div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Apostrophe (&apos;)</h2>
        <div className="space-y-3">
          {[
            { rule: "Possession", example: "The team&apos;s performance exceeded expectations." },
            { rule: "Contractions", example: "It&apos;s (it is) important to check its (possessive) settings." },
            { rule: "Plural possession", example: "The managers&apos; meeting was rescheduled." },
          ].map((a) => (
            <div key={a.rule} className="rounded-xl bg-secondary p-4">
              <h3 className="font-semibold text-sm">{a.rule}</h3>
              <p className="text-sm text-muted-foreground mt-1 italic">{a.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Fix Punctuation in Seconds</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          RewriteMate catches punctuation errors and fixes them instantly — directly inside any app on your iPhone or Mac.
        </p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Grammar Check</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Proofread</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Rewrite</span>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "What is the most commonly misused punctuation mark?", a: "The comma. Common mistakes include comma splices (joining two sentences with only a comma), missing commas in lists, and unnecessary commas that break the flow of a sentence." },
            { q: "When should I use a semicolon vs. a colon?", a: "Use a semicolon to connect two related complete sentences. Use a colon to introduce a list, explanation, or quote." },
            { q: "Does RewriteMate fix punctuation?", a: "Yes. RewriteMate proofreads your text and corrects punctuation, grammar, and spelling — directly inside any app on iOS and macOS." },
            { q: "Is the punctuation checker free?", a: "Yes. RewriteMate's free tier includes proofreading and grammar checking. You can also use our free online grammar checker at any time." },
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

      <div className="text-center space-y-3">
        <p className="text-lg font-semibold tracking-tight">Master punctuation with RewriteMate</p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
