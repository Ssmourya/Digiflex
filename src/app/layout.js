import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import Contact from "./components/Contact";
import { ReviewsSection } from "./components/Reviews";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DigiFlex.ai",
  description: "Digital solutions for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <Providers>
          <Header />
          {children}
          <ReviewsSection/>
          <Contact />
          <Navigation/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
