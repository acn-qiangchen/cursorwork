import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cursor - The AI-first Code Editor",
  description: "Experience the future of coding with Cursor - An AI-powered code editor that helps you write better code faster.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
