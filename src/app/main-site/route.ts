import { getMainSiteUrl } from "@/lib/main-site-url";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.redirect(getMainSiteUrl(request.nextUrl.hostname));
}
