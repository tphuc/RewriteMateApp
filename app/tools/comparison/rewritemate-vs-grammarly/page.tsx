import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "RewriteMate vs Grammarly: Which AI Writing Tool is Better?",
  description:
    "Compare RewriteMate and Grammarly for macOS and iOS. See how they stack up on privacy, price, system-wide rewriting, custom instructions, and more.",
  alternates: {
    canonical: "https://rewritemate.app/tools/comparison/rewritemate-vs-grammarly",
  },
  openGraph: {
    title: "RewriteMate vs Grammarly: Which AI Writing Tool is Better?",
    description:
      "Compare RewriteMate and Grammarly for macOS and iOS on privacy, price, and features.",
  },
};

const features = [
  { name: "AI text rewriting", rewritemate: true, grammarly: false },
  { name: "System-wide on macOS", rewritemate: true, grammarly: false },
  { name: "iOS keyboard extension", rewritemate: true, grammarly: true },
  { name: "Custom rewrite instructions", rewritemate: true, grammarly: false },
  { name: "Privacy-first (zero data stored)", rewritemate: true, grammarly: false },
  { name: "Grammar & spell check", rewritemate: false, grammarly: true },
  { name: "Free tier available", rewritemate: true, grammarly: true },
  { name: "Works offline", rewritemate: false, grammarly: false },
];

export default function Page() {
  return (
    <article className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          RewriteMate vs Grammarly
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Two AI writing assistants, two very different approaches. Here is how they compare for macOS and iOS users who want to rewrite text anywhere.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Key Differences</h2>
        <p>
          Grammarly is primarily a grammar and spell-checking tool that added AI rewriting features.
          RewriteMate is built from the ground up as a rewriting tool — it focuses on helping you rephrase,
          improve tone, and restructure text quickly across any app on macOS and iOS.
        </p>
        <p>
          The biggest difference? RewriteMate works <strong>system-wide on macOS</strong> as a menu bar app,
          while Grammarly is limited to its own editor on desktop. On iOS, both offer keyboard extensions,
          but RewriteMate gives you full control with <strong>custom rewrite instructions</strong>.
        </p>
      </section>

      <section className="rounded-3xl bg-secondary p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 text-sm font-medium text-muted-foreground">Feature</th>
                <th className="text-center py-3 px-4 text-base font-semibold">RewriteMate</th>
                <th className="text-center py-3 px-4 text-base font-semibold">Grammarly</th>
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
                    {f.grammarly ? (
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
          <h3 className="text-xl font-semibold tracking-tight">Why choose RewriteMate?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              Rewrite text in any macOS app via the menu bar
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              Create custom instructions for consistent tone
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              Privacy-first — no text is stored or logged
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-sky-500" />
              Lower price at $5.99/mo vs Grammarly Premium at $12/mo
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-secondary p-6 md:p-8 space-y-3">
          <h3 className="text-xl font-semibold tracking-tight">Why choose Grammarly?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
              Built-in grammar and spell checking
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
              More mature platform with browser extensions
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
              Plagiarism checker included in Premium
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pricing</h2>
        <p>
          RewriteMate starts at <strong>$5.99/month</strong> for the Pro plan, with a free tier available.
          Grammarly Premium costs <strong>$12.00/month</strong>. For users who primarily need AI-powered
          rewriting rather than grammar checking, RewriteMate offers better value.
        </p>
        <p>
          RewriteMate also offers a <strong>BYOK (Bring Your Own Key)</strong> plan for $29.99 one-time on macOS,
          ideal for users who already have API access to their preferred AI provider.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">The Verdict</h2>
        <p>
          If you need a grammar checker with occasional AI rewriting, Grammarly is a solid choice.
          But if your goal is to <strong>rewrite, rephrase, and improve text across every app</strong> on
          your Mac or iPhone — with full control over tone and style — RewriteMate is the better tool for the job.
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
