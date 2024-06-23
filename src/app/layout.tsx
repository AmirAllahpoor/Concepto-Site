import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "کانسپتو | اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی",
  description: "اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className} dir="rtl">
        <Header />
        {children}
      </body>
    </html>
  );
}
