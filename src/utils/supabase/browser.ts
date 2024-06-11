"use client";

import { createBrowserClient as createSupaBrowserClient } from "@supabase/ssr";

import { CLERK_TEMPLATE } from "./constants";

export const createBrowserClient = () =>
  createSupaBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        // Get the Supabase token with a custom fetch method
        fetch: async (url, options = {}) => {
          const clerkToken = await window.Clerk.session?.getToken({
            template: CLERK_TEMPLATE,
          });

          // Construct fetch headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          // Now call the default fetch
          return fetch(url, { ...options, headers });
        },
      },
    },
  );
