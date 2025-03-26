import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react";
import "../Styles/Bubbles.css"
import useDarkMode from "../Components/Theme";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Linkicon from "../assets/Linkicon.svg"
function Home() {

const { darkMode } = useDarkMode();
 useEffect(()=>{
   console.log("theme changed")
 },[darkMode])

 const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
const text = "Welcome to our portfolio.";
 useEffect(() => {
  if (index < text.length) {
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex(index + 1);
    }, 150); // Typing speed (adjust as needed)

    return () => clearTimeout(timeout);
  }
}, [index, text]);

const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <div className="mt-4 flex flex-col gap-10 items-center text-justify"> 
                <h2 className="font-bold text-4xl">About us</h2>
        I am a full-stack JavaScript developer and Rust developer, specializing in web solutions, building APIs, and mobile app development. With a strong foundation in modern web technologies, I design and develop scalable, high-performance applications that enhance user experience and drive business growth.

        My expertise spans frontend and backend development, database management, and cloud infrastructure, ensuring seamless integration and efficient system architecture. I am passionate about writing clean, maintainable code, optimizing performance, and leveraging the latest frameworks and tools to build innovative digital solutions.
        
        Beyond coding, I thrive on solving complex technical challenges, collaborating with teams, and continuously learning to stay ahead in the ever-evolving tech landscape. Whether it's developing a dynamic web application, crafting robust APIs, or engineering scalable mobile solutions, I am committed to delivering excellence and pushing the boundaries of what technology can achieve.
        
        
        
        
        
        
        </div>;
      case "tab2":
        return <div className="mt-4 flex flex-col gap-10 items-center text-justify">
                   <h2 className="font-bold text-4xl">Our mission</h2>
                  Our mission is to harness the power of technology to create innovative, efficient, and user-friendly digital solutions. We strive to empower businesses with custom web applications, mobile apps, and seamless digital experiences that drive growth and success. By leveraging the latest advancements in technology, we aim to streamline processes, enhance user engagement, and deliver scalable solutions tailored to each client's unique needs. Our commitment to quality, creativity, and continuous improvement ensures that we stay ahead of industry trends, helping businesses adapt, thrive, and achieve their long-term goals in an ever-evolving digital landscape.   
              </div>;
      case "tab3":
        return <div className="mt-4 flex flex-col gap-10 items-center text-justify">
                  <h2 className="font-bold text-4xl">Our vision</h2>
                  Our vision is to become a leading tech startup recognized for innovation, reliability, and cutting-edge solutions. We aim to revolutionize the digital landscape by continuously pushing boundaries, embracing new technologies, and delivering impactful solutions that transform businesses and industries.

        We envision a future where technology seamlessly enhances every aspect of life and business, fostering growth, efficiency, and sustainability. By staying ahead of industry trends, fostering a culture of creativity, and prioritizing user-centric design, we strive to set new standards in digital excellence. Our commitment to quality, scalability, and adaptability ensures that we not only meet the evolving needs of businesses but also shape the future of technology with groundbreaking solutions.</div>;
      default:
        return null;
    }
  };
    
    return <div>
        <div class={`wrapper ${darkMode ? "": "bg-gradient-to-b from-[#04fafd] via-[#119dff] to-[#030423]" }`}>
      <section className="text-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans tracking-wide text-white  font-extrabold uppercase">
         <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="typing-text"
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {displayedText}
      <span className="cursor">|</span>
    </motion.h1>
        <p className=" mt-4 text-lg md:text-md text-gray-200">We craft custom websites, web apps, and mobile apps—turning ideas into reality. Let’s build something great together!</p>
        <a href="#projects" className="mt-6 inline-block border-2 border-blue-500 hover:border-blue-400 text-white py-3 px-6 rounded-lg text-sm">View Projects</a>
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
    <div className="w-[95%] mx-auto flex flex-col mt-4 lg:flex-row">
      <div style={{ display: "flex",flexDirection:"column", marginBottom: "10px"}} className="w-full lg:w-2/5 ">
      <img src="/me.jpg" alt="me" className=" w-full " />
        <button onClick={() => setActiveTab("tab1")} className={`bg-stone-300 border-b-2 border-amber-100 py-4 ${activeTab === "tab1" ? "tab_active" : ""}`}>
          About us
        </button>
        <button onClick={() => setActiveTab("tab2")} className={`bg-stone-300 border-b-2 border-amber-100 py-4 ${activeTab === "tab2" ? "tab_active" : ""}`}>
          Mission
        </button>
        <button onClick={() => setActiveTab("tab3")} className={`bg-stone-300 py-4 ${activeTab === "tab3" ? "tab_active" : ""}`}>
          Vision
        </button>
      </div>
      <div className="w-full px-[2.5%] flex  justify-center lg:w-[55%]">{renderContent()}</div>
    </div>

     
     

      {/* Projects Section */}
      <section id="projects" className={` ${darkMode ? "bg-gray-800" : "bg-stone-100" } py-20 px-6 rounded-2xl`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="project  p-8 rounded-lg">
              <h3 className="text-xl font-semibold">Logistics Platform</h3>
              <p className="text-gray-200 mt-2">Developed a logistics and third-party eCommerce platform with real-time tracking.</p>
              <button><a href="https://sfghanalogistics.com" target="_blank">View</a></button>
            </div>
            <div className="project p-8 rounded-lg">
              <h3 className="text-xl font-semibold">Attendance App</h3>
              <p className="text-gray-200 mt-2">Designed an attendance system for managing shifts and tracking worker sign-ins.</p>
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
          <p className="text-gray-500">Tech/Customer Support</p>

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
          <Link to="/contact" >
          <button className="mt-5 flex gap-2 bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Now <img src={Linkicon} alt="link" className="w-5 "/>
          </button>
          </Link>
        </div>
      </section>
    </div>
    </div>
  
  }
  export default Home