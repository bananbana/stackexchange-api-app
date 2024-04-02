import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "@/components/ui/Select";

export type SelectProps = {
  options: { value: string; label: string }[];
  selected: string;
  setSelected: (args: string) => void;
  placeholder: string;
};

export function Select({
  options,
  selected,
  setSelected,
  placeholder,
}: SelectProps) {
  return (
    <div className="gap-2 flex">
      <ShadcnSelect value={selected} onValueChange={setSelected}>
        <SelectTrigger className="w-fit gap-1">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem value={value}>{label}</SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
    </div>
  );
}
