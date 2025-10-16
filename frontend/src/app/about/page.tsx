"use client"
import { useState } from 'react';
import { Rocket, Target, Code, Smartphone, Database, Palette, Server, Lightbulb, ChevronDown } from 'lucide-react';

export default function About() {
  const items = [
    { 
      title: "Innovation-Driven", 
      description: "We leverage the latest technologies to build future-proof solutions.",
      icon: <Lightbulb className="w-5 h-5" />
    },
    { 
      title: "User-Centered Approach", 
      description: "Every project is designed with the end user in mind, ensuring seamless experiences.",
      icon: <Target className="w-5 h-5" />
    },
    { 
      title: "Commitment to Excellence", 
      description: "We are dedicated to delivering high-quality, scalable, and reliable solutions.",
      icon: <Rocket className="w-5 h-5" />
    },
    { 
      title: "Client-Focused", 
      description: "Your success is our priority, and we work closely with you to achieve your vision.",
      icon: <Target className="w-5 h-5" />
    }
  ];

  const services = [
    { icon: <Code className="w-6 h-6" />, title: "Custom Web Development", desc: "Modern, scalable, and responsive web applications" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile App Development", desc: "Intuitive iOS and Android applications" },
    { icon: <Database className="w-6 h-6" />, title: "API & Backend Development", desc: "Powerful and scalable backend solutions" },
    { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", desc: "Exceptional user-centric digital experiences" },
    { icon: <Server className="w-6 h-6" />, title: "System Administration", desc: "Optimized IT systems for business operations" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Tech Consultancy", desc: "Expert advice for technology growth" }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-emerald-600">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              About <span className="text-green-200">Parcch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-green-50 max-w-3xl mx-auto">
              Web & Mobile Solutions Experts
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Parcch is a forward-thinking technology startup dedicated to building cutting-edge digital solutions.
            We specialize in web development, mobile applications, and API integrations that help businesses thrive
            in an ever-evolving digital landscape. Our team is driven by innovation, creativity, and a passion for solving
            complex problems through technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to harness the power of technology to create innovative, efficient, and user-friendly digital
                solutions. We strive to empower businesses with custom web applications, mobile apps, and seamless digital
                experiences that drive growth and success. Through a blend of expertise and forward-thinking strategies, we aim
                to deliver solutions that make a real impact.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 to-green-500"></div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We envision becoming a leading tech startup recognized for innovation, reliability, and cutting-edge solutions.
                Our goal is to revolutionize the digital landscape by continuously pushing boundaries, embracing new
                technologies, and delivering impactful solutions that transform businesses and industries.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">What We Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Why Choose Us?</h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <span className="text-lg font-bold text-gray-800">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-green-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600 bg-gradient-to-br from-green-50 to-emerald-50">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-green-50 text-lg mb-8">
                Let's work together to build something amazing.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-white text-green-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}