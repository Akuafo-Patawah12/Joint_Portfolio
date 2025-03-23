import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Project";
import "./App.css"
import Header from "./Components/Header";
import About from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showDrop,setShowDrop] = useState(false)
  return (
    <main className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Header DarkMode={[darkMode,setDarkMode]} dropdown={[showDrop,setShowDrop]}/>
      
      {showDrop && <div className="flex w-[95%] mx-auto relative top-[-18px] lg:hidden"><button className="w-[49%] bg-blue-100 py-3"><a href="/About">About</a></button><button className="w-[49%] border-l-2 border-stone-100 bg-blue-100 py-3"><a href="/Contact">Contact</a></button> <div className="size-4 absolute top-[-8px] right-[3%] rotate-45 bg-blue-100"></div></div>}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About/> } />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer/>
    </main>
  );
}



export default App;

