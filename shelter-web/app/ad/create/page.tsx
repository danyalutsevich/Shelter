"use client";

import { Header } from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { env } from "@/utils/enum/env.enum";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "@/utils/types/User";

export default function CreateAd() {
  const router = useRouter();

  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [city, setCity] = useState("");
  
  const [image, setImage] = useState<File | null>();
  
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }

    setUser(JSON.parse(localStorage?.getItem("user") || "{}"));
  }, []);

  const createAd = () => {
    if (typeof window == "undefined") {
      return;
    }

    fetch(env.url + "/Advt/AddAdvt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorId: user?.id,
        title,
        description,
        price,
        category,
        animalType,
        city,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(async (data) => {
          console.log(data);
          image && (await uploadImage(data.id));
          router.push("/ad/" + data.id);
        });
      }
    });
  };

  const uploadImage = async (adId: string) => {
    const formData = new FormData();
    formData.append("file", image as Blob, image?.name || "");

    await fetch(env.url + "Advt/UploadImage/" + adId, {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-lg m-2">Create an advertisement</h1>
        <Card className="space-y-2 max-w-2xl w-full flex flex-col p-2">
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            placeholder="Animal Type"
            onChange={(e) => setAnimalType(e.target.value)}
          />
          <Input placeholder="City" onChange={(e) => setCity(e.target.value)} />

          {image && (
            <Image
              src={URL.createObjectURL(image)}
              alt="upload image"
              width={100}
              height={100}
              className="rounded-lg"
            />
          )}

          <Input
            placeholder="Image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.item(0))}
          />
          <Button onClick={createAd}>Create</Button>
        </Card>
      </div>
    </div>
  );
}
