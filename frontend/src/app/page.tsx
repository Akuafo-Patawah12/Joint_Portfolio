"use client"
import { useState, useEffect } from "react";
import { BadgeCheck, Star, Mail, Phone, MapPin, Cloud, Code, PenTool, Rocket, Server, ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);



  const renderContent = () => {
    const content: Record<string, { title: string; text: string }> = {
      tab1: {
        title: "About Us",
        text: "Parcch is a forward-thinking technology startup dedicated to building cutting-edge digital solutions. We specialize in web development, mobile applications, and API integrations that empower businesses in an ever-evolving digital landscape."
      },
      tab2: {
        title: "Our Mission",
        text: "We harness technology to deliver innovative, efficient, and user-friendly solutions — empowering businesses with custom apps and seamless digital experiences that fuel growth."
      },
      tab3: {
        title: "Our Vision",
        text: "Our vision is to be a leading tech startup, known for innovation, reliability, and cutting-edge solutions. We're redefining the digital space by pushing boundaries and delivering transformative technologies."
      }
    };

    const current = content[activeTab];

    return (
      <div className="relative px-8 py-12 w-full backdrop-blur-xl bg-white/90 border border-white/20 shadow-2xl rounded-3xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-6">
            {current.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {current.text}
          </p>
        </div>
      </div>
    );
  };

  const services = [
    { title: "Web Development", description: "Custom websites, portals, and web apps built for performance and scalability.", icon: Code, gradient: "from-blue-500 to-cyan-500" },
    { title: "Mobile App Development", description: "iOS and Android apps with stunning UI and seamless UX.", icon: Server, gradient: "from-purple-500 to-pink-500" },
    { title: "UI/UX Design", description: "User-first product design that converts and engages.", icon: PenTool, gradient: "from-orange-500 to-red-500" },
    { title: "Cloud Solutions", description: "Scalable cloud architecture and DevOps pipelines.", icon: Cloud, gradient: "from-emerald-500 to-teal-500" },
    { title: "E-commerce Development", description: "Custom online stores and third-party integrations.", icon: Sparkles, gradient: "from-violet-500 to-purple-500" },
    { title: "Technical Consulting", description: "Guidance on digital transformation and modern tech stack decisions.", icon: Zap, gradient: "from-yellow-500 to-orange-500" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
          style={{ 
            top: `${20 + scrollY * 0.1}%`,
            left: `${10 + mousePosition.x * 0.01}%`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"
          style={{ 
            bottom: `${10 + scrollY * 0.05}%`,
            right: `${15 + mousePosition.y * 0.01}%`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <BadgeCheck className="text-emerald-600" size={20} />
              <span className="text-sm font-semibold text-emerald-700">Verified Tech Partner</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600">
                Parcch Tech
              </span>
              <br />
              <span className="text-slate-900">Solutions.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              We provide end-to-end tech services tailored to your business—from product design to scalable system architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-2xl font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-semibold hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
                View Projects
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 border-4 border-white shadow-lg"></div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Trusted by 50+ Clients</p>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <BadgeCheck className="text-emerald-600" size={24} />
                </div>
                
                {[
                  { icon: Code, label: "System Design & Architecture", color: "from-blue-500 to-cyan-500" },
                  { icon: PenTool, label: "UI/UX Design & Prototyping", color: "from-purple-500 to-pink-500" },
                  { icon: Cloud, label: "Custom Software Development", color: "from-emerald-500 to-teal-500", highlight: true },
                  { icon: Server, label: "Cloud Hosting & DevOps", color: "from-orange-500 to-red-500" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                      item.highlight ? 'bg-emerald-50 border-2 border-emerald-300 shadow-lg scale-105' : 'bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Tabs */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">More About Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { label: "About Us", tab: "tab1" },
              { label: "Mission", tab: "tab2" },
              { label: "Vision", tab: "tab3" }
            ].map(({ label, tab }) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-xl scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Building products and tools that drive innovation, enhance user experience, and deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
                
                <div className="mt-6 flex items-center text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="text-yellow-500 fill-yellow-500" size={32} />
              <h2 className="text-5xl font-black text-slate-900">Why Choose Parcch?</h2>
            </div>
            <p className="text-xl text-slate-600">Smart, user-focused digital solutions with modern tech and real results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Zap, 
                title: "Innovative Solutions", 
                description: "We harness cutting-edge technologies to deliver scalable, secure, and future-ready software.",
                color: "from-emerald-500 to-teal-500"
              },
              { 
                icon: Users, 
                title: "Client-Centric Approach", 
                description: "Your vision drives our development. We collaborate closely to exceed expectations.",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: Shield, 
                title: "Proven Expertise", 
                description: "Our experienced team delivers quality solutions backed by years of industry knowledge.",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: Rocket, 
                title: "Fast Delivery", 
                description: "We value your time. Efficient workflows ensure rapid development without compromising quality.",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left CTA */}
          <div className="text-white space-y-8">
            <h2 className="text-5xl font-black leading-tight">
              Got an idea?<br />Let&apos;s bring it to life!
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Whether you have a project in mind, a business proposal, or just want to say hello—we&apos;d love to hear from you!
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-emerald-600 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl">
                Start Project
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 mx-auto mb-4 shadow-xl"></div>
              <h3 className="text-2xl font-bold text-slate-900">Akuafo Patawah</h3>
              <p className="text-slate-600">Tech & Customer Support</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "+233201623251" },
                { icon: Mail, text: "parcch26@gmail.com" },
                { icon: MapPin, text: "Segico Flat, Community 4, Tema - Ghana" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <item.icon size={20} />
                  </div>
                  <span className="text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Contact Now
              <Rocket size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}