import { LoginCard } from "@/components/auth/login-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Welcome back!",
};

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <LoginCard />
    </div>
  );
}
