import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Search() {
  const [q, setQ] = useState<string>("");
  const router = useRouter();

  return (
    <div className="w-full flex flex-row space-x-2">
      <Input
        placeholder="Пошук"
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`/search/${q}`);
          }
        }}
      />

      <Link href={`/search/${q}`}>
        <Button variant="outline" color="#A794FF">
          Пошук
        </Button>
      </Link>
    </div>
  );
}
