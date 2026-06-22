import type { Metadata } from "next";
import GrammarTool from "./grammar-tool";

export const metadata: Metadata = {
  title: "Free Grammar Checker — AI-Powered Proofreading Online | RewriteMate",
  description:
    "Check grammar, spelling, and punctuation for free with AI. Fix errors instantly in any text. No sign-up required.",
  alternates: {
    canonical: "https://rewritemate.app/tools/grammar-checker",
  },
  openGraph: {
    title: "Free Grammar Checker — RewriteMate",
    description:
      "Check grammar, spelling, and punctuation for free with AI. Fix errors instantly.",
  },
};

export default function Page() {
  return <GrammarTool />;
}
