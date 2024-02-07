"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { billingPlans } from "../data/data";

interface PlanProps {
  formData: { billing: string; plan: string };
  setFormData: (data: object) => void;
  currentStep: number;
  goToStep: (step: number) => void;
}

const Plan = ({ formData, setFormData, currentStep, goToStep }: PlanProps) => {
  const [billing, setBilling] = React.useState(formData.billing || "Monthly");
  const [plan, setPlan] = React.useState(formData.plan || "arcade");

  const monthlyPlan = billingPlans["Monthly"];
  const yearlyPlan = billingPlans["Yearly"];

  useEffect(() => {
    setFormData({ ...formData, billing, plan });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billing, plan]);

  // Render the billing plans
  const renderPlan = (plan: string, price: number, billing: string, dataPlan: string) => (
    <div
      key={plan}
      className={`flex h-auto cursor-pointer gap-3 rounded-lg border sm:min-h-[150px] sm:w-[120px] sm:flex-col sm:justify-between sm:gap-0 ${
        plan === dataPlan ? "border-purple-500" : "border-gray-300"
      } bg-[#f0f6ff] p-4`}
      onClick={() => setPlan(plan)}
    >
      <div className="sm:w-full">
        <Image src={`/multi-step-form/icon-${plan}.svg`} alt={plan} width={34} height={34} />
      </div>
      <div className="flex flex-col">
        <div className="mt-auto flex h-auto w-full flex-col">
          <span className="text-sm font-medium capitalize text-[#002a5f]">{plan}</span>
          <span className="text-[13px] font-medium text-gray-400">
            ${price}/{billing === "Monthly" ? "mo" : "yr"}
          </span>
        </div>
        {billing === "Yearly" && (
          <div className="mt-1 text-[12px] font-medium text-[#002a5f]">2 months free</div>
        )}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className="absolute left-1/2 top-[110px] m-auto w-[90%] -translate-x-1/2 rounded-lg bg-white p-5 shadow-md sm:relative sm:top-0 sm:m-0 sm:w-full sm:p-0 sm:shadow-none">
        <div className="mb-4 w-full">
          <h1 className="text-[28px] font-extrabold text-[#002a5f]">Select your plan</h1>
          <p className="text-[13px] font-medium text-gray-400">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="mt-4">
          <div className="flex w-full flex-col justify-between gap-3 sm:flex-row">
            {billing === "Monthly"
              ? Object.entries(monthlyPlan).map(([plan, price]) =>
                  renderPlan(plan, price, billing, formData.plan)
                )
              : Object.entries(yearlyPlan).map(([plan, price]) =>
                  renderPlan(plan, price, billing, formData.plan)
                )}
          </div>

          <div className="mt-6 flex h-11 w-full flex-row items-center justify-center gap-4 rounded-lg bg-[#f0f6ff]">
            <span className="text-[12px] font-medium text-[#002a5f]">Monthly</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={billing === "Yearly"}
                onChange={() => setBilling(billing === "Monthly" ? "Yearly" : "Monthly")}
              />
              <div className="peer h-5 w-11 rounded-full bg-[#002a5f] after:absolute after:start-[4px] after:top-[3px] after:h-[14px] after:w-[14px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-[22px] peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
            </label>

            <span className="text-[12px] font-medium text-[#002a5f]">Yearly</span>
          </div>
        </div>
      </div>
      <div className="mt-auto flex w-full bg-white px-5 py-4 sm:px-0">
        <div
          onClick={() => goToStep(currentStep - 1)}
          className="cursor-pointer rounded-md p-2  text-[14px] font-medium text-gray-400"
        >
          Go Back
        </div>

        <button
          onClick={() => goToStep(currentStep + 1)}
          className="ml-auto h-10 rounded-md bg-[#002a5f] px-5 text-[14px] font-medium text-gray-100"
        >
          Next Step
        </button>
      </div>
    </React.Fragment>
  );
};

export default Plan;
