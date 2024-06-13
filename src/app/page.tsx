import { ReloadIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { auth } from "@/auth";
import { signOut } from "@/auth/server";
import { Button } from "@/components/ui/Button";
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
import { getOrders } from "@/db/orders";

export default async function Home() {
  const session = await auth();
  const orders = await getOrders();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-y-20">
      <form className="self-end" action={signOut}>
        <span className="mr-4">Hi, {session?.user?.name}</span>
        <Button type="submit">Sign Out</Button>
      </form>
      <div className="w-full flex flex-col gap-y-4">
        <div className="self-end">
          <Button variant="ghost">
            <ReloadIcon className="mr-2 h-4 w-4" />
            Sync data
          </Button>
        </div>
        {orders && (
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
                  <TableCell className="font-medium">{order.client}</TableCell>
                  <TableCell>{order.phone}</TableCell>
                  <TableCell>
                    <SelectDropdown values={STATUS_DROPDOWN} />
                  </TableCell>
                  <TableCell>
                    <SelectDropdown values={REVIEW_STATUS_DROPDOWN} />
                  </TableCell>
                  <TableCell>{format(order.date, "yyyy-MM-dd")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
