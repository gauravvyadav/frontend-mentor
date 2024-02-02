// Importing necessary dependencies
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RestCountryDetails } from "../server";
import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";

// Defining the props interface for the component
interface CountryDetailsProps {
  params: {
    countryCode: string;
  };
}

// Defining the CountryDetails component
const CountryDetails: React.FC<CountryDetailsProps> = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching country details data
    const fetchData = async () => {
      const res = await RestCountryDetails({ name: params.countryCode });
      setLoading(false);
      return setData(res?.props.data[0]);
    };

    fetchData();
  }, [params.countryCode]);

  return (
    <>
      {loading ? (
        // Displaying loading component while data is being fetched
        <Loading />
      ) : (
        <div>
          <div className="py-5">
            <button
              onClick={() => {
                // Navigating back to the previous page
                router.back();
              }}
              className="py-3 active:shadow-none dark:active:bg-[hsl(209_23%_21%)] transition-all outline-none flex gap-5 shadow-md justify-center items-center px-10 dark:bg-[hsl(209_23%_22%)] bg-white text-black dark:text-white rounded-md"
            >
              <FaArrowLeftLong /> <span>Back</span>
            </button>
          </div>
          <div className="py-4 w-full flex flex-col lg:flex-row m-auto">
            <div className="lg:w-[45%] w-full flex items-center justify-center">
              <Image
                src={data?.flags?.svg}
                alt={data?.name?.common}
                width={500}
                height={350}
                className="rounded-md"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="lg:w-[40%] text-start py-5 ml-[6%] overflow-hidden">
              <h1 className="text-3xl font-semibold py-4">
                {data?.name?.common}
              </h1>
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-col gap-2 ">
                  <div className="font-normal flex gap-2">
                    <span className="font-medium">Native Name:</span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {data?.name?.common}
                    </span>
                  </div>
                  <div className="font-normal flex gap-2">
                    <span className="font-medium">Population:</span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {data?.population}
                    </span>
                  </div>

                  <div className="font-normal flex gap-2">
                    <span className="font-medium">Region:</span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {data?.region}
                    </span>
                  </div>

                  <div className="font-normal flex gap-2">
                    <span className="font-medium text-nowrap">Sub Region:</span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {data?.subregion}
                    </span>
                  </div>

                  <div className="font-normal flex gap-2">
                    <span className="font-medium">Capital:</span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {data?.capital}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal flex gap-2">
                    <span className="font font-medium text-nowrap">
                      Top Level Domain:
                    </span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {data?.tld}
                    </span>
                  </div>

                  <div className="font-normal flex gap-2">
                    <span className="font-medium">Currencies:</span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {
                        data?.currencies?.[Object.keys(data?.currencies)[0]]
                          ?.name
                      }
                    </span>
                  </div>
                  <div className="font-normal flex gap-2">
                    <span className="font-medium">Languages:</span>
                    <span className="dark:text-[hsl(0,0%,69%)]">
                      {data?.languages &&
                        Object.values(data.languages)
                          .map((lang: any) => lang)
                          .join(", ")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex gap-5">
                <span className="font-medium">Border Countries:</span>
                <div className="flex flex-wrap gap-2">
                  {data?.borders &&
                    data?.borders?.map((border: string, i: number) => (
                      <Link key={i} href={`/rest-countries/${border}`}>
                        <span className="dark:bg-[hsl(209_23%_22%)] bg-white text-sm dark:text-white text-black px-4 py-1 rounded-md shadow-md">
                          {border}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
