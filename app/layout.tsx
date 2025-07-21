import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${monts.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
