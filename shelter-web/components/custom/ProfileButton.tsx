import { Button } from "../ui/button";
import Image from "next/image";
import { env } from "@/utils/enum/env.enum";
import Link from "next/link";

export function ProfileButton() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Link href="/profile">
      <Button>
        <div className="flex flex-row items-center space-x-2">
          <p className="text-white">{user.name}</p>
          {user.avatar ? (
            <Image
              src={`${env.url}Account/GetImageByFileName?filename=${user.avatar}`}
              alt="profile"
              width={60}
              height={60}
              className="rounded-full w-14 h-14"
            />
          ) : null}
        </div>
      </Button>
    </Link>
  );
}
