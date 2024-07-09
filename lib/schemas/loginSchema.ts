import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

export type TLoginProps = z.infer<typeof LoginSchema>;
