import Image from "next/image";
import Link from "next/link";

export function CategoryCard() {
  return (
    <Link href="/job" className="w-[60%]">
      <div className="h-60 flex flex-row flex-wrap items-center justify-center bg-pink p-3 rounded-2xl space-x-3">
        <p className="text-primary-foreground font-sans text-xl">Категорія тварин</p>
        <Image
          src={"/Category.svg"}
          width={150}
          height={200}
          alt="category icon"
        />
      </div>
    </Link>
  );
}
