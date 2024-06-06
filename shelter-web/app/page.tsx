import { CategoryCard } from "@/components/cards/CategoryCard";
import { DwellingCard } from "@/components/cards/DwellingCard";
import { OneTimeCard } from "@/components/cards/OneTimeCard";
import { ResumeCard } from "@/components/cards/ResumeCard";
import { WalkCard } from "@/components/cards/WalkCard";
import { Header } from "@/components/custom/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center bg-[#F4F1FF]">
        <div className="w-3/5 flex flex-row space-x-4 m-2">
          <CategoryCard />
          <DwellingCard />
        </div>
        <div className="w-3/5 flex flex-row space-x-4 m-2">
          <WalkCard />
          <OneTimeCard />
        </div>
        <div className="w-3/5 flex flex-row space-x-4 m-2">
          <ResumeCard />
        </div>
      </div>
    </>
  );
}
