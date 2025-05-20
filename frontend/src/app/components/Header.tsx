'use client';

import { motion } from "framer-motion";
import {  Sun , Menu } from "lucide-react";
import Link from "next/link";


export default function Header() {
  

   

    return(
        <header className={`z-23 sticky border-b-2 border-stone-200 top-0 py-6 px-[2.5%] bg-white text-gray-900  `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold italic"
        >
          <Link href="/" className="flex text-stone-500">Parcch</Link>
        </motion.h2>
        
        <nav className="hidden gap-6 lg:flex">
          
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            
          
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