"use client";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { env } from "@/utils/enum/env.enum";
import validator from "validator";
import Link from "next/link";
import Image from "next/image";
import { redirect,useRouter } from "next/navigation";

export default function SignIn() {

  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signin = async () => {
    const res = await fetch(
      env.url +
        "/Account/AuthenticateUser?" +
        `userEmail=${encodeURIComponent(
          email
        )}&userPassword=${encodeURIComponent(password)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      }
    );

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center h-[90vh] bg-[#F4F1FF] justify-center pb-24">
      <div className="flex flex-col items-center justify-center m-8 p-3">
        <Link href="/">
          <Image
            src={"/Logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="m-5"
          />
        </Link>
        <h1 className="font-sans font-bold text-3xl">Ласкаво просимо</h1>
        <p className="font-sans max-w-96 text-center">
          За кілька хвилин ми допоможемо вам створити вражаюче резюме та зробити
          перший крок до вакансії вашої мрії.
        </p>
      </div>

      <Card className="p-4 space-y-6 w-full max-w-[40%] justify-between flex flex-col">
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {validator.isEmail(email) || email == "" ? null : (
            <p className="text-red-500">Невірний формат електронної пошти</p>
          )}
        </div>
        <div>
          <Label>Пароль</Label>
          <Input
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button className="w-full" onClick={signin} variant={"outline"}>
          Увійти
        </Button>
      </Card>
    </div>
  );
}
