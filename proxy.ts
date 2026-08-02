import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const username = process.env.SITE_LOCK_USERNAME;
  const password = process.env.SITE_LOCK_PASSWORD;

  if (!username || !password) {
    return new NextResponse("Website lock is not configured.", {
      status: 503,
    });
  }

  const authorization = request.headers.get("authorization");
  const expectedAuthorization =
    "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

  if (authorization === expectedAuthorization) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Nelva Private Website"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
