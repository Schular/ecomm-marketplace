"use client";

import { PersonIcon } from "@radix-ui/react-icons";

import { signInWithGoogle } from "@/auth/server";
import { Button } from "@/components/ui/Button";

export default function SignIn() {
  return (
    <div className="flex w-full h-[100vh] justify-center mt-40 md:mt-80">
      <div className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-md font-medium leading-none">Login</h1>
          <p className="text-sm text-muted-foreground">
            A platform for marketplace management.
          </p>
        </div>
        <form action={signInWithGoogle}>
          <Button type="submit">
            <PersonIcon className="mr-2 h-4 w-4" />
            Signin with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
