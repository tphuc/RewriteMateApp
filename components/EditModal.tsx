'use client';

import React, { useState } from 'react';
import { ChevronLeft, UTurnLeft, UTurnRight } from './icons';
import { ChevronsUpDown, Copy, Settings } from 'lucide-react';
import AIInput from './ui/ai-input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface EditModalProps {
  originalText: string;
}

const EditModal: React.FC<EditModalProps> = ({ originalText }) => {



  return (
    <div className='p-4'>
      {/* <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />

          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="0.3"
            specularExponent="100"
            lightingColor="#404040"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg> */}
      <div style={{
        // filter: `url(#glass-distortion)`
      }} className="relative border backdrop-blur-[2px]  bg-neutral-500/10 z-50 rounded-3xl max-w-lg mx-auto"    >

        <div className='absolute w-full h-full rounded-3xl blur-[1px]' style={{
          boxShadow: "inset 1px 1px 1px 0 rgba(200, 200, 200, 0.1), inset -1px -1px 1px 1px rgba(200, 200, 200, 0.1)"
        }} />


        {/* Header */}
        <div className='z-10'>
          <div className="p-2 border-b">
            <div className="flex items-center rounded-lg p-2">



              <AIInput />

            </div>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 ">
            <textarea
              readOnly
              value={originalText}
              className="w-full h-full min-h-[140px]  text-foreground text-base resize-none outline-none font-sans"
              rows={4}
              placeholder="Enter your edited text here..."
            />
          </div>

          {/* Footer */}
          <div className="p-2 border-t relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-400 text-lg transition duration-200 hover:bg-neutral-500/30 hover:text-white rounded"
                >
                  <ChevronLeft className='w-4 h-4' />
                </button>
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-400 text-lg transition duration-200 hover:bg-neutral-500/30 hover:text-white rounded"
                >
                  <UTurnLeft className='w-4 h-4' />
                </button>
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-400 text-lg transition duration-200 hover:bg-neutral-500/30 hover:text-white rounded"
                >
                  <UTurnRight className='w-4 h-4' />
                </button>

                <button
                  type="button"
                  className="p-2 rounded-md text-gray-400 text-lg transition duration-200 hover:bg-neutral-500/30 hover:text-white rounded"
                >
                  <Copy className='w-4 h-4' />
                </button>

                <div

                  className="bg-neutral-500/20 ml-1 transition duration-200 hover:bg-neutral-500/30 cursor-pointer px-3 py-1 text-sm rounded-full text-base"
                // onClick={handleApply}
                >
                  Apply
                </div>

              </div>

              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <div
                      className="relative gap-2 cursor-pointer transition duration-200 text-gray-400 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:border-gray-500 hover:text-white"

                    >
                      <div>
                        <p className='text-xs line-clamp-1'>Continue from Original</p>
                        <p className='text-xs font-semibold  line-clamp-1'>12 words</p>
                      </div>
                      <div>
                        <ChevronsUpDown className='size-4' />
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className='p-0 divide-y divide-y-border bg-secondary/50 backdrop-blur-[1px] rounded-2xl max-w-[200px]'>
                   
                      <div
                        className="gap-2 py-2 w-full flex cursor-pointer transition duration-200 text-gray-400 px-3 py-1 text-sm flex items-center gap-1 hover:border-gray-500 hover:text-white"

                      >
                        <div className='flex-1'>
                          <p className='text-xs'>Continue from Original</p>
                          <p className='text-xs font-semibold'>12 words</p>
                        </div>
                       
                      </div>

                      <div
                        className="gap-2 py-2 w-full flex cursor-pointer transition duration-200 text-gray-400 px-3 py-1 text-sm flex items-center gap-1 hover:border-gray-500 hover:text-white"

                      >
                        <div className='flex-1'>
                          <p className='text-xs'>Continue from Result</p>
                          <p className='text-xs font-semibold'>11 words</p>
                        </div>
                       
                      </div>
           
                  </PopoverContent>

                </Popover>

                <button className='text-muted-foreground p-2'>
                  <Settings className='w-4 h-4'/>
                </button>


              </div>
            </div>


            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base hover:text-white"
            >

            </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default EditModal;