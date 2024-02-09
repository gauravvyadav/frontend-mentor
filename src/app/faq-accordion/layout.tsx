import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FAQ Accordion | Frontend Mentor | Nextjs + Tailwindcss + Typescript",
  description:
    "FaQ Accordion challenge solution from Frontend Mentor using Nextjs + Tailwindcss + Typescrip",
};

export default function AccordionLayout({ children }: { children: React.ReactNode }) {
  return <div className={inter.className}>{children}</div>;
}
