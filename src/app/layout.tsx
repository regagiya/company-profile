import type { Metadata } from "next";
import { Geist, Geist_Mono, Afacad } from "next/font/google";
import "./globals.css";
import { Navbar } from "../component/navbar/navbar";
import { Footer } from "../component/footer/page";
import SignIn from "@/component/signin";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const afacad = Afacad({
  variable: "--font-Afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rega Company Profile",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
