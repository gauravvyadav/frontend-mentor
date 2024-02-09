import { Fragment } from "react";
import { addons, billingPlans } from "../data/data";

interface SummaryProps {
  formData: { billing: string; plan: string; addons: string[] };
  setFormData: (data: object) => void;
  currentStep: number;
  goToStep: (step: number) => void;
  setSuccess: (success: boolean) => void;
}

const Summary = ({ formData, currentStep, goToStep, setSuccess }: SummaryProps) => {
  const planPrefix = formData.billing === "Monthly" ? "mo" : "yr";
  let addonsData: { title: string; billing: string; price: number }[] = [];
  let totlaAddonsPrice: number = 0;

  formData.addons.forEach((addon) => {
    const selected = addons.find((item) => item.title === addon);
    if (selected) {
      addonsData.push({
        title: selected.title,
        billing: formData.billing,
        price: selected.price[formData.billing as keyof typeof selected.price],
      });
      totlaAddonsPrice += selected.price[formData.billing as keyof typeof selected.price];
    }
  });

  // @ts-ignore
  const totalPrice = billingPlans[formData.billing][formData.plan] + totlaAddonsPrice;

  return (
    <Fragment>
      <div className="absolute left-1/2 top-[110px] m-auto w-[90%] -translate-x-1/2 rounded-lg bg-white p-5 shadow-md sm:relative sm:top-0 sm:m-0 sm:w-full sm:p-0 sm:shadow-none">
        <div className="mb-4 w-full">
          <h1 className="text-[28px] font-extrabold text-[#002a5f]">Finishing up</h1>
          <p className="text-[13px] font-medium text-gray-400">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="mt-4">
          <div className="h-auto w-full rounded-lg bg-gray-100 p-5">
            <div className="flex w-full flex-row items-center justify-between">
              <div className="">
                <h1 className="font-medium capitalize text-[#002a5f]">
                  {`${formData.plan} (${formData.billing})`}
                </h1>
                <div
                  className="cursor-pointer text-gray-500 underline hover:text-purple-500"
                  onClick={() => goToStep(2)}
                >
                  Change
                </div>
              </div>
              <div className="font-bold text-[#002a5f]">
                $
                {
                  //  @ts-ignore
                  billingPlans[formData.billing][formData.plan]
                }
                /{planPrefix}
              </div>
            </div>
            <div className="my-4 h-[1px] w-full bg-slate-300" />
            {addonsData.map((addon, i) => (
              <div key={i} className="mb-2 flex h-6 flex-row items-center justify-between">
                <h2 className="text-sm font-medium text-gray-400">{addon.title}</h2>
                <span className="text-sm font-medium text-slate-500">
                  +${addon.price}/{planPrefix}
                </span>
              </div>
            ))}
          </div>
          <div className="flex h-8 flex-row  items-center justify-between p-5 py-8">
            <h2 className="text-sm text-gray-500">Total (per year)</h2>
            <span className="font-extrabold text-[#473dff]">
              ${totalPrice}/{planPrefix}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-auto flex w-full flex-row bg-white px-5 py-4 sm:px-0">
        <div
          onClick={() => goToStep(currentStep - 1)}
          className="cursor-pointer rounded-md p-2 text-[14px] font-medium text-gray-400"
        >
          Go Back
        </div>

        <button
          onClick={() => setSuccess(true)}
          className="ml-auto h-10 rounded-md bg-[#473dff] px-5 text-[14px] font-medium text-gray-100"
        >
          Confirm
        </button>
      </div>
    </Fragment>
  );
};

export default Summary;
