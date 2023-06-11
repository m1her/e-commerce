import { CheckIcon } from "@heroicons/react/20/solid";
import { ClockIcon, FaceSmileIcon, TruckIcon } from "@heroicons/react/24/outline";

const WarrantySlide = () => {
  return (
    <div className="mt-16 w-full font-Montserrat justify-center relative ">
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="lg:text-4xl md:text-2xl font-semibold text-[#171717] w-full">
          We provide best customer experiences
        </div>
        <div className="border-l-2 flex items-center w-fit pl-4 ml-auto border-[#272728] font-semibold md:text-sm text-xs text-[#545457]">
          We ensure our customers have the best shopping experience
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8 md:gap-y-6 gap-y-6 mt-8 md:place-items-start place-items-center">
        <div className="md:w-full w-72">
          <div className="w-14 h-14 rounded-lg bg-gray-300 flex justify-center items-center">
            <CheckIcon width={25} height={25} />
          </div>
          <div className="font-semibold mt-2">Original Products</div>
          <div className="text-sm text-[#545457] font-semibold mt-2">
            We provide many back guarantee if the products are not original
          </div>
        </div>
        <div className="md:w-full w-72">
          <div className="w-14 h-14 rounded-lg bg-gray-300 flex justify-center items-center">
            <FaceSmileIcon width={25} height={25} />
          </div>
          <div className="font-semibold mt-2">Satisfaction Guarantee</div>
          <div className="text-sm text-[#545457] font-semibold mt-2">
            Exchange the product you've purchased if it doesn't fit on you
          </div>
        </div>
        <div className="md:w-full w-72">
          <div className="w-14 h-14 rounded-lg bg-gray-300 flex justify-center items-center">
            <ClockIcon width={25} height={25} />
          </div>
          <div className="font-semibold mt-2">New Arrival Everyday</div>
          <div className="text-sm text-[#545457] font-semibold mt-2">
            We update our collections almost everyday
          </div>
        </div>
        <div className="md:w-full w-72">
          <div className="w-14 h-14 rounded-lg bg-gray-300 flex justify-center items-center">
            <TruckIcon width={25} height={25} />
          </div>
          <div className="font-semibold mt-2">Fast & Free Shipping</div>
          <div className="text-sm text-[#545457] font-semibold mt-2">
            We offer fast and free shipping for our loyal customers
          </div>
        </div>
      </div>
    </div>
  );
};
export default WarrantySlide;
