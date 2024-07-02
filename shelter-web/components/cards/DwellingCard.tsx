import Link from "next/link";
import Image from "next/image";

export function DwellingCard() {
  return (
    <Link href="/job" className="w-[40%]">
      <div className="h-60 flex flex-row flex-wrap items-center justify-center bg-lightPurple p-3 rounded-2xl space-x-3">
        <p className="text-primary-foreground font-sans text-xl">Проживання</p>
        <Image
          src={"/Dwelling.svg"}
          width={120}
          height={120}
          alt="category icon"
        />
      </div>
    </Link>
  );
}
