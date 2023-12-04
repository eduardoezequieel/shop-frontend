import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { JWT_SECRET } from "@/constants";
import { IRole } from "./interfaces";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("jwtShopToken")?.value;
  const role = JSON.parse(
    req.cookies.get("jwtShopTokenRole")?.value || "{}"
  ) as IRole;
  console.log(role.id);

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/shop", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      try {
        const { payload } = await jwtVerify(
          token,
          new TextEncoder().encode(JWT_SECRET)
        );
        return NextResponse.redirect(new URL("/shop", req.url));
      } catch (error) {
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (role?.id !== 1) {
      return NextResponse.redirect(new URL("/shop", req.url));
    }

    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(JWT_SECRET)
      );
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
