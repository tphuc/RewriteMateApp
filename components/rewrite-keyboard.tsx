import React from 'react';
import {  Briefcase, MessageCircle, RefreshCw, Mic, Grid2X2, History, Globe2, LucideGlobe, Bubbles, Scissors, Notebook } from 'lucide-react';
import { Input } from './ui/input';
import { Globe, Grid, MicroPhone, Translate, Pencil, PaperPlane } from './icons';


const Sparke = (props:  React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     
      viewBox='0 0 62 62'
      fill="inherit"
      {...props}
    >
      <path
        fill="inherit"
        d="M30.689 61.304c1.122 0 1.977-.782 2.148-1.953 2.612-21.631 5.298-24.366 26.49-26.538 1.171-.123 2.026-1.026 2.026-2.149 0-1.147-.855-2.05-2.027-2.148-21.191-2.198-23.877-4.908-26.49-26.538C32.667.78 31.813 0 30.69 0c-1.1 0-1.978.781-2.173 1.978-2.588 21.63-5.298 24.34-26.465 26.538-1.197.097-2.051 1-2.051 2.148 0 1.123.854 2.002 2.05 2.148 21.119 2.71 23.682 4.883 26.466 26.539.195 1.172 1.074 1.953 2.173 1.953Z"
      />
    </svg>
  )

 const Sparkles =  (props:  React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 59 78'
      fill="inherit"
      {...props}
    >
      <path
        fill="inherit"
        d="M27.173 15.185c.39 0 .586-.244.659-.61.854-5.005.781-5.42 6.348-6.347.366-.05.586-.269.586-.635s-.22-.61-.586-.66c-5.567-.927-5.494-1.342-6.348-6.347C27.759.22 27.564 0 27.172 0c-.39 0-.585.22-.658.586-.855 5.005-.782 5.42-6.348 6.348-.366.048-.586.293-.586.659 0 .366.22.586.586.635 5.566.927 5.493 1.342 6.348 6.347.073.366.268.61.659.61ZM11.816 36.695c.489 0 .855-.342.928-.83 1.172-8.447 1.367-8.374 10.059-10.034.464-.098.83-.415.83-.928 0-.512-.366-.854-.83-.927-8.692-1.319-8.911-1.49-10.059-10.01-.073-.513-.44-.855-.928-.855-.488 0-.854.342-.927.88C9.79 22.412 9.473 22.314.83 23.975c-.464.097-.83.415-.83.927 0 .537.366.83.928.928 8.593 1.44 8.862 1.563 9.96 9.985.074.537.44.88.928.88ZM33.18 71.704c.757 0 1.318-.513 1.416-1.294 2.148-17.749 4.443-20.093 21.9-21.924.805-.073 1.342-.634 1.342-1.391s-.537-1.343-1.343-1.416c-17.456-1.831-19.75-4.175-21.9-21.924-.097-.757-.658-1.294-1.415-1.294s-1.294.537-1.416 1.294c-2.149 17.749-4.444 20.093-21.9 21.924-.805.073-1.343.659-1.343 1.416 0 .757.538 1.318 1.343 1.391 17.407 2.246 19.605 4.2 21.9 21.924.122.781.659 1.294 1.416 1.294Z"
      />
    </svg>
  )

const tasks = [
    {
        name: 'Proofread text',
        icon: <Sparke className='w-3 h-3' />,
        className: 'border-pink-400 bg-gradient-to-b from-pink-400/90 to-pink-500/90'
    },
    {
        name: 'Change Tone to Professional',
        icon: <Briefcase className='w-4 h-4 text-foreground' />,
        className: 'border-blue-400 bg-gradient-to-b from-blue-400/90 to-blue-500/90'
    },
    {
        name: 'Change Tone to Casual',
        icon: <Bubbles className='w-3 h-3' />,
        className: 'border-emerald-400 bg-gradient-to-b from-emerald-400/90 to-emerald-500/90'
    },
    {
        name: 'Paraphrase Text',
        icon: <Sparkles className='w-4 h-4' />,
        className: 'border-violet-400 bg-gradient-to-b from-violet-400/90 to-violet-500/90'
    },
    {
        name: 'Shorten Text',
        icon: <Scissors className='w-3 h-3' />,
        className: 'border-amber-400 bg-gradient-to-b from-amber-400/90 to-amber-500/90'
    },
    {
        name: 'Expand Text',
        icon: <Sparke className='w-3 h-3' />,
        className: 'border-rose-400 bg-gradient-to-b from-rose-400/90 to-rose-500/90'
    },
    {
        name: 'Make It More Concise',
        icon: <Sparke className='w-3 h-3' />,
        className: 'border-indigo-400 bg-gradient-to-b from-indigo-400/90 to-indigo-500/90'
    },
    {
        name: 'Summarize Key Points',
        icon: <Notebook className='w-3 h-3' />,
        className: 'border-orange-400 bg-gradient-to-b from-orange-400/90 to-orange-500/90'
    }
]

export default function RewriteKeyboard() {
    return (
        <div className='relative w-full h-full flex flex-col px-0.5 py-1'>
            <div className='w-full py-2 flex items-center gap-1 px-2'>
                <Input type='search' placeholder='describe your changes...' className='rounded-full border-0 h-8 text-sm border-transparent focus-visible:border-none focus-visible:ring-none focus-visible:outline-none' />
                <div style={{background: 'oklch(0.7074 0.1825 257.82 / 39.42%)', border:'0.8px solid oklch(0.7074 0.1825 257.82 / 60%)'}} className='flex items-center justify-center p-2 rounded-md'>
                    <PaperPlane className='w-3.5 h-3.5' />
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
                                <span className="text-[0.8rem] select-none  px-1 font-medium">{task.name}</span>
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

