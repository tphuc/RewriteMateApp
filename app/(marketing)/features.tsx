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
            <div className="grid grid-cols-12 max-w-screen-lg mx-auto gap-4 ">

                <div className="col-span-full md:col-span-6 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="pt-8 px-8">
                        <p className="text-2xl text-secondary-foreground font-semibold tracking-tight">
                            Works Everywhere
                        </p>
                        <p className="text-muted-foreground">
                            Rewrite anywhere you write—from Notes and Mail to Notion, Docs, or Slack. No switching apps. No broken flow.
                        </p>
                    </div>

                    <div className="relative w-[98%] ml-[1%] px-8 pb-8">


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

                <div className="col-span-full md:col-span-6 row-span-2 relative flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">
                    <div className="px-8 py-8 w-full h-[40%] md:h-auto absolute top-0 left-0 z-20 bg-gradient-to-b from-secondary via-secondary to-transparent">
                        <p className="text-2xl whitespace-nowrap text-secondary-foreground font-semibold tracking-tight">
                            Custom Rewrite Tasks
                        </p>
                        <p className="text-muted-foreground  tracking-tight">
                            Create and save your own rewrite instructions. Reuse them anytime to keep your tone and structure consistent.
                        </p>

                    </div>

                    <div className="flex-1 flex flex-col justify-end items-end" >

                        <div className="relative z-0 md:mt-[30%] mx-auto px-2 relative" style={{ maxWidth: "min(500px, 98vw)", minHeight: 300, overflow: "hidden" }}>

                            <img
                                src="/showcase-ios-2.webp"
                                className="w-full  rounded-xl"
                                style={{ objectFit: "contain" }}
                            />

                        </div>
                    </div>
                </div>

                <div className="relative col-span-full md:col-span-6 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">



                    <div className="relative min-h-[300px]  -mt-[30%] md:-mt-[40%]  inline-block w-auto">

                        <img
                            src="/showcase-ios-3.webp"
                            className="w-full rounded-xl"
                            style={{ objectFit: "contain" }}
                        />
                    </div>


                    <div className="absolute bottom-0 pb-4 pt-20 left-0 w-full z-10 px-8  bg-gradient-to-t from-secondary via-secondary to-transparent">
                        <p className="text-2xl text-secondary-foreground font-semibold tracking-tight">
                            Transparent Edits
                        </p>
                        <p className="text-muted-foreground">
                            Visualize complex ideas from videos as interactive mind maps. See connections, spot themes, and grasp the big picture at a glance.
                        </p>
                    </div>
                </div>

                <div className="col-span-full md:col-span-4 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">

                <div className="dark:hidden absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary to-transparent w-full h-[10%] z-10" />
                        <div className="relative min-h-[300px]  -mt-[20%] md:-mt-[30%]  inline-block w-auto">

                            <img
                                src="/showcase-ios-4.webp"
                                className="w-full rounded-xl"
                                style={{ objectFit: "contain" }}
                            />
                    </div>
                    <div className="px-8 py-8">
                        <p className="text-2xl text-secondary-foreground font-semibold tracking-tight">
                            Privacy-First by Design
                        </p>
                        <p className="text-muted-foreground">
                            Only the text you select is processed. RewriteMate doesn’t read or monitor anything in the background.
                        </p>
                    </div>

                   
                </div>


                <div className="relative col-span-full md:col-span-4 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">

                    <div className="dark:hidden absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary to-transparent w-full h-[10%] z-10" />
                        <div className="relative min-h-[300px]  -mt-[20%] md:-mt-[30%]  inline-block w-auto">

                            <img
                                src="/showcase-ios-5.webp"
                                className="w-full rounded-xl"
                                style={{ objectFit: "contain" }}
                            />
                    </div>

                    <div className="px-8 py-8">
                        <p className="text-2xl text-secondary-foreground font-semibold tracking-tight">
                            Quick AI Assistance
                        </p>
                        <p className="text-muted-foreground">
                        Ask questions, explore ideas, or get help with wording directly from the keyboard, without leaving
        the app or breaking your flow.
                        </p>
                    </div>


                </div>

                <div className="relative col-span-full md:col-span-4 flex flex-col overflow-hidden w-full border rounded-3xl bg-secondary gap-2 justify-between max-w-screen-lg mx-auto">

                    <div className="dark:hidden absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary to-transparent w-full h-[10%] z-10" />
                        <div className="relative min-h-[300px]  -mt-[20%] md:-mt-[30%]  inline-block w-auto">

                            <img
                                src="/showcase-ios-6.webp"
                                className="w-full rounded-xl"
                                style={{ objectFit: "contain" }}
                            />
                    </div>

                    <div className="px-4 py-8">
                        <p className="text-2xl text-secondary-foreground font-semibold tracking-tight">
                        Write Across Languages

                        </p>
                        <p className="text-muted-foreground">
Translate your text directly from the keyboard, so you can write naturally and communicate clearly with people in other languages.
                        </p>
                    </div>


                </div>

             
            </div>


        </>
    );
}