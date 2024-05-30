"use client";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { env } from "@/utils/enum/env.enum";

//https://shelterbackapi.azurewebsites.net/Account/AuthenticateUser?userEmail=luchevich31%40gmail.com&userPassword=Qwerty123%23

export default function SignIn() {
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

    if (!res.ok) {
      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-green-300 to-amber-200 h-[100vh]">
      <Card className="p-2 space-y-6 w-96 h-80 justify-between flex flex-col">
        <h1 className="text-center font-sans font-black text-lg">Sign In</h1>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full" onClick={signin}>
          Sign In
        </Button>
      </Card>
    </div>
  );
}
