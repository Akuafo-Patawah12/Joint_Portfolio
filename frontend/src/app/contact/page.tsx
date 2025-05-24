"use client"
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
 const [name, setName] = React.useState<string>("");
 const [email, setEmail] = React.useState<string>("");
 const [message, setMessage] = React.useState<string>("");
 const [loading,setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Clear previous error and set loading
  setError(null);
  setLoading(true);

  // Basic validation
  if (!name || !email || !message) {
    setError("All fields are required.");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }

    // Reset form fields on success
    setName("");
    setEmail("");
    setMessage("");

    toast.success("Message sent successfully!");
  } catch (err) {
    console.error("Error sending message:", err);
    setError("Failed to send message. Please try again later.");
  } finally {
    setLoading(false);

    // Optional: Clear error message after delay
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }
};


  return (
    <div  className="bg-green-50 py-[50px] ">

       

            <div style={{marginInline:" auto"}} className="container  p-6 max-w-[90%] bg-white shadow-xl border border-green-300 rounded-2xl lg:max-w-3xl ">
  <h1 className="text-3xl font-bold text-center  ">
    Contact Parcch
  </h1>
 
    <div style={{marginTop:"10px"}} className="w-full h-[2px] bg-gradient-to-r from-white via-green-300 to-white"></div>

  <p style={{marginBlock:"24px"}} className="text-center font-bold text-gray-600 mb-8">
    We’re here to help with anything tech reach out and let’s create something amazing.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Contact Form */}
    <div>
      <h2 style={{marginBlock:"16px"}} className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <label style={{marginBlock:"4px"}} className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
          />
        </div>
        <div>
          <label style={{marginBlock:"4px"}} className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
          />
        </div>
        <div>
          <label style={{marginBlock:"4px"}} className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green text-sm"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm font-semibold"
        >
          {loading? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>

    {/* Contact Info */}
    <div>
      <h2 style={{marginBlock:"16px"}} className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h2>
      <p style={{marginBlock:"24px"}} className="text-gray-600 text-sm mb-6">
        Prefer direct contact? Reach us with the info below:
      </p>
      <ul className="space-y-4 text-sm text-gray-700">
        <li className="flex items-center gap-3">
          <span className="p-2 rounded-full bg-gray-100 text-green-500">
            <Phone size={18} />
          </span>
          <span>020 162 3251</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="p-2 rounded-full bg-gray-100 text-green-500">
            <Mail size={18} />
          </span>
          <span>burxells873@gmail.com</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="p-2 rounded-full bg-gray-100 text-green-500">
            <MapPin size={18} />
          </span>
          <span>Segico flat, Community 4, Tema-Ghana</span>
        </li>
      </ul>

      <div style={{marginBlock:"24px"}} className="mt-6">
        <h3 style={{marginBlock:"12px"}} className="text-sm font-semibold text-gray-700 mb-2">Follow Us:</h3>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/AkuafoPatawah" target="_blank" className=" hover:text-purple-800 transition">
            <Facebook size={20} />
          </a>
          <a href="/" target="_blank" className=" hover:text-purple-800 transition">
            <Twitter size={20} />
          </a>
          <a href="/" target="_blank" className=" hover:text-purple-800 transition">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};


