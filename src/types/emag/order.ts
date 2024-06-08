import { Attachment } from "./attachment";
import { Customer } from "./customer";
import { Flag } from "./flag";
import { Product } from "./product";
import { ReasonCancellation } from "./reasonCancellation";

type OrderDetails = {
  locker_delivery_eligible: number;
  locker_id: string;
  locker_name: string;
};

enum PaymentMode {
  "CARD" = "CARD online",
  "RAMBURS" = "RAMBURS",
}

export type Order = {
  vendor_name: string;
  id: number;
  type: number;
  parent_id: number | null;
  date: string;
  payment_mode: PaymentMode;
  detailed_payment_method: string;
  delivery_mode: string;
  observation: string;
  status: number;
  payment_status: number;
  customer: Customer;
  products: Product[];
  shipping_tax: number;
  shipping_tax_voucher_split: unknown[];
  vouchers: unknown[];
  proforms: unknown[];
  attachments: Attachment[];
  cashed_co: number;
  cashed_cod: number;
  cancellation_request: string | null;
  has_editable_products: number;
  refunded_amount: string;
  is_complete: number;
  reason_cancellation: ReasonCancellation;
  refund_status: string;
  maximum_date_for_shipment: string;
  late_shipment: number;
  flags: Flag[];
  emag_club: number;
  finalization_date: string | null;
  details: OrderDetails;
  weekend_delivery: number;
  payment_mode_id: number;
};
