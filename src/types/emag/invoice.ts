import { Customer } from "./customer";
import { Line } from "./line";
import { Supplier } from "./supplier";

export type Invoice = {
  category: string;
  name: string;
  number: string;
  date: string;
  is_storno: number;
  supplier: Supplier;
  customer: Customer;
  lines: Line[];
  payment_term: number;
  total_without_vat: number;
  total_with_vat: number;
  total_vat_vaule: number;
  currency: string;
};
