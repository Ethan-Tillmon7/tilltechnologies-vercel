import useSWR from "swr";
import type { StravaActivity } from "@/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
