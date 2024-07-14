import { auth, signOut } from "@/auth";
import { routes } from "@/routes";

export default async function SettingsPage() {
  const session = await auth();

  const onSubmit = async () => {
    "use server";
    await signOut({
      redirectTo: routes.LOGIN_ROUTE,
    });
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>{JSON.stringify(session)}</p>

      <form action={onSubmit}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
