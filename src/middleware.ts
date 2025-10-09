import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = req.auth;
  if (!isLoggedIn && !req.nextUrl.pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/logIn", req.url));
  }

  NextResponse.next();
});

export const config = {
  matcher: ["/createblog"],
};
