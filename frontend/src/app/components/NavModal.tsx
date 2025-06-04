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
  className={`fixed bottom-0 left-0  w-full h-4/5  shadow-md z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
    isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
  }`}
>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-black opacity-50" onClick={toggleSidebar}></div>
<div className="bg-white w-full px-[2.5%] h-1/2 rounded-t-2xl "> 
  <div className="flex items-center justify-between p-4 border-b">
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