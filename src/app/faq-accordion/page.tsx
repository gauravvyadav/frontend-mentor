import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import AccordionToggle from "./components/accordion-toggle";
import { data } from "./data";

const FaqAccordion = () => {
  return (
    <div className="fixed h-auto min-h-screen w-full  bg-[hsl(275,100%,97%)]">
      <div className="fixed top-0 h-[360px] w-full bg-[url('/faq-accordion/background-pattern-mobile.svg')] bg-cover bg-no-repeat sm:bg-[url('/faq-accordion/background-pattern-desktop.svg')]" />
      <div className="absolute z-40 flex h-screen w-full items-center justify-center overflow-y-scroll py-12">
        <div className="m-auto h-auto min-h-[400px] w-[90%] rounded-xl bg-white p-7 shadow-xl md:w-[520px]">
          <div className="flex h-auto w-full flex-row items-center gap-5 text-[50px] font-bold text-[hsl(292,42%,14%)]">
            <PiStarFourFill className="text-[36px]" color="hsl(282, 79%, 52%)" />
            FAQs
          </div>
          <div className="mt-6 h-auto w-full">
            {data.map((item, index) => (
              <AccordionToggle
                className={`${index === data.length - 1 ? "" : "border-b border-[hsl(275,100%,97%)]"}`}
                key={index}
                heading={item.heading}
                content={item.content}
                open={item?.open}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
