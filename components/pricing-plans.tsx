import { Metadata } from "next"
import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

function PriceText({ priceFormatted }: { priceFormatted: string }) {
    const [whole, fraction] = priceFormatted.replace("$", "").split(".")
  
    return (
      <span className="text-2xl font-bold">
        $
        {whole}
        .
        {fraction && (
          <span  className="text-xl relative align-top tracking-tighter text-foreground/90 font-semibold relative pl-0.5">{fraction}</span>
        )}
      </span>
    )
  }

// Server Component – SEO-friendly with direct data fetch
export default async function PricingPlansPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined")
    }

    const res = await fetch(`${apiUrl}/plans`, {
        next: { revalidate: 600 }, // Revalidate every hour for fresh pricing
    })

    if (!res.ok) {
        return (
            <section className="py-20 text-center">
                <h2 className="text-2xl font-semibold">Pricing</h2>
                <p className="mt-4 text-muted-foreground">
                    Unable to load plans at the moment. Please try again later.
                </p>
            </section>
        )
    }

    const plans = await res.json()

  

    return (
        <section className="py-20 pt-40">
            <div className="container max-w-xl mx-auto px-6 ">
                <h1 className="text-4xl md:text-5xl tracking-tight text-center font-bold">Plans & Pricing</h1>
                <p className="text-center text-xl text-muted-foreground">Choose the plan that works best for you.</p>
                <br/>
                <div className=" gap-8 max-w-5xl cursor-default mx-auto space-y-4">
                    {plans?.map?.((plan: any) => (
                        <div
                            key={plan.id}
                            style={{
                                overflow:"hidden",
                                boxShadow: "inset 0.5px 0.5px 0px 0.5px rgba(200, 200, 200, 0.1), inset -0.5px -0.5px 0px 0.5px rgba(200, 200, 200, 0.1)",
                            }}
                            className="relative overflow-hidden z-10 bg-secondary/20 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-200"
                        >

                            <div className="absolute w-full overflow-hidden rounded-3xl h-full opacity-[38%] top-0 left-0" style={{
                                zIndex: -1,
                                overflow:"hidden",
                                background: plan?.planFeature?.planData?.name?.toLowerCase() === 'pro' ? "radial-gradient(circle at top left, #7572FF 0%, #24a6d4 45%, #B657FF 70%, #BA7ED9 85%, #C88A7E 100%)" : undefined,
                            }} />
                            <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold mb-2">
                                {plan?.planFeature?.planData?.name}
                            </h2>
                            <p className="text-2xl font-semibold tracking-tight mb-2">
                               <PriceText priceFormatted={plan.priceFormatted} />
                                {plan?.planFeature?.planData?.name?.toLowerCase() !== 'byok' && <span className="text-base font-medium text-foreground/90">
                                    /{plan.interval}
                                </span>}
                            </p>
                            </div>

                            <ul className="mb-6 space-y-1 text-sm">
                                {plan?.planFeature?.planData?.descriptions.map(
                                    (feature: string, i: number) => (
                                        <li className="flex items-center gap-1" key={i}><Check className="w-4 h-4"/> <span>{feature}</span></li>
                                    )
                                )}
                            </ul>

                            {/* <Link
                                href={plan.checkoutUrl}
                            >
                                <Button className="rounded-[10px] text-lg cursor-pointer">
                                    Get Started
                                </Button>
                            </Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}