import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Sreshta Vure | Full Stack Developer & Gen AI Engineer",
  description:
    "AI-focused Full Stack Engineer with 5+ years of experience building production enterprise applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
