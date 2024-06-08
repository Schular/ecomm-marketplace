import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { maskUserName } from "@/lib/maskUserName";
import { OrderResponse } from "@/types/emag";

const MARKETPLACE_API = "https://marketplace-api.emag.ro/api-3";

const getToken = () => {
  const token = Buffer.from(
    `${process.env.EMAG_USERNAME}:${process.env.EMAG_PASSWORD}`,
  ).toString("base64");

  return token;
};

const getMarketplaceData = async () => {
  let result: OrderResponse | null = null;
  const token = getToken();
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
    console.log("getMarketplaceData", result);
  } catch (error) {
    console.error("error", error);
  }

  return result;
};

export default async function Home() {
  const data = await getMarketplaceData();
  const orders = data?.results ?? [];

  const total = orders.reduce((acc, order) => {
    acc += order.cashed_co;

    return acc;
  }, 0);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-y-4">
      {data && (
        <Table>
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Client</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">
                  {maskUserName(order.customer.name)}
                </TableCell>
                <TableCell>{order.payment_mode}</TableCell>
                <TableCell>
                  {order.payment_status === 1 ? "Complete" : "Pending"}
                </TableCell>
                <TableCell className="text-right">
                  {order.cashed_co ? `${order.cashed_co} RON` : "0 RON"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{total} RON</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </main>
  );
}

export const dynamic = "force-dynamic";
