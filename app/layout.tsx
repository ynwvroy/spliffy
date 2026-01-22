import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spiffy Lemon Calz Limited | Office & IT Supplies",
  description:
    "Office furniture, stationery, toners, laptops, computers, and medical equipment.",
  keywords:
    "office furniture, office stationery, toners, laptops, computers, medical equipment, supplies",
  authors: [{ name: "Spiffy Lemon Calz Limited" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Spiffy Lemon Calz Limited | Office & IT Supplies" />
        <meta
          property="og:description"
          content="Office furniture, stationery, toners, laptops, computers, and medical equipment."
        />
        <meta
          property="og:image"
          content="/favicon.ico"
        />
      </head>
      <body className={inter.className + " min-h-screen flex flex-col bg-[#F0F0DB]"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
