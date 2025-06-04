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
  className={`fixed top-[100px] left-0 px-[2.5%] w-full bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
    isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
  }`}
>
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

    )
}

export default NavModal;