import { type DefaultSession } from "next-auth";

import { UserRole } from "@prisma/client";

export type ExtendedUsers = DefaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUsers;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
