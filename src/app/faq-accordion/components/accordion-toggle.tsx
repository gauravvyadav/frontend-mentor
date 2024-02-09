"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface AccordionToggleType {
  heading: string;
  content: string;
  open?: boolean;
  className?: string;
}

const AccordionToggle = ({ heading, content, open = false, className }: AccordionToggleType) => {
  const [isOpen, setIsOpen] = React.useState(open);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex w-full flex-row items-center justify-between gap-8 py-5">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-base font-bold text-[hsl(292,42%,14%)] transition-all hover:text-[hsl(282,79%,52%)] md:font-semibold"
        >
          {heading}
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-6 min-h-6 w-6 min-w-6 cursor-pointer items-center justify-center rounded-full text-white  transition-all ${isOpen ? "bg-[hsl(282,79%,52%)]" : "bg-[hsl(292,42%,14%)]"}`}
        >
          {isOpen ? <FiPlus /> : <FiMinus />}
        </div>
      </div>
      {isOpen && <div className="py-4 text-sm text-[hsl(292,16%,49%)]">{content}</div>}
    </div>
  );
};

export default AccordionToggle;
