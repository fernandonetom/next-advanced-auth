import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { routes } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl, auth: requestAuth } = req;

  const isLogged = requestAuth?.user;

  const isApiAuthRoute = nextUrl.pathname.startsWith(routes.authApiPrefix);

  if (isApiAuthRoute) {
    return;
  }

  const isAuthRoute = nextUrl.pathname.startsWith(routes.authRoutesPrefix);

  if (isAuthRoute) {
    if (isLogged) {
      return Response.redirect(new URL(routes.DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return;
  }

  const isSecureRoute = nextUrl.pathname.startsWith(routes.secureRoutesPrefix);

  if (isSecureRoute && !isLogged) {
    return Response.redirect(new URL(routes.LOGIN_ROUTE, nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
