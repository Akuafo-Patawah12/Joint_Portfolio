import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Parcch Tech Solutions",
  description: "Get in touch with Parcch Tech Solutions. We’re here to help with your web, mobile, and tech solution needs.",
  openGraph: {
    title: "Contact – Parcch Tech Solutions",
    description: "Reach out to Parcch Tech Solutions for inquiries, support, or partnerships.",
    url: "https://www.parcch.com/contact",
    siteName: "Parcch",
    images: [
      {
        url: "https://parcch.com/favicon.png", // Update this with your actual image
        width: 1200,
        height: 630,
        alt: "Parcch Contact Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us – Parcch Tech Solutions",
    description: "Need help or have a question? Contact the Parcch team today.",
    images: ["https://parcch.com/favicon.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
