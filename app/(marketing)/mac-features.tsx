import { Icloud, Shield, Sparkles } from "@/components/icons"
import { Plus } from "lucide-react"
import Image from "next/image"


export default function IOSFeatures() {
    return (

        <div className=" py-[10%] px-3 max-w-screen-lg mx-auto relative space-y-20 md:space-y-30">




            <div className="relative rounded-[40px]  grow-progress overflow-hidden bg-background pt-[10%] md:py-[5%] space-y-10">
                <div className=" relative space-y-2">
                    
                    <p className="relative text-secondary-foreground text-3xl md:text-4xl font-semibold text-center tracking-tight max-w-xl mx-auto ">
                        Create Custom Commands
                    </p>
                    <p className="text-xl md:text-2xl text-center max-w-md mx-auto text-muted-foreground font-medium tracking-tight">
                        Save your own writing rules to keep your tone and structure consistent.
                    </p>

                </div>

                <div className="flex items-center justify-center  gap-2 flex-wrap mx-auto max-w-sm md:max-w-lg">

                    <Image className="transition-transform -mb-20 ease-out duration-300 hover:scale-[1.01] hover:-translate-y-[10px]" src='/ios-commands.avif' style={{ width: "auto", height: 400 }} width={300} height={300} alt='custom commands' />

                </div>


            </div>

            <div className="rounded-[40px] grow-progress overflow-hidden bg-background p-[10%] md:py-[8%] space-y-10">
                <div className="space-y-2">
                    <p className="text-secondary-foreground text-3xl md:text-4xl font-semibold text-center max-w-xl mx-auto">
                        Works in your favorite apps
                    </p>
                    <p className="text-xl md:text-2xl text-center max-w-md mx-auto text-muted-foreground font-medium tracking-tight">
                        Edit and improve your text directly inside any app, without switching screens.
                    </p>

                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-10 max-w-sm mx-auto py-4">

                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/apple-mail.webp' style={{ width: 60, height: 60 }} width={300} height={300} alt='Mail' />
                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px] rounded-[10px] border shadow-xs overflow-hidden" src='/apple-notes.webp' style={{ width: 60, height: 60 }} width={300} height={300} alt='Notes' />
                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='/notion-logo.webp' style={{ width: 60, height: 60 }} width={300} height={300} alt='Notion' />
                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px]" src='https://storage.googleapis.com/tubememo-public/rewritemate/logo.webp' style={{ width: 60, height: 60 }} width={300} height={300} alt='RewriteMate' />

                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px] rounded-[12px]" src='/imessage.webp' style={{ width: 60, height: 60 }} width={300} height={300} alt='Messages' />
                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px] rounded-[12px]" src='/instagram.avif' style={{ width: 60, height: 60 }} width={300} height={300} alt='Instagram' />
                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px] rounded-[12px]" src='/threads.webp' style={{ width: 60, height: 60 }} width={300} height={300} alt='Threads' />
                    <Image className="transition-transform ease-out duration-300 hover:scale-[1.1] hover:-translate-y-[10px] rounded-[12px]" src='/pages.avif' style={{ width: 60, height: 60 }} width={300} height={300} alt='Pages' />

                </div>

            </div>


            <div className="grid grid-cols-2 gap-10 ">

                <div className="grow-progress rounded-[40px] row-span-2 col-span-full md:col-span-1 overflow-hidden bg-background px-[10%] pb-[10%] md:pb-[8%] space-y-10">
                    <div className="">
                        <Image className="transition-transform ease-out duration-300 hover:scale-[1.02] hover:-translate-y-[10px] w-full" src='/text-selection.avif'  width={300} height={300} alt='Mail' />
                    </div>
                    <div className="space-y-2">
                        <p className="text-secondary-foreground text-3xl md:text-4xl font-semibold text-center  max-w-xl mx-auto">
                            Smart text selection

                        </p>
                        <p className="text-lg md:text-xl text-center max-w-md mx-auto text-muted-foreground font-medium tracking-tight">
                            Choose to transform text from the current app or use copied text from your clipboard.
                        </p>
                    </div>
                </div>

                <div className="grow-progress rounded-[40px] col-span-full md:col-span-1 overflow-hidden bg-background px-[10%] pt-[10%] md:pt-[5%] space-y-4">
                   
                    <div className="space-y-0">
                        <p className="text-secondary-foreground text-2xl md:text-3xl font-semibold text-center tracking-tight max-w-xl mx-auto">
                        Sync across devices
                        </p>
                        <p className="text-md md:text-lg text-center max-w-md mx-auto text-muted-foreground font-medium tracking-tight">
                        Access your saved commands and preferences seamlessly.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Icloud className="w-24 h-24 fill-sky-500"/>
                    </div>
                </div>

                <div className="grow-progress rounded-[40px] col-span-full md:col-span-1 overflow-hidden bg-background px-[10%] pt-[10%] md:pt-[5%] space-y-4">
                   
                   <div className="space-y-0">
                       <p className="text-secondary-foreground text-2xl md:text-3xl font-semibold text-center tracking-tight max-w-xl mx-auto">
                       Privacy by design
                       </p>
                       <p className="text-md md:text-lg text-center max-w-md mx-auto text-muted-foreground font-medium tracking-tight">
                       Your text is processed only when you choose to rewrite. Zero data collection.
                       </p>
                   </div>
                   <div className="flex items-center justify-center">
                       <Shield className="w-24 h-24 fill-teal-500"/>
                   </div>
               </div>




            </div>




        </div>
    )
}