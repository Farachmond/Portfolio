import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FCPRODUCTION — Motion Designer & Filmmaker",
  description: "Portfolio van Farachmond — film, motion graphics en content creatie",
  icons: {
    icon: "/favicon-fc.png",
    apple: "/favicon-fc.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${geist.variable} h-full`}>
      <body className="h-full antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
