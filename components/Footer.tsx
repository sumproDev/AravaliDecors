"use client";

import Link from "next/link";
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe } from "lucide-react";


export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#1a1a1a] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 ">

       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 divide-y md:divide-y-0 md:divide-x divide-[#2d2d2d] ">
          {/* Column 1 - About */}
        <div>
          <div className="flex gap-2">
            <Image
                        src="/logo/logo.jpeg" 
                    alt="Logo" 
                    width={50} 
                    height={50} 
                    className="cursor-pointer">
                            </Image>
                            <div className='flex flex-col leading-none'>
                                <span className='text-center text-2xl font-bold text-[#E7A537]'>ARAVALI</span>
                            <span className=' text-[14px] font-light text-[#E7A537] text-center'>MARBLES</span>
                            </div>
          </div>
          <p className="text-sm leading-relaxed text-white mt-4">
            We specialize in premium wall & floor tiles, PVC works, marble finishing, and bathroom fittings - crafted to perfection.
          </p>

          
          <div className="flex items-center gap-6 text-gray-400 mt-6">
      
      {/* Facebook Link */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>

      {/* Instagram Link */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>

      {/* YouTube */}
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="15" x="2" y="4.5" rx="4" />
          <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" />
        </svg>
      </a>

      {/* Pinterest */}
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="8" y2="22" />
          <path d="M12 22c-1.5 0-3.5-3-3.5-5.5a3.5 3.5 0 0 1 7 0c0 2.5-2 5.5-3.5 5.5z" />
          <path d="M12 2a10 10 0 0 0-10 10c0 4.5 3 8 7 9.5" />
          <path d="M12 2a10 10 0 0 1 9.5 7.5c.5 2-.5 4.5-2 6" />
        </svg>
      </a>

    </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm text-white">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/compress-image" className="hover:text-blue-600 transition-colors">About us</Link></li>
            <li><Link href="/merge-pdf" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link href="/pdf-to-word" className="hover:text-blue-600 transition-colors">Projects</Link></li>
            <li><Link href="/pdf-to-word" className="hover:text-blue-600 transition-colors">Gallery</Link></li>
            <li><Link href="/pdf-to-word" className="hover:text-blue-600 transition-colors">Contact us</Link></li>
          </ul>
        </div>

        {/* Column 3 - Tools */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Our Services</h2>
          <ul className="space-y-2 text-sm text-white">
            <li><Link href="/remove-pages" className="hover:text-blue-600 transition-colors">Wall & Floor Tiles Work</Link></li>
            <li><Link href="/compress-pdf" className="hover:text-blue-600 transition-colors">PVC Panel & False Ceiling</Link></li>
            <li><Link href="/compress-pdf" className="hover:text-blue-600 transition-colors">Marble Works</Link></li>
            <li><Link href="/compress-pdf" className="hover:text-blue-600 transition-colors">Bathroom Cutting & Fitting</Link></li>
            
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Contact Us</h2>
          <div className="space-y-3 text-sm text-white">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" /> 123,Sector-63,Noida,Uttar Pradesh - 201301
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-blue-600" /> +91 0000000000
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" /> ankushctis22@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Globe size={16} className="text-blue-600" /> www.gmail.com
            </p>
          </div>

        </div>
       </div>
        <div className="mt-12 pt-6 border-t border-[#2d2d2d] flex justify-between">
      <p className="text-sm text-gray-400">
      © {new Date().getFullYear()} Aravali Marbles. All Rights Reserved.
      </p>
      <p className="text-sm text-gray-400 text-end">
      Privacy Policy | Terms & Conditions
      </p>
      
    </div>
      </div>

    </footer>
    
  )
}
