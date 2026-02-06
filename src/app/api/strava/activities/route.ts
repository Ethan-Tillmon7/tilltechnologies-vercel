import { NextResponse } from "next/server";
import { getRecentActivities } from "@/lib/strava";

export async function GET() {
  try {
    const activities = await getRecentActivities();
    return NextResponse.json(activities, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch activities" },
      { status: 500 }
    );
  }
}
