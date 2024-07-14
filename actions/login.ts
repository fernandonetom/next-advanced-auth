import { LoginSchema, TLoginProps } from "@/lib/schemas/loginSchema";
import { signIn } from "next-auth/react";

export async function login(credentials: TLoginProps, redirectUrl?: string) {
  const validatedFields = LoginSchema.safeParse(credentials);

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.message,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    return { success: false, error: (error as any).message };
  }
}
