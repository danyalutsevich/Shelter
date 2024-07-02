import { env } from "@/utils/enum/env.enum";
import { Ad } from "@/utils/types/Ad";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { User } from "@/utils/types/User";
import { UserCard } from "./UserCard";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import dayjs from "dayjs";
import Link from "next/link";

interface AdCardProps {
  ad?: Ad;
}

export function AdCard({ ad }: AdCardProps) {
  const [imageError, setImageError] = useState(false);

  const [author, setAuthor] = useState<any>();
  const [saved, setSaved] = useState<any[]>([]);

  useEffect(() => {
    fetch(env.url + "/Account/GetUserById/" + ad?.authorId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setAuthor(data);
        });
      }
    });
    getSaved();
  }, [ad?.authorId]);

  const getSaved = () => {
    fetch(
      env.url +
        "/Advt/GetSavedAdvts/" +
        JSON.parse(localStorage.getItem("user") || "{}")?.id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setSaved(data);
        });
      }
    });
  };

  const saveAd = () => {
    fetch(env.url + "/Advt/SaveAdvt/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        advtId: ad?.id,
        userId: JSON.parse(localStorage.getItem("user") || "{}").id,
      }),
    });
  };

  const deleteSaved = () => {};

  if (!ad) return null;

  return (
    <Card className="w-9/12 p-4 ">
      <Link href={`/ad/${ad.id}`}>
        <article className="flex flex-row justify-between">
          <div className="space-y-2 max-w-5xl">
            <div className="flex-row flex space-x-2">
              {ad.category && <Badge>{ad.category}</Badge>}
              {ad.animalType && <Badge>{ad.animalType}</Badge>}
            </div>
            <h1 className="text-3xl font-bold">{ad.title}</h1>
            <p className="text-xl">
              {ad.price} {ad.price.toLocaleLowerCase() == "free" ? "" : "грн"}
            </p>
            <p>{ad.description}</p>
            <p className="text-zinc-500">
              {dayjs(ad.date).format("DD.MM.YYYY")}
            </p>
            <UserCard user={author} />
          </div>
          <div className="flex flex-col space-y-2">
            <Image
              src={
                imageError
                  ? "/Group.svg"
                  : `${env.url}Advt/GetImageByFileName?filename=${ad.image}`
              }
              width={200}
              height={200}
              className="rounded-lg"
              alt="ad image"
              onLoadingComplete={(result) => {
                result.naturalWidth === 0 && setImageError(true);
              }}
              onError={() => setImageError(true)}
              onEmptied={() => setImageError(true)}
            />
            {saved.some((saved) => saved.advtId == ad.id) ? (
              <div className="flex flex-row space-x-2">
                <FaRegBookmark
                  size={25}
                  onClick={(e) => {
                    e.stopPropagation();
                    saveAd();
                    getSaved();
                  }}
                />
                <p>Зберегти</p>
              </div>
            ) : (
              <div className="flex flex-row space-x-2">
                <FaBookmark
                  size={25}
                  onClick={(e) => {
                    e.stopPropagation();
                    saveAd();
                    getSaved();
                  }}
                />
                <p>Зберегти</p>
              </div>
            )}
          </div>
        </article>
      </Link>
    </Card>
  );
}
