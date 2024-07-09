import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop shadow-md">
          🔐 Auth
        </h1>

        <p className="text-white text-lg">Simple authentication service</p>

        <LoginButton>Sign in</LoginButton>
      </div>
    </main>
  );
}
