import type { Metadata } from "next";
import RewriteTool from "./rewrite-tool";

export const metadata: Metadata = {
  title: "Free AI Text Rewriter — Rewrite Sentences Online | RewriteMate",
  description:
    "Rewrite any text for free with AI. Change tone, paraphrase sentences, fix grammar, and improve your writing instantly. No sign-up required.",
  alternates: {
    canonical: "https://rewritemate.app/tools/free-rewriter",
  },
  openGraph: {
    title: "Free AI Text Rewriter — RewriteMate",
    description:
      "Rewrite any text for free with AI. Change tone, paraphrase, and improve your writing instantly.",
  },
};

export default function Page() {
  return <RewriteTool />;
}
