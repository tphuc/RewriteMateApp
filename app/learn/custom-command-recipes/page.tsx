import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, WandSparkles, Code2, FolderOpen, Beaker, Grid3x3 } from "lucide-react";
import { ImageFlow } from "@/components/custom-mdx";

export const metadata: Metadata = {
  title: "Custom Command Recipes — AI Prompts for RewriteMate | RewriteMate",
  description:
    "Copy-ready AI prompts for RewriteMate custom commands. Executive polish, PR format, bullet points, bilingual flow, and more.",
  alternates: { canonical: "https://rewritemate.app/learn/custom-command-recipes" },
};

const recipes = [
  {
    title: "The Executive Polish",
    icon: <WandSparkles className="w-5 h-5 text-amber-500" />,
    bestFor: "Professional emails, client messages, formal communication",
    prompt:
      "Fix all typos and grammar. Strip out filler words. Use active voice. Keep it under 40 words. Maintain a professional but warm tone.",
    iconSuggestion: "✨ Sparkles or 👔 Briefcase",
  },
  {
    title: "PR Format",
    icon: <Code2 className="w-5 h-5 text-sky-500" />,
    bestFor: "Developers writing pull request descriptions",
    prompt:
      "Convert these rough notes into a well-structured PR description. Start with a summary of what this PR does. Then list key changes as bullet points. End with testing notes.",
    iconSuggestion: "🔧 Wrench or 💻 Terminal",
  },
  {
    title: "Raw Notes → Bullet Points",
    icon: <Grid3x3 className="w-5 h-5 text-green-500" />,
    bestFor: "Meeting notes, brain dumps, Slack updates",
    prompt:
      "Convert this unstructured brain dump into exactly 3 professional, action-oriented bullet points. Start each with a strong verb.",
    iconSuggestion: "📋 Clipboard or ••• List",
  },
  {
    title: "Bilingual Flow Adjustment",
    icon: <Code2 className="w-5 h-5 text-purple-500" />,
    bestFor: "Non-native English speakers, bilingual writers",
    prompt:
      "Fix any unnatural phrasing, grammar errors, and word choice issues. Keep the original meaning. Make it sound like a native speaker wrote it.",
    iconSuggestion: "🌐 Globe or 🔄 Refresh",
  },
  {
    title: "Academic Counter-Argue",
    icon: <Beaker className="w-5 h-5 text-rose-500" />,
    bestFor: "Students writing essays with counterarguments",
    prompt:
      "Given this argument, generate a thoughtful counterargument. Acknowledge the opposing view, then provide a rebuttal. Use academic tone.",
    iconSuggestion: "⚖️ Scale or 📚 Books",
  },
];

export default function CustomCommandRecipes() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Custom Command Recipes
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Save your most-used writing instructions as one-tap keyboard shortcuts.
          Copy a recipe below, create a custom command in the RewriteMate app, and
          it appears as a chip in your keyboard.
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

      {/* What Are Custom Commands */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What Are Custom Commands?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Custom commands are your own AI instructions saved as one-tap shortcuts in the keyboard.
          Give it a name, pick an icon and color, write a prompt, and it appears as a chip alongside
          the built-in commands. Tap it on any text — the AI follows your instruction instantly.
        </p>
      </section>

      {/* Recipe Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Recipe Collection</h2>
        <div className="space-y-4">
          {recipes.map((r, i) => (
            <div key={i} className="rounded-2xl bg-secondary p-6 border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-background shrink-0">{r.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Best for: {r.bestFor}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1.5">Prompt to copy:</p>
                  <div className="bg-background/60 px-4 py-3 rounded-lg border border-border text-xs font-mono text-muted-foreground leading-relaxed">
                    &ldquo;{r.prompt}&rdquo;
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Suggested icon: {r.iconSuggestion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organizing with Folders */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Organizing with Folders</h2>
        <p className="text-muted-foreground leading-relaxed">
          Group related commands into folders so your keyboard stays organized. For example, create
          a &ldquo;Work&rdquo; folder with Executive Polish and PR Format, and a &ldquo;Content&rdquo;
          folder with your social media commands. Folders appear as filter chips above the command
          grid in the keyboard — tap one to show only that group.
        </p>
        <div className="rounded-xl bg-secondary p-5 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-background shrink-0">
            <FolderOpen className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Pro tip: folder by context</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Create folders like &ldquo;Work,&rdquo; &ldquo;Social,&rdquo; and &ldquo;Academic.&rdquo;
              Drop each custom command into the right folder. In the keyboard, tap the folder name to
              filter — no scrolling through dozens of commands.
            </p>
          </div>
        </div>
      </section>

      <ImageFlow images={['https://res.cloudinary.com/diq74hzgo/image/upload/rewritemate/20260630_1146.jpeg']}/>

      {/* Prompt Playground */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Testing with Prompt Playground</h2>
        <p className="text-muted-foreground leading-relaxed">
          Before saving a custom command, test it in the Prompt Playground. Paste your prompt, type
          or paste sample text, and see what the AI produces. Tweak the instruction until the output
          matches exactly what you want — then save with confidence.
        </p>
        <div className="rounded-xl bg-secondary p-5 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-background shrink-0">
            <Beaker className="w-5 h-5 text-sky-500" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">How to use the Playground</h3>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li>Open the RewriteMate app and create a new command</li>
              <li>Tap &ldquo;Open Playground&rdquo; on the command detail screen</li>
              <li>Type or paste sample text to test against</li>
              <li>Adjust your prompt until the result looks right</li>
              <li>Save — your command is now ready in the keyboard</li>
            </ol>
          </div>
        </div>
      </section>
     
      <ImageFlow images={['https://res.cloudinary.com/diq74hzgo/image/upload/rewritemate/20260630_1510.jpeg']}/>
      {/* AI Assistant CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-cyan-500/10 p-8 md:p-10 border border-sky-300/50 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7 text-sky-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Build Your Own Writing Shortcuts</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Custom commands, folders, and the Prompt Playground give you complete control over how
          AI rewrites your text. Set it up once, tap to use forever.
        </p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Download RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Custom Prompts</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Folder Organization</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Prompt Playground</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" /> Custom Icons</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "How do I create a custom command?", a: "Open the RewriteMate app, tap the + button in the command grid. Give it a name, pick an icon and color, write your AI prompt, and save. It will appear as a chip in your keyboard's top bar." },
            { q: "How many custom commands can I have?", a: "Free users can create up to 100 custom commands. Pro users have unlimited custom commands." },
            { q: "Can I organize commands into folders?", a: "Yes. Create folders in the RewriteMate app and drag commands into them. In the keyboard, folders appear as filter chips above the command grid — tap one to show only that group." },
            { q: "What is the Prompt Playground?", a: "It's a test area where you can try your custom prompt against sample text before saving. Open it from the command detail screen in the RewriteMate app." },
            { q: "Can I edit or delete a custom command later?", a: "Yes. Tap any custom command in the RewriteMate app to edit its name, icon, color, or prompt. Swipe to delete." },
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
        <p className="text-lg font-semibold tracking-tight">Start building your command library today</p>
        <Link href="https://apps.apple.com/app/rewritemate/id6755306532"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity">
          Get RewriteMate Free <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">AI keyboard for iOS and macOS. Free to try.</p>
      </div>
    </div>
  );
}
