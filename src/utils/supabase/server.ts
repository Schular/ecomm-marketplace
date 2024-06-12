"use server";

import {
  CookieOptions,
  createServerClient as createSupaServerClient,
} from "@supabase/ssr";
import { cookies } from "next/headers";

export const createServerClient = async () => {
  const cookieStore = cookies();

  return createSupaServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: { headers: { "Cache-Control": "no-store" } },
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
