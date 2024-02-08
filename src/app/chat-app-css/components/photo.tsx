import Image from "next/image";
import React from "react";

interface PhotoType {
  img: Array<string>;
  align: "left" | "right";
}

const Photo = ({ img, align }: PhotoType) => {
  const left = () => {
    return (
      <div className="mb-[10px] flex w-full">
        <div className="flex max-w-[84%] flex-row gap-2 rounded-xl rounded-bl-md text-[11px]">
          {img.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={54}
              height={54}
              alt="dog"
              className=" rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  };

  const right = () => {
    return (
      <div className="mb-[10px] flex w-full justify-end">
        <div className="flex max-w-[84%] flex-row gap-2 rounded-xl rounded-br-md text-[11px] drop-shadow-sm">
          {img.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={54}
              height={54}
              alt="dog"
              className=" rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  };

  return align === "left" ? left() : right();
};

export default Photo;
