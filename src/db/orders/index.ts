"use server";

import { client } from "../client";
import { orders, SelectOrder } from "../schema";

export const getOrders = async (): Promise<SelectOrder[]> =>
  await client.select().from(orders);
