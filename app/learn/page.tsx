import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, PenLine, FileText, Mail, ArrowRight, Hash, WandSparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn to Write Better — Guides & Resources | RewriteMate",
  description:
    "Free writing guides covering grammar, email writing, essay structure, social media content workflows, and custom AI command recipes. Improve your writing with RewriteMate.",
  alternates: { canonical: "https://rewritemate.app/learn" },
};

const guides = [
  { href: "/learn/grammar-guide", label: "Grammar Guide", icon: <BookOpen className="w-5 h-5" />, desc: "Master English grammar with clear rules and real examples." },
  { href: "/learn/writing-guide", label: "Writing Guide", icon: <PenLine className="w-5 h-5" />, desc: "Practical tips to write clearly, concisely, and with confidence." },
  { href: "/learn/essay-writing", label: "Essay Writing", icon: <FileText className="w-5 h-5" />, desc: "Structure, outline, and polish essays for school or work." },
  { href: "/learn/email-writing", label: "Email Writing Tips", icon: <Mail className="w-5 h-5" />, desc: "Write professional emails that get read and get replies." },
  { href: "/learn/social-media-workflows", label: "Social Media Workflows", icon: <Hash className="w-5 h-5" />, desc: "Write captions, switch tones, and create content faster with AI keyboard workflows." },
  { href: "/learn/custom-command-recipes", label: "Custom Command Recipes", icon: <WandSparkles className="w-5 h-5" />, desc: "Copy-ready AI prompts to save as one-tap keyboard shortcuts." },
];

export default function LearnHub() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Learn to Write Better</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Free writing guides and resources to help you communicate clearly and confidently.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group flex items-start gap-4 rounded-2xl bg-secondary p-5 hover:opacity-90 transition-opacity"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-500 shrink-0">
              {g.icon}
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="font-semibold tracking-tight group-hover:text-foreground/80 transition-colors">
                {g.label}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
            </div>
            <ArrowRight className="w-4 h-4 mt-1.5 text-muted-foreground/40 group-hover:text-foreground/60 transition-colors" />
          </Link>
        ))}
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/20 p-6 text-center space-y-2">
        <h2 className="text-lg font-semibold tracking-tight">Put these guides into practice</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Use RewriteMate&apos;s free tools to check grammar, rewrite sentences, and improve your writing instantly.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link href="/free-rewriter" className="text-sm font-medium text-sky-500 hover:underline">AI Text Rewriter</Link>
          <span className="text-muted-foreground/30">·</span>
          <Link href="/grammar-checker" className="text-sm font-medium text-sky-500 hover:underline">Grammar Checker</Link>
        </div>
      </div>
    </div>
  );
}
