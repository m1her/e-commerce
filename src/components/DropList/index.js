"use client";

import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const DropList = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div id="buttons-container" className="mt-6 -mx-4 relative">
      <div className="w-full">
        <div
          className="h-10 w-full absolute hover:bg-gray-200 rotate-y-80 hover:rotate-y-0 transition-all duration-500 ease-in-out cursor-pointer rounded-full"
          onClick={() => {
            setToggle(!toggle);
          }}
          onBlur={() => {
            setToggle(false);
          }}
        ></div>
      </div>

      <button
        type="button"
        className="font-medium border-none outline-none flex items-center justify-between py-2 px-4 rounded-full w-full
       
        "
        onClick={() => {
          setToggle(!toggle);
        }}
        onBlur={() => {
          setToggle(false);
        }}
      >
        <p className="z-50">Shop</p>
        <ChevronUpIcon
          width={25}
          height={25}
          className={`ml-2 transform transition-all duration-500 ease-in-out ${
            toggle ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
      <div
        id="list-container"
        className={`w-56 rounded ml-4
       overflow-hidden max-h-0 transition-all duration-500 ease-in-out
       ${toggle ? "max-h-44" : ""}
        `}
      >
        <ul
          className={`ml-2 flex flex-col ${
            toggle ? "text-black" : "text-white"
          }`}
        >
          {props.list.map((item, index) => (
            <div key={index} className="felx mb-2">
              <div className="">{item.text}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DropList;
