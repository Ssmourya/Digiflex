'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import { ReviewsSection } from "../components/Reviews";
import { usePathname } from 'next/navigation'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Create a component to handle the conditional rendering
function LayoutContent({ children }) {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact-us'; 

  return (
    <>
      <Header />
      {children}
      {!isContactPage && <ReviewsSection />}
      {!isContactPage && <Contact />}
      <Navigation />
      <Footer />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <Providers>
          <LayoutContent>
            {children}
          </LayoutContent>
        </Providers>
      </body>
    </html>
  );
}