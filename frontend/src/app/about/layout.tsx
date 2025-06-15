import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Parcch",
  description: "Learn more about our mission and team.",
  alternates: {
    canonical: "https://parcch.com/about",
  },
  openGraph: {
    title: "About Us – Parcch",
    description: "Discover the vision, values, and team behind Parcch Tech Solutions – building modern web & mobile solutions for real-world problems.",
    
    url: "https://parcch.com/about",
    siteName: "Parcch",
    images: [
      {
        url: "https://parcch.com/favicon.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
