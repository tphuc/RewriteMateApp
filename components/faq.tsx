
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
        answer: `RewriteMate is an AI writing assistant for macOS and iOS that helps you rewrite, refine, and improve text instantly. \n It works system-wide on Mac and as an iOS keyboard extension, so you can enhance your writing in any app without switching contexts.`,
      },
    {
      id: "data",
      question: "Are my text or data stored?",
      answer: `No — RewriteMate follows a non-data-retention policy.
      Your text is never stored, logged in our server.
      Requests are securely processed through trusted AI providers via our proxy, 
      and we only store your email and rewrite usage to manage subscriptions.`,
    },
    {
      id: "byok",
      question: "What is the BYOK plan?",
      answer: `BYOK (Bring Your Own Key) lets you connect your own API key from a supported AI provider.
      In this mode, your requests go directly from your Mac to the provider servers. No traffic or text passes through our infrastructure.`,
    },
    {
      id: "offline",
      question: "Does RewriteMate work offline?",
      answer: `RewriteMate requires an internet connection to communicate with AI models.
      However, all processing is lightweight and fast, and no data is stored after your rewrite is complete.`,
    },
    {
      id: "custom-prompts",
      question: "What are Custom Instructions?",
      answer: `Custom Instructions let you define how RewriteMate rewrites.
      You can create your own presets.`
    },
    {
      id: "plans",
      question: "Is there a free plan?",
      answer: `Yes! RewriteMate includes a free tier with limited rewrites each month.
      Upgrade to the Pro plan for higher limits and faster performance.`,
    },
  ]
  
  export function FaqSection() {
    return (
      <section className="max-w-2xl mx-auto py-16 px-6">
        <h2 className="text-4xl tracking-tight font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
  
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-2xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    )
  }