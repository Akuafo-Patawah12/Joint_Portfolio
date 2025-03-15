
function Home() {

    
    return <div className="p-4">
        <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to our portfolio</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">Building modern web & mobile solutions with React, React native, Node.js, and Rust.</p>
        <a href="#projects" className="mt-6 inline-block border-2 border-blue-600 hover:border-blue-500 text-white py-3 px-6 rounded-lg text-lg">View Projects</a>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-lg text-center max-w-3xl mx-auto">I am a full-stack JavaScript developer and  Rust developer, specializing in web solutions, building APIs, and mobile app development.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Logistics Platform</h3>
              <p className="text-gray-300 mt-2">Developed a logistics and third-party eCommerce platform with real-time tracking.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Attendance App</h3>
              <p className="text-gray-300 mt-2">Designed an attendance system for managing shifts and tracking worker sign-ins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Contact us</h2>
        <p className="mt-4 text-lg">Email: </p>
        
      </section>
    </div>
  
  }
  export default Home