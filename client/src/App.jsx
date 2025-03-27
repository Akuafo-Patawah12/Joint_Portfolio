import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Project";
import "./App.css"
import Header from "./Components/Header";
import About from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Footer from "./Components/Footer";
import useDarkMode from "./Components/Theme";
import Errorpage from "./Pages/404page";

function App() {
  const { darkMode} = useDarkMode();
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
  const [showDrop,setShowDrop] = useState(false)

  const link =(path) =>{
    window.location.href=path
   }

  return (
    <main className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Header  dropdown={[showDrop,setShowDrop]}/>
      
      {showDrop && (
        <div className="w-[95%] fixed z-24 top-[100px] left-1/2 translate-x-[-50%] translate-y-[-50%]">
  <div className="relative w-full rounded-lg border-[1px] border-stone-300 top-[-10px] isolate mx-auto lg:hidden">
    <div className="absolute border-t-[1px] border-l-[1px] border-stone-300 top-[-8px] right-[5px] w-3 h-3 rotate-45 bg-blue-50"></div>
    <div className="flex w-full bg-blue-50 shadow-md rounded-lg overflow-hidden">
      <button className="w-1/2 py-3 text-center border-r-[1px] border-stone-300 text-blue-900 font-semibold hover:bg-blue-200 transition">
        <span onClick={()=> link("/about")} className="h-full w-full block">About</span>
      </button>
      <button className="w-1/2 py-3 text-center text-blue-900 font-semibold border-l-2 border-stone-200 hover:bg-blue-200 transition">
        <span onClick={()=> link("/contact")} className="h-full w-full block">Contact</span>
      </button>
    </div>
    </div>
  </div>)}

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About/> } />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<Errorpage />} />  
        </Routes>
        <Footer/>
    </main>
  );
}



export default App;

