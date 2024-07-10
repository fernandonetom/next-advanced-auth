import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

export type TRegisterProps = z.infer<typeof RegisterSchema>;
