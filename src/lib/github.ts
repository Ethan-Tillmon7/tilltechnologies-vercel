import type { GitHubRepoInfo } from "@/types";

const GITHUB_API = "https://api.github.com";

export async function getRepoInfo(
  owner: string,
  repo: string
): Promise<GitHubRepoInfo> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}`, { headers });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} for ${owner}/${repo}`);
  }

  const data = await res.json();

  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
    language: data.language,
    updatedAt: data.pushed_at,
    openIssues: data.open_issues_count,
  };
}

/** Extract owner/repo from a GitHub URL, e.g. "https://github.com/Ethan-Tillmon7/RAgent" */
export function parseGitHubUrl(
  url: string
): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}
