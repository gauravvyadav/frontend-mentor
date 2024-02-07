import React from "react";

interface SidebarProps {
  stepData: { title: string; description: string }[];
  currentStep: number;
}

const Sidebar = ({ stepData, currentStep }: SidebarProps) => {
  return (
    <React.Fragment>
      <div className="flex h-[172px] w-full flex-col items-center justify-center bg-[url('/multi-step-form/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat sm:h-full sm:rounded-lg sm:bg-[url('/multi-step-form/bg-sidebar-desktop.svg')]">
        <ul className="flex h-full flex-row gap-6 px-7 py-9 tracking-wider sm:w-full sm:flex-col">
          {stepData.map((step, i) => (
            <li key={i} className="flex h-8 w-full flex-row items-center gap-4">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-[12px] font-semibold ${i + 1 === currentStep ? "bg-[#bfe2fd] text-black" : "text-white"}`}
              >
                {i + 1}
              </div>
              <div className="hidden flex-col gap-0 uppercase text-white sm:flex">
                <span className="text-[10px] text-gray-300">{step.title}</span>
                <span className="text-[13px] font-medium">{step.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
