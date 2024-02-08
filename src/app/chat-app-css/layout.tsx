import { Metadata } from "next";
import React from "react";
import { Rubik } from "next/font/google";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Chat App",
};

const rubik = Rubik({ subsets: ["latin"] });

const ChatAppLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={rubik.className}>{children}</div>;
};

export default ChatAppLayout;
