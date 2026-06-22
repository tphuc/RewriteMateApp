import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Apple Writing Tools Alternative: RewriteMate for macOS & iOS",
  description:
    "Looking for an Apple Writing Tools alternative? Compare RewriteMate vs Apple Writing Tools on features, custom instructions, and cross-device support.",
  alternates: {
    canonical: "https://rewritemate.app/tools/comparison/apple-writing-tools-alternative",
  },
  openGraph: {
    title: "Apple Writing Tools Alternative: RewriteMate for macOS & iOS",
    description:
      "Compare RewriteMate vs Apple Writing Tools on custom instructions, cross-device support, and more.",
  },
};

const features = [
  { name: "AI text rewriting", rewritemate: true, apple: true },
  { name: "Custom rewrite instructions", rewritemate: true, apple: false },
  { name: "Tone presets (professional, friendly, etc.)", rewritemate: true, apple: true },
  { name: "System-wide on macOS", rewritemate: true, apple: true },
  { name: "iOS keyboard extension", rewritemate: true, apple: false },
  { name: "Works in any iOS app", rewritemate: true, apple: false },
  { name: "Privacy-first (on-device processing)", rewritemate: false, apple: true },
  { name: "Privacy-first (no data stored)", rewritemate: true, apple: false },
  { name: "Cross-device sync", rewritemate: true, apple: true },
  { name: "Free tier available", rewritemate: true, apple: true },
];

export default function Page() {
  return (
    <article className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          RewriteMate: The Best Apple Writing Tools Alternative
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Apple Writing Tools is great — if you are happy with the built-in options.
          But if you want custom instructions, an iOS keyboard extension, and
          more control over tone and style, RewriteMate is the better choice.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What Apple Writing Tools Does Well</h2>
        <p>
          Apple Writing Tools, introduced in macOS Sequoia and iOS 18, lets you rewrite, summarize,
          and adjust tone for selected text. It is free, works system-wide on Mac, and processes
          everything on-device for maximum privacy.
        </p>
        <p>
          However, Apple Writing Tools has significant limitations:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <X className="w-4 h-4 shrink-0 mt-1 text-red-400" />
            <span><strong>No custom instructions.</strong> You get preset tones (Friendly, Professional, Concise) but cannot create your own.</span>
          </li>
          <li className="flex gap-2">
            <X className="w-4 h-4 shrink-0 mt-1 text-red-400" />
            <span><strong>No iOS keyboard extension.</strong> Apple Writing Tools only works in Apple apps on iPhone, not in third-party apps like Instagram, Threads, or Notion.</span>
          </li>
          <li className="flex gap-2">
            <X className="w-4 h-4 shrink-0 mt-1 text-red-400" />
            <span><strong>Apple ecosystem only.</strong> No option to bring your own AI model or customize the rewriting behavior.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-3xl bg-secondary p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 text-sm font-medium text-muted-foreground">Feature</th>
                <th className="text-center py-3 px-4 text-base font-semibold">RewriteMate</th>
                <th className="text-center py-3 px-4 text-base font-semibold">Apple Writing Tools</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-sm">{f.name}</td>
                  <td className="text-center py-3 px-4">
                    {f.rewritemate ? (
                      <Check className="w-5 h-5 mx-auto text-green-500" />
                    ) : (
                      <X className="w-5 h-5 mx-auto text-muted-foreground/30" />
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
                    {f.apple ? (
                      <Check className="w-5 h-5 mx-auto text-green-500" />
                    ) : (
                      <X className="w-5 h-5 mx-auto text-muted-foreground/30" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-secondary p-6 md:p-8 space-y-3">
          <h3 className="text-xl font-semibold tracking-tight">Why RewriteMate Wins</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              Custom rewrite instructions for consistent tone across all your writing
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              iOS keyboard works in every app — Instagram, Notion, Slack, and more
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              System-wide on Mac with menu bar access
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              BYOK plan for users who want to use their own API provider
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-secondary p-6 md:p-8 space-y-3">
          <h3 className="text-xl font-semibold tracking-tight">What Apple Writing Tools Does Better</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
              Fully on-device processing — no data ever leaves your device
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
              Completely free — no subscription required
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
              Works offline with Apple&apos;s on-device models
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">When to Use Each</h2>
        <p>
          Apple Writing Tools is perfect for quick, simple rewrites inside Apple apps when you need
          zero-configuration privacy. But if you write across multiple apps, need custom instructions,
          or want AI rewriting on your iPhone keyboard, RewriteMate fills the gaps that Apple left open.
        </p>
        <p>
          Many users combine both: Apple Writing Tools for quick inline edits and RewriteMate for
          deeper rewriting, custom presets, and writing in non-Apple apps on iOS.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">The Verdict</h2>
        <p>
          Apple Writing Tools is a capable free option with serious limitations. RewriteMate is the
          best alternative if you need custom instructions, iOS keyboard support across all apps,
          and more control over your rewriting workflow.
        </p>
        <Link
          href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-6 py-2 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Try RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </article>
  );
}
