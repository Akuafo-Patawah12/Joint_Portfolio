'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Moon, Menu, Search, Bell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../redux";
import { setIsSidebarCollapsed } from "@/state";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const dispatch = useAppDispatch();
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg backdrop-blur-xl" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-500 p-2 rounded-xl">
                  <Image
                    src="/assets/logo.svg"
                    alt="parcch logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Parcch
              </span>
            </Link>
          </motion.div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-gradient-to-r from-stone-100 to-stone-50 border border-stone-200/50 shadow-sm">
            {tabs.map((tab, i) => {
              const isActive = pathname === tab.href;
              return (
                <motion.div
                  key={tab.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={tab.href}
                    className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-xl shadow-md border border-emerald-100"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive
                          ? "text-emerald-600"
                          : "text-stone-600 group-hover:text-emerald-500"
                      }`}
                    >
                      {tab.name}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                        layoutId="activeDot"
                        style={{ x: "-50%" }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <button
              className="hidden md:flex p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              className="hidden md:flex p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-all duration-300 hover:scale-105 active:scale-95 relative"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 text-amber-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </button>

            <button
              className="lg:hidden p-2.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-600 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => toggleSidebar()}
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>

            <Link
              href="/get-started"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </motion.section>
        </div>
      </div>
    </motion.header>
  );
}