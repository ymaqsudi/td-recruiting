import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TD Recruiting - Executive Search & Embedded Recruiting",
  description:
    "Executive search and embedded recruiting for growth-stage founders in AI, tech, and finance. A talent practice by TechDuels.",
  openGraph: {
    title: "TD Recruiting - Executive Search & Embedded Recruiting",
    description:
      "Executive search and embedded recruiting for growth-stage founders in AI, tech, and finance.",
    url: "https://placement.techduels.com",
    siteName: "TD Recruiting",
    type: "website",
  },
};

export const generateViewport = () => ({
  viewport: "width=device-width, initial-scale=1.0",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white text-navy`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
