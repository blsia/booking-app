import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

const protectedRoutes = ["/myreservations", "/checkout", "/admin"];

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;
  const { pathname } = req.nextUrl;

  if (!isLoggedIn && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return Response.redirect(new URL("/signin", req.nextUrl));
  }

  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
    return Response.redirect(new URL("/", req.nextUrl));
  }

  if (isLoggedIn && pathname === "/signin") {
    return Response.redirect(new URL("/", req.nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};