import { SelectDropdown } from "@/components/ui/SelectDropdown";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { REVIEW_STATUS_DROPDOWN, STATUS_DROPDOWN } from "@/constants/dropdown";
import { getOrders } from "@/marketplace/server";

export default async function Home() {
  const data = await getOrders();
  const orders = data?.results ?? [];

  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-y-4">
      {data && (
        <Table>
          <TableCaption>Lista comenzi recente.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Client</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Status review</TableHead>
              <TableHead>Data comanda</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">
                  {order.customer.name}
                </TableCell>
                <TableCell>{order.customer.phone_1}</TableCell>
                <TableCell>
                  <SelectDropdown values={STATUS_DROPDOWN} />
                </TableCell>
                <TableCell>
                  <SelectDropdown values={REVIEW_STATUS_DROPDOWN} />
                </TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </main>
  );
}

export const dynamic = "force-dynamic";
