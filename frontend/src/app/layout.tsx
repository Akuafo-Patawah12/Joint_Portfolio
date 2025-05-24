import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parcch portfolio website",
  description: "Innovative startup building modern web & mobile solutions that solve real-world problems through design, technology, and user-first thinking.",
  icons: {
    icon:"/favicon.ico",
    shortcut: "/favicon.icon",
  },
  openGraph: {
        type: "website",
        url: "https://www.parcch.com",
        title: "Parcch portfolio website",
        description: "My Website Description",
        siteName: "Parcch portfolio website",
        images: [{ url: "https://www.parcch.com/favicon.png" }]
      }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </body>
    </html>
  );
}
