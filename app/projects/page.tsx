"use client";
import Link from "next/link";


export default function page() {
  return (
    <div className="bg-[#FFF7ED]">
        <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-4xl font-serif text-stone-900 leading-tight mt-6">Our Projects</h1>
            <div className="w-18 h-[2px] bg-[#DE0306]" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full py-4">
  {/* The "ALL" button */}
  <Link 
    href="/" 
    className="px-5 py-2 bg-white text-gray-700 border border-gray-200 font-medium text-sm rounded shadow-sm hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200"
  >
    ALL
  </Link>

  {/* The rest of the buttons will dynamically scale wider based on their text */}
  <Link 
    href="/" 
    className="px-5 py-2 bg-white text-gray-700 border border-gray-200 font-medium text-sm rounded shadow-sm hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200"
  >
    TILES WORK
  </Link>

  <Link 
    href="/" 
    className="px-5 py-2 bg-white text-gray-700 border border-gray-200 font-medium text-sm rounded shadow-sm hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200"
  >
    PVC & CEILING
  </Link>

  <Link 
    href="/" 
    className="px-5 py-2 bg-white text-gray-700 border border-gray-200 font-medium text-sm rounded shadow-sm hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200"
  >
    MARBLE WORKS
  </Link>

  <Link 
    href="/" 
    className="px-5 py-2 bg-white text-gray-700 border border-gray-200 font-medium text-sm rounded shadow-sm hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200"
  >
    BATHROOMS
  </Link>

   
</div>
    </div>
  )
}
