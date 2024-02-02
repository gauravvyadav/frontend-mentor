import { Metadata } from "next";
import React from "react";
import { Nunito_Sans } from "next/font/google";
import { Providers } from "@/app/provider";
import Header from "./components/header";

// Define the Nunito Sans font with specific weights and subsets.
const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

// Define the props interface for the RestCountriesLayout component.
interface RestCountriesLayoutProps {
  children: React.ReactNode;
}

// Define the metadata for the page.
export const metadata: Metadata = {
  title: "Frontend Mentor | REST Countries API with color theme switcher",
  description: "REST Countries API with color theme switcher",
};

// Define the RestCountriesLayout component.
const RestCountriesLayout = ({ children }: RestCountriesLayoutProps) => {
  return (
    <Providers>
      <section
        className={
          (nunitoSans.className,
          "w-full h-auto min-h-screen dark:text-white bg-[hsl(0_0%_98%)] dark:bg-[hsl(207_26%_17%)] text-center")
        }
      >
        <Header />
        <main className="py-6 container px-3 m-auto">{children}</main>
      </section>
    </Providers>
  );
};

export default RestCountriesLayout;
