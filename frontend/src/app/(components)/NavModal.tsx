'use client'
import Link from "next/link";
import  { useAppDispatch,useAppSelector,RootState } from "../redux";
import {  setIsSidebarCollapsed } from "@/state";
import {XIcon,Copyright} from "lucide-react"
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';



const NavModal = () => {
   const isSidebarCollapsed = useAppSelector(
       
       (state: RootState) => state.global.isSidebarCollapsed
     );
   
     const dispatch = useAppDispatch();
   
     const toggleSidebar = () => {
       dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
     };
    return(
        <div
  className={`fixed bottom-0 left-0  w-full h-4/5  shadow-md z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
    isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
  }`}
>

<div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-2xl text-white h-1/5 py-4 px-6 z-50">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
    {/* Social Media Icons */}
    <div className="flex items-center gap-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
        <FacebookOutlined style={{ fontSize: '24px' }} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
        <InstagramOutlined style={{ fontSize: '24px' }} />
      </a>
      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
        <WhatsAppOutlined style={{ fontSize: '24px' }} />
      </a>
    </div>

    {/* Copyright Info */}
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <Copyright size={16} />
      <span>2025 Your Company. All rights reserved.</span>
    </div>
  </div>
</div>
<div className="bg-white w-full px-[2.5%] h-4/5 rounded-t-2xl "> 
  <div className="flex items-center justify-between p-4 border-b border-gray-200">
    <h2 className="text-lg font-semibold">Menu</h2>
    <button onClick={toggleSidebar}>
      <XIcon className="w-5 h-5" />
    </button>
  </div>
  <ul className="flex flex-col gap-4 p-4">
    <li>
      <Link href="/" onClick={toggleSidebar}>Home</Link>
    </li>
    <li>
      <Link href="/about" onClick={toggleSidebar}>About</Link>
    </li>
    <li>
      <Link href="/contact" onClick={toggleSidebar}>Contact</Link>
    </li>
  </ul>
</div>
</div>

    )
}

export default NavModal;