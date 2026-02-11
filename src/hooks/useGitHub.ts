import useSWR from "swr";
import type { GitHubRepoInfo } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    return res.json();
  });

export function useGitHubRepos() {
  const { data, error, isLoading } = useSWR<Record<string, GitHubRepoInfo>>(
    "/api/github/repos",
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 600000,
    }
  );

  return { repos: data ?? {}, error, isLoading };
}
