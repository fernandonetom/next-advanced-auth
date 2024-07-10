"use server";

import { RegisterSchema, TRegisterProps } from "@/lib/schemas/registerSchema";
import { TResult } from "@/types/result";

export async function register({
  name,
  email,
  password,
}: TRegisterProps): Promise<TResult> {
  const parseResult = RegisterSchema.safeParse({ name, email, password });

  if (!parseResult.success) {
    return {
      success: false,
      error: parseResult.error.message,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    success: true,
    data: undefined,
  };
}
