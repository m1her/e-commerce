"use client";

import Body from "@/components/Body";
import Header from "@/components/Header";
import { useEffect } from "react";

export default function Home() {
  const onLoad = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories", {
      method: "GET",
    });

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <Header />
      <Body />
    </>
  );
}
