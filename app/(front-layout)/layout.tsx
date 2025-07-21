import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SubFooter from "@/components/shared/SubFooter";

const geistSans = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const monts = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZEEKER",
  description: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div
        className={`${geistSans.variable} ${monts.variable} antialiased dark`}
      >
        <Navbar />
        {children}
        <Footer />
        <SubFooter />
      </div>
    </div>
  );
}
