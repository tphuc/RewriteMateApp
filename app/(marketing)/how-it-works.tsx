import PhoneCarousel from "./phone-carousel";

const steps = [
  {
    title: "Select your text",
    description:
      "Highlight any text in any app — Mail, Notes, Notion, Messages, or Safari. RewriteMate works wherever you write.",
  },
  {
    title: "Choose how to rewrite",
    description:
      "Pick a preset or create your own custom instruction. Adjust tone, shorten, expand, or rephrase — all with one tap.",
  },
  {
    title: "Replace and go",
    description:
      "Your improved text replaces the original. No switching apps, no copy-paste hassle. Stay in flow.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          How RewriteMate Works
        </h2>
        <p className="text-muted-foreground text-xl mt-3 max-w-lg mx-auto">
          Rewrite text anywhere on your Mac or iPhone in three simple steps.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div className="md:sticky md:top-1/2 md:self-start md:col-start-2 md:row-start-1 md:row-end-4 flex justify-center py-8">
          <PhoneCarousel />
        </div>

        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`py-8 md:py-16  ${i % 2 === 0 ? "md:text-right md:col-start-1" : "md:text-left md:col-start-3"}`}
          >
            <span className="text-sm text-left md:text-center font-semibold tracking-widest text-sky-500 uppercase">
              Step {i + 1}
            </span>
            <h3 className="text-2xl  md:text-3xl font-semibold tracking-tight mt-2">
              {step.title}
            </h3>
            <p className={`text-muted-foreground mt-3 text-base md:text-lg  leading-relaxed max-w-md ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
