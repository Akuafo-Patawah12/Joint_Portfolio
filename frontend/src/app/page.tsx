"use client"
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { Mail, Phone,Server, MapPin,Cloud,Code,PenTool } from "lucide-react";

import useDarkMode from "./components/Theme";
import code_bg from "./assets/code_bg.svg"

import { motion } from "framer-motion";

import Linkicon from "./assets/Linkicon.svg"

export default function Home() {

  const { darkMode } = useDarkMode();
   useEffect(()=>{
     console.log("theme changed")
   },[darkMode])
  
 
  
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
    const renderContent = () => {
      switch (activeTab) {
        case "tab1":
          return <div className="mt-4 flex text-center relative flex-col gap-10 items-center "> 
                  <h2 className="font-bold text-4xl">About us</h2>
                  Parcch is a forward-thinking technology startup dedicated to building cutting-edge digital solutions.
        We specialize in web development, mobile applications, and API integrations that help businesses thrive
        in an ever-evolving digital landscape. Our team is driven by innovation, creativity, and a passion for solving
        complex problems through technology.
  
        <button onClick={scrollTop} className="  lg:absolute border-2 border-blue-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0"><Link href="/about" className="w-full h-full block">See more...</Link></button>
          
          
          
          
          
          
          </div>;
        case "tab2":
          return <div className="relative mt-4 flex flex-col gap-10 items-center text-justify">
                     <h2 className="font-bold text-4xl">Our mission</h2>
                    Our mission is to harness the power of technology to create innovative, efficient, and user-friendly digital solutions. We strive to empower businesses with custom web applications, mobile apps, and seamless digital experiences that drive growth and success. By leveraging the latest advancements in technology, we aim to streamline processes, enhance user engagement, and deliver scalable solutions tailored to each client's unique needs. Our commitment to quality, creativity, and continuous improvement ensures that we stay ahead of industry trends, helping businesses adapt, thrive, and achieve their long-term goals in an ever-evolving digital landscape.   
                    <button onClick={scrollTop} className="  lg:absolute border-2 border-blue-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0"><Link href="/about" className="w-full h-full block">See more...</Link></button>
                </div>;
        case "tab3":
          return <div className="relative mt-4 flex flex-col gap-10 items-center text-justify">
                    <h2 className="font-bold text-4xl">Our vision</h2>
                    Our vision is to become a leading tech startup recognized for innovation, reliability, and cutting-edge solutions. We aim to revolutionize the digital landscape by continuously pushing boundaries, embracing new technologies, and delivering impactful solutions that transform businesses and industries.
  
          We envision a future where technology seamlessly enhances every aspect of life and business, fostering growth, efficiency, and sustainability. By staying ahead of industry trends, fostering a culture of creativity, and prioritizing user-centric design, we strive to set new standards in digital excellence. 
          <button onClick={scrollTop} className="  lg:absolute border-2 border-blue-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0"><Link href="/about" className="w-full h-full block">See more...</Link></button>
          </div>;
        default:
          return null;
      }
    };
  return (
    <main className=" min-h-screen pb-20  sm:font-[family-name:var(--font-geist-sans)]">
       {/* Hero Section */}
       <section className="bg-gradient-to-br from-green-200 to-white px-[2.5%] py-10 flex items-center flex-col gap-2 w-full lg:flex-row">
          <div className="h-auto w-full bg-white rounded-2xl border border-green-400 lg:w-1/2 p-6 shadow-xl space-y-4">
  <h1 className="text-2xl font-bold text-green-700 whitespace-nowrap">Parcch <code>&lt;Tech Solutions/&gt;</code></h1>
      <div style={{marginBlock:"15px"}} className="w-full  h-[1px] rounded-full bg-gradient-to-r from-white via-stone-300 to-white"></div>
  <p className="text-gray-600">
    We provide end-to-end tech services tailored to your business — from product design to scalable system architecture.
  </p>

  <ul className="space-y-3">
    <li className="flex items-center gap-3">
      <Code className="text-green-600" />
      <span className="text-gray-700">Custom Software Development</span>
    </li>
    <li className="flex items-center gap-3">
      <PenTool className="text-green-600" />
      <span className="text-gray-700">UI/UX Design & Prototyping</span>
    </li>
    <li className="flex items-center gap-3">
      <Cloud className="text-green-600" />
      <span className="text-gray-700">System Design & Architecture</span>
    </li>
    <li className="flex items-center gap-3">
      <Cloud className="text-green-600" />
      <span className="text-gray-700">Cloud Hosting & DevOps</span>
    </li>
  </ul>

  <button className="mt-4 px-5 py-2 bg-green-600 text-white text-sm font-medium rounded-xl hover:bg-green-700 transition-all">
    Get in Touch
  </button>
</div>

          <div className=" hero h-10 w-full flex flex-col gep-4 items-center justify-center lg:w-1/2">
           <Image src={code_bg} alt="bg" width={300} height={300} className="mx-auto"/>
           <div className="flex justify-between items-center bg-white p-4 w-[95%] max-w-2xl shadow-2xl border border-green-300 rounded-2xl gap-4">
              {/* Icon Buttons */}
              <div className="flex items-center gap-3">
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
                <button className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition">
                  Get in Touch
                </button>
              </div>
          </div>
       </section>
      
             {/* About Section */}  
          <div className="w-[95%] mx-auto flex justify-between flex-col mt-4 lg:flex-row">
            <div style={{ display: "flex",flexDirection:"column", marginBottom: "10px"}} className="w-full lg:w-2/5 ">
            <section className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full z-4 rounded-2xl bg-black opacity-60 text-white flex justify-center items-center font-bold text-2xl italic">Overview</div>
            <Image src="/code.jpg" alt="me" height={300} width={300} className=" w-full rounded-2xl" />
            
            </section>
              <div className="flex justify-center items-center gap-2 p-2 bg-green-100 rounded-3xl shadow-md w-fit mx-auto">
  <button
    onClick={() => setActiveTab("tab1")}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      activeTab === "tab1"
        ? "bg-green-600 text-white shadow-md"
        : "bg-white text-green-700 hover:bg-green-200"
    }`}
  >
    About Us
  </button>

  <button
    onClick={() => setActiveTab("tab2")}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      activeTab === "tab2"
        ? "bg-green-600 text-white shadow-md"
        : "bg-white text-green-700 hover:bg-green-200"
    }`}
  >
    Mission
  </button>

  <button
    onClick={() => setActiveTab("tab3")}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      activeTab === "tab3"
        ? "bg-green-600 text-white shadow-md"
        : "bg-white text-green-700 hover:bg-green-200"
    }`}
  >
    Vision
  </button>
</div>

            </div>
            <div className="w-full px-[2.5%] flex  justify-center lg:w-[55%]">{renderContent()}</div>
          </div>
      
           
           
      
            {/* Projects Section */}
            <section id="projects" className={` ${darkMode ? "bg-gray-800" : "bg-stone-100" } mt-[70px] py-20 px-6 rounded-2xl`}>
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center">Projects</h2>
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                <motion.div
            className="project p-8 rounded-lg bg-gray-800 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold ">Logistics Platform</h3>
            <p className="text-gray-100 mt-2">
              Developed a logistics and third-party eCommerce platform with real-time tracking.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <a href="https://sfghanalogistics.com" target="_blank" rel="noopener noreferrer">
                View
              </a>
            </button>
          </motion.div>
          <motion.div
            className="project p-8 rounded-lg bg-gray-800 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
                    <h3 className="text-xl font-semibold">Attendance App</h3>
                    <p className="text-gray-100 mt-2">Designed an attendance system for managing shifts and tracking worker sign-ins.</p>
                  </motion.div>
                </div>
              </div>
            </section>
      
            {/* Contact Section */}
            <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Idea Section */}
            <div className=" p-6 text-center bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">Got an idea? Let’s bring it to life!</h2>
              <p className="text-gray-600 mt-3">
                Whether you have a project in mind, a business proposal, or just want to say hello—We'd love to hear from you! 
                We are always open for collaboration and exciting new opportunities.
              </p>
              
            <div className="flex items-center justify-center gap-2">
              
              <p className="mx-auto">
                Connect with us on{" "}
                <a
                  href="https://github.com/Akuafo-Patawah12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>{" "}
                &{" "}
                <a
                  href="https://gitlab.com/Akuafo-Patawah12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitLab
                </a>
              </p>
            </div>
      
            <div className="flex items-center gap-2 mt-2">
              
              <p className="mx-auto">Or drop me a message anytime!</p>
            </div>
      
            <p className="text-xl font-semibold text-blue-600 mt-5">
              Let’s build something amazing together. 🚀
            </p>
          </div>
      
            {/* Contact Section */}
            <section id="contact" className=" w-full text-center sm:">
              <h2 className="text-3xl font-bold mb-4">
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </h2>
      
              {/* Contact Card */}
              <div className="w-full  bg-white shadow-lg rounded-xl p-6 flex flex-col items-center ">
                <Image
                  src="/me.jpg"
                  alt="Profile"
                  height={300} width={300}
                  className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-md"
                />
                <h2 className="text-xl font-semibold text-gray-800 mt-4">Akuafo Patawah</h2>
                <p className="text-gray-500">Tech/Customer Support</p>
      
                {/* Contact Details */}
                <div className="mt-4 space-y-2 w-full text-center ">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>burxells873@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span>+233201623251</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>Tema, Ghana</span>
                  </div>
                </div>
      
                {/* Contact Button */}
                <Link href="/contact" >
                <button onClick={scrollTop} className="mt-5 flex gap-2 bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                    Contact Now <Image src={Linkicon} height={300} width={300} alt="link" className="w-5 "/>
                </button>
                </Link>
              </div>
            </section>
          </div>
          </main>
     
    
  );
}
