import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = process.env.ALLOWED_USERS?.split(",") || [];

      if (allowedEmails.includes(user.email!)) {
        return true; // Allow sign-in
      } else {
        return false; // Deny sign-in
      }
    },
  },
  pages: {
    error: "/auth/error",
  },
});
