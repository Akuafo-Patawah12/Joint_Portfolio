'use client';

import { motion } from "framer-motion";
import {  Sun , Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation"; 
import logo from "../assets/logo.svg"


export default function Header() {
  const pathname = usePathname(); // For Next.js to detect current route

  const tabs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

   

    return(
        <header className={`z-23 sticky border-b-2 border-stone-200 top-0 py-6 px-[2.5%] bg-white text-gray-900  `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold italic"
        >
          
          <Link href="/" className="flex text-stone-500">
            <Image src={logo} alt="parcch logo" width={100} height={100} className="h-full"/>
          </Link>
        </motion.h2>
        
        <nav className="hidden lg:flex gap-2 p-1 rounded-full bg-stone-200">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "bg-white text-green-600 border-2 border-green-300 shadow-sm"
                  : "text-stone-600 hover:bg-white/60"
              }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>

         
        <section className="flex gap-2 items-center">
        <button  className="p-2 rounded-full bg-gray-200 ">
           <Sun size={20} /> 
        </button>
        <button className="lg:hidden" >  <Menu /></button>
        </section>
      </div>
    </header>
    )
}