import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Frontend Mentor | Challenge solutions | Nextjs + Tailwindcss + Typescript",
  description: "Solutions to Frontend Mentor challenges using Nextjs + Tailwindcss + Typescript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
