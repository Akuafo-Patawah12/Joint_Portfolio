'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useAppDispatch, useAppSelector, RootState } from "../redux";
import { setIsSidebarCollapsed } from "@/state";
import { XIcon, Copyright, Home, Info, Mail } from "lucide-react"
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, TwitterOutlined } from '@ant-design/icons';

const NavModal = () => {
  const isSidebarCollapsed = useAppSelector(
    (state: RootState) => state.global.isSidebarCollapsed
  );

  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const pathname = usePathname()

  const links = [
    { 
      href: '/', 
      label: 'Home', 
      icon: <Home size={20} strokeWidth={1.5} />,
      description: 'Dashboard & Overview'
    },
    { 
      href: '/about', 
      label: 'About', 
      icon: <Info size={20} strokeWidth={1.5} />,
      description: 'Our Story & Mission'
    },
    { 
      href: '/contact', 
      label: 'Contact', 
      icon: <Mail size={20} strokeWidth={1.5} />,
      description: 'Get In Touch'
    },
  ]

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isSidebarCollapsed ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isSidebarCollapsed ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={toggleSidebar}
      />

      {/* Main Modal Container */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[82vh] transform transition-transform duration-400 ease-out ${
          isSidebarCollapsed ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Content Container */}
        <div className="relative h-full bg-white rounded-t-3xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)] flex flex-col">
          
          {/* Drag Handle */}
          <div className="pt-3 pb-2 flex justify-center">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>

          {/* Header */}
          <div className="px-6 pt-2 pb-5 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
                  Menu
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">Navigate to your destination</p>
              </div>
              <button 
                onClick={toggleSidebar}
                className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-center"
                aria-label="close"
              >
                <XIcon className="w-5 h-5 text-gray-600" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav className="space-y-2">
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleSidebar}
                    className="block"
                  >
                    <div className={`relative px-4 py-4 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-gray-900 shadow-sm' 
                        : 'bg-white hover:bg-gray-50 active:bg-gray-100'
                    }`}>
                      
                      <div className="flex items-center gap-4">
                        {/* Icon Container */}
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isActive 
                            ? 'bg-white/10 text-white' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {link.icon}
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-medium text-[15px] mb-0.5 transition-colors ${
                            isActive ? 'text-white' : 'text-gray-900'
                          }`}>
                            {link.label}
                          </h3>
                          <p className={`text-xs transition-colors truncate ${
                            isActive ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                            {link.description}
                          </p>
                        </div>

                        {/* Chevron */}
                        <svg 
                          className={`w-5 h-5 flex-shrink-0 transition-colors ${
                            isActive ? 'text-white' : 'text-gray-400'
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </nav>

            {/* Info Card */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌾</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Akuafo Patawah</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Premium virtual products and services. Quality you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-3 mb-4">
              {[
                { icon: <FacebookOutlined />, href: 'https://facebook.com/AkuafoPatawah', label: 'Facebook' },
                { icon: <InstagramOutlined />, href: 'https://www.instagram.com/akuafopatawah/', label: 'Instagram' },
                { icon: <TwitterOutlined />, href: '#', label: 'Twitter' },
                { icon: <WhatsAppOutlined />, href: 'https://wa.me/your-number', label: 'WhatsApp' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:border-gray-300 active:bg-gray-50 transition-all shadow-sm"
                >
                  <span className="text-base">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Copyright size={13} strokeWidth={2} />
              <span>{new Date().getFullYear()} Parcch. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavModal;