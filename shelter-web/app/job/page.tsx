"use client";

import { AdCard } from "@/components/cards/AdCard";
import { Header } from "@/components/custom/Header";
import { env } from "@/utils/enum/env.enum";
import { Ad } from "@/utils/types/Ad";
import { useEffect, useState } from "react";

export default function Job() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    fetch(env.url + "/Advt/GetAllAdvts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setAds(data);
        });
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center border space-y-3 p-2">
        {ads.map((ad) => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </div>
    </>
  );
}
