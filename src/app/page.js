"use client";

import LandingPage from "@/components/LandingPage";
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
      <LandingPage />
    </>
  );
}
