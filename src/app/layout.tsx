import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MundinhoDoug - Venha explorar nossas artes!",
  description: "Explore nossa loja artesanal com produtos únicos! Encontre itens exclusivos, incluindo acessórios, decoração, roupas temáticas e presentes criativos inspirados em diversos temas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
