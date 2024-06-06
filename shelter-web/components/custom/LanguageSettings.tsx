import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function LanguageSettings() {
  // TO DO: fetch cities from backend

  return (
    <div className="flex flex-row space-x-2">
      <Select>
        <SelectTrigger className="border-0 text-white">
          <SelectValue placeholder="Оберить ваше місце" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Одеса">Одеса</SelectItem>
            <SelectItem value="Київ">Київ</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="border-0 text-white">
          <SelectValue placeholder="Оберить мову" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Українська">Українська</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
