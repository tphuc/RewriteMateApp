import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, HelpCircle, ShieldCheck, Keyboard, FileText, Split } from "lucide-react";

export const metadata: Metadata = {
  title: "Essay Writing Guide — Structure, Tips & Examples | RewriteMate",
  description:
    "Learn how to write great essays with our free guide. Covers essay structure, thesis statements, paragraph organization, and revision tips. Polish your essay with RewriteMate's AI keyboard.",
  alternates: { canonical: "https://rewritemate.app/learn/essay-writing" },
};

export default function EssayWriting() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      {/* 1. Hero Section */}
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

      {/* NEW SECTION: The Reality of Academic Writing on Mobile */}
      <section className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-500">
          <Split className="w-5 h-5" />
          <h2 className="text-xl font-semibold tracking-tight text-foreground">The Hidden Friction in Student Mobile Workflows</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Inspiration hits anywhere—on the commute, in a library alcove, or between classes. Yet, turning those fragmented thoughts into a coherent academic paper on a phone or tablet is notoriously challenging. Traditional workflows force you to write a rough sentence in Google Docs, select it, copy it, leave your document, launch a browser tab or a standalone AI app, paste it, choose a preset option, and copy the outcome back. 
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This constant context-switching fragments your focus and breaks your analytical flow. The problem isn't your capability; it’s the rigid layout of standard mobile writing tools that isolate text generation from the typing surface.
        </p>
      </section>

      {/* 2. Standard Essay Structure */}
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

      {/* 3. Writing a Strong Thesis */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Writing a Strong Thesis</h2>
        <p className="text-muted-foreground">Your thesis is the central argument of your essay. A strong thesis is specific, debatable, and focused.</p>
        <div className="rounded-xl bg-secondary p-5 space-y-2">
          <p className="text-sm"><span className="text-red-400 font-medium">Weak:</span> Social media has both positive and negative effects.</p>
          <p className="text-sm"><span className="text-green-400 font-medium">Strong:</span> While social media connects people across distances, its deep impact on youth mental health and fragmented digital productivity requires conscious, systemic boundaries.</p>
          <p className="text-xs text-muted-foreground mt-2">The strong thesis takes a explicit position, acknowledges structural nuance, and implicitly outlines the essay&apos;s evolutionary structure.</p>
        </div>
      </section>

      {/* NEW SECTION: Visual Transformation Rows (Before vs. After) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Before vs. After: Refining Academic Tone</h2>
        <p className="text-muted-foreground">
          Writing academically requires transitioning from an conversational stream-of-consciousness to assertive, precise prose. See how messy thoughts transform when polished for academic expectations:
        </p>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> Initial Unpolished Draft
              </span>
              <p className="text-sm text-muted-foreground line-through">
                I think Shakespeare wanted people to see that Romeo and Juliet weren't really just totally in love, but they were acting super crazy because of how their families hated each other and stuff.
              </p>
            </div>
            <div className="rounded-xl border border-green-500/10 bg-green-500/5 p-5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Academic Refinement
              </span>
              <p className="text-sm text-foreground font-medium">
                Shakespeare demonstrates that Romeo and Juliet’s intense passions are less indicative of pure romance than they are a volatile psychological reaction catalyzed by their families’ systemic animosity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> Initial Unpolished Draft
              </span>
              <p className="text-sm text-muted-foreground line-through">
                The experiment worked out great and the numbers showed that when the temperature went way up, the enzymes stopped doing what they usually do and basically died.
              </p>
            </div>
            <div className="rounded-xl border border-green-500/10 bg-green-500/5 p-5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Academic Refinement
              </span>
              <p className="text-sm text-foreground font-medium">
                The experimental results indicate that elevated thermal levels induce severe protein denaturation, rendering the target enzymatic structures completely non-functional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Interactive Custom Prompt Library for Essays */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Custom AI Shortcut Prompts for Student Workflows</h2>
        <p className="text-muted-foreground">
          While basic AI tools limit you to generic presets like "Make Formal," advanced tools allow you to configure custom macros. By pinning targeted commands right onto your keyboard, you eliminate writer's block immediately within Pages, Word, or Google Docs.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Academic Counter-Argue",
              macro: "Counter-Argue",
              prompt: "Analyze my sentence and insert a transition phrase followed by a viable academic counterargument that should be addressed.",
              color: "border-sky-500/20 bg-sky-500/5"
            },
            {
              title: "Chicago/APA Formatter",
              macro: "Cite Integrator",
              prompt: "Rewrite the selected phrase to seamlessly blend the raw textual quote into an assertive, analytically objective statement.",
              color: "border-purple-500/20 bg-purple-500/5"
            },
            {
              title: "Synthesize Summary",
              macro: "Concluding Synthesis",
              prompt: "Condense this specific body paragraph into a singular, impactful summary sentence suitable for an analytical conclusion.",
              color: "border-blue-500/20 bg-blue-500/5"
            }
          ].map((item, idx) => (
            <div key={idx} className={`rounded-xl border p-5 space-y-3 flex flex-col justify-between ${item.color}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Keyboard className="w-3.5 h-3.5 text-muted-foreground" /> {item.title}
                </div>
                <p className="text-xs text-muted-foreground italic">"{item.prompt}"</p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-mono border border-border text-foreground shadow-sm">
                  ⌘ Pinned Key: [{item.macro}]
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Editing Your Essay */}
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

      {/* 5. Polish Your Essay with AI (CTA Box) */}
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
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2 flex-wrap">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Paraphrase</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Proofread</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Expand</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Simplify</span>
        </div>
      </section>

      {/* NEW SECTION: Privacy & Ethical AI Guardrails */}
      <section className="rounded-2xl border border-dashed border-sky-500/30 bg-sky-500/[0.02] p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 text-sky-500">
          <ShieldCheck className="w-5 h-5" />
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Data Security & Privacy for Academic Integrity</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Academic environments demand absolute data integrity and rigorous adherence to institutional privacy benchmarks. When utilizing an AI keyboard extension for line editing, understanding your data's footprint is vital.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 pt-2">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-foreground">Zero-Retention Parsing</h4>
            <p className="text-xs text-muted-foreground">
              Your essay content is processed exclusively on demand to compute the specific rewrite instruction. Text fragments are never saved, cached, or permanently stored.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-foreground">Keystroke Isolation</h4>
            <p className="text-xs text-muted-foreground">
              Unlike classic predictive extensions, your passive everyday typing is completely untouched. The engine only activates when you manually select a text block and trigger a specific action.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "What is the five-paragraph essay?", a: "A standard structure with an introduction, three body paragraphs, and a conclusion. It works well for timed essays and provides a clear framework for organizing ideas." },
            { q: "How do I write a thesis statement?", a: "A thesis statement should make a specific claim that you will support in your body paragraphs. It usually appears at the end of your introduction." },
            { q: "Can RewriteMate help me write my essay?", a: "RewriteMate helps you improve what you have already written. Use it to proofread, paraphrase, adjust tone, or expand on ideas — directly inside your writing app." },
            { q: "Is RewriteMate free for students?", a: "Yes. RewriteMate has a free tier with powerful rewriting and proofreading commands. Students can upgrade to Pro for unlimited use and custom commands." },
            { q: "Does the keyboard require full access to log keystrokes?", a: "No. While the extension requests standard system permissions to send selected text snippets to the AI models, it has a strict zero-retention architecture. It never tracks passwords, credit cards, or logs background typing data." },
            { q: "Can I choose which AI models process my essay?", a: "Yes. In the main companion app dashboard, you can configure your backend preferences, manage customized essay macros, or leverage the Bring Your Own Key (BYOK) framework to route tasks through your own API limits." }
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

      {/* 7. Footer CTA */}
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