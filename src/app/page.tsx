import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const MARKETPLACE_API = "https://marketplace-api.emag.ro/api-3";

type EmagResponse<T> = {
  isError: boolean;
  messages: unknown[];
  errors: unknown[];
  results: {
    total_results: number;
    invoices: T[];
  };
};

type Supplier = {};
type Customer = {};
type Line = {};

type Invoice = {
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

const getToken = () => {
  const token = Buffer.from(
    `${process.env.EMAG_USERNAME}:${process.env.EMAG_PASSWORD}`
  ).toString("base64");

  return token;
};

const getMarketplaceData = async () => {
  let result: EmagResponse<Invoice> | null = null;
  const token = getToken();
  const url = `${MARKETPLACE_API}/invoice/read`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    result = await response.json();
  } catch (error) {
    console.error("error", error);
  }

  return result;
};

export default async function Home() {
  const data = await getMarketplaceData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-y-4">
      {data && (
        <>
          <Alert>
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Invoices</AlertTitle>
            <AlertDescription>Invoices here...</AlertDescription>
          </Alert>
          {(data?.results?.invoices ?? []).map((invoice) => (
            <div key={invoice.number}>
              {invoice.number} - {invoice.date}
            </div>
          ))}
        </>
      )}
    </main>
  );
}

export const dynamic = "force-dynamic";
