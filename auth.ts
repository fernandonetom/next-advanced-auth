import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById } from "@/lib/data/user";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role as string;

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await getUserById(token.sub);

      if (user) {
        token.role = user.role;
      }

      return token;
    },
  },
  // @ts-ignore
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
