"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { env } from "@/utils/enum/env.enum";
import validator from "validator";
import { Role } from "@/utils/enum/Role.enum";
import Link from "next/link";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [role, setRole] = useState<string>(Role.Client);

  const signup = async () => {
    const res = await fetch(env.url + "/Account/RegisterUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    console.log(await res.json());
  };

  return (
    <div className="flex flex-col items-center bg-[#F4F1FF] justify-center pb-24">
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
        <h1 className="font-sans font-bold text-3xl">
          Створіть резюме щоб допомогти улюбленцям
        </h1>
        <p className="font-sans max-w-96 text-center">
          За кілька хвилин ми допоможемо вам створити вражаюче резюме та зробити
          перший крок до вакансії вашої мрії.
        </p>
      </div>

      <Card className="p-4 space-y-6 w-full max-w-[40%] justify-between flex flex-col">
        <div>
          <Button
            variant={role == Role.Client ? "default" : "outline"}
            onClick={() => setRole(Role.Client)}
          >
            {"Доглядач"}
          </Button>
          <Button
            variant={role == Role.Provider ? "default" : "outline"}
            onClick={() => setRole(Role.Provider)}
          >
            {"Власник"}
          </Button>
        </div>
        <div>
          <Label>{"Ім'я"}</Label>
          <Input
            type="text"
            placeholder="Ім'я"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          {}
        </div>
        <div>
          <Label>Підтвердження паролю</Label>
          <Input
            type="password"
            placeholder="Підтвердження паролю"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password === confirmPassword ||
          (password == "" && confirmPassword == "") ? null : (
            <p className="text-red-500">Паролі не співпадають</p>
          )}
        </div>
        <Button
          className="w-full"
          onClick={signup}
          variant={"outline"}
          // style={{ backgroundColor: "#6c5ce7" }}
        >
          Зареєструватися
        </Button>
      </Card>
    </div>
  );
}
