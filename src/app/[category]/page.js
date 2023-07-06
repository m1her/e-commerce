"use client";

import FilterBar from "@/components/FilterBar";
import Item from "@/components/Item";
import LoadingItem from "@/components/LoadingItem";
import { Pagination } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const category = () => {
  const pathname = usePathname();
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(99999);
  const [title, setTitle] = useState();
  const [categoryId, setCategoryId] = useState(
    (pathname == "/clothes" && 1) ||
      (pathname == "/furniture" && 2) ||
      (pathname == "/electronics" && 3) ||
      (pathname == "/shoes" && 4) ||
      (pathname == "/others" && 5)
  );
  const [itemsLength, setItemsLength] = useState();

  useEffect(() => {
    console.log(pathname);
    switch (pathname) {
      case "/clothes":
        setCategoryId(1);
        break;
      case "/furniture":
        setCategoryId(2);
        break;
      case "/electronics":
        setCategoryId(3);
        break;
      case "/shoes":
        setCategoryId(4);
        break;
      case "/others":
        setCategoryId(5);
        break;
    }
  }, [pathname]);

  useEffect(() => {
    const onLoad = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}&price_min=${
          lowPrice ? lowPrice : 1
        }&${highPrice != 0 ? "price_max=" + highPrice : "price_max=99999"}&${
          title ? "title=" + title : ""
        }`
      );

      if (!response) {
        return new Error("Error while catching data");
      }

      const data = await response.json();
      setItemsLength(Math.ceil(data.length / 20));
    };

    onLoad();
  }, [categoryId, highPrice, lowPrice, title]);

  useEffect(() => {
    const onLoad = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}&offset=${offset}&limit=20&price_min=${
          lowPrice ? lowPrice : 1
        }&${highPrice != 0 ? "price_max=" + highPrice : "price_max=99999"}&${
          title ? "title=" + title : ""
        }`
      );

      if (!response) {
        return new Error("Error while catching data");
      }

      const data = await response.json();
      setItems(data);
    };

    onLoad();
  }, [offset, title, highPrice, lowPrice]);

  const pageChangeHandler = (e, page) => {
    setItems([]);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setOffset((page - 1) * 20);
  };

  const lowPriceHandler = (price) => {
    setLowPrice(price);
  };
  const highPriceHandler = (price) => {
    setHighPrice(price);
  };
  const titleHandler = (searchedTitle) => {
    setTitle(searchedTitle);
  };

  return (
    <div className="w-full">

      <FilterBar
        category={
          pathname.slice(1).charAt(0).toUpperCase() + pathname.substring(2)
        }
        setlowPrice={lowPriceHandler}
        sethighPrice={highPriceHandler}
        setTitle={titleHandler}
      />
      <div className="grid grid-cols-5 gap-2 w-fit">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      {items.length == 0 && !title && highPrice == 99999 && lowPrice == 0 && (
        <div className="grid grid-cols-5 gap-2 w-fit">
          {Array.from({ length: 20 }, (_, index) => (
            <LoadingItem key={index + 1} />
          ))}
        </div>
      )}
      <div className="w-full flex justify-end mt-10">
        <Pagination
          count={itemsLength}
          shape="rounded"
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
};
export default category;
