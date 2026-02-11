import axios from "axios";
import type { StravaActivity } from "@/types";

const STRAVA_TOKEN_URL = "https://www.strava.com/oauth/token";
const STRAVA_API_BASE = "https://www.strava.com/api/v3";

async function getAccessToken(): Promise<string> {
  if (
    !process.env.STRAVA_CLIENT_ID ||
    !process.env.STRAVA_CLIENT_SECRET ||
    !process.env.STRAVA_REFRESH_TOKEN
  ) {
    throw new Error("Strava credentials not configured");
  }

  try {
    const { data } = await axios.post(STRAVA_TOKEN_URL, {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    });
    return data.access_token;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      console.error(
        `Strava token refresh failed: ${err.response.status}`,
        err.response.data
      );
      throw new Error(`Strava token refresh failed: ${err.response.status}`);
    }
    throw err;
  }
}

export async function getRecentActivities(
  count = 10
): Promise<StravaActivity[]> {
  const token = await getAccessToken();
  const { data } = await axios.get(`${STRAVA_API_BASE}/athlete/activities`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { per_page: count },
  });
  return data;
}
