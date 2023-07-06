"use client";
import { useParams } from "next/navigation";
import DropList from "../DropList";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "@/redux/Features/cart/cartSlice";

const ItemDetails = () => {
  const itemId = useParams();
  const quantityRef = useRef();
  const [item, setItem] = useState();
  const [selectidImg, setSelectidImg] = useState(0);
  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(itemId.itemTitle);
    const getItem = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${itemId.itemTitle}`
      );

      if (!response) {
        return new Error("Error while catching data");
      }

      const data = await response.json();
      setItem(data);
      console.log(data);
    };
    getItem();
  }, []);

  const handleSelection = (idx) => {
    setSelectidImg(idx);
    console.log(idx);
  };

  const addItemHandler = () => {
    dispatch(
      addItem({
        id: itemId.itemTitle,
        image: item.images[0],
        title: item.title,
        price: item.price,
        rating: "★★★★★",
        customiztions: "colors",
        quantity: quantityRef.current.value,
      })
    );
  };

  return (
    <div className="min-h-screen h-full w-full lg:px-24 md:px-14 px-6 font-Montserrat">
      <div className="w-full grid grid-cols-6 ">
        <div id="col1" className="col-span-4">
          <div id="imgs" className="flex">
            <div className="w-fit ">
              {!item ? (
                <>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                  <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
                </>
              ) : null}

              {item?.images.map((pic, index) => (
                <label key={index} className="w-fit h-fit cursor-pointer">
                  <input
                    type="radio"
                    className="hidden peer"
                    name="displayImgs"
                    value={index}
                    defaultChecked={index == 0 ? true : false}
                    onChange={() => handleSelection(index)}
                  />
                  <Image
                    width={100}
                    height={100}
                    src={pic}
                    alt=" "
                    sizes="small"
                    className="w-16 h-16 bg-gray-300 rounded-lg mb-2 peer-checked:border-2 peer-checked:border-black"
                  ></Image>
                </label>
              ))}
            </div>
            <div
              className={`mb-2 w-[712px] h-[712px] ml-2 shadow-sm rounded-lg relative ${
                !item ? "bg-gray-300 animate-pulse" : ""
              }`}
            >
              <Image
                fill
                alt=" "
                src={item?.images[selectidImg]}
                sizes="small"
                className="rounded-lg outline-none border-none"
              ></Image>
            </div>
          </div>
        </div>
        <div id="col2" className="col-span-2 pl-4">
          <div
            className={`font-semibold text-3xl text-[#1f1e1e] ${
              !item
                ? "bg-gray-300 animate-pulse w-full h-[21px] rounded mt-2"
                : ""
            }`}
          >
            {item ? "USD " + item.price : null}
          </div>
          <div
            className={`${
              !item
                ? "bg-gray-300 animate-pulse w-full h-16 rounded mt-8"
                : "mt-4"
            }`}
          >
            {item?.description}
          </div>
          <div className="mt-4">Totla review ★★★★★</div>
          <div className="mt-4">colors</div>
          <input
            ref={quantityRef}
            min={1}
            defaultValue={1}
            type="number"
            className="w-20 py-1 px-2 rounded-md border border-black focus:outline-none text-lg"
          />
          <button
            className="text-white font-medium rounded-full bg-[#1f1e1e] w-full p-3 mt-4"
            onClick={addItemHandler}
          >
            Add to cart
          </button>
          <DropList
            list={[
              { text: "hello 1" },
              { text: "hello 2" },
              { text: "hello 3" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
