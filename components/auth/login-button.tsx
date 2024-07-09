"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export type LoginButtonProps = {
  children: React.ReactNode;
};

export const LoginButton = ({ children }: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  return (
    <Button onClick={onClick} variant="secondary" className="w-full max-w-md">
      {children}
    </Button>
  );
};
