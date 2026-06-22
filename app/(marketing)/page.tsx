import { FaqSection } from "@/components/faq";
import { AppleLogoSvg, BriefCase, BubbleLeftRight, DeveloperCode, PaintPallete, Sparkles, TextBubble } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Features from "./features";
import IOSFeatures from "./ios-features";
import PricingCard from "./pricing";
import Footer2 from "./footer";
import Backlinks from "./backlinks";
import LatestBlogPosts from "./latest-blog-posts";
import HowItWorks from "./how-it-works";
import Comparison from "./comparison";
import UseCases from "./use-cases";

const roles = [
  {
    icon: <DeveloperCode className="w-8 h-8 fill-background" />,
    title: "Developers",
    description:
      "Clean up explanations without losing technical accuracy. Refine documentation and PR notes while keeping your original intent intact.",
  },
  {
    icon: <PaintPallete className="w-8 h-8 fill-background" />,
    title: "Designers",
    description:
      "Clarify your thinking without flattening your voice. Adjust tone and structure while staying true to how you communicate.",
  },
  {
    icon: <TextBubble className="w-8 h-8 fill-background" />,
    title: "Content & Marketing",
    description:
      "Polish what you’ve already written. Improve clarity, flow, and consistency without rewriting from scratch.",
  },
  {
    icon: <BubbleLeftRight className="w-8 h-8 fill-background" />,
    title: "Sales & Support",
    description:
      "Fine-tune replies before you send them. Soften tone, tighten wording, and keep your message clear under pressure.",
  },
  {
    icon: <BriefCase className="w-8 h-8 fill-background" />,
    title: "Founders & Operators",
    description:
      "Refine important messages before they go out. Keep your voice consistent across updates, strategy docs, and announcements.",
  },
]

const faqs = [
  {
    question: "What is RewriteMate?",
    answer:
      "RewriteMate is an AI writing assistant for macOS and iOS that helps you rewrite, refine, and improve text instantly. It works system-wide on Mac and as an iOS keyboard extension, so you can enhance your writing in any app without switching contexts.",
  },
  {
    question: "Are my text or data stored?",
    answer:
      "No — RewriteMate follows a non-data-retention policy. Your text is never stored, logged in our server. Requests are securely processed through trusted AI providers via our proxy, and we only store your email and rewrite usage to manage subscriptions.",
  },
  {
    question: "What is the BYOK plan?",
    answer:
      "BYOK (Bring Your Own Key) lets you connect your own API key from a supported AI provider. In this mode, your requests go directly from your Mac to the provider servers. No traffic or text passes through our infrastructure.",
  },
  {
    question: "Does RewriteMate work offline?",
    answer:
      "RewriteMate requires an internet connection to communicate with AI models. However, all processing is lightweight and fast, and no data is stored after your rewrite is complete.",
  },
  {
    question: "What are Custom Instructions?",
    answer:
      "Custom Instructions let you define how RewriteMate rewrites. You can create your own presets.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes! RewriteMate includes a free tier with limited rewrites each month. Upgrade to the Pro plan for higher limits and faster performance.",
  },
];

export const metadata: Metadata = {
  title: "AI Writing Assistant for macOS & iOS | RewriteMate",
  description:
    "RewriteMate is the better AI writing tool for macOS and iOS. Improve, rephrase, and refine text instantly across every app — Mail, Notes, Notion, Slack, and more. Free to try.",
  alternates: {
    canonical: "https://rewritemate.app",
  },
  openGraph: {
    title: "RewriteMate — AI Writing Assistant for macOS & iOS",
    description:
      "The better writing tool, built right into your workflow.",
  },
};

