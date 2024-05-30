"use client";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { env } from "@/utils/enum/env.enum";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    <div className="flex items-center justify-center bg-gradient-to-b to-green-300 from-amber-200 h-[100vh]">
      <Card className="p-2 space-y-6 w-96 justify-between flex flex-col">
        <h1 className="text-center font-sans font-black text-lg">Sign Up</h1>
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Name"
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
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full" onClick={signup}>
          Sign Up
        </Button>
      </Card>
    </div>
  );
}
