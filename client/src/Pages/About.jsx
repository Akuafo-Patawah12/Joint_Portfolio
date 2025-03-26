import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">

                
                         


                <h1 className="text-4xl font-bold text-center mb-6">About us</h1>
                <section className="mb-8">
    
    <p>
      Techscroww is a forward-thinking technology startup dedicated to building cutting-edge digital solutions.
      We specialize in web development, mobile applications, and API integrations that help businesses thrive
      in an ever-evolving digital landscape. Our team is driven by innovation, creativity, and a passion for solving
      complex problems through technology.
    </p>
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
    <p>
      Our mission is to harness the power of technology to create innovative, efficient, and user-friendly digital solutions.
      We strive to empower businesses with custom web applications, mobile apps, and seamless digital experiences that
      drive growth and success. Through a blend of expertise and forward-thinking strategies, we aim to deliver solutions
      that make a real impact.
    </p>
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
    <p>
      We envision becoming a leading tech startup recognized for innovation, reliability, and cutting-edge solutions.
      Our goal is to revolutionize the digital landscape by continuously pushing boundaries, embracing new technologies,
      and delivering impactful solutions that transform businesses and industries.
    </p>
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Custom Web Development</strong> – Crafting modern, scalable, and responsive web applications tailored to your business needs.</li>
      <li><strong>Mobile App Development</strong> – Building intuitive and high-performance mobile apps for both iOS and Android.</li>
      <li><strong>API & Backend Development</strong> – Creating powerful and scalable backend solutions for seamless data handling.</li>
      <li><strong>UI/UX Design</strong> – Designing user-centric interfaces that provide exceptional digital experiences.</li>
      <li><strong>Tech Consultancy</strong> – Offering expert advice to help businesses leverage the right technologies for growth.</li>
    </ul>
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Innovation-Driven</strong> – We leverage the latest technologies to build future-proof solutions.</li>
      <li><strong>User-Centered Approach</strong> – Every project is designed with the end user in mind, ensuring seamless experiences.</li>
      <li><strong>Commitment to Excellence</strong> – We are dedicated to delivering high-quality, scalable, and reliable solutions.</li>
      <li><strong>Client-Focused</strong> – Your success is our priority, and we work closely with you to achieve your vision.</li>
    </ul>
  </section>
  
  <section className="text-center mt-10">
    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
    <p>Are you ready to transform your digital presence? Let’s work together to build something amazing.</p>

  </section>

                <div className="text-center mt-6 h-10 w-full] rounded-2xl border-2 border-blue-700">
                    <a href="/contact" className="text-blue-500 leading-loose  block  w-full h-[40px] hover:underline">Contact us today!</a>
                </div>
            </div>
        </div>
    );
};

export default About;