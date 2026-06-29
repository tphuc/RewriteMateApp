import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Hash, Instagram, MessageSquare, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media & Content Creator Workflows | RewriteMate",
  description:
    "Write captions, switch tones, and add hashtags faster with RewriteMate's AI keyboard. Workflows for Instagram, LinkedIn, TikTok, and more.",
  alternates: { canonical: "https://rewritemate.app/learn/social-media-workflows" },
};

export default function SocialMediaWorkflows() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Social Media & Content Creator Workflows
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Write captions, replies, and posts faster — directly from your keyboard.
          No more switching between apps to polish your content.
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

      {/* The Content Creator's Friction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">The Content Creator&apos;s Friction</h2>
        <p className="text-muted-foreground leading-relaxed">
          Writing captions, replies, and posts across multiple platforms means repeating the same
          work — draft in Notes, paste into a rewriting tool, copy back, paste into the app. Every
          context switch kills your flow. RewriteMate lives inside your keyboard, so you can
          rewrite, rephrase, and polish your content without ever leaving Instagram, TikTok,
          LinkedIn, or X.
        </p>
      </section>

      {/* One-Tap Caption Workflows */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">One-Tap Caption Workflows</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Polishing a Raw Draft",
              steps: "Type your caption → Select text → Tap Paraphrase → Add Hashtags → Copy",
              desc: "Clean up rough ideas and add relevant hashtags in seconds.",
            },
            {
              title: "Shorten for Character Limits",
              steps: "Select text → Tap Shorten → Review → Insert",
              desc: "X/TikTok bios and captions need to be tight. Shorten cuts fluff without losing meaning.",
            },
            {
              title: "Repurpose Across Platforms",
              steps: "Select caption → Tap Paraphrase → Tweak tone → Paste on next platform",
              desc: "One idea, multiple formats. RewriteMate helps you adapt without starting from scratch.",
            },
            {
              title: "Quick Replies to Comments",
              steps: "Type a rough reply → Tap Polite Reply or Quick Reply → Insert",
              desc: "Engage with your audience faster. Keep your brand voice consistent across every response.",
            },
          ].map((w, i) => (
            <div key={i} className="rounded-xl bg-secondary p-5 space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm">{w.title}</h3>
                <p className="text-xs text-sky-400 font-medium mt-1">{w.steps}</p>
              </div>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tone Switching for Every Platform */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Tone Switching for Every Platform</h2>
        <p className="text-sm text-muted-foreground">
          The same message needs a different voice on each platform. RewriteMate&apos;s Change Tone
          command adjusts your text instantly — no rewriting by hand.
        </p>
        <div className="space-y-3">
          {[
            {
              platform: "LinkedIn",
              tone: "Professional",
              icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
              before: "We just dropped a new feature that's going to change everything.",
              after: "I'm excited to share our latest update — designed to help you work more efficiently.",
            },
            {
              platform: "Instagram",
              tone: "Casual / Friendly",
              icon: <Instagram className="w-5 h-5 text-pink-500" />,
              before: "New feature drop. It's pretty cool, check it out.",
              after: "Something new just landed and we think you're going to love it ✨",
            },
            {
              platform: "TikTok",
              tone: "Creative / Cheeky",
              icon: <MessageSquare className="w-5 h-5 text-amber-500" />,
              before: "Here is a tutorial for our new editing tool.",
              after: "PSA: stop manually cropping your videos. This one trick saved me 10 minutes today ⏱️",
            },
            {
              platform: "X (Twitter)",
              tone: "Concise / Punchy",
              icon: <Hash className="w-5 h-5 text-sky-500" />,
              before: "We have published a new blog post about how to grow your audience on social media.",
              after: "New post: grow your audience without burning out. Read time: 3 min.",
            },
          ].map((p, i) => (
            <div key={i} className="rounded-xl bg-secondary p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-background shrink-0">{p.icon}</div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm">{p.platform}</h3>
                  <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded-full">
                    Tone: {p.tone}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/70 line-through">{p.before}</p>
                <p className="text-sm text-muted-foreground font-medium bg-background/40 p-2.5 rounded-lg border border-border/40">
                  ✨ {p.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compose for Brainstorming */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Compose for Brainstorming</h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Stuck on a hook or caption idea? Use the Compose tab to type a free-form instruction
            and let the AI generate options directly in your keyboard.
          </p>
        </div>
        <div className="rounded-xl bg-secondary p-5 space-y-3">
          <h3 className="font-semibold text-sm">Try these Compose prompts:</h3>
          <div className="space-y-2">
            {[
              "\"Write 5 caption ideas for a product launch post. Keep each under 150 characters.\"",
              "\"Make this sound more urgent and exciting for an Instagram Story.\"",
              "\"Rephrase this for LinkedIn — professional but approachable tone.\"",
              "\"Write a Twitter thread hook that grabs attention in the first sentence.\"",
            ].map((prompt, i) => (
              <div key={i} className="bg-background/60 px-4 py-3 rounded-lg border border-border text-xs font-mono text-muted-foreground">
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commands for Recurring Formats */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Custom Commands for Recurring Formats</h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Save your most-used content formats as custom commands with a tap. Create them once in
            the RewriteMate app, and they appear as chips in your keyboard.
          </p>
        </div>
        <div className="space-y-3">
          {[
            {
              title: "Caption: Product Launch",
              prompt: "Rewrite this as an engaging product launch caption. Use emojis, keep it under 200 characters, and end with a call to action.",
            },
            {
              title: "Reply: Customer Question",
              prompt: "Rephrase this reply to be helpful, friendly, and concise. Include a thank you at the end.",
            },
            {
              title: "Bio: Short & Punchy",
              prompt: "Condense this into a 2-line bio. Use emojis. Make it memorable.",
            },
          ].map((cmd, i) => (
            <div key={i} className="rounded-xl bg-secondary p-5 flex flex-col sm:flex-row items-start justify-between gap-4 border border-border/30">
              <div>
                <h4 className="font-semibold text-sm">{cmd.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Custom saved command chip</p>
              </div>
              <div className="bg-background/60 px-4 py-3 rounded-lg border border-border flex-1 text-xs font-mono text-muted-foreground max-w-lg">
                &ldquo;{cmd.prompt}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Create Better Content with AI</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          RewriteMate helps you write captions, switch tones, and generate ideas directly inside
          Instagram, TikTok, LinkedIn, X, and every other app.
        </p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Paraphrase</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Change Tone</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Add Hashtags</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Compose</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "Can RewriteMate add hashtags to my captions?", a: "Yes. Select your caption text, tap the Add Hashtags command, and RewriteMate generates relevant hashtags based on your content. Copy and paste into your post." },
            { q: "Does RewriteMate work inside Instagram and TikTok?", a: "Yes. RewriteMate is a system-wide keyboard extension. It works in any text field across any iOS or macOS app, including Instagram, TikTok, LinkedIn, X, and more." },
            { q: "Can I use different tones for different platforms?", a: "Absolutely. The Change Tone command lets you switch between Professional, Casual, Friendly, Formal, and Creative. Use Compose for custom instructions like 'Make this sound cheeky for TikTok.'" },
            { q: "How do I create a custom command for recurring content?", a: "Open the RewriteMate app, tap the + button, give your command a name, icon, and prompt. It will appear as a chip in your keyboard's top bar." },
            { q: "Is RewriteMate free for content creators?", a: "Yes. The free tier includes powerful commands like Paraphrase, Add Hashtags, and Change Tone. Upgrade to Pro for unlimited use and custom commands." },
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
        <p className="text-lg font-semibold tracking-tight">Start creating better content today</p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
