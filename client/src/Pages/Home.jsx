import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react";
import "../Styles/Bubbles.css"
import useDarkMode from "../Components/Theme";
import { useEffect } from "react";
function Home() {

const { darkMode } = useDarkMode();
 useEffect(()=>{
   console.log("theme changed")
 },[darkMode])
    
    return <div className="p-4">
        <div class={`wrapper ${darkMode ? "": "bg-gradient-to-b from-[#04fafd] via-[#119dff] to-[#030423]" }`}>
      <section className="text-center py-20 px-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans tracking-wide text-white  font-extrabold uppercase">
        <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to our portfolio</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">Building modern web & mobile solutions with React, React native, Node.js, and Rust.</p>
        <a href="#projects" className="mt-6 inline-block border-2 border-blue-500 hover:border-blue-400 text-white py-3 px-6 rounded-lg text-lg">View Projects</a>
      </section>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>
        

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-lg text-center max-w-3xl mx-auto">I am a full-stack JavaScript developer and  Rust developer, specializing in web solutions, building APIs, and mobile app development.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className={` ${darkMode ? "bg-gray-800" : "bg-stone-100" } py-20 px-6 rounded-2xl`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-400 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Logistics Platform</h3>
              <p className="text-gray-300 mt-2">Developed a logistics and third-party eCommerce platform with real-time tracking.</p>
              <button><a href="https://sfghanalogistics.com" target="_blank">View</a></button>
            </div>
            <div className="bg-blue-400 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Attendance App</h3>
              <p className="text-gray-300 mt-2">Designed an attendance system for managing shifts and tracking worker sign-ins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Idea Section */}
      <div className="max-w-xl p-6 text-center bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">Got an idea? Let’s bring it to life!</h2>
        <p className="text-gray-600 mt-3">
          Whether you have a project in mind, a business proposal, or just want to say hello—I’d love to hear from you! 
          I’m always open to collaboration and exciting new opportunities.
        </p>
        <div className="mt-4 space-y-2 text-lg font-medium">
          <p>📌 Connect with me on 
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> GitHub</a> & 
            <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> GitLab</a>
          </p>
          <p>📩 Or drop me a message anytime!</p>
        </div>
        <p className="text-xl font-semibold text-blue-500 mt-5">Let’s build something amazing together. 🚀</p>
      </div>

      {/* Contact Section */}
      <section id="contact" className=" w-full text-center sm:">
        <h2 className="text-3xl font-bold mb-4">
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </h2>

        {/* Contact Card */}
        <div className="w-full  bg-white shadow-lg rounded-xl p-6 flex flex-col items-center ">
          <img
            src="/me.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-md"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Akuafo Patawah</h2>
          <p className="text-gray-500">Customer Support</p>

          {/* Contact Details */}
          <div className="mt-4 space-y-2 w-full text-center ">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>burxells873@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>+233021623251</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Tema, Ghana</span>
            </div>
          </div>

          {/* Contact Button */}
          <button className="mt-5 bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Contact Now
          </button>
        </div>
      </section>
    </div>
    </div>
  
  }
  export default Home