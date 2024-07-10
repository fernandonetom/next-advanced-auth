import { RegisterCard } from "@/components/auth/register-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page",
  description: "Create a new account",
};

export default function RegisterPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <RegisterCard />
    </div>
  );
}
