import React from 'react';
import {  Briefcase, MessageCircle, RefreshCw, Mic, Grid2X2, History, Globe2, LucideGlobe } from 'lucide-react';
import { Input } from './ui/input';
import { Globe, Grid, MicroPhone, Sparkles, Translate, Pencil, PaperPlane } from './icons';


const tasks = [
    {
        name: 'Proofread text',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-pink-400 border bg-gradient-to-b from-pink-400/90 to-pink-500/90'
    },
    {
        name: 'Change Tone to Professional',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-blue-400 border bg-gradient-to-b from-blue-400/90 to-blue-500/90'
    },
    {
        name: 'Change Tone to Casual',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-emerald-400 border bg-gradient-to-b from-emerald-400/90 to-emerald-500/90'
    },
    {
        name: 'Paraphrase Text',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-violet-400 border bg-gradient-to-b from-violet-400/90 to-violet-500/90'
    },
    {
        name: 'Shorten Text',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-amber-400 border bg-gradient-to-b from-amber-400/90 to-amber-500/90'
    },
    {
        name: 'Expand Text',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-rose-400 border bg-gradient-to-b from-rose-400/90 to-rose-500/90'
    },
    {
        name: 'Make It More Concise',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-indigo-400 border bg-gradient-to-b from-indigo-400/90 to-indigo-500/90'
    },
    {
        name: 'Summarize Key Points',
        icon: <Sparkles className='w-3 h-3 fill-foreground' />,
        className: 'border-orange-400 border bg-gradient-to-b from-orange-400/90 to-orange-500/90'
    }
]

export default function RewriteKeyboard() {
    return (
        <div className='relative w-full h-full flex flex-col px-0.5'>
            <div className='w-full py-2 flex items-center gap-1 px-2'>
                <Input type='search' placeholder='describe your changes...' className='rounded-full border-0 h-8 text-sm' />
                <div style={{background: 'oklch(0.7074 0.1825 257.82 / 39.42%)', border:'0.8px solid oklch(0.7074 0.1825 257.82 / 60%)'}} className='flex items-center justify-center p-2 rounded-md'>
                    <PaperPlane className='w-3.5 h-3.5 fill-foreground' />
                </div>
            </div>
            <div className='relative border-t-[0.5px]'>
                <div className="w-full overflow-x-auto no-scrollbar scrollbar-hide">
                    <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-1 p-2">
                        {tasks.map((task) => (
                            <div
                                key={task.name}
                                className={`flex max-w-[160px] cursor-pointer gap-0 px-1 py-1 min-h-[50px] rounded-[13px] overflow-hidden text-white shrink-0 ${task.className}`}
                            >
                                <div className='p-1'>
                                {task.icon}
                                </div>
                                <span className="text-[0.8rem] select-none tracking-tight px-1 font-medium">{task.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3 px-2 py-2 border-t-[0.5px]'>
                <Grid className='w-4 h-4 text-blue-500/90'/>
                <Translate className='w-4 h-4 text-muted-foreground'/>
                <History className='w-4 h-4 text-muted-foreground'/>
            </div>
            <div  className='flex items-center justify-between mt-3 gap-3 px-3 py-2'>
                <Globe className='w-6 h-6' />
                <MicroPhone className='w-6 h-6'/>
            </div>
        </div>
    );
}

