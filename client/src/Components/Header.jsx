
import { motion } from "framer-motion";
import { Moon, Sun ,Menu} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header({DarkMode}) {
    const [darkMode,setDarkMode] = DarkMode

    return(
        <header className={`p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          <a href="/">Our Portfolio</a>
        </motion.h1>
        
        <nav className="flex gap-6">
          
            <NavLink to="/about" className="hover:underline">About</NavLink>
            <NavLink to="/projects" className="hover:underline">Projects</NavLink>
            
          
        </nav>

        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Menu/>
      </div>
    </header>
    )
}