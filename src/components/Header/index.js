"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="border-b border-black grid grid-cols-3 items-center font-Montserrat py-1 lg:px-24 md:px-14 px-6 mb-10">
      <div id="title-container" className="py-4 pr-14 ">
        <div className="text-3xl select-none">FakeStore</div>
      </div>

      <div id="buttons-container" className="justify-self-end sm:justify-self-start z-50">
        <button
          type="button"
          className="border-none outline-none flex items-center"
          onClick={() => {
            setToggle(!toggle);
          }}
          onBlur={() => {
            setToggle(false);
          }}
        >
          Shop{" "}
          <ChevronUpIcon
            width={25}
            height={25}
            className={`ml-2 rotate-180 transform transition-all duration-500 ${
              toggle ? "rotate-0" : ""
            }`}
          />
        </button>
        <div
          id="list-container"
          className={`absolute mt-[25px] border border-t-0 border-black bg-white w-56 rounded-b-sm 
       overflow-hidden max-h-0 transition-all duration-500 ease-in-out
       ${toggle ? "max-h-44" : ""}
        `}
        >
          <ul className="ml-2 ">
            <li className="mb-2 mt-2">Clothes</li>
            <li className="mb-2">Furniture</li>
            <li className="mb-2">Electronics</li>
            <li className="mb-2">Shoes</li>
            <li className="mb-2">Others</li>
          </ul>
        </div>
      </div>

      <div
        id="tail-container"
        className="flex items-center w-fit justify-self-end "
      >
        <div
          id="search-bar"
          className="md:border md:bg-[#f8f8f8] md:rounded-sm md:p-2 md:flex w-60 hidden"
        >
          <MagnifyingGlassIcon
            width={20}
            height={20}
            fill="gray"
            className="mr-2"
          />
          <input
            type="text"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>
        <ShoppingCartIcon
          width={20}
          height={20}
          color="black"
          className="lg:ml-6 ml-4"
        />
        <UserIcon width={20} height={20} color="black" className="lg:ml-6 ml-4" />
      </div>
    </header>
  );
};
export default Header;
