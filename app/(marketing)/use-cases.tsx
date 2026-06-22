import { MailCheck, MessageSquareText, Shrink, Languages, FilePenLine, Hash, MessageCircleReply, Puzzle } from "lucide-react";

const useCases = [
  {
    icon: <MailCheck className="w-6 h-6" />,
    title: "Write Professional Emails",
    description:
      "Draft a rough reply and tap Proofread or Change Tone → Professional. Your email sounds polished without sounding like a robot.",
    keywords: "email writing AI keyboard",
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    title: "Polish Messages & Texts",
    description:
      "Fix typos, soften tone, or rephrase texts before you hit send. Works in Messages, Slack, WhatsApp — anywhere you type.",
    keywords: "AI keyboard for messages",
  },
  {
    icon: <Shrink className="w-6 h-6" />,
    title: "Shorten Rambling Messages",
    description:
      "Select a wall of text, tap Shorten, and get a crisp version. Perfect for busy teammates who need the TL;DR fast.",
    keywords: "shorten text AI",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Translate in Any App",
    description:
      "Translate selected text to 100+ languages without leaving the keyboard. No more switching to Google Translate.",
    keywords: "translate keyboard AI",
  },
  {
    icon: <FilePenLine className="w-6 h-6" />,
    title: "Paraphrase & Rephrase",
    description:
      "Stuck on the same phrasing? Tap Paraphrase to rewrite any sentence in a fresh way. Avoid repetition without starting from scratch.",
    keywords: "paraphrase keyboard",
  },
  {
    icon: <Hash className="w-6 h-6" />,
    title: "Social Media Captions",
    description:
      "Write a rough caption, tap Add Hashtags, and get a ready-to-post version. Keep your social workflow inside Instagram, Threads, or X.",
    keywords: "AI keyboard for social media captions",
  },
  {
    icon: <MessageCircleReply className="w-6 h-6" />,
    title: "Quick Customer Replies",
    description:
      "Tap Agree Reply or Polite Reply to generate a well-mannered response instantly. Great for support agents handling high volume.",
    keywords: "AI keyboard for customer support",
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "Custom Commands for Any Task",
    description:
      "Create your own rewrite prompts with custom icons and colors. Save recurring formats — PR templates, client updates, weekly reports.",
    keywords: "custom AI commands keyboard",
  },
];

export default function UseCases() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-2">
        Real Ways to Use RewriteMate
      </h2>
      <p className="text-center text-muted-foreground text-xl mb-12 max-w-lg mx-auto">
        From emails to social captions, RewriteMate helps you write better everywhere.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {useCases.map((uc) => (
          <div
            key={uc.title}
            className="flex items-start gap-4 rounded-3xl bg-secondary p-5"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center text-sky-500 shrink-0">
              {uc.icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-semibold tracking-tight">
                {uc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {uc.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
