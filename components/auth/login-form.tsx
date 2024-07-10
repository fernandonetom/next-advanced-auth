"use client";

import { useForm } from "react-hook-form";
import { LoginSchema, TLoginProps } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/auth/form-error";
import { useState } from "react";

export const LoginForm = () => {
  const [error] = useState<string | null>(null);

  const form = useForm<TLoginProps>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (credentials: TLoginProps) => {
    console.log(credentials); // handle login logic here
  };

  return (
    <Form {...form}>
      <form
        className="space-y-10"
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
      >
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2">
          <Button className="w-full" type="submit">
            Login
          </Button>
          {error && <FormError message={error} />}
        </div>
      </form>
    </Form>
  );
};
