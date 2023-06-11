import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DiscountOffer = () => {
  return (
    <div className="w-full grid grid-cols-9 bg-gray-800 rounded-lg md:mt-20 mt-12 shadow-md ">
      <div className="relative col-span-4 rounded-l-lg">
        <Image
          fill
          src="https://img.freepik.com/free-photo/top-view-composition-different-traveling-elements_23-2148884942.jpg?w=740&t=st=1686499608~exp=1686500208~hmac=b1b84057130c65bc013e548d63f37bc4f8c34d58060ed9cd185d7d2cfd9af7fd"
          alt="offer"
          className="rounded-l-lg"
        />
      </div>
      <div className="md:p-12 p-6 col-span-5">
        <div className="text-sm font-medium text-[#c2c1c1] mb-2">LIMITED OFFER</div>
        <div className="md:text-5xl text-xl font-semibold text-white">35% off only this friday and get special gift</div>
        <button className="md:mt-8 mt-4 md:px-5 px-4 md:py-3 py-2 md:text-base text-sm text-gray-500 font-medium rounded-lg flex bg-white justify-center items-center">Grap it now <ArrowRightIcon  color="gray" className="ml-2 md:w-6 md:h-6 w-4 h-4"/></button>     
      </div>
    </div>
  );
};

export default DiscountOffer;
