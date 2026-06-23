import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Vocabulary Guide — Improve Your Word Choice | RewriteMate",
  description:
    "Build a stronger vocabulary and improve your word choice in writing. Covers context, connotation, word roots, and using AI to find better words instantly.",
  alternates: { canonical: "https://rewritemate.app/learn/vocabulary" },
};

export default function VocabularyGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Vocabulary Guide</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Stronger vocabulary means clearer, more persuasive writing. Learn how to choose the right words for every context, and use RewriteMate to find better words as you type.
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

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Choose the Right Word for the Right Context</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { word: "Formal", alternatives: "Utilize (use), commence (start), terminate (end), facilitate (help)" },
            { word: "Casual", alternatives: "Great (excellent), maybe (perhaps), weird (peculiar), tough (challenging)" },
            { word: "Persuasive", alternatives: "Proven (demonstrated), guaranteed (assured), exclusive (unique), limited (scarce)" },
            { word: "Academic", alternatives: "Therefore (so), consequently (because of that), demonstrates (shows), indicates (suggests)" },
          ].map((c) => (
            <div key={c.word} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{c.word} Words</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.alternatives}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Commonly Confused Words</h2>
        <div className="space-y-3">
          {[
            { pair: "Affect vs. Effect", detail: "Affect is a verb (The weather affects my mood). Effect is a noun (The effect was immediate)." },
            { pair: "Complement vs. Compliment", detail: "Complement means to complete something (The wine complements the meal). Compliment means praise (She gave me a compliment)." },
            { pair: "Principle vs. Principal", detail: "Principle is a rule (a matter of principle). Principal is the head of a school or a sum of money (principal amount)." },
            { pair: "Their vs. There vs. They're", detail: "Their shows possession (their house). There indicates a place (over there). They're is a contraction of they are." },
          ].map((c) => (
            <div key={c.pair} className="rounded-xl bg-secondary p-4">
              <h3 className="font-semibold text-sm">{c.pair}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">How to Build Your Vocabulary</h2>
        <div className="space-y-3">
          {[
            { method: "Read Widely", desc: "Read across genres and formats — books, articles, newsletters, and documentation. Pay attention to words you don't know and look them up." },
            { method: "Use New Words in Context", desc: "A word only sticks when you use it. Write three sentences with each new word you learn." },
            { method: "Learn Word Roots", desc: "Many English words share Latin or Greek roots. Learn one root (e.g., 'bene' = good) and you unlock a family of words (benefit, beneficial, benevolent)." },
            { method: "Pay Attention to Connotation", desc: "Two words can have the same definition but different emotional weight. 'Thrifty' and 'stingy' both describe saving money, but one is positive and the other negative." },
          ].map((m) => (
            <div key={m.method} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{m.method}</h3>
              <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Find Better Words Instantly</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Select any word in any app on your iPhone or Mac, and RewriteMate suggests stronger, clearer alternatives.
        </p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Paraphrase</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Shorten</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Change Tone</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Proofread</span>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "How many words do I need to know to be fluent in English?", a: "A vocabulary of 8,000-10,000 words is enough for fluent conversation. Academic and professional contexts may require 15,000-20,000 words." },
            { q: "Can RewriteMate help me find better words?", a: "Yes. RewriteMate's paraphrase command suggests alternative phrasings, and the tone adjustment feature replaces words to match your desired tone." },
            { q: "Is RewriteMate free to use?", a: "Yes. RewriteMate has a free tier with powerful rewriting and proofreading commands. Upgrade to Pro for unlimited use." },
            { q: "What is the difference between denotation and connotation?", a: "Denotation is the literal dictionary definition of a word. Connotation is the emotional or cultural association it carries." },
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
        <p className="text-lg font-semibold tracking-tight">Expand your vocabulary with RewriteMate</p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
