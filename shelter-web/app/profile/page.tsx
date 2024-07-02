"use client";

import { useState } from "react";
import { Header } from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { env } from "@/utils/enum/env.enum";
import Image from "next/image";
import { User } from "@/utils/types/User";

export default function Profile() {
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const onSave = async () => {
    const res = await fetch(env.url + "/Account/EditUser/" + user.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data));
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/signin";
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-3">
        <Card className="p-4 space-y-6 w-full max-w-[40%] justify-between flex flex-col">
          {user.avatar ? (
            <Image
              src={`${env.url}/Account/GetImageByFileName?filename=${user.avatar}`}
              alt="profile"
              width={60}
              height={60}
              className="rounded-full w-14 h-14"
            />
          ) : null}

          <Input
            placeholder="Name"
            value={user.name}
            onChange={(e) =>
              setUser((user: User) => {
                user.name = e.target.value;
                return user;
              })
            }
          />
          <Input
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              setUser((user: User) => {
                user.email = e.target.value;
                return user;
              })
            }
          />
          <Input
            placeholder="Phone"
            value={user.phone}
            onChange={(e) =>
              setUser((user: User) => {
                user.phone = e.target.value;
                return user;
              })
            }
          />
          <Input
            placeholder="City"
            value={user.city}
            onChange={(e) =>
              setUser((user: User) => {
                user.city = e.target.value;
                return user;
              })
            }
          />
          <Input
            placeholder="Address"
            value={user.address}
            onChange={(e) =>
              setUser((user: User) => {
                user.address = e.target.value;
                return user;
              })
            }
          />

          <Button onClick={onSave}>Save</Button>
          <Button onClick={logOut} variant={"destructive"}>
            Log Out
          </Button>
        </Card>
      </div>
    </>
  );
}
