"use client";

import { env } from "@/utils/enum/env.enum";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Ad as Advt } from "@/utils/types/Ad";
import { AdCard } from "@/components/cards/AdCard";
import { Header } from "@/components/custom/Header";

export default function Ad() {
  const params = useParams();
  const [advt, setAdvt] = useState<Advt>();

  useEffect(() => {
    fetch(env.url + "/Advt/GetAdvtById/" + params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setAdvt(data);
        });
      }
    });
  }, [params.id]);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-4 h-[70vh]">
        <AdCard ad={advt} />
      </div>
    </>
  );
}
