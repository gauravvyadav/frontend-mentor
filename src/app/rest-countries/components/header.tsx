"use client";
import React from "react";
import DarkToggle from "@/components/theme-changer/dark-toggle";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-white dark:bg-[hsl(209_23%_22%)] shadow h-auto">
      <div className="container m-auto h-20 px-3">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold cursor-pointer"
              onClick={() => router.push("/rest-countries")}
            >
              Where in the world?
            </h1>
          </div>
          <DarkToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
