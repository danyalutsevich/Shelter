import Link from "next/link";
import Image from "next/image";

export function WalkCard() {
  return (
    <Link href="/walk" className="w-[40%]">
      <div className="h-60 flex flex-row flex-wrap items-center justify-center bg-lightBlue p-3 rounded-2xl space-x-3">
        <p className="text-primary-foreground font-sans text-xl">Прогулянка</p>
        <Image src={"/Walk.svg"} width={120} height={120} alt="OneTime icon" />
      </div>
    </Link>
  );
}
