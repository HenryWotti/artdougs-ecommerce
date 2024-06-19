import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MundinhoDoug - Venha explorar nossas artes!",
  description: "Explore nossa loja artesanal com produtos únicos! Encontre itens exclusivos, incluindo pins, bottoms, adesivos, decoração, roupas e presentes criativos inspirados em diversos teminhas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
