import { LoginForm } from "@/components/auth/login-form";
import { SocialButtons } from "@/components/auth/social-buttons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export const LoginCard = () => {
  return (
    <Card className="text-center min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">🔐 Auth</CardTitle>
        <CardDescription>Welcome back!</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <SocialButtons />
        <Link href="#" className="text-sm text-slate-200 hover:text-white">
          Create an account
        </Link>
      </CardFooter>
    </Card>
  );
};
