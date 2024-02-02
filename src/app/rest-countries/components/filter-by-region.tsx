"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface FilterByRegionProps {
  value: (region: string) => void;
}

const FilterByRegion: React.FC<FilterByRegionProps> = ({ value }) => {
  const [show, setShow] = useState(false);
  const [region, setRegion] = useState("");
  const filterRef = useRef<HTMLDivElement>(null);

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleRegion = (region: string) => {
    if (region === "All") {
      setRegion("");
      value("");
      setShow(false);
      return;
    }
    setRegion(region);
    value(region);
    setShow(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={filterRef}
      className="w-44 h-14 relative dark:bg-[hsl(209_23%_22%)] rounded-md shadow"
    >
      <button
        className="w-full cursor-pointer flex justify-between items-center flex-row h-14 px-4"
        onClick={() => setShow(!show)}
      >
        <div className="text-sm font-semibold">
          {region === "" ? "Filter by Region" : region}
        </div>
        <IoIosArrowForward
          className={`${show ? "rotate-90" : "rotate-180"} transition-all`}
        />
      </button>
      <div
        className={`w-full p-1 bg-white dark:bg-[hsl(209_23%_22%)] shadow rounded-md top-16 z-10 absolute left-0 ${
          show ? "" : "hidden"
        }`}
      >
        {regions.map((region, i) => (
          <li
            key={i}
            onClick={handleRegion.bind(null, region)}
            className="list-none w-full text-start p-1 px-3 hover:bg-slate-100 dark:hover:bg-[#263340] text-sm cursor-pointer rounded-md"
          >
            {region}
          </li>
        ))}
      </div>
    </div>
  );
};

export default FilterByRegion;
