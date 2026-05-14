import { NextResponse } from "next/server";

import { leadsToCsv } from "@/export/leadExport";
import { leadScraperService } from "@/services/leadScraperService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const url = new URL(request.url);
  const format = url.searchParams.get("format") === "json" ? "json" : "csv";
  const progress = leadScraperService.getStatus();
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");

  if (format === "json") {
    return new NextResponse(JSON.stringify(progress.results, null, 2), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "content-disposition": `attachment; filename="leads-${stamp}.json"`,
      },
    });
  }

  return new NextResponse(leadsToCsv(progress.results), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="leads-${stamp}.csv"`,
    },
  });
}
