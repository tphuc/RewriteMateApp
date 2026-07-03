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
    icon: <BriefCase className="w-8 h-8 fill-background" />,
    title: "Professionals & Office Workers",
    description:
      "Write clear, professional emails and messages every time. Proofread, adjust tone, and shorten or expand text directly in Mail, Slack, and Notion — without leaving the app.",
  },
  {
    icon: <TextBubble className="w-8 h-8 fill-background" />,
    title: "Content Creators & Marketers",
    description:
      "Generate captions, social posts, and copy faster. Switch tones instantly, rephrase repetitive content, and create custom commands for your recurring formats.",
  },
  {
    icon: <BubbleLeftRight className="w-8 h-8 fill-background" />,
    title: "Non-Native English Speakers",
    description:
      "Write with confidence in English. Fix grammar, paraphrase sentences, simplify complex language, and translate to and from over 100 languages — all from the keyboard.",
  },
  {
    icon: <DeveloperCode className="w-8 h-8 fill-background" />,
    title: "Students",
    description:
      "Polish essays, reports, and applications. Proofread for mistakes, expand on rough ideas, paraphrase to avoid repetition, and simplify vocabulary with one tap.",
  },
  {
    icon: <PaintPallete className="w-8 h-8 fill-background" />,
    title: "Founders & Operators",
    description:
      "Make every high-stakes message land right. Refine tone, tighten wording, and keep your voice consistent across investor updates, strategy docs, and team announcements.",
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
    <div className="relative bg-background pt-[61px] min-h-screen scrollbar-hide">

      <main className="space-y-2 mx-auto pt-10 max-w-screen-lg overflow-hidden px-2">
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


        <section className="relative overflow-hidden pb-20 rounded-4xl grow-progress-2">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-4 mx-auto">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground ">
              Your keyboard, made for better writing
              </h1>
              <p className="text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                An AI writing assistant keyboard for iPhone and iOS to rewrite, rephrase, refine, translate, and improve text anywhere you type.
              </p>
              <Link
                href="https://apps.apple.com/app/rewritemate/id6755306532"
                className="inline-flex rounded-full hover:opacity-90 text-white items-center gap-2 whitespace-nowrap bg-gradient-to-tr from-sky-500/90 to-blue-500 px-8 py-3 text-center font-medium"
              >
                 Try for Free
              </Link>

                <span className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs text-secondary-foreground/60">
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">AI Keyboard</span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">Paraphrase</span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">Rewrite Text</span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">Proofread</span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">Translate</span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">Change Tone</span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">Grammar Check</span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">Custom Commands</span>
                </span>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src='/hero-ios.avif'
                alt="RewriteMate iOS keyboard extension"
                className="max-w-xs w-full rounded-xl"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>

        

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
 
          

        </div>

        <section className="text-background/90 grow-progress py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                AI Writing Assistant for Work, School & Everyday Life
              </h2>
              <p className="mt-4 opacity-80 text-xl leading-relaxed">
                Rewrite, proofread, paraphrase, and translate text directly inside any app — from emails and Slack to essays and social posts.
              </p>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="absolute z-0 mx-auto bottom-10 left-[15%] w-[50%] h-[300px] 
  bg-gradient-to-b from-sky-500/20 via-blue-500/20 to-sky-300/20 
  blur-3xl"
          />
            <img
            src='/hero2.webp'
            className="w-full z-10 max-w-xs md:max-w-sm mx-auto relative rounded-xl"
            style={{ objectFit: "contain", }}
          />
           <div className="flex-1 grid gap-y-12">
              {roles.map((role) => (
                <div key={role.title} className="group">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {role.icon}
                    </span>
                    <span className="text-xl md:text-2xl font-medium tracking-tight">
                      {role.title}
                    </span>
                  </div>

                  <p className="mt-4 opacity-80 text-md leading-relaxed max-w-xl">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
            </div>
           
          </div>
        </section>
      </div>


      <PricingCard />
      <UseCases />
      <Comparison />

      <FaqSection />
      {/* <LatestBlogPosts /> */}

      <Backlinks />
      <Footer2 />
    </div>
  );
}
