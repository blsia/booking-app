import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Cast `prisma` sebagai `any` untuk melewati pengecekan tipe kompatibilitas
  adapter: PrismaAdapter(prisma as any),
  ...authConfig,
});
