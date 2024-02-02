"use client";
import React, { useEffect, useState } from "react";
import Search from "./components/search";
import FilterByRegion from "./components/filter-by-region";
import { RestCountriesData } from "./server";
import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";
import { useDebounce } from "@uidotdev/usehooks";

const RestCountries: React.FC = () => {
  // fetch data from server
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 800);
  const [region, setRegion] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allData = await RestCountriesData();
      const searchFilter = allData?.props.data.filter((country: any) =>
        country.name.common
          .toLowerCase()
          .includes(debouncedSearchValue.toLowerCase())
      );
      const regionFilter = searchFilter.filter((country: any) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      );
      setData(regionFilter || allData?.props.data);
      setLoading(false);
    };

    fetchData();
  }, [debouncedSearchValue, region]);

  return (
    <React.Fragment>
      {/* Search and Filter components */}
      <div className="flex sm:flex-row justify-between py-8 flex-col gap-4">
        <Search value={searchValue} onChange={handleSearch} />
        <FilterByRegion value={setRegion} />
      </div>

      {/* Loading or Country List */}
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-auto py-6 grid  gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max">
          {data.map((country: any, i) => {
            return (
              <Link
                key={i}
                href={`/rest-countries/${country.cca3}`}
                className="sm:w-[270px] w-[80%] min-h-[340px] bg-white dark:bg-[hsl(209_23%_22%)] shadow-lg shadow-gray-200 dark:shadow-gray-800 rounded-md m-auto"
              >
                <div className="w-full min-h-[340px] hover:-translate-y-2 overflow-hidden rounded-md transition-all">
                  <Image
                    className="w-full h-36 object-cover"
                    src={country.flags.svg}
                    alt={country.name.common}
                    width={270}
                    height={144}
                  />
                  <div className="px-8">
                    <h1 className="text-xl font-semibold text-start py-4">
                      {country.name.common}
                    </h1>
                    <div className="text-sm text-[hsl(0_0%_0%)] dark:text-[hsl(0_0%_88%)] text-start py-1">
                      <span className="font-semibold mr-2">Population:</span>
                      {country.population}
                    </div>
                    <div className="text-sm text-[hsl(0_0%_0%)] dark:text-[hsl(0_0%_88%)] text-start py-1">
                      <span className="font-semibold mr-2">Region:</span>
                      {country.region}
                    </div>
                    <div className="text-sm text-[hsl(0_0%_0%)] dark:text-[hsl(0_0%_88%)] text-start py-1">
                      <span className="font-semibold mr-2">Capital:</span>
                      {country.capital}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default RestCountries;
