"use client"
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { Mail, Phone,Server, MapPin,Cloud,Code,PenTool, Rocket } from "lucide-react";

import useDarkMode from "./components/Theme";
import code_bg from "./assets/code_bg.svg"



import Linkicon from "./assets/Linkicon.svg"
import wavy from "./assets/wavy.svg"
import ui from "./assets/ui.svg"

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
  
        <button onClick={scrollTop} className="  lg:absolute border-2 border-green-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0"><Link href="/about" className="w-full h-full block">See more...</Link></button>
          
          
          
          
          
          
          </div>;
        case "tab2":
          return <div className="relative mt-4 flex flex-col gap-10 items-center text-justify">
                     <h2 className="font-bold text-4xl">Our mission</h2>
                    Our mission is to harness the power of technology to create innovative, efficient, and user-friendly digital solutions. We strive to empower businesses with custom web applications, mobile apps, and seamless digital experiences that drive growth and success. By leveraging the latest advancements in technology, we aim to streamline processes, enhance user engagement, and deliver scalable solutions tailored to each client’s unique needs. Our commitment to quality, creativity, and continuous improvement ensures that we stay ahead of industry trends, helping businesses adapt, thrive, and achieve their long-term goals in an ever-evolving digital landscape.   
                    <button onClick={scrollTop} className="  lg:absolute border-2 border-green-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0"><Link href="/about" className="w-full h-full block">See more...</Link></button>
                </div>;
        case "tab3":
          return <div className="relative mt-4 flex flex-col gap-10 items-center text-justify">
                    <h2 className="font-bold text-4xl">Our vision</h2>
                    Our vision is to become a leading tech startup recognized for innovation, reliability, and cutting-edge solutions. We aim to revolutionize the digital landscape by continuously pushing boundaries, embracing new technologies, and delivering impactful solutions that transform businesses and industries.
  
          We envision a future where technology seamlessly enhances every aspect of life and business, fostering growth, efficiency, and sustainability. By staying ahead of industry trends, fostering a culture of creativity, and prioritizing user-centric design, we strive to set new standards in digital excellence. 
          <button onClick={scrollTop} className="  lg:absolute border-2 border-green-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0"><Link href="/about" className="w-full h-full block">See more...</Link></button>
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
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description: "iOS and Android apps with stunning UI and seamless UX.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "User-first product design that converts and engages.",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and DevOps pipelines.",
      icon: "☁️",
    },
    {
      title: "E-commerce Development",
      description: "Custom online stores and third-party integrations.",
      icon: "🛒",
    },
    {
      title: "Technical Consulting",
      description:
        "Guidance on digital transformation and modern tech stack decisions.",
      icon: "💼",
    },
  ];

  return (
    <main className=" min-h-screen pb-20  sm:font-[family-name:var(--font-geist-sans)]">
       {/* Hero Section */}
       <section className="bg-gradient-to-br from-green-200 to-white px-[2.5%] py-10 flex items-center flex-col gap-2 w-full lg:flex-row">
          <div className="h-auto w-full relative bg-white rounded-2xl border border-green-400 lg:w-1/2 p-6 shadow-xl space-y-4">
  <h1 className="text-2xl font-bold text-green-700 whitespace-nowrap">Parcch <code>&lt;Tech Solutions/&gt;</code></h1>
      <div style={{marginBlock:"15px"}} className="w-full  h-[1px] rounded-full bg-gradient-to-r from-white via-stone-300 to-white"></div>
  <p className="text-gray-600">
    We provide end-to-end tech services tailored to your business — from product design to scalable system architecture.
  </p>

  <ul className="space-y-3 relative bg-white isolate">
    <li className="absolute bg-stone-400 bottom-0 w-[2px] z-0 left-2.5 top-0">

    </li>
    <li className="flex  items-center gap-3">
      <div className="grid place-items-center size-7 rounded-[50%] shadow bg-white isolate"><Code className="text-green-600 isolate" size={17}/></div>
      <span className="text-gray-700">System Design & Architecture</span>
    </li>
    <li className="flex  items-center gap-3">
      <div className="grid place-items-center size-7 rounded-[50%] shadow bg-white isolate"><PenTool className="text-green-600 " size={17}/></div>
      <span className="text-gray-700">UI/UX Design & Prototyping</span>
    </li>
    <li className="flex  items-center gap-3">
      <div className="grid place-items-center size-7 rounded-[50%] shadow bg-white isolate"><Cloud className="text-green-600 " size={17}/></div>
      <span className="text-gray-700">Custom Software Development</span>
    </li>
    <li className="flex  items-center gap-3">
      <div className="grid place-items-center size-7 rounded-[50%] shadow bg-white isolate"><Cloud className="text-green-600 " size={17}/></div>
      <span className="text-gray-700">Cloud Hosting & DevOps</span>
    </li>
  </ul>

  <button className="mt-4 px-5 z-4 relative overflow-hidden isolate py-2 bg-green-600 text-white text-sm font-medium rounded-xl before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-bottom-8 before:w-10 before:h-10 before:rounded-full before:bg-green-500 hover:bg-green-700 transition-all">
   <div className="absolute -bottom-7 left-2 h-10 w-10 bg-green-400 rounded-[50%]"></div>
   <div className="absolute -bottom-5 right-2 h-10 w-10 bg-green-400 rounded-[50%]"></div>
    <p className="isolate">Get in Touch</p>
  </button>

  <Image src={wavy} alt="wavy" width={300} height={300} className="absolute w-full   left-0  bottom-0"/>
</div>

          <div className=" hero h-10 w-full flex flex-col gep-4 items-center justify-center lg:w-1/2">
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
          <section className="w-full px-4 py-10 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
        {/* Left side */}
        <div className="w-full lg:w-2/5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/code.jpg"
              alt="Overview image"
              width={800}
              height={600}
              className="w-full object-cover h-72"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold italic">
                Overview
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 bg-green-100 p-3 rounded-3xl shadow-md">
            {["tab1", "tab2", "tab3"].map((tab, idx) => {
              const labels = {
                tab1: "About Us",
                tab2: "Mission",
                tab3: "Vision",
              };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-white text-green-700 hover:bg-green-200"
                  }`}
                  aria-label={`Switch to ${labels[tab]}`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-3/5">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center lg:text-left">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
           
           
      
            {/* Services Section */}
               
              <section
      id="services"
      className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Parcch Tech Solutions builds products and tools that drive innovation,
          enhance user experience, and deliver results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
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
             
             <div className="bg-white shadow-md rounded-xl p-4 max-w-md mx-auto">
      <h2 className="text-md font-semibold mb-5 text-gray-700">Contributors</h2>
      <div className="relative h-9 w-36">
        
          <div  className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              alt="parcch"
              width={30}
              height={30}
              className="size-8 border-2 border-green-500 rounded-full absolute left-0 z-10"
            />
            <Image
              src="/me.jpg"
              alt="jay poundz"
              width={30}
              height={30}
              className="size-8 border-2 border-white rounded-full absolute left-6 z-10"
            />
            <Image
              src="/me.jpg"
              alt="royal ceo"
              width={30}
              height={30}
              className="size-8 border-2 border-white rounded-full absolute left-12 z-10"
            />
          </div>
          
      </div>
      <p>Parcch, Royal Empire CEO & Jay Poundz</p>
    </div>

            {/* Contact Section */}
            <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Idea Section */}
            <div className=" p-6 text-center bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">Got an idea? Let’s bring it to life!</h2>
              <p className="text-gray-600 mt-3">
                Whether you have a project in mind, a business proposal, or just want to say hello—We’d love to hear from you! 
                We are always open for collaboration and exciting new opportunities.
              </p>
              
            <div className="flex items-center justify-center gap-2">
              
              <p className="mx-auto">
                Connect with us on{" "}
                <a
                  href="https://github.com/Akuafo-Patawah12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  GitHub
                </a>{" "}
                &{" "}
                <a
                  href="https://gitlab.com/Akuafo-Patawah12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  GitLab
                </a>
              </p>
            </div>
      
            <div className="flex items-center gap-2 mt-2">
              
              <p className="mx-auto">Or drop me a message anytime!</p>
            </div>
      
            <p className="text-xl font-semibold flex flex-col items-center text-green-600 mt-5">
              Let’s build something amazing together. <Rocket />
            </p>
          </div>
      
            {/* Contact Section */}
            <section
      id="contact"
      className="w-full py-20  bg-gradient-to-br from-white via-green-100 to-gray-200"
    >
      <div className="w-[95%] mx-auto text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 mb-10">
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </h2>

        <div className="relative bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl px-8 py-10 transition hover:scale-[1.01] duration-300 border border-gray-200">
          {/* Profile Image & Name */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Image
              src="/me.jpg"
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full border-4 border-green-500 object-cover shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Akuafo Patawah</h3>
              <p className="text-sm text-gray-500">Tech & Customer Support</p>
            </div>
          </div>

           <div style={{marginTop:"10px"}} className="w-full h-[2px] bg-gradient-to-r from-white via-green-300 to-white"></div>
          {/* Contact Details */}
          <div className="mt-8 space-y-6 text-gray-700 text-sm">
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
              <span>burxells873@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gray-100 text-green-600 shadow-sm">
                <MapPin size={18} />
              </div>
              <span>Segico Flat, Community 4, Tema - Ghana</span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-10">
            <Link href="/contact">
              <button
                onClick={scrollTop}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg flex justify-center items-center gap-2 transition duration-300 shadow-lg"
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
