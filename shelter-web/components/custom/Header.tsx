"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "./Search";
import Image from "next/image";
import { LanguageSettings } from "./LanguageSettings";
import { ProfileButton } from "./ProfileButton";
import { useEffect, useState } from "react";
import { User } from "@/utils/types/User";

export function Header() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }

    setUser(JSON.parse(localStorage?.getItem("user") || "{}"));
  }, []);

  return (
    <div className="bg-primary p-3 space-y-2 flex flex-col items-center">
      <div className="flex justify-between w-full">
        <Link href="/" className="m-5">
          <Image src="/LogoWhite.svg" width={100} height={100} alt="logo" />
        </Link>
        <div className="flex flex-col">
          {/* <LanguageSettings /> */}
          <div className="flex flex-row items-center space-x-2">
            <Link href="/job" className="text-white">
              Знайти роботу
            </Link>
            <Link href="/ad/create" className="text-white">
              Створити оголошення
            </Link>
            {user ? (
              <ProfileButton />
            ) : (
              <>
                <Link href="/signin" className="text-white">
                  <Button
                    variant="outline"
                    color="#A794FF"
                    className="text-white"
                  >
                    Увійти
                  </Button>
                </Link>
                <Link href="/signup" className="text-white">
                  <Button
                    variant="outline"
                    color="#A794FF"
                    className="text-white"
                  >
                    Зареєструватися
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-white font-sans font-bold text-4xl">
            Пропозиції по турботі за улюбленцями
          </h1>
          <Search />
        </div>
        <Image src="/cat.svg" width={150} height={150} alt="cat" />
      </div>
    </div>
  );
}
