import React, { useEffect, useState, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorValue?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, errorValue, ...rest },
  ref
) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(!!errorValue); // Update error state based on errorValue
  }, [errorValue]);

  const errorClassName = error
    ? "border-red-600 focus:ring-red-500"
    : "border-gray-300 focus:ring-purple-500";

  return (
    <div className="mb-5 w-full">
      <div className="flex flex-row justify-between">
        <label className="text-[12px] font-medium text-[#2f597e]">{label}</label>
        {error && <span className="text-[12px] font-semibold text-red-500">{errorValue}</span>}
      </div>
      <div className="mt-1">
        <input
          ref={ref}
          className={`${errorClassName} h-10 w-full rounded-md border px-3 text-[14px] font-medium text-[#002a5f] transition duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-1`}
          {...rest}
        />
      </div>
    </div>
  );
};

export default forwardRef(Input);
