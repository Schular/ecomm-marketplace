import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";

import { client } from "@/db/client";
import {
  accounts as accountsTable,
  sessions as sessionsTable,
  users as usersTable,
  verificationTokens as verificationTokensTable,
} from "@/db/schema";

import config from "./config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  adapter: DrizzleAdapter(client, {
    usersTable,
    accountsTable,
    sessionsTable,
    verificationTokensTable,
  }),
  session: { strategy: "jwt" },
  ...config,
});
