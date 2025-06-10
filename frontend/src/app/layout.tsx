import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./(components)/Header"
import Footer from "./(components)/Footer"
import NavModal from "./(components)/NavModal"
import { ToastContainer } from "react-toastify";
import StoreProvider from "./redux";

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
  title: "Parcch Tech Solutions",
  description: "Innovative startup building modern web & mobile solutions that solve real-world problems through design, technology, and user-first thinking.",
  
  icons: {
    icon:"/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Parcch",
    "Tech Solutions",
    "Web Development",
    "Mobile Applications",
    "API Integrations",
    "Digital Solutions",
    "Innovation",
    "Technology Startup"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
  },
  authors: [{ name: "Parcch", url: "https://www.parcch.com" }],
  openGraph: {
        type: "website",
        url: "https://www.parcch.com",
        title: "Parcch Tech Solutions",
        description: "Innovative startup building modern web & mobile solutions that solve real-world problems through design, technology, and user-first thinking.",
        siteName: "Parcch",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Parcch",
              alternateName: "Parcch Tech Solutions",
              url: "https://www.parcch.com",
            }),
          }}
        />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
        <Header />
         <NavModal />
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
