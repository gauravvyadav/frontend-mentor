"use client";

import React, { useEffect, useState } from "react";
import { steps } from "./data/data";
import Sidebar from "./components/sidebar";
import Info from "./components/info";
import Plan from "./components/plan";
import Addons from "./components/addons";
import Summary from "./components/summary";
import Success from "./components/success";
import toast from "react-hot-toast";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(Object);
  const [success, setSuccess] = useState(false);
  const stepData = steps;

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    if (success) {
      goToStep(5);
      toast(JSON.stringify(formData, null, 2), { duration: 5000 });
      setFormData({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Info
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
            goToStep={goToStep}
          />
        );
      case 2:
        return (
          <Plan
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
            goToStep={goToStep}
          />
        );
      case 3:
        return (
          <Addons
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
            goToStep={goToStep}
          />
        );
      case 4:
        return (
          <Summary
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
            goToStep={goToStep}
            setSuccess={setSuccess}
          />
        );
      case 5:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center bg-[#eef5ff]">
      <div className="grid h-screen w-full grid-cols-1 gap-2 shadow-gray-200 sm:h-[510px] sm:w-[800px] sm:grid-flow-col sm:grid-cols-12 sm:rounded-xl sm:bg-white sm:p-3 sm:shadow-lg">
        <div className="h-full w-full overflow-hidden sm:col-span-4 sm:pr-5">
          <Sidebar stepData={stepData} currentStep={currentStep} />
        </div>
        <div className=" h-full sm:col-span-8 sm:m-auto sm:w-[400px] sm:pr-3">
          <div className="flex h-full w-full flex-col pt-6">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
