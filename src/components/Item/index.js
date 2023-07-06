import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Item = (props) => {
  const router = useRouter();
  const linkHandler = (id) => {
    router.push(`/item/${props.item.id}`);
  };
  return (
    <div className="group hover:cursor-pointer w-[228px] h-[450px] font-Montserrat bg-[#fdfdfd] border border-[#eeecec] rounded relative">
      <div className="relative h-[228px] w-full rounded" >
        <Image
          alt="item"
          src={props.item.images[0]}
          fill
          sizes="small"
          className="absolute rounded-t  group-hover:shadow group-hover:shadow-[#5e5e5ecc] transition-all ease-in-out duration-200"
          onClick={linkHandler}
        />
        {props.sale && (
          <div className="bg-red-600 rounded m-4 px-2 py-1 text-white sm:text-sm text-xs absolute">
            SALE
          </div>
        )}
      </div>
      <div className="w-full p-2 h-full">
        <div className="font-semibold text-[#383737] mb-2 sm:text-base text-xs line-clamp-1">
          {props.item.title}
        </div>
        <div className="text-[#383737] mb-2 sm:text-sm text-xs line-clamp-4">
          {props.item.description}
        </div>
        <div className="flex absolute bottom-2 left-2">
          <div className="sm:text-2xl text-base font-semibold text-[#383737]  ">
            ${props.item.price}
          </div>
          {/* {!props.sale && (
            <div className="sm:text-2xl text-base font-semibold text-[#383737] absolute bottom-4 left-2">
              ${props.item.price}
            </div>
          )}
          {props.sale && (
            <>
              <div className="sm:text-2xl text-base font-semibold text-[#383737]">
                ${parseInt(props.price - props.price * props.discount)}
              </div>
              <div className="ml-2 sm:text-base text-xs line-through font-semibold text-[#929295]">
                ${props.price}
              </div>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Item;
