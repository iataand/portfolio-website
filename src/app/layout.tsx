import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrei Iatan",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manRope.variable} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