export default function Home() {
  return (
    <div className="relative bg-background min-h-screen scrollbar-hide">

      <main className="space-y-2 mx-auto max-w-screen-lg mt-30 md:mt-[5%] pb-[5%] px-3 rounded-4xl overflow-hidden">
        <Script
          type="application/ld+json"
          id="faq-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
        <Script
          type="application/ld+json"
          id="software-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "RewriteMate",
              operatingSystem: "iOS, macOS",
              applicationCategory: "ProductivityApplication",
              description:
                "AI writing assistant for iOS and macOS that helps you rewrite, refine, and improve text instantly.",
              offers: {
                "@type": "Offer",
                price: "5.99",
                priceCurrency: "USD",
              },
            }),
          }}
        />


        <div className="relative grow-progress-2 space-y-4">
          {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent w-full h-[30%]  z-10" /> */}

          <div className="relative  max-w-screen-lg px-4 mx-auto">
            <div className="relative z-10">
              <img
                src='/hero-macos.avif'
                alt="RewriteMate macOS app interface"
                className="w-full rounded-xl w-full"
                style={{ objectFit: "contain", }}
              />
              <img
                src='/hero-ios.avif'
                alt="RewriteMate iOS keyboard extension"
                className="absolute z-20 -bottom-[5%] right-[2%] md:right-[0%] scale-[0.96] rounded-xl w-[30%]"
                style={{ objectFit: "contain", }}
              />
            </div>

            <div className="absolute z-0 mx-auto bottom-10 left-[20%] w-[60%] h-[200px] 
  bg-gradient-to-br from-sky-600/80 via-sky-500/80 to-blue-400/80 
  blur-3xl"
            />
          </div>
          <div className="relative pb-5 space-y-4">

            <h1 className="relative mx-auto max-w-xl text-center text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Your Better <br /> AI Writing Assistant
              </span>
            </h1>
            <p className="text-center max-w-md mx-auto text-xl">
              Instantly improve, rephrase, and refine any text. The better writing tool, built for iOS and macOS.
            </p>
          </div>
        </div>

        <div className="z-20 gap-4 flex flex-col lg:flex-row px-4 items-center justify-center">

          <div className='flex items-center justify-center flex-1 gap-2'>
            <Link
              href="https://apps.apple.com/app/rewritemate/id6755306532"
              className="relative rounded-full hover:opacity-90 text-white flex overflow-hidden items-center shadow-xs flex-nowrap gap-2  whitespace-nowrap bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-2 text-center font-medium"
            >
               Try for Free
            </Link>
          </div>

        </div>
        {/* <div className="flex items-center justify-center">
          <a href="https://launchigniter.com/product/rewritemate-ai-keyboard?ref=badge-rewritemate-ai-keyboard" target="_blank">
            <img src="https://launchigniter.com/api/badge/rewritemate-ai-keyboard?theme=light" alt="Featured on LaunchIgniter" width="212" height="55" />
          </a>
        </div> */}



        {/* <div className="mt-[10%] mx-auto px-2 relative" style={{maxWidth:"min(500px, 98vw)", overflow:"hidden"}}>
            <div  className="relative border-1 rounded-3xl space-y-4 pb-[10%] mx-auto p-4 bg-background/80 backdrop-blur-sm">
              <MacTitle />
              <div className='absolute overflow-hidden top-0 left-0 w-full h-full rounded-3xl' style={{
                boxShadow: "inset 0px 0px 1px 0 rgba(200, 200, 200, 0.1), inset -0.5px -0.5px 0.5px 0.5px rgba(20, 20, 20, 0.2)"
              }} />
              <span className="bg-gradient-to-b  from-secondary/80 to-secondary">I want my emails to sound not too formal but still serious.</span>
              <div className="absolute top-[50%] right-[38%] text-muted-foreground"><MousePointer className="fill-muted-foreground/80" /></div>
            </div>

            <div className="-mt-[10%]  z-10 relative">
              <EditModal originalText="I want my emails to sound professional without feeling overly formal." />

            </div>


          </div> */}


      </main>

      <HowItWorks />

      <div className="bg-secondary relative w-full h-full">
        <IOSFeatures />
      </div>


      <div className="bg-[#111112] relative w-full">

        <div className="relative grow-progress max-w-screen-lg py-10 px-4 mx-auto">
          <img
            src='/hero-macos.avif'
            className="w-full z-10 relative rounded-xl w-full"
            style={{ objectFit: "contain", }}
          />
          <div className="absolute z-0 mx-auto bottom-10 left-[15%] w-[70%] h-[300px] 
  bg-gradient-to-b from-sky-500/50 via-blue-500/50 to-sky-300/50 
  blur-3xl"
          />

        </div>

        <section className="text-background/90 grow-progress py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                AI Writing Assistant for Every Professional
              </h2>
              <p className="mt-4 opacity-80 text-xl leading-relaxed">
                RewriteMate helps professionals communicate clearly across every workflow.
              </p>
            </div>

            <div className="grid gap-y-12 gap-x-16 md:grid-cols-2">
              {roles.map((role) => (
                <div key={role.title} className="group">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {role.icon}
                    </span>
                    <span className="text-2xl md:text-3xl font-medium tracking-tight">
                      {role.title}
                    </span>
                  </div>

                  <p className="mt-4 opacity-80 text-lg leading-relaxed max-w-md">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>


      <PricingCard />
      <UseCases />
      <Comparison />

      <FaqSection />
      <LatestBlogPosts />

      <Backlinks />
      <Footer2 />
    </div>
  );
}
