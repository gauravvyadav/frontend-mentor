import { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import React from "react";

export const metadata: Metadata = {
  title: "Frontend Mentor | Multi-step form",
  description: "Frontend Mentor | Multi-step form",
};

const ubunut = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

const MultiStepformLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={ubunut.className}>{children}</div>;
};

export default MultiStepformLayout;
