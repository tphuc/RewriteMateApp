import Link from "next/link";
import type { Metadata } from "next";
import Footer2 from "../footer";
import UseCases from "../use-cases";
import { FaqSection } from "@/components/faq";

export const metadata: Metadata = {
  title: "Pricing — RewriteMate AI Keyboard",
  description:
    "Free, Monthly, Annual, and Lifetime plans. Start for free on iOS and macOS. Bring Your Own Key also available.",
  alternates: { canonical: "https://rewritemate.app/pricing" },
  openGraph: {
    title: "Pricing — RewriteMate AI Keyboard",
    description: "Free, Monthly, Annual, and Lifetime plans. Start for free.",
  },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Essential AI writing help, always free.",
    cta: "Try for Free",
    href: "https://apps.apple.com/app/rewritemate/id6755306532",
    highlight: false,
    features: [
      "Standard AI engine",
      "Essential editing commands",
      "Up to 100 rewrites / month",
      "Up to 100 custom tasks",
    ],
  },
  {
    name: "Pro Monthly",
    price: "$6.99",
    period: "/month",
    desc: "Unlimited rewriting for power users.",
    cta: "Subscribe Monthly",
    href: "https://apps.apple.com/app/rewritemate/id6755306532",
    highlight: false,
    features: [
      "Unlimited rewrites",
      "All AI models (GPT, Claude, Gemini)",
      "Unlimited custom commands & folders",
      "iCloud sync across iPhone, iPad & Mac",
      "Full customization (icons, colors)",
      "Compose & Prompt Playground",
      "Priority support",
    ],
  },
  {
    name: "Pro Annual",
    price: "$39.99",
    period: "/year",
    desc: "Best value — save 52% vs monthly.",
    cta: "Subscribe Annual",
    href: "https://apps.apple.com/app/rewritemate/id6755306532",
    highlight: true,
    features: [
      "Everything in Pro Monthly",
      "Same features, lower price",
      "~2 months free compared to monthly",
    ],
  },
  // {
  //   name: "Lifetime",
  //   price: "$99.99",
  //   period: "once",
  //   desc: "Pay once, use forever. No subscriptions.",
  //   cta: "Get Lifetime",
  //   href: "https://apps.apple.com/app/rewritemate/id6755306532",
  //   highlight: false,
  //   features: [
  //     "Everything in Pro Annual",
  //     "No recurring payments",
  //     "All future updates included",
  //   ],
  // },
  // {
  //   name: "BYOK",
  //   price: "Free",
  //   period: "bring your key",
  //   desc: "Use your own API key from OpenAI, Anthropic, or Google.",
  //   cta: "Learn More",
  //   href: "#byok",
  //   highlight: false,
  //   features: [
  //     "No subscription needed",
  //     "Connect your own API key",
  //     "Your traffic goes directly to provider",
  //     "No data passes through our servers",
  //     "Full feature access",
  //   ],
  // },
];

const compareFeatures = [
  { feature: "AI rewrites per month", free: "100", pro: "Unlimited" },
  { feature: "AI model access", free: "Standard", pro: "All models (GPT, Claude, Gemini)" },
  { feature: "Custom commands", free: "Up to 100", pro: "Unlimited" },
  { feature: "Folders & organization", free: "Basic", pro: "Unlimited" },
  { feature: "iCloud sync", free: "—", pro: "✓" },
  { feature: "Compose (AI Chat)", free: "✓", pro: "✓" },
  { feature: "Translation (100+ languages)", free: "✓", pro: "✓" },
  { feature: "Custom icons & colors", free: "✓", pro: "✓" },
  { feature: "Prompt Playground", free: "✓", pro: "✓" },
  { feature: "Writing History", free: "✓", pro: "✓" },
  { feature: "macOS & iOS support", free: "✓", pro: "✓" },
  { feature: "Privacy-first (zero data retention)", free: "✓", pro: "✓" },
];

export default function PricingPage() {
  return (
    <div className="bg-background min-h-screen pt-[61px]">
      <main className="max-w-screen-lg mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Write With Confidence Everywhere
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Start for free. Upgrade when you need more power. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-sky-500/50 bg-gradient-to-b from-sky-500/5 to-transparent shadow-lg shadow-sky-500/10"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-4 py-0.5 text-xs font-semibold text-white">
                  Best Value
                </span>
              )}

              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="text-muted-foreground text-sm mt-1">{plan.desc}</p>

              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                )}
              </div>

              <Link
                href={plan.href}
                className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition ${
                  plan.highlight
                    ? "bg-sky-500 text-white hover:bg-sky-400"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="mt-6 space-y-2.5 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <svg className="mt-0.5 w-4 h-4 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <section id="byok" className="mt-20 rounded-2xl border border-border bg-secondary/50 p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Bring Your Own Key</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Already have an API key from OpenAI, Anthropic, or Google? Use RewriteMate for free with your own key.
              Your requests go directly from your device to the provider — no traffic passes through our infrastructure.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 w-4 h-4 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No subscription required
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 w-4 h-4 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Full feature access — same as Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 w-4 h-4 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Zero data passes through RewriteMate servers
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 w-4 h-4 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Available on macOS
              </li>
            </ul>
          </div>
        </section> */}

        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-10">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 font-medium w-[120px]">Free</th>
                  <th className="text-center py-3 pl-4 font-medium w-[120px] text-sky-500">Pro</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-muted-foreground">{row.feature}</td>
                    <td className="text-center py-3 px-4 text-muted-foreground">{row.free}</td>
                    <td className="text-center py-3 pl-4 text-foreground font-medium">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Prices are in USD excluding VAT and can vary across different countries and regions.
          </p>
          <Link
            href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="inline-flex rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition"
          >
             Try for Free
          </Link>
        </section>
      </main>

      <UseCases />
      <FaqSection />
      <Footer2 />
    </div>
  );
}
