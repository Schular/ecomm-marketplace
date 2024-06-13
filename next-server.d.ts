// global.d.ts
import { NextRequest as OriginalNextRequest } from "next/server";
import { Session } from "next-auth";

declare module "next/server" {
  interface NextRequest extends OriginalNextRequest {
    auth: Session | null;
  }
}
