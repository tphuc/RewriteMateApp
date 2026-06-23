import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Writing Tips — Write Professional Emails | RewriteMate",
  description:
    "Learn how to write professional emails that get replies. Covers subject lines, structure, tone, and common mistakes. Polish your emails with RewriteMate's AI keyboard.",
  alternates: { canonical: "https://rewritemate.app/learn/email-writing" },
};

export default function EmailWriting() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Email Writing Tips</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Write professional emails that get read, understood, and replied to.
          Then use RewriteMate to proofread, adjust tone, and polish every message
          before you hit send — directly from your keyboard.
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

      {/* Structure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">The Structure of a Great Email</h2>
        <div className="space-y-3">
          {[
            { part: "Subject Line", desc: "Make it specific and actionable. Bad: Meeting. Good: Project Update — Q3 Review on Thursday at 2pm." },
            { part: "Greeting", desc: "Use the recipient's name. Hi Sarah is better than To Whom It May Concern." },
            { part: "Opening Line", desc: "State your purpose in the first sentence. I'm writing to follow up on our conversation about..." },
            { part: "Body", desc: "Keep it short. One topic per paragraph. Use bullet points for multiple items." },
            { part: "Call to Action", desc: "Tell the reader exactly what you need and by when. Please review the attached proposal and share your feedback by Friday." },
            { part: "Sign-Off", desc: "Match your sign-off to your relationship. Best regards for formal, Thanks for casual, Cheers for familiar." },
          ].map((s) => (
            <div key={s.part} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{s.part}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tone by Scenario */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Email Tone by Scenario</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { scenario: "Client Update", tone: "Professional and warm", example: "I wanted to share a quick update on your project. We are on track for the Friday deadline." },
            { scenario: "Team Message", tone: "Friendly and direct", example: "Quick heads up — the deployment is scheduled for 3pm today. Let me know if you have questions." },
            { scenario: "Follow-Up", tone: "Polite and helpful", example: "I wanted to check in on my previous email. Happy to hop on a call if that is easier." },
            { scenario: "Cold Outreach", tone: "Respectful and brief", example: "I came across your work on [topic] and wanted to introduce myself." },
          ].map((t) => (
            <div key={t.scenario} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{t.scenario}</h3>
              <p className="text-xs text-muted-foreground">Tone: {t.tone}</p>
              <p className="text-sm text-muted-foreground mt-2 italic">{t.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Common Email Mistakes</h2>
        <div className="space-y-3">
          {[
            { issue: "Too long", fix: "Respect your reader's time. If your email is more than five sentences, consider whether a call would be better." },
            { issue: "No clear ask", fix: "Every email should have one clear action the reader needs to take. If you aren't sure what it is, keep drafting." },
            { issue: "Wrong tone", fix: "A message that works for your team may feel too casual for a client. When in doubt, lean professional." },
            { issue: "Typos and errors", fix: "Proofread before you send. A single typo can undermine your credibility." },
          ].map((m) => (
            <div key={m.issue} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{m.issue}</h3>
              <p className="text-sm text-muted-foreground mt-2">{m.fix}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Write Better Emails with AI</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          RewriteMate proofreads, adjusts tone, and rewrites emails directly inside Mail, Gmail, Outlook, or any app — without switching screens.
        </p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Proofread</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Change Tone</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Shorten</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Quick Reply</span>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "How long should a professional email be?", a: "Keep it as short as possible while including all necessary information. Ideally 3-5 sentences. If you need more, consider attaching a document or scheduling a call." },
            { q: "How do I write a cold email that gets replies?", a: "Keep it brief, personalize the first line, state your value clearly, and end with a low-friction ask. Under 100 words performs best." },
            { q: "Can RewriteMate help me write emails?", a: "Yes. RewriteMate works inside your email app on iPhone and Mac. Select text, choose a command — proofread, change tone, shorten, or quick reply — and the AI improves it instantly." },
            { q: "Is RewriteMate free?", a: "Yes. RewriteMate has a free tier with powerful commands including proofreading, tone adjustment, and paraphrasing. Upgrade to Pro for unlimited use." },
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
        <p className="text-lg font-semibold tracking-tight">Start writing better emails today</p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
