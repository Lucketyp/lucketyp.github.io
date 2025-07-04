import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Image from "next/image";
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
  title: "Create Next App",
  description: "Generated by create next app",
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
              <header className="flex items-center justify-between w-full max-w-4xl mx-auto p-5">
                  <a className="flex items-center gap-2" 
                  href="./">
                    <Image
                      className="dark:invert"
                      src="/clock.svg"
                      alt="Logo"
                      width={28}
                      height={28}
                    />
                    <h1 className="text-xl font-bold">Art Clock</h1>
                  </a>
                <nav className="flex gap-4">
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    href="./about"
                  >
                    About
                  </a>
                </nav>
              </header>
              
        {children}

      <footer className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4 mt-8">
        <p className="text-sm text-muted-foreground">
          Made by Lucas Johnson
        </p>
      </footer>
        
      </body>
    </html>
  );
}
