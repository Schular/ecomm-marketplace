"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

export type SelectDropdownProps = {
  values: Array<{ value: string; label: string }>;
  defaultLabel?: string;
};

export const SelectDropdown = ({
  values,
  defaultLabel,
}: SelectDropdownProps) => (
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder={defaultLabel ?? values[0]?.label} />
    </SelectTrigger>
    <SelectContent>
      {values.map(({ value, label }) => (
        <SelectItem key={value} value={value}>
          {label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
SelectDropdown.displayName = "SelectDropdown";
