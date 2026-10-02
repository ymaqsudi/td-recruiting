import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
