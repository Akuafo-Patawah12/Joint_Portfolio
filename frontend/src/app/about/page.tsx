"use client"

import {useState} from 'react';
import  Link from 'next/link';
import Image from "next/image"


export default function About () {
  const items = [
    { title: "Innovation-Driven", description: "We leverage the latest technologies to build future-proof solutions." },
    { title: "User-Centered Approach", description: "Every project is designed with the end user in mind, ensuring seamless experiences." },
    { title: "Commitment to Excellence", description: "We are dedicated to delivering high-quality, scalable, and reliable solutions." },
    { title: "Client-Focused", description: "Your success is our priority, and we work closely with you to achieve your vision." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
        <div className="min-h-screen pb-10 bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">

                
                         


                <h1 className="text-4xl font-bold text-center mb-6">About us</h1>
                <section className="mb-8">
    
    <p>
      Parcch is a forward-thinking technology startup dedicated to building cutting-edge digital solutions.
      We specialize in web development, mobile applications, and API integrations that help businesses thrive
      in an ever-evolving digital landscape. Our team is driven by innovation, creativity, and a passion for solving
      complex problems through technology.
    </p>
  </section>

  <Image src="/code2.jpg" alt="code_2" width={300} height={300} priority className="w-full rounded-2xl my-9"/>
  

  <div className="flex flex-col md:flex-row gap-6 mb-12">
  {/* Mission Card */}
  <section className="flex-1 bg-gradient-to-br from-green-400 via-green-300 to-green-200 rounded-2xl shadow-2xl">
    <div className="flex items-center gap-3 px-6 py-4">
      <div className="w-10 h-10 bg-white/70 border-2 border-green-500 rounded-full flex items-center justify-center shadow-md">
        <span className="text-lg font-bold  text-green-900">M</span>
      </div>
      <h2 className="text-2xl font-bold text-white">Our Mission</h2>
    </div>
    <div className="bg-white rounded-2xl p-6 border border-green-300">
      <p className="text-stone-700 leading-relaxed">
        Our mission is to harness the power of technology to create innovative, efficient, and user-friendly digital
        solutions. We strive to empower businesses with custom web applications, mobile apps, and seamless digital
        experiences that drive growth and success. Through a blend of expertise and forward-thinking strategies, we aim
        to deliver solutions that make a real impact.
      </p>
    </div>
  </section>

  {/* Vision Card */}
  <section className="flex-1 bg-gradient-to-br from-green-400 via-green-300 to-green-200 rounded-2xl shadow-2xl ">
    <div className="flex items-center gap-3 px-6 py-4">
      <div className="w-10 h-10 bg-white/70 border-2 border-green-500 rounded-full flex items-center justify-center shadow-md">
        <span className="text-lg font-bold  text-green-900">V</span>
      </div>
      <h2 className="text-2xl font-bold text-white">Our Vision</h2>
    </div>
    <div className="bg-white rounded-2xl p-6 border border-green-300">
      <p className="text-stone-700 leading-relaxed">
        We envision becoming a leading tech startup recognized for innovation, reliability, and cutting-edge solutions.
        Our goal is to revolutionize the digital landscape by continuously pushing boundaries, embracing new
        technologies, and delivering impactful solutions that transform businesses and industries.
      </p>
    </div>
  </section>
</div>

  
  <section className="mb-8 ">
    <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Custom Web Development</strong> – Crafting modern, scalable, and responsive web applications tailored to your business needs.</li>
      <li><strong>Mobile App Development</strong> – Building intuitive and high-performance mobile apps for both iOS and Android.</li>
      <li><strong>API & Backend Development</strong> – Creating powerful and scalable backend solutions for seamless data handling.</li>
      <li><strong>UI/UX Design</strong> – Designing user-centric interfaces that provide exceptional digital experiences.</li>
      <li><strong>System Administration</strong> – We manage and optimize IT systems for seamless business operations.</li>
      <li><strong>Tech Consultancy</strong> – Offering expert advice to help businesses leverage the right technologies for growth.</li>
    </ul>
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
    <ul className="list-disc pl-5 space-y-2 hidden lg:block">
      <li><strong>Innovation-Driven</strong> – We leverage the latest technologies to build future-proof solutions.</li>
      <li><strong>User-Centered Approach</strong> – Every project is designed with the end user in mind, ensuring seamless experiences.</li>
      <li><strong>Commitment to Excellence</strong> – We are dedicated to delivering high-quality, scalable, and reliable solutions.</li>
      <li><strong>Client-Focused</strong> – Your success is our priority, and we work closely with you to achieve your vision.</li>
    </ul>
  

  
       <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleItem(index)}
              >
                <span className="text-gray-700 text-sm font-bold">
                  {item.title}
                </span>
                <span className="text-ggreen-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-sm text-gray-600">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      
  <section className="text-center mt-10">
    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
    <p>Are you ready to transform your digital presence? Let’s work together to build something amazing.</p>

  </section>

                <div className="text-center mt-6 h-10 w-full] rounded-2xl border-2 border-green-500">
                    <Link href="/contact" className="text-green-500 leading-loose  block  w-full h-[40px] hover:underline">Contact us today!</Link>
                </div>
            </div>
        </div>
    );
};


