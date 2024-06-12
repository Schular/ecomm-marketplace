"use server";

import { client } from "../client";
import { ordersTable, SelectOrder } from "../schema";

export const getOrders = async (): Promise<SelectOrder[]> =>
  await client.select().from(ordersTable);
