'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import  { useAppDispatch,useAppSelector,RootState } from "../redux";
import {  setIsSidebarCollapsed } from "@/state";
import {XIcon,Copyright,Home, Info, Mail} from "lucide-react"
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';



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
    { href: '/', label: 'Home', icon: <Home size={20} /> },
    { href: '/about', label: 'About', icon: <Info size={20} /> },
    { href: '/contact', label: 'Contact', icon: <Mail size={20} /> },
  ]

    return(
        <div
  className={`fixed bottom-0 left-0  w-full h-4/5   shadow-md z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
    isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
  }`}
>




<div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-2xl text-white h-1/5 py-4 px-6 z-50">
  <div className="flex flex-col  sm:flex-row justify-between items-center gap-4">
    {/* Social Media Icons */}
    <div className="flex items-center gap-6">
      <a href="https://facebook.com/AkuafoPatawah" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
        <FacebookOutlined style={{ fontSize: '20px' }} />
      </a>
      <a href="https://www.instagram.com/akuafopatawah/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
        <InstagramOutlined style={{ fontSize: '20px' }} />
      </a>
      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
        <WhatsAppOutlined style={{ fontSize: '20px' }} />
      </a>
    </div>

    {/* Copyright Info */}
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <Copyright size={16} />
      <span>{new Date().getFullYear()} Parcch. All rights reserved.</span>
    </div>
  </div>
</div>
<div className="bg-white border-t border-green-200 w-full px-[2.5%] h-4/5 rounded-t-2xl">
      <div className="flex items-center justify-between p-4 border-b-4 border-gray-100">
        <h2 className="text-lg font-semibold">Quick Access</h2>
        <button aria-label="close" onClick={toggleSidebar}>
          <XIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="relative pl-4 w-[90%] mx-auto ">
        {/* Vertical green line */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-green-500 rounded" />

        <ul className="flex flex-col gap-2 mt-5  text-sm text-stone-600 relative z-10">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href} className="relative">
                {isActive && (
                  <div className="absolute -left-[12px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[10px] border-transparent border-l-green-500" />
                )}
                <Link
                  href={link.href}
                  onClick={toggleSidebar}
                  className={`flex items-center gap-3 ml-1 p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-green-100 text-green-800 '
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
</div>
</div>

    )
}

export default NavModal;