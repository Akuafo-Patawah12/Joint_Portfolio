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
      <div className="relative w-full lg:w-1/2 h-auto bg-white border border-green-400 rounded-2xl shadow-2xl p-6 space-y-6 overflow-hidden">
  <h1 className="text-2xl font-bold text-green-700">
    Parcch <code className="text-base text-green-600">&lt;Tech Solutions/&gt;</code>
  </h1>

  <div className="w-full h-[1px] bg-gradient-to-r from-white via-stone-300 to-white rounded-full" />

  <p className="text-gray-600 text-sm lg:text-base">
    We provide end-to-end tech services tailored to your business — from product design to scalable system architecture.
  </p>

  <ul className="relative space-y-4 isolate bg-white">
    <li className="absolute left-4 top-0 bottom-0 w-[2px] bg-stone-400 z-0"></li>

    {[
      { icon: <Code size={18} />, label: "System Design & Architecture" },
      { icon: <PenTool size={18} />, label: "UI/UX Design & Prototyping" },
      { icon: <Cloud size={18} />, label: "Custom Software Development" },
      { icon: <Cloud size={18} />, label: "Cloud Hosting & DevOps" },
    ].map((item, idx) => (
      <li key={idx} className="relative z-10 flex items-center gap-3">
        <div className="grid place-items-center size-8 rounded-full shadow bg-white text-green-600">
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
          <div className="w-[95%] mx-auto flex justify-between flex-col mt-4 lg:flex-row">
            <div style={{ display: "flex",flexDirection:"column", marginBottom: "10px"}} className="w-full lg:w-2/5 ">
            <section className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full z-4 rounded-2xl bg-black opacity-60 text-white flex justify-center items-center font-bold text-2xl italic">Overview</div>
            <Image src="/code.jpg" alt="me" height={300} width={300} className=" w-full rounded-2xl" />
            
            </section>
              <div className="flex justify-center items-center gap-2 p-2 bg-green-100 rounded-3xl shadow-md w-full mt-3 mx-auto">
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
      
           <div className="h-2 bg-stone-200 w-full  mx-auto mt-9"></div>
           
      
            {/* Services Section */}
               
              <section
      id="services"
      className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Our <span className="text-green-600">Services</span>
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
              className="rounded-2xl border border-stone-200 bg-gray-50 dark:bg-gray-800 p-6 shadow hover:shadow-lg transition"
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
             
             <div className="bg-white  rounded-2xl p-6 w-[90%] mt-5  mx-auto border border-green-200">
  <h2 className="text-lg font-bold text-gray-800 ">Contributors</h2>
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
        className="border-2 border-white rounded-full absolute left-14 z-10 shadow-md"
      />
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
            <div className="container mx-auto px-6 py-10 flex flex-col gap-10 md:flex-row items-start justify-center">
  {/* Idea Section */}
  <section className="w-full md:w-1/2 bg-gradient-to-br from-green-500 via-green-400 to-green-300 rounded-3xl shadow-xl text-white py-10 px-6">
    <div className="bg-white text-gray-800 shadow-md rounded-xl p-6 text-center">
      <h2 className="text-3xl font-extrabold">Got an idea? Let’s bring it to life!</h2>
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
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        <Link href="/contact" className="hover:underline">
          Contact Us
        </Link>
      </h2>

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
            <span>burxells873@gmail.com</span>
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
