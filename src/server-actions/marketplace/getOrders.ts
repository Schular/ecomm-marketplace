"use server";

import { OrderResponse } from "@/types/emag";

import { getToken } from "./getToken";

const MARKETPLACE_API = "https://marketplace-api.emag.ro/api-3";

export const getOrders = async () => {
  let result: OrderResponse | null = null;
  const token = await getToken();
  console.log("token", token);

  const url = `${MARKETPLACE_API}/order/read`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({
        currentPage: 1,
        itemsPerPage: 10,
      }),
    });

    result = await response.json();
  } catch (error) {
    console.error("error", error);
  }

  return result;
};