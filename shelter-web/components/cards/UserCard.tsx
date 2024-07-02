import { User } from "@/utils/types/User";
import { Card } from "../ui/card";
import Image from "next/image";
import { env } from "@/utils/enum/env.enum";
import { useState } from "react";
import Link from "next/link";

interface UserCardProps {
  user?: User;
}

export function UserCard({ user }: UserCardProps) {
  const [imageError, setImageError] = useState(false);
  if (!user) return null;

  return (
    <Card className="w-9/12 p-4 ">
      <Link href={`/user/${user.id}`}>
        <article className="flex flex-row justify-between">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-xl">{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.city}</p>
            <p>{user.address}</p>
          </div>
          <div>
            <Image
              src={
                imageError
                  ? "/Group.svg"
                  : `${env.url}Account/GetImageByFileName?filename=${user.avatar}`
              }
              width={40}
              height={40}
              className="rounded-lg"
              alt="user image"
              onLoadingComplete={(result) => {
                result.naturalWidth === 0 && setImageError(true);
              }}
              onError={() => setImageError(true)}
              onEmptied={() => setImageError(true)}
            />
          </div>
        </article>
      </Link>
    </Card>
  );
}
