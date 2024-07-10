"use server";

import { db } from "@/lib/db";
import { v7 } from "uuid";
import { RegisterSchema, TRegisterProps } from "@/lib/schemas/registerSchema";
import { TResult } from "@/types/result";
import bcrypt from "bcryptjs";

type TRegisterResult = {
  id: string;
};

export async function register({
  name,
  email,
  password,
}: TRegisterProps): Promise<TResult<TRegisterResult>> {
  const parseResult = RegisterSchema.safeParse({ name, email, password });

  if (!parseResult.success) {
    return {
      success: false,
      error: parseResult.error.message,
    };
  }
  const id = v7();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await db.user.create({
    data: {
      id,
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    success: true,
    data: {
      id,
    },
  };
}
