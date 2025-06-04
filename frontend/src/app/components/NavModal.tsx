'use client'
import Link from "next/link";
import  { useAppDispatch,useAppSelector,RootState } from "../redux";
import {  setIsSidebarCollapsed } from "@/state";
import {XIcon} from "lucide-react"


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
        className={`fixed top-[80px] left-1/2 -translate-1/2 py-10 w-64 bg-white shadow-md z-40 transform ${
          isSidebarCollapsed ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => toggleSidebar()}>
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <Link href="/" onClick={() => toggleSidebar()}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => toggleSidebar()}>About</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => toggleSidebar()}>Contact</Link>
          </li>
        </ul>
      </div>
    )
}

export default NavModal;