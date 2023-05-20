import React from "react";
import Sidebar from "./sidebar";
import "@/styles.css";
import { Inter } from "next/font/google";

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
      <body style={inter.style} className="inline-flex h-screen">
        <Sidebar />

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
