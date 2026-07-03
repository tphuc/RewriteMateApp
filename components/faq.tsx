import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion"

  const faqs = [
    {
      id: "what-is",
      question: "What is RewriteMate?",
      answer: `RewriteMate is an AI writing assistant for macOS and iOS that helps you rewrite, refine, and improve text instantly.\nIt works system-wide on Mac and as an iOS keyboard extension, so you can enhance your writing in any app without switching contexts.`,
    },
    {
      id: "ai-keyboard",
      question: "How does the AI keyboard work on iPhone?",
      answer: `RewriteMate is an AI keyboard for iPhone that lives inside your system keyboard. Select any text in any app — Messages, Mail, Notes, Safari — tap a command from the keyboard's top bar, and the AI rewrites, proofreads, or translates it instantly. No copy-paste or app switching required.`,
    },
    {
      id: "paraphrase",
      question: "Can RewriteMate paraphrase and rewrite sentences?",
      answer: `Yes. RewriteMate is both a paraphrase tool and a text rewriter. Select a sentence, tap Paraphrase, and the AI will rephrase it while keeping the original meaning. You can also use Shorten, Expand, Simplify, or Summarize to rewrite text in different ways.`,
    },
    {
      id: "grammar",
      question: "Does RewriteMate check grammar while I type?",
      answer: `RewriteMate works as a grammar checker keyboard for iPhone and Mac. Select text you've already typed and tap Proofread to fix grammar, spelling, and punctuation. It doesn't underline mistakes in real-time — instead, it cleans up your text on demand with one tap.`,
    },
    {
      id: "tone",
      question: "Can I change the tone of my writing?",
      answer: `Absolutely. RewriteMate is a tone changer AI app that lets you switch between Professional, Casual, Friendly, Formal, and Creative tones. Select your text, tap Change Tone, pick the tone you want, and the AI rewrites it instantly.`,
    },
    {
      id: "translate",
      question: "Does RewriteMate support translation?",
      answer: `Yes. RewriteMate includes a translate keyboard AI feature that translates selected text to and from over 100 languages. Tap the Translate tab, choose your target language, and the text is replaced instantly — all without leaving the app you're typing in.`,
    },
    {
      id: "custom-commands",
      question: "Can I create my own custom AI commands?",
      answer: `Yes. RewriteMate is the only AI keyboard that lets you create custom AI commands with your own prompts, icons, and colors. Build shortcuts for recurring tasks like "Write a PR summary", "Reply like a CEO", or "Make this Instagram-ready". Test them in the Prompt Playground before saving.`,
    },
    {
      id: "compose",
      question: "What is the Compose feature?",
      answer: `Compose is an AI chat mode inside the keyboard. Instead of picking a preset command, you type a free-form instruction like "Make this sound more urgent" or "Rewrite this for a job application". The AI combines your instruction with the on-screen text to produce a result.`,
    },
    {
      id: "models",
      question: "What AI models does RewriteMate use?",
      answer: `RewriteMate supports multiple AI models including OpenAI (GPT), Anthropic (Claude), and Google (Gemini). Pro users can switch between models freely to find the style that works best for their writing.`,
    },
    {
      id: "apps",
      question: "Which apps does RewriteMate work with?",
      answer: `RewriteMate works in any app that accepts text input. Use it in Mail, Messages, Slack, Notion, Notes, Safari, X (Twitter), LinkedIn, Google Docs, WhatsApp, Telegram, and thousands more. If you can type in it, RewriteMate can rewrite in it.`,
    },
    {
      id: "email",
      question: "Can RewriteMate help me write better emails?",
      answer: `Yes. RewriteMate is an excellent email writing AI keyboard. Draft a rough message, then use Proofread to fix mistakes, Change Tone to sound more professional, Shorten to cut fluff, or Polite Reply to soften your wording. All without leaving your email app.`,
    },
    {
      id: "students",
      question: "Is RewriteMate useful for students?",
      answer: `RewriteMate is a great AI keyboard for students. Use it to proofread essays, paraphrase to avoid plagiarism, expand on rough ideas, simplify complex vocabulary, and translate research materials. It works in Google Docs, Notion, and any other app you use for schoolwork.`,
    },
    {
      id: "data",
      question: "Are my text or data stored?",
      answer: `No — RewriteMate follows a non-data-retention policy. Your text is never stored or logged on our server. Requests are securely processed through trusted AI providers via our proxy, and we only store your email and rewrite usage to manage subscriptions.`,
    },
    {
      id: "byok",
      question: "What is the BYOK plan?",
      answer: `BYOK (Bring Your Own Key) lets you connect your own API key from a supported AI provider. In this mode, your requests go directly from your Mac to the provider servers. No traffic or text passes through our infrastructure.`,
    },
    {
      id: "offline",
      question: "Does RewriteMate work offline?",
      answer: `RewriteMate requires an internet connection to communicate with AI models. However, all processing is lightweight and fast, and no data is stored after your rewrite is complete.`,
    },
    {
      id: "plans",
      question: "Is there a free plan?",
      answer: `Yes! RewriteMate includes a free tier with limited rewrites each month. Upgrade to the Pro plan for higher limits, all AI models, and iCloud sync across your devices.`,
    },
  ]

  const mid = Math.ceil(faqs.length / 2)
  const leftFaqs = faqs.slice(0, mid)
  const rightFaqs = faqs.slice(mid)

  export function FaqSection() {
    return (
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl tracking-tight font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Accordion type="single" collapsible className="space-y-2">
            {leftFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-secondary px-5 rounded-2xl border border-border/30">
                <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-md md:text-lg whitespace-pre-line pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-2">
            {rightFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-secondary px-5 rounded-2xl border border-border/30">
                <AccordionTrigger className="text-lg md:text-xl font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-md md:text-lg whitespace-pre-line pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
