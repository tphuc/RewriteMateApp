import type { Metadata } from "next";
import GrammarTool from "./grammar-tool";

export const metadata: Metadata = {
  title: "Free Grammar Checker — AI-Powered Proofreading Online | RewriteMate",
  description:
    "Check grammar, spelling, and punctuation for free with RewriteMate's AI-powered grammar checker. Fix errors, improve clarity, and adjust tone — no sign-up required.",
  alternates: {
    canonical: "https://rewritemate.app/tools/grammar-checker",
  },
  openGraph: {
    title: "Free Grammar Checker — RewriteMate",
    description:
      "Check grammar, spelling, and punctuation for free with AI. Fix errors, improve clarity, and adjust tone instantly.",
  },
};

export default function Page() {
  return <GrammarTool />;
}
