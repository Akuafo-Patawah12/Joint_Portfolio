"use client"
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Send,
  CheckCircle2
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState("");

  const handleSubmit =  async () => {
    
    setIsError("");
    setLoading(true);

    if (!name || !email || !message) {
      setIsError("All fields are required.");
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
        setIsError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Error sending message:", err);
      setIsError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Let&apos;s Create Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> Amazing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help with anything tech. Reach out and let&apos;s turn your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                    <p className="text-gray-900 font-semibold">+233 201 623 251</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                    <p className="text-gray-900 font-semibold">parcch26@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                    <p className="text-gray-900 font-semibold">Segico Flat, Community 4<br />Tema, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-emerald-50 mb-6 text-sm">Stay connected on social media</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.facebook.com/AkuafoPatawah" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm font-medium"
                >
                  <Facebook size={18} className="text-blue-600" />
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/akuafopatawah/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm font-medium"
                >
                  <Instagram size={18} className="text-pink-600" />
                  Instagram
                </a>
                <a 
                  href="/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm font-medium"
                >
                  <Youtube size={18} className="text-red-600" />
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

              {success && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-600" size={20} />
                  <p className="text-emerald-800 font-medium">Message sent successfully!</p>
                </div>
              )}

              {isError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-sm">{isError}</p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none text-gray-900"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span>Powered by Parcch</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}