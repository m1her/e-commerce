"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const SlideShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let timeoutId;
  useEffect(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="font-Montserrat flex justify-center relative ">
      <div className="w-full lg:h-[480px] md:h-[380px] h-[320px] bg-slate-500 rounded-md flex flex-col items-center relative shadow shadow-black">
        <div className="w-full h-full my-0 mx-auto overflow-hidden rounded-md">
          <div
            className="whitespace-nowrap ease-in-out transition-all h-full"
            style={{
              transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
              transitionDuration: "0.5s",
            }}
          >
            {slides.map((slide, index) => (
              <Image
                key={index}
                alt="slide"
                //fill
                width={900}
                height={900}
                src={slides[index].url}
                className="w-full h-full inline-block"
              />
            ))}
          </div>
        </div>

        <div className="bg-[#0000006d] absolute w-full h-full rounded-md ">
          <div id="buttons" className="flex w-full justify-end lg:p-6 p-4 ">
            <button
              className="border-r bg-white outline-none rounded-l-md lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:bg-gray-50"
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                }
                //else {setCurrentIndex(slides.length - 1);}
              }}
            >
              <ChevronLeftIcon
                width={20}
                height={20}
                color={currentIndex == 0 ? "grey" : "black"}
              />
            </button>
            <button
              className="border-l bg-white outline-none rounded-r-md lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:bg-gray-50"
              onClick={() => {
                if (currentIndex < slides.length - 1) {
                  setCurrentIndex(currentIndex + 1);
                }
                //else {setCurrentIndex(0);}
              }}
            >
              <ChevronRightIcon
                width={20}
                height={20}
                color={currentIndex == slides.length - 1 ? "grey" : "black"}
              />
            </button>
          </div>

          <div
            id="title"
            className="select-none lg:px-10 md:px-6 px-4 lg:py-6 md:py-4 py-2 w-full text-center text-white lg:text-[54px] md:text-[44px] text-[30px] font-bold leading-tight"
          >
            {slides[currentIndex].description}
          </div>
          <div className="flex w-full justify-center lg:mt-8 mt-6 absolute">
            <button className="px-4 text-sm text-gray-600 border-l bg-white outline-none rounded-md h-10 flex justify-center items-center hover:bg-gray-50">
              Shop now{" "}
              <ArrowRightIcon
                width={16}
                height={16}
                color="grey"
                className="ml-2"
              />
            </button>
          </div>

          <div className="flex w-full justify-center text-white text-2xl select-none md:bottom-4 bottom-2 absolute">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => {
                  goToSlide(index);
                }}
                className={`cursor-pointer ml-0.5 ${
                  currentIndex == index
                    ? "font-extrabold text-white"
                    : "font-semibold text-gray-200"
                }`}
              >
                •
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlideShow;
