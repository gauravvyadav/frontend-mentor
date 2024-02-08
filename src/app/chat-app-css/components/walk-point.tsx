import React from "react";
import { ImRadioChecked } from "react-icons/im";

interface WalkPointType {
  message: string;
  price: string;
  align: "left" | "right";
}

const WalkPoint = ({ message, price, align }: WalkPointType) => {
  const left = () => {
    return (
      <div className="mb-[10px] w-full">
        <div className="flex max-w-[80%]  items-center rounded-xl rounded-bl-md bg-gradient-to-l from-[hsl(264_100%_61%)] to-[hsl(293_100%_63%)] p-[6px] text-[11px] text-[hsl(276_55%_52%)]">
          <ImRadioChecked className="text-[hsl(289_100%_80%)]" strokeWidth={2} />
          <span className="ml-2 text-[10px] text-gray-300">{message}</span>
          <span className="ml-auto pr-2 text-[16px] font-bold text-white">{price}</span>
        </div>
      </div>
    );
  };
  const right = () => {
    return (
      <div className="mb-[10px] w-full">
        <div className="ml-auto flex max-w-[80%]  items-center rounded-xl rounded-br-md bg-gradient-to-l from-[hsl(293_100%_63%)] to-[hsl(264_100%_61%)] p-[6px] text-[11px] text-[hsl(276_55%_52%)]">
          <span className="mr-auto pl-2 text-[16px] font-bold text-white">{price}</span>
          <span className="mr-2 text-[10px] text-gray-300">{message}</span>
          <ImRadioChecked className="text-[hsl(289_100%_80%)]" strokeWidth={2} />
        </div>
      </div>
    );
  };

  return align === "left" ? left() : right();
};

export default WalkPoint;
