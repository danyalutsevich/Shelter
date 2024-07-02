"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/custom/Header";
import { AdCard } from "@/components/cards/AdCard";
import { Ad } from "@/utils/types/Ad";
import { env } from "@/utils/enum/env.enum";

export default function Search() {
  const params = useParams();
  const { q } = params;

  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    fetch(env.url + "/Advt/search?title=" + q, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          setAds(data);
        });
      }
    });
  }, [q]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center border space-y-3 p-2">
        {ads.map((ad) => (
          <AdCard key={ad?.id} ad={ad} />
        ))}
      </div>
    </>
  );
}
