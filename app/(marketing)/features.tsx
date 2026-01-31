import EditModal from "@/components/EditModal";
import { MacTitle } from "@/components/MacTitle";
import RewriteKeyboard from "@/components/rewrite-keyboard";
import { MousePointer } from "lucide-react";
import Image from "next/image";

export default function Features() {
    return (
        <>
            <section className="px-4 space-y-16 py-12 md:py-20">

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-screen-xl px-4 mx-auto">
                    {/* {features.map((feature, index) => {
            // Big first feature
            return <div
              key={feature.name}
              className={`relative rounded-[40px] bg-secondary/80 ${feature.className}`}
            >
              {feature.illustration && <div className={cn("", feature?.illustrationClassName)}>{feature.illustration}</div>}
              <div className={cn("p-6", feature?.contentClassName)}>
                <div className="flex items-center gap-2">
                  <feature.icon className="h-7 w-7 text-primary" />
                  <h3 className="font-semibold text-xl tracking-tight">{feature.name}</h3>
                </div>
                <p className="mt-2 text-muted-foreground/90">
                  {feature.description}
                </p>
              </div> 
            </div>
          })} */}


                </div>

            </section>
            <div className="grid grid-cols-12 max-w-screen-xl mx-auto gap-4 px-4">

                <div className="col-span-full md:col-span-5 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 pt-8">
                        <p className="text-3xl text-secondary-foreground font-semibold tracking-tight">
                            Works Everywhere
                        </p>
                        <p className="text-muted-foreground">
                            Rewrite anywhere you write—from Notes and Mail to Notion, Docs, or Slack. No switching apps. No broken flow.
                        </p>
                    </div>

                    <div className="relative w-[98%] ml-[1%] px-8 pb-8">
                        {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary to transparent w-full h-[50%] z-10" />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-secondary to transparent w-full h-[30%] z-10" /> */}

                        <div className="relative  mx-auto max-w-2xl">
                            <div className="bg-secondary p-2 rounded-3xl inline-flex items-center justify-center gap-4 border">
                                <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/apple-mail.webp' style={{ width: 46, height: 46 }} width={300} height={300} alt='Mail' />
                                <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/apple-notes.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='Notes' />
                                <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/notion-logo.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='Notion' />
                                <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='https://storage.googleapis.com/tubememo-public/rewritemate/logo.webp' style={{ width: 50, height: 50 }} width={300} height={300} alt='RewriteMate' />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-full md:col-span-7 row-span-2  relative flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 pt-8 md:w-[72%] absolute top-0 left-0 z-20">
                        <p className="text-3xl whitespace-nowrap text-secondary-foreground font-semibold tracking-tight">
                            Shortcut-First Editing
                        </p>
                        <p className="text-muted-foreground">
                            RewriteMate improves text directly where it lives. No popups, no side panels, no extra steps.
                        </p>
                    </div>

                    <div className="relative w-auto p-4">
                        <div className="mt-[10%] mx-auto px-2 relative" style={{ maxWidth: "min(500px, 98vw)", overflow: "hidden" }}>
                            <div className="relative border-1 rounded-3xl space-y-4 pb-[10%] mx-auto p-4 bg-background/80 backdrop-blur-sm">
                                <MacTitle />
                                <div className='absolute overflow-hidden top-0 left-0 w-full h-full rounded-3xl' style={{
                                    boxShadow: "inset 0px 0px 1px 0 rgba(200, 200, 200, 0.1), inset -0.5px -0.5px 0.5px 0.5px rgba(20, 20, 20, 0.2)"
                                }} />
                                <span className="bg-gradient-to-b  from-secondary/80 to-secondary">I want my emails to sound not too formal but still serious.</span>
                                <div className="absolute top-[50%] right-[38%] text-muted-foreground"><MousePointer className="fill-muted-foreground/80" /></div>
                            </div>

                            <div className="-mt-[5%]  z-10 relative">
                            <img
                                src="/showcase-ios-1.webp"
                                height={400}
                                className="h-full rounded-xl"
                                style={{ objectFit: "contain" }}
                            />

                            </div>


                        </div>
                    </div>
                </div>

                <div className="col-span-full md:col-span-4 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 pt-8">
                        <p className="text-3xl text-secondary-foreground font-semibold tracking-tight">
                            Mindmaps
                        </p>
                        <p className="text-muted-foreground">
                            Visualize complex ideas from videos as interactive mind maps. See connections, spot themes, and grasp the big picture at a glance.
                        </p>
                    </div>

                    <div className="relative w-full px-2" >
                        {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary to transparent w-full h-[50%] z-10" /> */}
                        {/* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-secondary to transparent w-full h-[30%] z-10" /> */}
                        <div className="relative inline-block shadow-xl overflow-hidden border rounded-2xl w-auto">
                            <img
                                src="/hero-mindmap.webp"
                                className="w-full rounded-xl"
                                style={{ objectFit: "cover", scale: 1.2 }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-full md:col-span-4 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 pt-8">
                        <p className="text-3xl text-secondary-foreground font-semibold tracking-tight">
                            Flashcards
                        </p>
                        <p className="text-muted-foreground">
                            Turn key points into flashcards automatically. Review them with spaced repetition to remember more, faster.
                        </p>
                    </div>

                    <div className="relative w-full px-2 flex items-center justify-center">
                        {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary to transparent w-full h-[50%] z-10" /> */}
                        {/* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-secondary to transparent w-full h-[30%] z-10" /> */}
                        <div className="relative inline-block overflow-hidden rounded-xl h-[400px] w-auto">
                            <img
                                src="/hero-qa.png"
                                height={400}
                                className="h-full rounded-xl"
                                style={{ objectFit: "contain", scale: 1.05 }}
                            />
                        </div>
                    </div>
                </div>


                <div className="col-span-full md:col-span-4 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 pt-8">
                        <p className="text-3xl text-secondary-foreground font-semibold tracking-tight">
                            Multi-Language Support
                        </p>
                        <p className="text-muted-foreground">
                            TubeMemo works across languages, so you can learn, create, and capture insights from videos worldwide
                        </p>
                    </div>

                    <div className="relative w-full px-2 flex items-center justify-center" style={{ scale: 1.1 }}>
                        <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary to transparent w-full h-[50%] z-10" />
                        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-secondary to transparent w-full h-[30%] z-10" />
                        <div className="relative inline-block border-2 shadow-xl overflow-hidden rounded-xl h-full w-auto" style={{ transform: "" }}>
                            <img
                                src="/hero-multi-lang.webp"
                                height={400}
                                className="h-full rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-full md:col-span-6 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 pt-8">
                        <p className="text-3xl text-secondary-foreground font-semibold tracking-tight">
                            Draft Content
                        </p>
                        <p className="text-muted-foreground">
                            Turn insights into blogs, tweets, or study notes — directly from your videos.
                        </p>
                    </div>

                    <div className="relative w-full ml-[10%] px-2 flex items-center justify-center" style={{ scale: 1.1 }}>
                        {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary to transparent w-full h-[50%] z-10" /> */}
                        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-secondary to transparent w-full h-[30%] z-10" />
                        <div className="relative inline-block border-[1px] shadow-xl overflow-hidden rounded-xl w-full max-h-[500px] w-auto" style={{ transform: "translateY(50px)" }}>
                            <img
                                src="/hero-draft.webp"
                                height={400}
                                className="w-full rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-full md:col-span-6 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 pt-8">
                        <p className="text-3xl text-secondary-foreground font-semibold tracking-tight">
                            Smart Library
                        </p>
                        <p className="text-muted-foreground">
                            Keep all your memos, highlights, and summaries organized in one searchable hub.
                        </p>
                    </div>

                    <div className="relative w-full ml-[5%] px-2 flex items-center justify-center" style={{ scale: 1 }}>
                        {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary to transparent w-full h-[50%] z-10" /> */}
                        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-secondary to transparent w-full h-[30%] z-10" />
                        <div className="relative inline-block border-[1px] border-boder shadow-xl overflow-hidden rounded-xl w-full max-h-[500px] w-auto" style={{ transform: "translateY(50px)" }}>
                            <img
                                src="/hero-library.webp"
                                height={400}
                                className="w-full rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}