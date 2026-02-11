import { NextResponse } from "next/server";
import { getRecentActivities } from "@/lib/strava";
import type { StravaActivity } from "@/types";

// Server-side cache to avoid hammering Strava API on every request
let cachedActivities: StravaActivity[] | null = null;
let cacheExpiry = 0;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

export async function GET() {
  if (
    !process.env.STRAVA_CLIENT_ID ||
    !process.env.STRAVA_CLIENT_SECRET ||
    !process.env.STRAVA_REFRESH_TOKEN
  ) {
    return NextResponse.json(
      { error: "Strava not configured", unconfigured: true },
      { status: 503 }
    );
  }

  try {
    const now = Date.now();

    if (cachedActivities && now < cacheExpiry) {
      return NextResponse.json(cachedActivities, {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=1800",
        },
      });
    }

    const activities = await getRecentActivities();
    cachedActivities = activities;
    cacheExpiry = now + CACHE_TTL;

    return NextResponse.json(activities, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  } catch {
    // Return stale cache if available, otherwise error
    if (cachedActivities) {
      return NextResponse.json(cachedActivities, {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=1800",
        },
      });
    }

    return NextResponse.json(
      { error: "Failed to fetch activities" },
      { status: 500 }
    );
  }
}
