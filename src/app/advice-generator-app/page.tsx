"use client";
import Image from "next/image";
import React, { useEffect } from "react";

interface AdviceJson {
  slip: {
    id: number;
    advice: string;
  };
}

import AdviceGeneratorAppBackend from "./server";

const AdviceGeneratorApp = () => {
  const [screenSize, setScreenSize] = React.useState(0);
  const [advice, setAdvice] = React.useState({
    id: 0,
    advice: "Loading...",
  });

  // Fetches a new advice from the backend and updates the advice state.

  const changeAdvice = async () => {
    const newAdvice: AdviceJson = await AdviceGeneratorAppBackend();
    setAdvice({
      id: newAdvice.slip.id,
      advice: newAdvice.slip.advice,
    });
  };

  useEffect(() => {
    // Updates the screen size state whenever the window is resized.

    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Fetches the initial advice from the backend and updates the advice state.

    const fetchAdvice = async () => {
      const newAdvice: AdviceJson = await AdviceGeneratorAppBackend();
      setAdvice({
        id: newAdvice.slip.id,
        advice: newAdvice.slip.advice,
      });
    };
    fetchAdvice();
  }, []);

  return (
    <React.Fragment>
      <div className="w-full h-screen flex items-center justify-center bg-[hsl(218_23%_16%)]">
        <div className="bg-[hsl(217_19%_24%)] w-[450px] min-h-[260px] h-auto rounded-lg p-6 m-4 flex relative flex-col">
          <div className="flex w-full text-[hsl(150_100%_66%)] font-bold text-[12px] tracking-[3px] h-auto items-center justify-center">
            ADVICE #{advice.id}
          </div>
          <div className="my-4 p-0 md:p-2 flex justify-center items-center min-h-28 text-[hsl(193_38%_86%)] text-[23px] text-center font-extrabold ">
            &quot;{advice.advice}&quot;
          </div>
          <div className="mx-auto my-6">
            {screenSize > 768 ? (
              <Image
                src={"/advice-generator-app/pattern-divider-desktop.svg"}
                width={380}
                height={100}
                alt="divider"
              />
            ) : (
              <Image
                src={"/advice-generator-app/pattern-divider-mobile.svg"}
                width={310}
                height={100}
                alt="divider"
              />
            )}
          </div>
          <div
            className="cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[hsl(150_100%_66%)] rounded-full flex items-center justify-center hover:shadow-[0_0_40px_hsl(150_100%_66%)] transition-all"
            onClick={changeAdvice}
          >
            <Image
              alt="refresh"
              src="/advice-generator-app/icon-dice.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdviceGeneratorApp;
