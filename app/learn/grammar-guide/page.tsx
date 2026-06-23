import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import GrammarToolInline from "./grammar-tool-inline";

export const metadata: Metadata = {
  title: "Free Grammar Guide — Rules, Tips & AI Grammar Checker | RewriteMate",
  description:
    "Your go-to guide for English grammar. Learn parts of speech, common rules, and avoid mistakes. Use RewriteMate's free AI grammar checker to polish your writing instantly.",
  alternates: { canonical: "https://rewritemate.app/learn/grammar-guide" },
};

export default function GrammarGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      {/* Hero CTA */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Your Guide to English Grammar
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Make mistake-free writing your superpower. Learn the rules of grammar,
          then use RewriteMate&apos;s AI keyboard to polish your writing in any
          app — Messages, Mail, Notes, Slack, and more.
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

      {/* Inline Grammar Checker Tool */}
      <section className="rounded-3xl bg-secondary p-6 md:p-8 space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Free Online Grammar Checker</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Fix any punctuation, grammar, or spelling errors with a single click.
            RewriteMate&apos;s AI-powered writing assistance helps ensure your writing is spotless.
          </p>
        </div>
        <GrammarToolInline />
      </section>

      {/* What is Grammar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What is Grammar?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Grammar is a set of language rules that allows you to combine individual words to make
          different meanings. Your writing is stronger, clearer, and more effective when you follow
          grammar rules. Learn more about the principles of grammar and see how polished writing
          is brilliant writing.
        </p>
      </section>

      {/* Parts of Speech */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Parts of Speech</h2>
        <p className="text-muted-foreground">Every word in English belongs to one of eight categories. Understanding them is the foundation of good grammar.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { term: "Nouns", def: "People, places, things, or ideas (cat, city, freedom)" },
            { term: "Verbs", def: "Actions or states of being (run, is, have)" },
            { term: "Adjectives", def: "Describe nouns (blue, tall, delicious)" },
            { term: "Adverbs", def: "Modify verbs, adjectives, or other adverbs (quickly, very)" },
            { term: "Pronouns", def: "Replace nouns (he, they, it, who)" },
            { term: "Prepositions", def: "Show relationships in time/space (in, on, at, between)" },
            { term: "Conjunctions", def: "Connect words or clauses (and, but, because)" },
            { term: "Interjections", def: "Express emotion (wow, oops, hey)" },
          ].map((p) => (
            <div key={p.term} className="rounded-xl bg-secondary p-4">
              <h3 className="font-semibold text-sm">{p.term}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.def}</p>
            </div>
          ))}
        </div>
      </section>

     

      {/* AI Writing CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          AI Writing Assistance That Makes Your Words Shine
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Submit your best work with proper grammar and impeccable word choice.
          RewriteMate makes mistake-free writing easy with AI-powered rewriting,
          tone adjustment, and translation — all from your keyboard.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Download RewriteMate Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> AI Rewriter</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Grammar Checker</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Tone Adjuster</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Translator</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: "What is grammar?",
              a: "Grammar is the set of structural rules that govern the composition of clauses, phrases, and words in a language. It includes parts of speech, punctuation, sentence structure, and spelling conventions.",
            },
            {
              q: "How can I check my grammar for free?",
              a: "Use RewriteMate's free online grammar checker above. Paste your text and click Check Grammar to get instant corrections with explanations. No sign-up required.",
            },
            {
              q: "How does RewriteMate help with grammar?",
              a: "RewriteMate is an AI keyboard for iOS and macOS that checks grammar, fixes spelling, adjusts tone, and rewrites sentences — directly inside any app. You don't need to switch to a web editor.",
            },
            {
              q: "Is RewriteMate free?",
              a: "Yes. RewriteMate has a free tier with powerful built-in commands including proofreading, paraphrasing, tone adjustment, and translation. Upgrade to Pro for unlimited rewrites and custom commands.",
            },
            {
              q: "Does RewriteMate work on iPhone and Mac?",
              a: "Yes. RewriteMate is available as a keyboard extension on iOS and a menu bar app on macOS. It works in every app — Mail, Messages, Notes, Notion, Slack, Safari, and more.",
            },
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
