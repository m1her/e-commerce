import { useEffect, useState } from "react";
import ItemCard from "../ItemCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    img: "https://img.freepik.com/free-photo/portrait-handsome-young-model-man-dressed-jeans-clothes-posing-isolated_158538-9087.jpg?w=740&t=st=1686303427~exp=1686304027~hmac=361654e6bf348df0456ae4e2d3fd7176e0456d611d64b08b4986c004e2f116de",
    sale: false,
    discount: 0,
    price: 50,
  },
  {
    img: "https://img.freepik.com/free-photo/beautiful-smiling-hipster-brunette-woman-model-casual-stylish-summer-blue-sweater-isolated-white-background-full-length_158538-13105.jpg?w=740&t=st=1686342011~exp=1686342611~hmac=4957b5e58baffb607060252736859418d587d5b6ace08785c7a38628b7051de1",
    sale: true,
    discount: 0.35,
    price: 80,
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-stylish-handsome-young-man-standing-studio-against-white-man-wearing-jacket_155003-22162.jpg?w=360&t=st=1686342153~exp=1686342753~hmac=ca2f9881c0689d3e97f1e5cbcce335c0f4e2c24046696ffa3b41c12b3d88b057",
    sale: true,
    discount: 0.30,
    price: 29,
  },
  {
    img: "https://img.freepik.com/free-photo/full-length-portrait-confindent-attractive-man-jacket_171337-9547.jpg?w=360&t=st=1686342185~exp=1686342785~hmac=1bbd62bb92ac6c27eb2d0ffc380f192f23108b0f1f76f20f493065db4293a32a",
    sale: false,
    discount: 0,
    price: 44,
  },
  {
    img: "https://img.freepik.com/free-photo/man-beige-shirt-pants-casual-wear-fashion-full-body_53876-128784.jpg?w=360&t=st=1686342206~exp=1686342806~hmac=3d46194fe19a1ea627570de94bb3273bfdf6727365d6772046871e37e9848283",
    sale: true,
    discount: 0.2,
    price: 64,
  },
  {
    img: "https://img.freepik.com/premium-photo/girl-gray-coat-isolated-white-background_158023-2533.jpg?w=360",
    sale: false,
    discount: 0,
    price: 99,
  },
];
const FeaturedSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="font-Montserrat w-full relative mt-16">
      <div>
        <div className="md:text-3xl text-2xl font-semibold text-[#171717] mb-8">
          Featured Products
        </div>
      </div>
      <button
        className="absolute md:px-2.5 px-1.5 md:py-8 py-4 bg-[#f6f6f6c3] hover:bg-[#efeeeeba] rounded-lg z-50 right-2 lg:top-[40%] md:top-[38%] sm:top-[40%] top-[37%]  "
        onClick={() => {
          goToSlide(1);
        }}
      >
        <ChevronRightIcon width={20} height={20} />
      </button>
      <button
        className="absolute md:px-2.5 px-1.5 md:py-8 py-4 bg-[#f6f6f6c3] hover:bg-[#efeeeeba] rounded-lg z-50 left-2 lg:top-[40%] md:top-[38%] sm:top-[40%] top-[37%]"
        onClick={() => {
          goToSlide(0);
        }}
      >
        <ChevronLeftIcon width={20} height={20} />
      </button>
      <div className="w-full h-full my-0 mx-auto overflow-hidden rounded-md">
        <div
          className=" w-full whitespace-nowrap ease-in-out transition-all"
          style={{
            transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
            transitionDuration: "0.5s",
          }}
        >
          <div className="w-full h-full inline-flex justify-between">
            {products.slice(0, 3).map((product) => (
              <ItemCard key="index" img={product.img} sale={product.sale} price={product.price} discount={product.discount} />
            ))}
          </div>
          <div className="w-full h-full inline-flex justify-between">
            {products.slice(3).map((product) => (
              <ItemCard key="index" img={product.img} sale={product.sale} price={product.price} discount={product.discount}/>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full mt-10 justify-center text-white text-2xl select-none">
        <div className="p-0.5 grid bg-gray-300 rounded-full w-2/5 ">
          <div
            className={`cursor-pointer right-0 w-1/2 bg-[#171717] rounded-full h-1.5 duration-500 ease-in-out transition-all ${
              currentIndex == 0 ? " -translate-x-0" : " translate-x-full"
            }`}
            onClick={() => {
              currentIndex == 0? goToSlide(1) : goToSlide(0);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedSlide;
