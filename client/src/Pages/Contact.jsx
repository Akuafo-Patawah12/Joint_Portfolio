import React,{useState} from "react";
import { Facebook, MessageCircle } from "lucide-react";


const ContactPage = () => {

    const [emailData, setEmailData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [responseMessage, setResponseMessage] = useState("");
    
      // Handle input changes
      const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
      };
    
      // Send email using fetch
      const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");
    
        try {
          const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailData),
          });
    
          const result = await response.json();
    
          if (result.success) {
            setResponseMessage("✅ Email sent successfully!");
            setEmailData({ name: "", subject: "", message: "" });
          } else {
            setResponseMessage("❌ Error: " + result.error);
          }
        } catch (error) {
            console.log(error)
          setResponseMessage("❌ Failed to send email. Please try again.");
        } finally {
          setLoading(false);
        }

        
      };

      


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <form className="space-y-4" onSubmit={sendEmail}>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your name"
              value={emailData.name}
              onChange={handleChange}

            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
              value={emailData.email}
              onChange={handleChange}

            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="5"
              name="message"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Write your message"
              value={emailData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={loading}

          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        
        <div className="mt-3 mx-auto flex gap-3 w-fit">
      <a href="https://www.facebook.com/AkuafoPatawah/" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
      </a>

      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-green-500 hover:text-green-700"
  >
    <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 1.5 5.2L2 22l5.3-1.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2zm4.5 13.8c-.3.8-1.5 1.5-2.1 1.4-.6-.1-1.3-.5-2.8-1.3-2.3-1.3-3.8-3-4.1-3.3-.4-.5-.9-1.2-.9-2s.3-1.4.6-1.9c.3-.5.7-.6.9-.6h.7c.3 0 .5 0 .7.5.3.6.9 2 .9 2.1s.2.3 0 .6c-.2.3-.4.5-.6.7s-.3.4-.1.8c.2.3.8 1.4 1.7 2.2 1.2 1 2.1 1.3 2.4 1.4.3.1.5 0 .7-.3.2-.3.8-.9.9-1.1.1-.2.2-.2.4-.1.2.1 1 .5 1.2.6.2.1.4.2.5.3s.2.3.2.4c0 .2-.3 1.2-.7 1.9z" />
  </svg>
      </a>
    </div>

    <div className="mt-3 text-center text-gray-600">
          <p>Phone: +233201623251</p>
          <p>Email: burxells873@gmail.com</p>
          
        </div>
      </div>
      {responseMessage && (
        
      <div className="bg-white p-6 rounded-lg text-center border-[1px] border-stone-300 fixed top-[80px] shadow-2xl left-[50%] translate-x-[-50%] translate-y-[-50%] animate-fadeIn">
        <p className="mt-2 text-gray-600">{responseMessage}</p>
      </div>
   
      )}
    </div>
  );
};

export default ContactPage;
