import Link from "next/link";
import { LanguageSettings } from "./LanguageSettings";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-center py-4">
      <div className="flex-row flex p-5">
        <LanguageSettings />
        <div className="flex-row flex space-x-4">
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image src="/Facebook.svg" alt="Facebook" width={48} height={48} />
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image src="/Instagram.svg" alt="Facebook" width={48} height={48} />
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image src="/AppStore.svg" alt="Facebook" width={165} height={48} />
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image
              src="/GooglePlay.svg"
              alt="Facebook"
              width={165}
              height={48}
            />
          </Link>
        </div>
      </div>
      <div className="space-x-4 text-white m-2">
        <Link href="/contacts" className="font-sans">
          Контакти
        </Link>
        <Link href="/about-us">Про нас</Link>
        <Link href="/help">Допомога</Link>
        <Link href="/usage-agreement">Умови використання</Link>
      </div>
      <p className="text-xs text-zinc-700">
        © {new Date().getFullYear()} Ming.ua. Пропозиції по турботі за
        улюбленцями.
      </p>
    </footer>
  );
}
