import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/lib/schemas/loginSchema";
import { getUserByEmail } from "@/lib/data/user";
import { compare } from "bcryptjs";

export default {
  providers: [
    GitHub,
    Google,
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const user = await getUserByEmail(validatedFields.data.email);

        if (!user || !user.password) {
          return null;
        }

        const passwordsMatch = compare(
          validatedFields.data.password,
          user.password
        );

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
