import React from "react";
import "@/styles.css";
import { Inter } from "next/font/google";
import Sidebar from "./sidebar";

const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
  variable: "--inter-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Lavadero</title>
      </head>
      <body style={inter.style} className="inline-flex w-full h-screen">
        <Sidebar />

        <main className="px-8 py-4 w-full">{children}</main>
      </body>
    </html>
  );
}
