"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "./Search";
import Image from "next/image";
import { LanguageSettings } from "./LanguageSettings";

export function Header() {
  return (
    <div className="bg-primary p-3 space-y-2 flex flex-col items-center">
      <div className="flex justify-between w-full">
        <Image src="/LogoWhite.svg" width={100} height={100} alt="logo" className=" ml-16"/>
        <div className="flex flex-col">
          <LanguageSettings />
          <div className="flex flex-row items-center space-x-2">
            <Link href="/job" className="text-white">
              Знайти роботу
            </Link>
            <Link href="/resume" className="text-white">
              Розмістити резюме
            </Link>
            <Link href="/signin" className="text-white">
              <Button variant="outline" color="#A794FF" className="text-white">
                Увійти
              </Button>
            </Link>
            <Link href="/signup" className="text-white">
              <Button variant="outline" color="#A794FF" className="text-white">
                Зареєструватися
              </Button>
            </Link>
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
