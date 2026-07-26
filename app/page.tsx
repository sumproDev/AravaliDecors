"use client";

import Image from "next/image";

import { useState, useEffect } from 'react';


export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      
      {/* 1. FIXED BACKGROUND IMAGE LAYER */}
      {/* This layer stays perfectly frozen in the background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 page-wrapper"
        style={{ backgroundImage: "url('/images/use for main page.jpg')" }}
      />
      
      {/* 2. FIXED DARK OVERLAY (Optional but keeps text readable) */}
      <div className="fixed inset-0 z-0 bg-black/40" />

      {/* 3. SCROLLABLE CONTENT LAYER */}
      {/* Because this layer has z-10, it scrolls seamlessly over the fixed image */}
      <div className="relative z-10 w-full">
        
        {/* Hero Section */}
<section className="min-h-screen px-6 md:px-24 flex flex-col justify-center items-start relative overflow-hidden">
  
  {/* 1. THE CULPRIT: The soft white gradient fading to transparent from left to right */}
  {/* This stays pinned to the left 60% of the viewport on desktop */}
  <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-white via-white/90 to-transparent z-0 pointer-events-none" />

  {/* 2. THE CONTENT BOX (Safe and readable over the gradient) */}
  <div className="relative z-10 max-w-2xl flex flex-col gap-6 text-stone-800">
    
    {/* Accent text line */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-[2px] bg-[#DE0306]" />
      <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">
        We Design, We Decorate, You Deserve The Best.
      </span>
    </div>
    
    {/* Typography matches screenshot hierarchy */}
    <div>
      <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
        Transforming Spaces
      </h1>
      <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight mt-1">
        Into <span className="text-[#DE0306]">Masterpieces</span>
      </h1>
    </div>
    
    <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-lg">
      From wall tiles to marble works and modern bathroom fittings — we bring style, quality, and perfection to every corner of your space.
    </p>

    {/* Buttons matching the screenshot layout */}
    <div className="flex gap-4 mt-2">
      <button className="bg-[#DE0306] hover:bg-red-700 text-white font-semibold text-xs tracking-wider px-6 py-3 transition-colors uppercase">
        Our Services
      </button>
      <button className="border border-stone-400 hover:border-stone-900 text-stone-800 font-semibold text-xs tracking-wider px-6 py-3 transition-colors uppercase">
        View Projects
      </button>
    </div>

  </div>

</section>

        {/* Second Section (Will scroll over the image) */}
        <section className="min-h-screen bg-[#FFF7ED] text-gray-500 p-8 flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-16 underline decoration-[#DE0306] underline-offset-12 decoration-4">What We Do</h2>
            <div className="flex gap-6">
              <div className="flex-1 bg-[#F9F9F6] hover:bg-[#F5EFEB] transition-all duration-300 p-8 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center">WALL & FLOOR TILES WORK</div>
              <div className="flex-1 bg-[#F9F9F6] hover:bg-[#F5EFEB] transition-all duration-300 p-8 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center">PVC PANEL & FALSE CEILING</div>
              <div className="flex-1 bg-[#F9F9F6] hover:bg-[#F5EFEB] transition-all duration-300 p-8 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center">MARBLE WORKS</div>
              <div className="flex-1 bg-[#F9F9F6] hover:bg-[#F5EFEB] transition-all duration-300 p-8 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center">BATHROOM CUTTING & FITTINGS</div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
