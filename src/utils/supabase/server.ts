import { auth } from "@clerk/nextjs/server";
import {
  CookieOptions,
  createServerClient as createSupaServerClient,
} from "@supabase/ssr";
import { cookies } from "next/headers";

import { CLERK_TEMPLATE } from "./constants";

export const createServerClient = async () => {
  const cookieStore = cookies();
  const { getToken } = auth();

  const token = await getToken({ template: CLERK_TEMPLATE });
  const authToken = token ? { Authorization: `Bearer ${token}` } : null;

  return createSupaServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      global: { headers: { "Cache-Control": "no-store", ...authToken } },
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // Handle the error
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // Handle the error
          }
        },
      },
    },
  );
};
