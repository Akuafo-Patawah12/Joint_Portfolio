import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Project";
import "./App.css"
import Header from "./Components/Header";
import About from "./Pages/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Header DarkMode={[darkMode,setDarkMode]}/>
      
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About/> } />
        </Routes>
        
    </main>
  );
}



export default App;

