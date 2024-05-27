"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "./Search";
import Image from "next/image";
import { LanguageSettings } from "./LanguageSettings";
import { useRouter } from "next/router";

export function Header() {
  return (
    <div className="bg-purple-400 p-3 space-y-2 flex flex-col items-center">
      <div className="">
        <LanguageSettings />
      </div>
      <div className="flex justify-between w-full">
        <h1>Logo</h1>
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
      <div className="flex flex-row items-center justify-center space-x-4">
        <Search />
        <Image src="/cat.svg" width={100} height={100} alt="cat" />
      </div>
    </div>
  );
}
