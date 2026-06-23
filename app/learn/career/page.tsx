import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Career & Professional Writing Guide | RewriteMate",
  description:
    "Write resumes, cover letters, LinkedIn profiles, and professional emails that land opportunities. Polish your professional writing with RewriteMate's AI keyboard.",
  alternates: { canonical: "https://rewritemate.app/learn/career" },
};

export default function CareerGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Career & Professional Writing</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Your writing is often the first impression you make. Learn how to craft resumes, cover letters, and LinkedIn profiles that stand out.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
            Download RewriteMate Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </section>

      {/* Resume */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Resume Writing</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { tip: "Use Action Verbs", desc: "Start each bullet with a strong verb: Led, Built, Improved, Designed, Negotiated. Avoid 'Responsible for' or 'Was in charge of'." },
            { tip: "Quantify Results", desc: "Instead of 'Improved sales', write 'Increased sales by 35% in six months'. Numbers make your impact tangible." },
            { tip: "Tailor to the Role", desc: "Customize your resume for each application. Use keywords from the job description to pass applicant tracking systems." },
            { tip: "Keep It Concise", desc: "One page for under 10 years of experience. Two pages maximum. Every line should earn its place." },
          ].map((r) => (
            <div key={r.tip} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{r.tip}</h3>
              <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cover Letter */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Cover Letter Structure</h2>
        <div className="rounded-xl bg-secondary p-6 space-y-3 text-sm">
          <p><strong>Opening:</strong> State the role you are applying for and why you are excited about it.</p>
          <p><strong>Body 1:</strong> Highlight 1-2 key achievements that directly relate to the role. Use the STAR method (Situation, Task, Action, Result).</p>
          <p><strong>Body 2:</strong> Show that you have researched the company. Mention something specific about their work that aligns with your skills.</p>
          <p><strong>Closing:</strong> Reiterate your interest and include a call to action. &quot;I would welcome the opportunity to discuss how I can contribute to your team.&quot;</p>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">LinkedIn Profile Tips</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { area: "Headline", desc: "Don't just list your title. Describe what you do and who you help. 'Helping teams ship better software' is stronger than 'Software Engineer'." },
            { area: "About Section", desc: "Lead with your value proposition in the first two lines. Use the rest to tell your career story with specific achievements." },
            { area: "Experience Bullets", desc: "Same principles as your resume — action verbs, quantified results, tailored language. Keep each bullet to one line." },
            { area: "Recommendations", desc: "Ask colleagues and clients to write specific recommendations. They build social proof and boost your profile." },
          ].map((l) => (
            <div key={l.area} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{l.area}</h3>
              <p className="text-sm text-muted-foreground mt-2">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Polish Your Professional Writing</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          RewriteMate helps you refine your resume, cover letter, and LinkedIn content — directly inside Notes, Pages, or any app on your iPhone or Mac.
        </p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Proofread</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Paraphrase</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Adjust Tone</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Shorten</span>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "How long should a resume be?", a: "One page for under 10 years of experience, two pages maximum. Recruiters spend an average of 7 seconds scanning a resume — make every word count." },
            { q: "What is the STAR method?", a: "Situation, Task, Action, Result. A framework for writing achievement-driven bullet points that show how you made an impact." },
            { q: "Can RewriteMate help with my resume?", a: "Yes. Use RewriteMate to proofread your resume, rephrase bullet points, adjust tone, and shorten wordy sections — all without leaving your document." },
            { q: "Is RewriteMate free?", a: "Yes. RewriteMate has a free tier with powerful commands. Upgrade to Pro for unlimited use and custom commands tailored to your job search." },
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
        <p className="text-lg font-semibold tracking-tight">Advance your career with better writing</p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
