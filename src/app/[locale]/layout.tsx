import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAU Eats",
  description: "Aplicatie cantina",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <Providers>
      <html lang={locale}>
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
