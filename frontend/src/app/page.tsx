"use client"
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { BadgeCheck } from 'lucide-react';


import { Mail, Phone,Server, MapPin,Cloud,Code,PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import useDarkMode from "./(components)/Theme";
import code_bg from "./assets/code_bg.svg"
import cursor from "./assets/cursor.svg"
import figma from "./assets/figma.svg"
import code from "./assets/code.svg"
import cloud from "./assets/cloud.svg"
import get_started from "./assets/get_started.svg"
import mobile_code from "./assets/mobile_code.svg"
import cloud_stars from "./assets/cloud_stars.svg"
import consult from "./assets/consult.svg"
import ecommerce from "./assets/ecommerce.svg"
import Linkicon from "./assets/Linkicon.svg"
import wavy from "./assets/wavy.svg"
import ui from "./assets/ui.svg"

export default function Home() {

  const { darkMode } = useDarkMode();
   useEffect(()=>{
     console.log("theme changed")
   },[darkMode])
  
  const text = "Parcch Tech Solutions.";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Adjust the delay between characters
    },
  },
};

const characterAnimation = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

  
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  
    const renderContent = () => {
      switch (activeTab) {
        case "tab1":
          return  <div className="relative  px-6 py-12 w-full  border-2 border-white backdrop-blur-2xl mx-auto flex flex-col gap-6 items-center text-center bg-white/80 shadow-xl rounded-3xl">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-green-700 tracking-tight">
        About Us
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
        <span className="font-semibold text-green-600">Parcch</span> is a forward-thinking technology startup dedicated to building cutting-edge digital solutions. We specialize in web development, mobile applications, and API integrations that empower businesses in an ever-evolving digital landscape.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
        Our team thrives on <span className="text-green-600 font-medium">innovation</span>, <span className="text-green-600 font-medium">creativity</span>, and a passion for solving complex problems through technology.
      </p>

      {/* Button */}
      <Link href="/about" passHref>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white font-medium italic rounded-lg w-[140px] h-[40px] transition-all duration-200"
        >
          See more...
        </button>
      </Link>
    </div>;
        case "tab2":
          return <div className="relative  px-6 py-12 w-full  mx-auto flex flex-col gap-6 items-center  bg-white/80 border-2 border-white backdrop-blur-2xl shadow-xl rounded-3xl">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-green-700 tracking-tight text-center">
        Our Mission
      </h2>

      {/* Mission Text */}
      <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-4xl">
        We harness technology to deliver <span className="text-green-600 font-medium">innovative</span>, <span className="text-green-600 font-medium">efficient</span>, and <span className="text-green-600 font-medium">user-friendly</span> solutions — empowering businesses with custom apps and seamless digital experiences that fuel growth.
      </p>


      <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-4xl">
        We use cutting-edge tech to streamline workflows, boost engagement, and build scalable solutions tailored to each client. Our focus on <span className="text-green-600 font-medium">quality</span>, <span className="text-green-600 font-medium">creativity</span>, and <span className="text-green-600 font-medium">growth</span> keeps us ahead—helping businesses adapt and succeed.
      </p>


      {/* Button */}
      <Link href="/about" passHref>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white font-medium italic rounded-lg w-[140px] h-[40px] transition-all duration-200"
        >
          See more...
        </button>
      </Link>
    </div>;
        case "tab3":
          return <div className="relative px-6 py-12 w-full  mx-auto flex flex-col gap-6 items-center  bg-white/80 border-2 border-white/80 backdrop-blur-2xl shadow-xl rounded-3xl">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-green-700 tracking-tight text-center">
        Our Vision
      </h2>

      {/* Vision Text */}
      <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-4xl">
        Our vision is to be a <span className="text-green-600 font-medium">leading tech startup</span>, known for <span className="text-green-600 font-medium">innovation</span>, <span className="text-green-600 font-medium">reliability</span>, and <span className="text-green-600 font-medium">cutting-edge solutions</span>. We’re redefining the digital space by pushing boundaries and delivering transformative technologies.
      </p>

      <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-4xl">
        We see a future where technology <span className="text-green-600 font-medium">enhances life and business</span>, driving <span className="text-green-600 font-medium">growth</span>, <span className="text-green-600 font-medium">efficiency</span>, and <span className="text-green-600 font-medium">sustainability</span>. Through innovation and user-first design, we aim to lead in digital excellence.
      </p>


      {/* Button */}
      <Link href="/about" passHref>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white font-medium italic rounded-lg w-[140px] h-[40px] transition-all duration-200"
        >
          See more...
        </button>
      </Link>
    </div>;
        default:
          return null;
      }
    };

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites, portals, and web apps built for performance and scalability.",
      icon: code,
    },
    {
      title: "Mobile App Development",
      description: "iOS and Android apps with stunning UI and seamless UX.",
      icon: mobile_code,
    },
    {
      title: "UI/UX Design",
      description: "User-first product design that converts and engages.",
      icon: figma,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and DevOps pipelines.",
      icon: cloud,
    },
    {
      title: "E-commerce Development",
      description: "Custom online stores and third-party integrations.",
      icon: ecommerce,
    },
    {
      title: "Technical Consulting",
      description:
        "Guidance on digital transformation and modern tech stack decisions.",
      icon: consult,
    },
  ];

  return (
    <main className=" min-h-screen pb-7  sm:font-[family-name:var(--font-geist-sans)]">
       {/* Hero Section */}
       <section className="bg-gradient-to-br from-green-200 to-white px-[2.5%] py-10 flex items-center flex-col gap-2 w-full lg:flex-row">
      <div className="relative w-full lg:w-1/2 h-auto bg-white border border-green-400 rounded-2xl shadow-2xl p-6 space-y-6 overflow-hidden">
  <div className="flex justify-between items-center">
  <motion.h1
      className="text-2xl font-bold text-green-700 flex flex-wrap"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={characterAnimation}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
    <span title="Verified" className="absolute top-4 right-4 flex items-center gap-1 text-green-600 font-semibold">
    <BadgeCheck className="text-blue-500" />
    </span>
    </div>

  <div className="w-full h-[1px] bg-gradient-to-r from-white via-stone-300 to-white rounded-full" />

  <p className="text-gray-600 text-sm font-semibold md:text-base md:font-medium">
    We provide end-to-end tech services tailored to your business from product design to scalable system architecture.
  </p>

  <ul className="relative space-y-4 isolate bg-white">
    <li className="absolute left-4 top-0 bottom-0 w-[2px] bg-stone-400 z-0"></li>

    {[
      { icon: <Code size={18} />, label: "System Design & Architecture" },
      { icon: <PenTool size={18} />, label: "UI/UX Design & Prototyping" },
      { icon: <Cloud size={18} />, label: "Custom Software Development" },
      { icon: <Cloud size={18} />, label: "Cloud Hosting & DevOps" },
    ].map((item, idx) => (
      <li key={idx} className={`relative ${idx=== 2 ? "bg-stone-100" :""} rounded-2xl  z-10 flex items-center gap-3`}>
        {
         idx=== 2 && (
          <Image src={cursor} alt="cursor" className="absolute right-[10px] top-9 -translate-y-1/2 w-5 h-5 " />
        ) 
        }
        <div className="grid place-items-center size-8 rounded-full shadow border border-green-300 bg-green-50 text-green-600">
          {item.icon}
        </div>
        <span className="text-gray-700 text-sm lg:text-base">{item.label}</span>
      </li>
    ))}
  </ul>

  <button className="mt-4 px-5 z-4 relative overflow-hidden isolate py-2 bg-green-600 text-white text-sm font-medium rounded-xl before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-bottom-8 before:w-10 before:h-10 before:rounded-full before:bg-green-500 hover:bg-green-700 transition-all">
   <div className="absolute -bottom-7 left-2 h-10 w-10 bg-green-400 rounded-[50%]"></div>
   <div className="absolute -bottom-5 right-2 h-10 w-10 bg-green-400 rounded-[50%]"></div>
    <p className="isolate">Get in Touch</p>
  </button>

  <Image
    src={wavy}
    alt="wavy"
    width={300}
    height={300}
    className="absolute left-0 bottom-0 w-full pointer-events-none select-none"
  />
</div>


          <div className=" relative hero h-10 w-full flex flex-col gep-4 items-center justify-center lg:w-1/2">
          <Image src={get_started} alt="get started"  className=" absolute top-5 right-10 size-7 z-4"/>
           <Image src={code_bg} alt="bg" width={300} height={300} className="mx-auto"/>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-white p-4 w-[95%] max-w-2xl shadow-2xl border border-green-300 rounded-2xl gap-4">
  {/* Icon Buttons */}
  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 w-full sm:w-auto">
    <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-xl border-2 border-green-300 hover:bg-green-100 transition">
      <span className="text-sm font-bold text-green-600">1</span>
    </button>
    <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-xl border-2 border-green-300 hover:bg-green-100 transition">
      <Code className="w-5 h-5 text-green-600" />
    </button>
    <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-xl border-2 border-green-300 hover:bg-green-100 transition">
      <PenTool className="w-5 h-5 text-green-600" />
    </button>
    <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-xl border-2 border-green-300 hover:bg-green-100 transition">
      <Server className="w-5 h-5 text-green-600" />
    </button>
    <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-xl border-2 border-green-300 hover:bg-green-100 transition">
      <Cloud className="w-5 h-5 text-green-600" />
    </button>
  </div>

  {/* CTA Button */}
  <button className="w-full  sm:w-auto px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition">
    Get in Touch
  </button>
</div>

          </div>
       </section>
      
             {/* About Section */}  
          <div className="w-full mt-6 mx-auto  px-[2.5%] py-20 rounded-3xl bg-gradient-to-br from-green-500 via-green-400 to-green-300 flex flex-col lg:flex-row justify-between gap-6 shadow-lg">
  {/* Left Section */}
  <div className="w-[95%] mx-auto lg:w-2/5 flex flex-col">
    {/* Image with Overlay */}
    <section className="relative w-full rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/code.jpg"
        alt="overview"
        height={300}
        width={300}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-black/50 bg-opacity-60 text-white flex justify-center items-center text-2xl font-bold italic z-10">
        Overview
      </div>
    </section>

    {/* Tab Buttons */}
    <div className="flex justify-center items-center gap-2 mt-4 bg-green-100 p-3 rounded-3xl shadow-md w-full">
      {[
        { label: "About Us", tab: "tab1" },
        { label: "Mission", tab: "tab2" },
        { label: "Vision", tab: "tab3" },
      ].map(({ label, tab }) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === tab
              ? "bg-green-600 text-white shadow"
              : "bg-white text-green-700 hover:bg-green-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-[50%]  flex justify-center items-center px-[2.5%]">
    {renderContent()}
  </div>
</div>

      
           
           
      
            {/* Services Section */}
               
              <section
      id="services"
      className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Our <span className="services_header ">Services</span>
        </h2>
        
        <div className="h-1 bg-stone-600 w-[120px] rounded-2xl mx-auto mt-3 mb-5"></div>

        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Parcch Tech Solutions builds products and tools that drive innovation,
          enhance user experience, and deliver results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden relative border border-stone-200 bg-gray-50  p-6 shadow hover:shadow-lg transition"
            >
              <Image src={cloud_stars} alt={"cloud_stars"} width={80} height={80} className="absolute top-0 right-0 l" />
              <Image src={service.icon} alt={"image" + index} className="text-4xl  mb-4 p-4 border-2 border-green-400 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-800  mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


            <div className="w-[90%] mx-auto">
            <Image src={ui} alt="ui" width={300} height={300} className="w-full"/>
            </div>
             
             <div className="bg-white  rounded-2xl p-6 w-[90%] mt-5  mx-auto border border-green-200">
  <h2 className="text-lg font-bold text-gray-800 ">Our Experienced Team</h2>
   {/* Divider */}
        <div className="my-3 w-full h-[1.5px] bg-gradient-to-r from-white via-green-300 to-white"></div>
  {/* Overlapping Avatars */}
  <div className="relative h-10 w-40 mb-3 mt-8">
    <div className="flex items-center">
      <Image
        src="/favicon.png"
        alt="Parcch"
        width={40}
        height={40}
        className="border-2 border-green-500 rounded-full absolute left-0 z-21 shadow-md"
      />
      <Image
        src="/me.jpg"
        alt="Jay Poundz"
        width={40}
        height={40}
        className="border-2 border-white rounded-full absolute left-7 z-20 shadow-md"
      />
      <Image
        src="/me.jpg"
        alt="Royal CEO"
        width={40}
        height={40}
        className="border-2 border-white rounded-full absolute left-14 z-11 shadow-md"
      />
      <div className="border-2 border-white  flex items-center justify-center w-[40px] h-[40px] bg-green-200 rounded-full absolute left-21 z-10 shadow-md">9+</div>
    </div>
  </div>

  {/* Names */}
  <p className="text-gray-600 text-sm">
    <span className="font-medium text-gray-800">Parcch</span>,{" "}
    <span className="font-medium text-gray-800">Royal Empire CEO</span> &{" "}
    <span className="font-medium text-gray-800">Jay Poundz</span>
  </p>
</div>


            {/* Contact Section */}
            <div className="container mx-auto px-4 py-10 flex flex-col gap-10 md:flex-row md:px-6 items-start justify-center">
  {/* Idea Section */}
  <section className="w-full md:w-1/2 bg-gradient-to-br from-green-500 via-green-400 to-green-300 rounded-3xl shadow-xl text-white py-10 px-4">
    <div className="bg-white text-gray-800 shadow-md rounded-xl p-6 text-center">
      <h2 className="text-3xl font-extrabold border-2 py-5 border-stone-300 rounded-xl bg-stone-100 px-2">Got an idea? Let’s bring it to life!</h2>
      <p className="text-gray-600 mt-4">
        Whether you have a project in mind, a business proposal, or just want to say hello—
        We’d love to hear from you! We are always open for collaboration and exciting new opportunities.
      </p>

      <div className="mt-6 text-sm text-gray-700">
        <p>
          Connect with us on{" "}
          <a
            href="https://github.com/Akuafo-Patawah12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-semibold"
          >
            GitHub
          </a>{" "}
          &{" "}
          <a
            href="https://gitlab.com/Akuafo-Patawah12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-semibold"
          >
            GitLab
          </a>
        </p>
        <p className="mt-4">Or drop me a message anytime!</p>
      </div>

      <p className="mt-6 text-xl font-semibold text-green-700">
        Let’s build something amazing together. <Rocket className="inline ml-1" />
      </p>
    </div>
  </section>

  {/* Contact Section */}
  <section
    id="contact"
    className="w-full md:w-1/2 bg-gradient-to-br from-white via-green-100 to-gray-200 rounded-3xl shadow-xl py-10"
  >
    <div className="w-full text-center">
      
      <div className="bg-white/80 backdrop-blur-md mx-auto w-[95%] shadow-lg rounded-2xl px-8 py-10 border border-gray-200 transition-transform duration-300 hover:scale-[1.01]">
        {/* Profile */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/me.jpg"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full border-4 border-green-500 object-cover shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold">Akuafo Patawah</h3>
            <p className="text-sm text-gray-500">Tech & Customer Support</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 w-full h-[2px] bg-gradient-to-r from-white via-green-300 to-white"></div>

        {/* Contact Info */}
        <div className="space-y-5 text-left text-gray-700 text-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gray-100 text-green-600 shadow-sm">
              <Phone size={18} />
            </div>
            <span>020 162 3251</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gray-100 text-green-600 shadow-sm">
              <Mail size={18} />
            </div>
            <span>parcch26@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gray-100 text-green-600 shadow-sm">
              <MapPin size={18} />
            </div>
            <span>Segico Flat, Community 4, Tema - Ghana</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link href="/contact">
            <button
              onClick={scrollTop}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl flex justify-center items-center gap-2 transition duration-300 shadow-md"
            >
              Contact Now
              <Image
                src={Linkicon}
                width={20}
                height={20}
                alt="link"
                className="inline-block"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
</div>

          </main>
     
    
  );
}
