import { RegisterForm } from "@/components/auth/register-form";
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

export const RegisterCard = () => {
  return (
    <Card className="text-center min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">🔐 Auth</CardTitle>
        <CardDescription>Create your account now!</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <SocialButtons />
      </CardFooter>
    </Card>
  );
};
