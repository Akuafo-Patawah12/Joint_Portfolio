import React,{useState} from "react";

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
        <div className="mt-6 text-center text-gray-600">
          <p>Email: burxells873@gmail.com</p>
          <p>Phone: +233201623251</p>
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
