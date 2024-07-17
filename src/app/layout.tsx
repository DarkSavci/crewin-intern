import React from "react";
import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Montserrat } from "next/font/google";
import "@/assets/globals.css";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crewin Intern Project",
  description: "Crewin Intern Project made by Bedirhan Dinç",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AntdRegistry>
              <Navbar />
              {children}
              <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
