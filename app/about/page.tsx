"use client";

export default function AboutUs() {
  return(
    <div className="relative min-h-screen w-full">
      
      {/* 1. FIXED BACKGROUND IMAGE LAYER */}
      {/* This layer stays perfectly frozen in the background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: "url('/images/img 2 for work.jpg')" }}
      />
      
      {/* 2. FIXED DARK OVERLAY (Optional but keeps text readable) */}
      <div className="fixed inset-0 z-0 bg-black/40" />

      {/* 3. SCROLLABLE CONTENT LAYER */}
      {/* Because this layer has z-10, it scrolls seamlessly over the fixed image */}
      <div className="relative z-10 w-full">
        
        {/* Hero Section */}
<section className="relative w-full min-h-screen flex items-start justify-end pr-6 pl-6 md:pr-12 md:pl-0 pt-14 pb-16 overflow-hidden">
  
  {/* THE RIGHT-TO-LEFT GRADIENT OVERLAY ONLY */}
  {/* This creates the fade mask directly over your globally fixed background image */}
  <div className="absolute inset-y-0 right-0 w-full md:w-[65%] bg-gradient-to-l from-white via-white/95 to-transparent z-0 pointer-events-none" />

  {/* THE TEXT CONTENT BOX */}
  <div className="relative z-10 max-w-2xl w-full text-left ">
    
    {/* Subheading */}
    <span className="text-xs font-bold tracking-widest text-[#DE0306] uppercase block mb-4">
      ABOUT ARAVALI MARBLES
    </span>
    
    {/* Main Headings */}
    <div className="">
      <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
        We Design Beautiful
      </h2>
      <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
        Spaces That Inspire
      </h2>
    </div>
    
    {/* Description Text */}
    <div className="mt-6 text-stone-600 text-sm md:text-base leading-relaxed max-w-xl">
      <p>
        At Aravali Marbles, we believe every space has the potential to be extraordinary. 
        With a perfect blend of creativity, craftsmanship, and quality materials, we deliver 
        interiors that reflect your style and elevate your lifestyle.
      </p>
    </div>
    {/* {GRID FOR CROUSOL} */}
    <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 w-full divide-stone-200/80 divide-y lg:divide-y-0 lg:divide-x border-y lg:border-y-0 border-stone-200/80 py-6 lg:py-0">
      
      {/* Feature 1 */}
      <div className="flex flex-col items-center justify-center text-center p-4 lg:p-6 gap-3">
        {/* Gold Accent Icon Wrapper */}
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          Premium Quality Materials
        </span>
      </div>
      
      {/* Feature 2 */}
      <div className="flex flex-col items-center justify-center text-center p-4 lg:p-6 gap-3">
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        </div>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          Expert Craftsmanship
        </span>
      </div>
      
      {/* Feature 3 */}
      <div className="flex flex-col items-center justify-center text-center p-4 lg:p-6 gap-3">
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </div>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          Custom Design Solutions
        </span>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4 lg:p-6 gap-3">
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          On-Time Project Delivery
        </span>
      </div>
      
    </div>
  </div>
</section>
<div className="grid grid-cols-2 lg:grid-cols-4 w-full divide-stone-200/80 divide-y lg:divide-y-0 lg:divide-x border-y lg:border-y-0 border-stone-200/80 py-6 px-22 lg:py-0 bg-[#FFF7ED]">
      
      {/* Feature 1 */}
      <div className="flex items-center justify-center text-center p-4 lg:p-6 gap-3">
        {/* Gold Accent Icon Wrapper */}
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#DE0306] font-serif text-xs md:text-4xl font-medium max-w-[140px] leading-snug">500+</h1>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          Projects Completed
        </span>
        </div>
      </div>
      
      {/* Feature 2 */}
      <div className="flex  items-center justify-center text-center p-4 lg:p-6 gap-3">
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#DE0306] font-serif text-xs md:text-4xl font-medium max-w-[140px] leading-snug">300+</h1>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          Happy Clients
        </span>
        </div>
      </div>
      
      {/* Feature 3 */}
      <div className="flex items-center justify-center text-center p-4 lg:p-6 gap-3">
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#DE0306] font-serif text-xs md:text-4xl font-medium max-w-[140px] leading-snug">10+</h1>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          Years Experience
        </span>
        </div>
      </div>
      <div className="flex items-center justify-center text-center p-4 lg:p-6 gap-3">
        <div className="text-[#C5A880]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#DE0306] font-serif text-xs md:text-4xl font-medium max-w-[140px] leading-snug">50+</h1>
        <span className="text-stone-700 font-serif text-xs md:text-sm font-medium max-w-[140px] leading-snug">
          Expert Professionals
        </span>
        </div>
      </div>
      
    </div>
        {/* Second Section (Will scroll over the image) */}
        <section className="min-h-screen bg-[#FFF7ED] text-gray-500 p-8 flex  justify-center items-center">
<div className="grid grid-cols-3 gap-6">
  
  {/* 2. Your row items will now stretch equally across that height */}
  <div className="bg-stone-50 p-4 rounded-lg">Row 1</div>
  <div className="bg-stone-50 p-4 rounded-lg">Row 2</div>
  <div className="bg-stone-50 p-4 rounded-lg">Row 3</div>

</div>
        </section>
        
      </div>
    </div>
  )
}
