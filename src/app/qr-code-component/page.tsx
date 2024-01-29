import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

// Meta information.

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Frontend Mentor | QR code component Challenge",
};

const QrCodeComponent = () => {
  return (
    <React.Fragment>
      <div
        className={
          (outfit.className,
          "w-full h-screen flex items-center justify-center bg-[#d5e1ef]")
        }
      >
        <div className="w-[340px] h-auto bg-white rounded-2xl p-4  shadow-slate-300 shadow-lg">
          <div className="overflow-hidden rounded-xl mb-3">
            <Image
              src="/qr-code-component/image-qr-code.png"
              alt="qr-code"
              width={340}
              height={340}
            />
          </div>
          <div className="p-3 text-center">
            <h2 className="font-bold text-[22px] pb-4 text-[#1f3251]">
              Improve your front-end skills by building projects
            </h2>
            <p className="text-[15px] pb-3 text-[#8a9099] font-normal">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QrCodeComponent;
