import { Check, X } from "lucide-react";

const competitors = [
  {
    name: "RewriteMate",
    href: "/",
    features: {
      "AI text rewriting": true,
      "System-wide on macOS": true,
      "iOS keyboard extension": true,
      "Privacy-first (zero data stored)": true,
      "Custom rewrite instructions": true,
      "Works offline": false,
      "Grammar & spell check": false,
      "Free tier available": true,
      "Starts at": "$5.99/mo",
    },
  },
  {
    name: "Grammarly",
    href: "https://grammarly.com",
    features: {
      "AI text rewriting": true,
      "System-wide on macOS": false,
      "iOS keyboard extension": true,
      "Privacy-first (zero data stored)": false,
      "Custom rewrite instructions": false,
      "Works offline": false,
      "Grammar & spell check": true,
      "Free tier available": true,
      "Starts at": "$12.00/mo",
    },
  },
  {
    name: "Apple Writing Tools",
    href: "https://apple.com",
    features: {
      "AI text rewriting": true,
      "System-wide on macOS": true,
      "iOS keyboard extension": false,
      "Privacy-first (zero data stored)": true,
      "Custom rewrite instructions": false,
      "Works offline": true,
      "Grammar & spell check": false,
      "Free tier available": true,
      "Starts at": "Free",
    },
  },
];

const featureLabels = [
  "AI text rewriting",
  "System-wide on macOS",
  "iOS keyboard extension",
  "Privacy-first (zero data stored)",
  "Custom rewrite instructions",
  "Works offline",
  "Grammar & spell check",
  "Free tier available",
] as const;

export default function Comparison() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-2">
        RewriteMate vs. Alternatives
      </h2>
      <p className="text-center text-muted-foreground text-xl mb-12 max-w-lg mx-auto">
        See how RewriteMate compares to other AI writing tools for macOS and iOS.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 pr-4 text-sm font-medium text-muted-foreground w-[40%]">
                Feature
              </th>
              {competitors.map((c) => (
                <th
                  key={c.name}
                  className="text-center py-4 px-3 text-lg font-semibold tracking-tight"
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureLabels.map((feature) => (
              <tr key={feature} className="border-b border-border/50">
                <td className="py-3 pr-4 text-sm text-secondary-foreground">
                  {feature}
                </td>
                {competitors.map((c) => {
                  const val = c.features[feature];
                  return (
                    <td key={c.name} className="text-center py-3 px-3">
                      {val === true ? (
                        <Check className="w-5 h-5 mx-auto text-green-500" />
                      ) : val === false ? (
                        <X className="w-5 h-5 mx-auto text-muted-foreground/40" />
                      ) : (
                        <span className="text-sm font-medium">{val}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr>
              <td className="py-4 pr-4" />
              {competitors.map((c) => (
                <td key={c.name} className="text-center py-4 px-3">
                  {c.name === "RewriteMate" ? (
                    <span className="inline-block rounded-full bg-gradient-to-tr from-sky-500/90 to-blue-500 px-5 py-1.5 text-sm font-medium text-white">
                      Try Free
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground">{c.features["Starts at"]}</span>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        * Comparison based on publicly available features as of 2026.
      </p>
    </section>
  );
}
