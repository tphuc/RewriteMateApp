import { cn } from "@/lib/utils"


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export default function PricingCard() {
  return (
    <div id='pricing'>
     
      <section className="w-full flex flex-col items-center gap-10 justify-center py-20 px-2 ">
      <h1 className="relative mx-auto max-w-2xl text-center py-[5%] text-4xl md:text-6xl font-bold tracking-tight leading-tight">
        Write With Confidence Everywhere
      </h1>
        <div className="w-full max-w-4xl rounded-4xl bg-gradient-to-b from-sky-500 to-blue-500 text-primary-foreground px-10 py-16 md:px-16 md:py-20 ">

          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight">
            Pricing & Plans
          </h2>

          <p className="mt-4 text-center text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Subscription or lifetime purchase. For you on all your devices.
          </p>

          <Tabs defaultValue="monthly" className="mt-10">

            {/* Segmented Control */}
            <div className="flex justify-center">
              <TabsList className="rounded-full bg-primary-foreground/20 backdrop-blur-md h-12 p-1">
                <TabsTrigger

                  value="monthly"
                  className="rounded-full px-6 py-3 text-background/90 hover:text-background data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  Monthly
                </TabsTrigger>

                <TabsTrigger
                  value="annual"
                  className="rounded-full px-6 py-3 text-background/90 hover:text-background data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  Annual
                </TabsTrigger>

                <TabsTrigger
                  value="byok"
                  className="rounded-full px-6 py-3 text-background/90 hover:text-background data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  BYOK
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Monthly */}
            <TabsContent value="monthly" className="mt-10 text-center">
              <div>
                <span className="text-5xl md:text-6xl font-semibold tracking-tight">
                  $7.99
                </span>
                <span className="text-xl md:text-2xl text-primary-foreground/80">
                  /month
                </span>
              </div>
            </TabsContent>

            {/* Annual */}
            <TabsContent value="annual" className="mt-10 text-center">
              <div>
                <span className="text-5xl md:text-6xl font-semibold tracking-tight">
                  $49.99
                </span>
                <span className="text-xl md:text-2xl text-primary-foreground/80">
                  /year
                </span>
              </div>
            </TabsContent>

            <TabsContent value="byok" className="mt-10 text-center">
              <div>
              <p className="text-xl md:text-2xl text-primary-foreground/80">
                 Available for macOS version only
                </p>
                <span className="text-5xl md:text-6xl font-semibold tracking-tight">
                  $29.99
                </span>
                <p className="text-xl md:text-2xl text-primary-foreground/80">
                  paid once
                </p>
              </div>
            </TabsContent>

          </Tabs>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Link href='#' className="w-full sm:w-auto px-10 py-3 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition">
             Download on AppStore
            </Link> */}

            <Link   href="https://apps.apple.com/app/rewritemate/id6755306532" className="w-full sm:w-auto px-10 py-3 rounded-full bg-primary-foreground/20 backdrop-blur-md text-primary-foreground font-medium hover:bg-primary-foreground/30 transition">
               Try for Free
            </Link>
          </div>

        </div>

        <p className="text-foreground/80 px-4">Prices are in USD excluding VAT and can vary across different countries and regions.</p>
      </section>
    </div>

  )
}