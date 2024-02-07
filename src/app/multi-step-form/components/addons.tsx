import React from "react";
import { addons } from "../data/data";

interface AddonsProps {
  formData: { billing: string; addons: string[] };
  setFormData: (data: object) => void;
  currentStep: number;
  goToStep: (step: number) => void;
}

const Addons = ({ formData, setFormData, currentStep, goToStep }: AddonsProps) => {
  const [selectedAddons, setSelectedAddons] = React.useState(formData.addons || []);

  const billing: string = formData.billing;

  const handleAddons = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedAddons.includes(value)) {
      setSelectedAddons(selectedAddons.filter((addon) => addon !== value));
    } else {
      setSelectedAddons([...selectedAddons, value]);
    }
  };

  React.useEffect(() => {
    setFormData({ ...formData, addons: selectedAddons });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddons]);

  return (
    <React.Fragment>
      <div className="absolute left-1/2 top-[110px] m-auto w-[90%] -translate-x-1/2 rounded-lg bg-white p-5 shadow-md sm:relative sm:top-0 sm:m-0 sm:w-full sm:p-0 sm:shadow-none">
        <div className="mb-4 w-full">
          <h1 className="text-[28px] font-extrabold text-[#002a5f]"> Pick add-ons</h1>
          <p className="text-[13px] font-medium text-gray-400">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-3">
            {addons.map((addon, i) => (
              <div
                key={i}
                className={`h-auto w-full items-center rounded-lg border py-4 ${selectedAddons.includes(addon.title) && "border-purple-500 bg-[#f8f9fe]"}`}
              >
                <label className="flex h-11 flex-row items-center px-5 accent-[#4f49ff]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-purple-600"
                    value={addon.title}
                    checked={selectedAddons.includes(addon.title)}
                    onChange={handleAddons}
                  />
                  <div className="ml-6">
                    <h2 className="text-[14px] font-medium">{addon.title}</h2>
                    <p className="text-[14px] font-medium text-gray-400">{addon.desc}</p>
                  </div>
                  <div className="ml-auto text-[14px] font-medium text-purple-600">
                    +${addon.price[billing as keyof typeof addon.price]}/
                    {formData.billing === "Monthly" ? "mo" : "yr"}
                  </div>
                </label>
              </div>
            ))}
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

        {
          <button
            onClick={() => goToStep(currentStep + 1)}
            className="ml-auto h-10 rounded-md bg-[#002a5f] px-5 text-[14px] font-medium text-gray-100"
          >
            Next Step
          </button>
        }
      </div>
    </React.Fragment>
  );
};

export default Addons;
