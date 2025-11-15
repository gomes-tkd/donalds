import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets:["latin"]
});

export const metadata: Metadata = {
  title: "Donalds",
  description: "Faça o seu pedido - SITE FICTÍCIO"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
