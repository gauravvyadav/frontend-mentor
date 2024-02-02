import React, { FC, InputHTMLAttributes } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const Search: FC<SearchProps> = ({ ...props }) => {
  return (
    <div className="flex dark:bg-[hsl(209_23%_22%)] bg-white shadow px-4 items-center gap-4 sm:min-w-96 rounded-md h-14 justify-center">
      <IoSearch size={20} />
      <input
        {...props}
        className="bg-transparent text-sm font-semibold w-full outline-none h-full"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
