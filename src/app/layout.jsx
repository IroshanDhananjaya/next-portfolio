import  { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Iroshan Dhananjaya",
  description: "my portfolio web site",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <PageTransition>
           {children}
        </PageTransition>
       </body>
    </html>
  );
}
