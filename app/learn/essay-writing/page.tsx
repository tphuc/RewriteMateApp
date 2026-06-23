import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Essay Writing Guide — Structure, Tips & Examples | RewriteMate",
  description:
    "Learn how to write great essays with our free guide. Covers essay structure, thesis statements, paragraph organization, and revision tips. Polish your essay with RewriteMate's AI keyboard.",
  alternates: { canonical: "https://rewritemate.app/learn/essay-writing" },
};

export default function EssayWriting() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Essay Writing</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          A step-by-step guide to writing essays that are clear, well-structured, and persuasive.
          Learn the framework, then use RewriteMate to polish your draft in any app.
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
        <h2 className="text-2xl font-semibold tracking-tight">The Standard Essay Structure</h2>
        <p className="text-muted-foreground">Most essays follow a five-paragraph structure. This works for academic essays, college applications, and persuasive writing.</p>
        <div className="space-y-3">
          {[
            { part: "Introduction", desc: "Hook the reader, introduce your topic, and end with a clear thesis statement that states your main argument." },
            { part: "Body Paragraph 1", desc: "Your strongest point. Start with a topic sentence, provide evidence or examples, and explain how it supports your thesis." },
            { part: "Body Paragraph 2", desc: "Your second strongest point. Same structure — topic sentence, evidence, explanation. Use a transition word to link from the previous paragraph." },
            { part: "Body Paragraph 3", desc: "Address a counterargument or provide additional support. Show you have considered other perspectives." },
            { part: "Conclusion", desc: "Restate your thesis in fresh words. Summarize your main points. End with a thought-provoking final sentence." },
          ].map((s) => (
            <div key={s.part} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{s.part}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Writing a Strong Thesis</h2>
        <p className="text-muted-foreground">Your thesis is the central argument of your essay. A strong thesis is specific, debatable, and focused.</p>
        <div className="rounded-xl bg-secondary p-5 space-y-2">
          <p className="text-sm"><span className="text-red-400">Weak:</span> Social media has both positive and negative effects.</p>
          <p className="text-sm"><span className="text-green-400">Strong:</span> While social media connects people across distances, its impact on mental health and productivity requires conscious boundaries.</p>
          <p className="text-xs text-muted-foreground mt-2">The strong thesis takes a position, acknowledges nuance, and sets up the essay&apos;s structure.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Editing Your Essay</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { tip: "Read aloud", desc: "Reading your essay out loud helps you catch awkward phrasing and run-on sentences." },
            { tip: "Check transitions", desc: "Each paragraph should flow naturally to the next. Use transition words like however, therefore, and furthermore." },
            { tip: "Cut weak words", desc: "Remove very, really, quite, and thing. Replace them with precise language." },
            { tip: "Verify your thesis", desc: "Every paragraph should support your thesis. If a paragraph doesn&apos;t, cut it or revise your thesis." },
          ].map((e) => (
            <div key={e.tip} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold text-sm">{e.tip}</h3>
              <p className="text-sm text-muted-foreground mt-2">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-8 md:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Polish Your Essay with AI</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          RewriteMate helps you paraphrase, proofread, and improve your essay — directly inside Notes, Pages, Google Docs, or any app on your iPhone or Mac.
        </p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Paraphrase</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Proofread</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Expand</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Simplify</span>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "What is the five-paragraph essay?", a: "A standard structure with an introduction, three body paragraphs, and a conclusion. It works well for timed essays and provides a clear framework for organizing ideas." },
            { q: "How do I write a thesis statement?", a: "A thesis statement should make a specific claim that you will support in your body paragraphs. It usually appears at the end of your introduction." },
            { q: "Can RewriteMate help me write my essay?", a: "RewriteMate helps you improve what you have already written. Use it to proofread, paraphrase, adjust tone, or expand on ideas — directly inside your writing app." },
            { q: "Is RewriteMate free for students?", a: "Yes. RewriteMate has a free tier with powerful rewriting and proofreading commands. Students can upgrade to Pro for unlimited use and custom commands." },
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
        <p className="text-lg font-semibold tracking-tight">Start writing better essays today</p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
