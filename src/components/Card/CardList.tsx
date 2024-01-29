import Link from "next/link";
import React from "react";

interface CardListProps {
  link: string;
  name: string;
}

const CardList = (props: CardListProps) => {
  return (
    <React.Fragment>
      <div className="min-w-64 pl-4 max-w-[400px] h-auto shadow-md p-2 rounded bg-yellow-400 mb-2 flex flex-row gap-6 items-center">
        <span className="text-xl font-extrabold text-gray-800 uppercase">
          {props.name}
        </span>
        <Link
          className="px-4 py-2 bg-white rounded-md font-bold"
          href={props.link}
        >
          View
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CardList;
