import { NextResponse } from "next/server";

import { leadScraperService } from "@/services/leadScraperService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const progress = await leadScraperService.stop();
  return NextResponse.json(progress);
}
