"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Cart from "../Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false);
  const handleOpen = () => cartItems.length > 0 && setOpen(true);

  const [toggle, setToggle] = useState(false);

  return (
    <header className="border-b border-black grid grid-cols-3 items-center font-Montserrat py-1 lg:px-24 md:px-14 px-6 mb-10">
      <Cart open={open} setOpen={setOpen} />

      <div id="title-container" className="py-4 pr-14">
        <Link href="/" className="text-3xl select-none">
          FakeStore
        </Link>
      </div>

      <div
        id="buttons-container"
        className="justify-self-end sm:justify-self-start z-50"
      >
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
            className={`ml-2  transform transition-all duration-500 ease-in-out ${
              toggle ? "rotate-0" : "rotate-180"
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
          <ul className="ml-2 flex flex-col">
            <Link href={`clothes`} className="mb-2 mt-2">
              Clothes
            </Link>
            <Link href={`furniture`} className="mb-2">
              Furniture
            </Link>
            <Link href={`electronics`} className="mb-2">
              Electronics
            </Link>
            <Link href={`shoes`} className="mb-2">
              Shoes
            </Link>
            <Link href={`others`} className="mb-2">
              Others
            </Link>
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
        <div className="relative cursor-pointer" onClick={handleOpen}>
          {cartItems.length >= 1 && (
            <div className="flex justify-center p-2 items-center absolute w-3 h-3 text-xs font-medium rounded-full bg-[#fd5f4a] -right-2 -top-1.5">
              {cartItems.length}
            </div>
          )}
          <ShoppingCartIcon
            width={20}
            height={20}
            color="black"
            className="lg:ml-6 ml-4"
          />
        </div>
        <UserIcon
          width={20}
          height={20}
          color="black"
          className="lg:ml-6 ml-4"
        />
      </div>
    </header>
  );
};
export default Header;
