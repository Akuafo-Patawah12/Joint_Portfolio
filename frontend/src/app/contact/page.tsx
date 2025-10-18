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

  const handleSubmit = async () => {
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
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-13 mb-9">
            Let us Create Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> Amazing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are here to help with anything tech. Reach out and let us turn your ideas into reality.
          </p>
        </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-gray-700" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Phone</p>
                    <p className="text-gray-900 font-medium">+233 201 623 251</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-gray-700" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Email</p>
                    <p className="text-gray-900 font-medium">parcch26@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-gray-700" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Location</p>
                    <p className="text-gray-900 font-medium">Segico Flat, Community 4<br />Tema, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Social Card */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-sm text-white">
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <p className="text-gray-400 mb-6 text-sm">Follow us on social media for updates</p>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.facebook.com/AkuafoPatawah" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg transition-colors border border-white/10"
                >
                  <Facebook size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/akuafopatawah/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg transition-colors border border-white/10"
                >
                  <Instagram size={18} className="text-pink-500" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a 
                  href="/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg transition-colors border border-white/10"
                >
                  <Youtube size={18} className="text-red-500" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
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
                    placeholder="Akuafo Patawah"
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
                    placeholder="patawah@example.com"
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

        
      </div>
    </div>
  );
}