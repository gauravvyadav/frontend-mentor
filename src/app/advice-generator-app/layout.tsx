import { Metadata } from "next";
import React from "react";
import { Manrope } from "next/font/google";

export const manrope = Manrope({
  weight: ["400", "800"],
  subsets: ["latin"],
});

interface props {
  children: React.ReactNode;
}

// Meta information.

export const metadata: Metadata = {
  title: "Frontend Mentor | Blog preview card",
  description: "Frontend Mentor | Blog preview card Challenge",
};
const AdviceGeneratorAppLayout = ({ children }: props) => {
  return <section className={manrope.className}>{children}</section>;
};

export default AdviceGeneratorAppLayout;
