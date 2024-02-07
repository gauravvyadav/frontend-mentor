import Image from "next/image";
import React from "react";

const Success = () => {
  return (
    <React.Fragment>
      <div className="absolute left-1/2 top-[98px] m-auto w-[90%] -translate-x-1/2 rounded-lg bg-white p-5 shadow-md sm:relative sm:top-0 sm:m-0 sm:w-full sm:p-0 sm:shadow-none">
        <div className="m-auto flex min-h-[410px] flex-col items-center justify-center gap-3 text-center">
          <Image src={"/multi-step-form/icon-thank-you.svg"} width={70} height={70} alt="Success" />

          <h1 className="text-2xl font-bold text-[#000d3c]">Thank you!</h1>
          <p className="text-[13px] text-gray-400">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you
            ever need support, please feel free to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Success;
