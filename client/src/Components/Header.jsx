
import { motion } from "framer-motion";
import { Moon, Sun ,Menu, X} from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg"

export default function Header({DarkMode, dropdown}) {
    const [darkMode,setDarkMode] = DarkMode
    const [showDrop,setShowDrop] = dropdown

    return(
        <header className={`p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl"
        >
          <a href="/" className="flex">Techscr<img src={Logo} alt="logo"/>ww</a>
        </motion.h2>
        
        <nav className="hidden gap-6 lg:flex">
          
            <NavLink to="/about" className="hover:underline">About</NavLink>
            <NavLink to="/projects" className="hover:underline">Projects</NavLink>
            
          
        </nav>
         
        <section className="flex gap-2 items-center">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="lg:hidden" onClick={()=> setShowDrop(prev => !prev)}> {showDrop ?  <X/> : <Menu />}</button>
        </section>
      </div>
    </header>
    )
}