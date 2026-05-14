import { NextResponse } from "next/server";

import { leadScraperService } from "@/services/leadScraperService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const progress = await leadScraperService.start({
      businessType: String(body.businessType ?? ""),
      region: String(body.region ?? ""),
      quantity: Number(body.quantity ?? 20),
    });

    return NextResponse.json(progress);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Nao foi possivel iniciar a coleta." },
      { status: 400 },
    );
  }
}
