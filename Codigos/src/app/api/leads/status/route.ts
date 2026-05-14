import { NextResponse } from "next/server";

import { leadScraperService } from "@/services/leadScraperService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(leadScraperService.getStatus());
}
