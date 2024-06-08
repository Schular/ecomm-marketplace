import { Order } from "./order";

export type Response<T> = {
  isError: boolean;
  messages: unknown[];
  errors: unknown[];
  results: T[];
};

export type OrderResponse = Response<Order>;
