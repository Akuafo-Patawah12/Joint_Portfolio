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
        return <div className="mt-4 flex relative flex-col gap-6 items-center text-justify"> 
                <h2 className="font-bold text-4xl">About us</h2>
                Techscroww is a forward-thinking technology startup dedicated to building cutting-edge digital solutions.
      We specialize in web development, mobile applications, and API integrations that help businesses thrive
      in an ever-evolving digital landscape. Our team is driven by innovation, creativity, and a passion for solving
      complex problems through technology.

      <button onClick={()=> link("/about")} className="  lg:absolute border-2 border-blue-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0">See more...</button>
        
        
        
        
        
        
        </div>;
      case "tab2":
        return <div className="relative mt-4 flex flex-col gap-6 items-center text-justify">
                   <h2 className="font-bold text-4xl">Our mission</h2>
                  Our mission is to harness the power of technology to create innovative, efficient, and user-friendly digital solutions. We strive to empower businesses with custom web applications, mobile apps, and seamless digital experiences that drive growth and success. By leveraging the latest advancements in technology, we aim to streamline processes, enhance user engagement, and deliver scalable solutions tailored to each client's unique needs. Our commitment to quality, creativity, and continuous improvement ensures that we stay ahead of industry trends, helping businesses adapt, thrive, and achieve their long-term goals in an ever-evolving digital landscape.   
                  <button onClick={()=> link("/about")} className="  lg:absolute border-2 border-blue-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0">See more...</button>
              </div>;
      case "tab3":
        return <div className="relative mt-4 flex flex-col gap-6 items-center text-justify">
                  <h2 className="font-bold text-4xl">Our vision</h2>
                  Our vision is to become a leading tech startup recognized for innovation, reliability, and cutting-edge solutions. We aim to revolutionize the digital landscape by continuously pushing boundaries, embracing new technologies, and delivering impactful solutions that transform businesses and industries.

        We envision a future where technology seamlessly enhances every aspect of life and business, fostering growth, efficiency, and sustainability. By staying ahead of industry trends, fostering a culture of creativity, and prioritizing user-centric design, we strive to set new standards in digital excellence. 
        <button onClick={()=> link("/about")} className="  lg:absolute border-2 border-blue-500 rounded-2xl font-medium italic leading-8  w-[140px] h-[40px] bottom-6  right-0">See more...</button>
        </div>;
      default:
        return null;
    }
  };

  const link =(path) =>{
    window.location.href=path
   }
    
    return <div>
        <div class={`wrapper ${darkMode ? "": "bg-gradient-to-b from-[#04fafd] via-[#119dff] to-[#030423]" }`}>
      <section className="text-center py-[60px] flex flex-col justify-center items-center    font-sans  text-white  font-extrabold uppercase">
         <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="typing-text w-[80%]"
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        isolation:"isolate",
        
      }}
    >
      {displayedText}
      {index===text.length ? "" :<span className="cursor">|</span>}
    </motion.h1>
        <p className=" mt-4 text-lg  text-md text-gray-200 isolate w-[80%] lg:w-[300px]">We craft custom websites, web apps, and mobile apps—turning ideas into reality. Let’s build something great together!</p>
        <a href="#projects" className="mt-[70px] inline-block border-2 border-blue-500 hover:border-blue-400 text-white py-3 px-6 rounded-lg text-sm">View Projects</a>
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
      <section className="w-full relative">
      <div className="absolute top-0 left-0 w-full h-full z-4  bg-black opacity-60 text-white flex justify-center items-center font-bold text-2xl italic">Overview</div>
      <img src="/code.jpg" alt="me" className=" w-full " />
      
      </section>
        <button onClick={() => setActiveTab("tab1")} className={`bg-stone-300 border-b-2 font-medium border-amber-100 py-4 ${activeTab === "tab1" ? "tab_active" : ""}`}>
          About us
        </button>
        <button onClick={() => setActiveTab("tab2")} className={`bg-stone-300 border-b-2 font-medium border-amber-100 py-4 ${activeTab === "tab2" ? "tab_active" : ""}`}>
          Mission
        </button>
        <button onClick={() => setActiveTab("tab3")} className={`bg-stone-300 font-medium py-4 ${activeTab === "tab3" ? "tab_active" : ""}`}>
          Vision
        </button>
      </div>
      <div className="w-full px-[2.5%] flex  justify-center lg:w-[55%]">{renderContent()}</div>
    </div>

     
     

      {/* Projects Section */}
      <section id="projects" className={` ${darkMode ? "bg-gray-800" : "bg-stone-100" } mt-[70px] py-20 px-6 rounded-2xl`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.div
      className="project p-8 rounded-lg bg-gray-800 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold ">Logistics Platform</h3>
      <p className="text-gray-200 mt-2">
        Developed a logistics and third-party eCommerce platform with real-time tracking.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <a href="https://sfghanalogistics.com" target="_blank" rel="noopener noreferrer">
          View
        </a>
      </button>
    </motion.div>
    <motion.div
      className="project p-8 rounded-lg bg-gray-800 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
              <h3 className="text-xl font-semibold">Attendance App</h3>
              <p className="text-gray-200 mt-2">Designed an attendance system for managing shifts and tracking worker sign-ins.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Idea Section */}
      <div className=" p-6 text-center bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">Got an idea? Let’s bring it to life!</h2>
        <p className="text-gray-600 mt-3">
          Whether you have a project in mind, a business proposal, or just want to say hello—I’d love to hear from you! 
          I’m always open to collaboration and exciting new opportunities.
        </p>
        
      <div className="flex items-center justify-center gap-2">
        
        <p className="mx-auto">
          Connect with me on{" "}
          <a
            href="https://github.com/Akuafo-Patawah12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>{" "}
          &{" "}
          <a
            href="https://gitlab.com/Akuafo-Patawah12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitLab
          </a>
        </p>
      </div>

      <div className="flex items-center gap-2 mt-2">
        
        <p className="mx-auto">Or drop me a message anytime!</p>
      </div>

      <p className="text-xl font-semibold text-blue-600 mt-5">
        Let’s build something amazing together. 🚀
      </p>
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
              <span>+233201623251</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Tema, Ghana</span>
            </div>
          </div>

          {/* Contact Button */}
          
          <button onClick={()=> link("/contact")} className="mt-5 flex gap-2 bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Now <img src={Linkicon} alt="link" className="w-5 "/>
          </button>
          
        </div>
      </section>
    </div>
    </div>
  
  }
  export default Home