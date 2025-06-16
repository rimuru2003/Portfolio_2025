import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

// Basic SEO metadata
export const metadata: Metadata = {
  title: "Aryan Singh | Front-End Developer",
  description: "Portfolio of Aryan Singh – building modern, responsive, and high-performance web applications using React and Next.js.",
  keywords: ["Aryan Singh", "Front-End Developer", "React Developer", "Next.js Portfolio"],
  authors: [{ name: "Aryan Singh" }],
  creator: "Aryan Singh",
  metadataBase: new URL("https://dev-aryan.vercel.app"), 
  openGraph: {
    title: "Aryan Singh | Front-End Developer",
    description: "Building modern and performant web applications.",
    url: "https://dev-aryan.vercel.app",
    siteName: "Aryan Singh Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Aryan Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <Navbar />
        {children}
        
        </body>
    </html>
  );
}
