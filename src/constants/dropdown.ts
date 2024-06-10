import { SelectDropdownProps } from "@/components/ui/SelectDropdown";

export const STATUS_DROPDOWN: SelectDropdownProps["values"] = [
  {
    label: "De sunat",
    value: "pending",
  },
  {
    label: "Sunat",
    value: "done",
  },
];

export const REVIEW_STATUS_DROPDOWN: SelectDropdownProps["values"] = [
  {
    label: "Review in aseptare",
    value: "pending",
  },
  {
    label: "Review dat",
    value: "done",
  },
];
