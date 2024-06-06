import Link from "next/link";
import Image from "next/image";

export function OneTimeCard() {
  return (
    <Link href="/one-time" className="w-[60%]">
      <div className="h-60 flex flex-row flex-wrap items-center justify-center bg-lightGreen p-3 rounded-2xl space-x-3">
        <p className="text-primary-foreground font-sans text-xl">Одноразова послуга</p>
        <Image
          src={"/OneTime.svg"}
          width={140}
          height={140}
          alt="OneTime icon"
        />
      </div>
    </Link>
  );
}
