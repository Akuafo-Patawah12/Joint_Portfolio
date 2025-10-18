"use client"
import { useState } from "react";
import { BadgeCheck, Star, Mail, Phone, MapPin, Cloud, Code, PenTool, Rocket, Server, ArrowRight, Sparkles, Zap, Shield, Users, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

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
        text: "Our vision is to be a leading tech startup, known for innovation, reliability, and cutting-edge solutions. We&apos;re redefining the digital space by pushing boundaries and delivering transformative technologies."
      }
    };

    const current = content[activeTab];

    return (
      <div className="bg-white border border-slate-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{current.title}</h2>
        <p className="text-slate-600 text-lg leading-relaxed">{current.text}</p>
      </div>
    );
  };

  const services = [
    { title: "Web Development", description: "Custom websites, portals, and web apps built for performance and scalability.", icon: Code },
    { title: "Mobile App Development", description: "iOS and Android apps with stunning UI and seamless UX.", icon: Server },
    { title: "UI/UX Design", description: "User-first product design that converts and engages.", icon: PenTool },
    { title: "Cloud Solutions", description: "Scalable cloud architecture and DevOps pipelines.", icon: Cloud },
    { title: "E-commerce Development", description: "Custom online stores and third-party integrations.", icon: Sparkles },
    { title: "Technical Consulting", description: "Guidance on digital transformation and modern tech stack decisions.", icon: Zap }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <BadgeCheck className="text-emerald-400" size={16} />
                <span className="text-sm font-medium text-emerald-400">Trusted Technology Partner</span>
              </div>
              
              <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
                Building Digital Solutions That Drive Growth
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                End-to-end technology services tailored to your business from product design to scalable system architecture.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </button>
                
                <button className="px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors">
                  View Projects
                </button>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-800">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Trusted by 50+ Clients</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    </div>
                    <BadgeCheck className="text-emerald-500" size={20} />
                  </div>
                  
                  {[
                    { icon: Code, label: "System Design & Architecture" },
                    { icon: PenTool, label: "UI/UX Design & Prototyping" },
                    { icon: Cloud, label: "Custom Software Development", highlight: true },
                    { icon: Server, label: "Cloud Hosting & DevOps" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        item.highlight ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-700/50 hover:bg-slate-700'
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-slate-600">
                        <item.icon size={18} className="text-slate-200" />
                      </div>
                      <span className="font-medium text-slate-200 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Tabs */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">About Parcch</h2>
            <p className="text-lg text-slate-600">Learn more about who we are and what we stand for</p>
          </div>

          <div className="flex justify-center gap-3 mb-8">
            {[
              { label: "About Us", tab: "tab1" },
              { label: "Mission", tab: "tab2" },
              { label: "Vision", tab: "tab3" }
            ].map(({ label, tab }) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all lg:px-6 ${
                  activeTab === tab
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to help your business succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-emerald-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors">
                  <service.icon className="text-slate-700 group-hover:text-emerald-600 transition-colors" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                
                <div className="flex items-center text-emerald-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Why Choose Parcch?</h2>
            <p className="text-lg text-slate-600">Smart, user-focused digital solutions with modern tech and real results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: Zap, 
                title: "Innovative Solutions", 
                description: "We harness cutting-edge technologies to deliver scalable, secure, and future-ready software."
              },
              { 
                icon: Users, 
                title: "Client-Centric Approach", 
                description: "Your vision drives our development. We collaborate closely to exceed expectations."
              },
              { 
                icon: Shield, 
                title: "Proven Expertise", 
                description: "Our experienced team delivers quality solutions backed by years of industry knowledge."
              },
              { 
                icon: Rocket, 
                title: "Fast Delivery", 
                description: "We value your time. Efficient workflows ensure rapid development without compromising quality."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left CTA */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether you have a project in mind, a business proposal, or just want to say hello we&apos;d love to hear from you.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>

            {/* Right Contact Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-slate-700 mx-auto mb-3 overflow-hidden">
                  <Image
                    src="/me.jpg"
                    alt="Akuafo Patawah"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Akuafo Patawah</h3>
                <p className="text-slate-400 text-sm">Tech & Customer Support</p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Phone, text: "+233 201 623 251", href: "tel:+233201623251" },
                  { icon: Mail, text: "parcch26@gmail.com", href: "mailto:parcch26@gmail.com" },
                  { icon: MapPin, text: "Segico Flat, Community 4, Tema, Ghana", href: null }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                    <div className="p-2 rounded-lg bg-slate-600">
                      <item.icon size={16} className="text-slate-300" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-slate-300 text-sm hover:text-white transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                Contact Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
}