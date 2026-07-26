"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function NavBar() {

const pathname = usePathname()
const [isOpen , setisOpen] = useState(false)

const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-orange-50 backdrop-blur-md border-b'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

            {/* { logo } */}
            <Link href='/' className=' flex gap-2'>
            <Image
            src="/logo/logo.jpeg" 
        alt="Logo" 
        width={50} 
        height={50} 
        className="cursor-pointer">
                </Image>
                <div className='flex flex-col leading-none'>
                    <span className='text-center text-2xl font-bold text-[#DE0306]'>ARAVALI</span>
                <span className=' text-[14px] font-light text-gray-500 text-center'>MARBLES</span>
                </div>
                </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-bold transition ${
                pathname === link.href
                  ? "text-[#DE0306] "
                  : "text-gray-500 hover:text-[#DE0306] transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#DE0306] after:transition-transform after:duration-350 hover:after:origin-bottom-left hover:after:scale-x-100"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5"></span>
              )}
            </Link>
          ))}

          <Link
            href="/get-a-quote"
            className="bg-[#DE0306] hover:bg-red-700 text-white font-semibold text-xs tracking-wider px-6 py-3 transition-colors uppercase"
          >
            GET A QUOTE
          </Link>
        </div>

        </div>
         
    </nav>
  )
}

