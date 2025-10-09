import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = req.auth;
  if (!isLoggedIn && !req.nextUrl.pathname.startsWith("/logIn")) {
    const callbackUrl = nextUrl.pathname;
    const signInUrl = new URL("/logIn", req.url);
    signInUrl.searchParams.set("callbackUrl", callbackUrl);
    return NextResponse.redirect(signInUrl);
  } else {
    return NextResponse.next();
  }
});

export const config = {
  matcher: ["/createblog"],
};
