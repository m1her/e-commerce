import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ItemCard = (props) => {
  return (
    <div className="w-[30%] font-Montserrat">
      <div className="relative lg:h-[420px] md:h-[320px] sm:h-[260px] h-[200px] rounded-lg shadow-md ">
        <Image src={props.img} fill className="absolute rounded-lg" />
        {props.sale && (
          <div className="bg-red-600 rounded m-4 px-2 py-1 text-white sm:text-sm text-xs absolute">
            SALE
          </div>
        )}
      </div>
      <div className="flex w-full justify-between mt-4">
        <div>
          <div className="font-semibold text-[#383737] mb-2 sm:text-base text-xs">Autmn Dress</div>
          <div className="flex">
            {!props.sale && (
              <div className="sm:text-2xl text-base font-semibold text-[#383737]">
                ${props.price}
              </div>
            )}
            {props.sale && (
              <>
                <div className="sm:text-2xl text-base font-semibold text-[#383737]">
                  ${parseInt(props.price - (props.price * props.discount))}
                </div>
                <div className="ml-2 sm:text-base text-xs line-through font-semibold text-[#929295]">
                  ${props.price}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="bg-gray-800 flex justify-center items-center sm:w-12 sm:h-12 w-8 h-8 sm:p-3 p-2 rounded-lg">
          <ShoppingCartIcon width={20} height={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
