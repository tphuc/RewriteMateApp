import { MousePointerClick, WandSparkles, ClipboardPaste } from "lucide-react";

const steps = [
  {
    icon: <MousePointerClick className="w-8 h-8" />,
    title: "Select your text",
    description:
      "Highlight any text in any app — Mail, Notes, Notion, Messages, or Safari. RewriteMate works wherever you write.",
  },
  {
    icon: <WandSparkles className="w-8 h-8" />,
    title: "Choose how to rewrite",
    description:
      "Pick a preset or create your own custom instruction. Adjust tone, shorten, expand, or rephrase — all with one tap.",
  },
  {
    icon: <ClipboardPaste className="w-8 h-8" />,
    title: "Done — paste and go",
    description:
      "Your improved text replaces the original. No switching apps, no copy-paste hassle. Stay in flow.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-2">
        How RewriteMate Works
      </h2>
      <p className="text-center text-muted-foreground text-xl mb-12 max-w-lg mx-auto">
        Rewrite text anywhere on your Mac or iPhone in three simple steps.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative flex flex-col items-center text-center rounded-3xl bg-secondary p-8"
          >
            <span className="absolute top-4 left-4 text-4xl font-bold text-muted-foreground/20">
              0{i + 1}
            </span>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center text-sky-500 mb-5">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold tracking-tight mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
