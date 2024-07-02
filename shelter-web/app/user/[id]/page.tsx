"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { User as USER } from "@/utils/types/User";
import { env } from "@/utils/enum/env.enum";
import { Header } from "@/components/custom/Header";
import { UserCard } from "@/components/cards/UserCard";

export default function User() {
  const params = useParams();
  const [user, setUser] = useState<USER>();
  useEffect(() => {
    fetch(env.url + "/Account/GetUserById/" + params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
        });
      }
    });
  }, [params.id]);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-4 h-[70vh]">
        <UserCard user={user} />
      </div>
    </>
  );
}
