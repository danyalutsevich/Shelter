import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export function ResumeCard() {
  return (
    <Link href="/resume" className="w-[100%]">
      <section className="bg-purple p-4 rounded-2xl flex flex-row">
        <div>
          <Image src="Resume.svg" height={100} width={100} alt="resume icon" />
        </div>
        <div className="space-y-3">
          <h1 className="text-white">Розмістіть резюме</h1>
          <p className="text-white">
            Створення резюме займає в середньому 3–5 хвилин. Власники зможуть
            знайти ваше резюме та запропонувати вам роботу.
          </p>
          <Button className="text-white bg-darkPurple">
            Розмістити резюме
          </Button>
        </div>
      </section>
    </Link>
  );
}
