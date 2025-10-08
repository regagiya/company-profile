import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token && req.nextUrl.pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/logIn", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/createblog"],
};
