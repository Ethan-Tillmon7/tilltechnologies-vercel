import useSWR from "swr";
import type { StravaActivity } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error(`Strava API error: ${res.status}`);
    return res.json();
  });

export function useStravaActivities() {
  const { data, error, isLoading } = useSWR<StravaActivity[]>(
    "/api/strava/activities",
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 600000,
    }
  );

  return { activities: data, error, isLoading };
}
