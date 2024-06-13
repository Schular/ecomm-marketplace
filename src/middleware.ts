import { NextRequest } from "next/server";
import NextAuth from "next-auth";

import authConfig from "@/auth/config";

export const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (req.auth && req.nextUrl.pathname === "/login") {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
