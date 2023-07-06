"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

const FilterBar = (props) => {
  const lowPriceRef = useRef();
  const highPriceRef = useRef();
  const titleRef = useRef();

  const filterSubmit = () => {
    props.setlowPrice(lowPriceRef.current.value);
    props.sethighPrice(highPriceRef.current.value);
    props.setTitle(titleRef.current.value);
  };

  return (
    <div className="w-full flex justify-center font-Montserrat mb-6 items-center relative">
      <div className="absolute left-0 text-2xl font-semibold text-[#1d1d1d]">
        {props.category}
      </div>
      <div className="px-4 py-3 w-1/2 border border-black flex justify-between rounded-sm shadow">
        <button
          className="border border-black px-2 py-1 font-medium"
          onClick={filterSubmit}
        >
          Filter
        </button>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex border-b border-[#171717] items-center">
            <div className="text-sm text-[#2b2b2b]">$</div>
            <input
              ref={lowPriceRef}
              placeholder="Min"
              maxLength={7}
              className="font-medium text-[#2b2b2b] ml-1 text-sm w-10 focus:outline-none"
            />
          </div>
          <div className="flex border-b border-[#171717] items-center">
            <div className="text-sm text-[#2b2b2b]">$</div>
            <input
              ref={highPriceRef}
              placeholder="Max"
              maxLength={7}
              className="font-medium text-[#2b2b2b] ml-1 text-sm w-10 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex border-b border-[#171717] items-center">
          <MagnifyingGlassIcon width={16} height={16} color="gray" />
          <input
            ref={titleRef}
            placeholder="Title"
            className="font-medium text-[#2b2b2b] ml-1 text-sm focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
export default FilterBar;
