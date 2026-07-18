import { optionalEnv } from "../env";

type Strategy = "mobile" | "desktop";

const ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

export async function runPsi(url: string, strategy: Strategy = "mobile") {
  const params = new URLSearchParams({ url, strategy });
  for (const c of ["performance", "seo", "best-practices", "accessibility"]) {
    params.append("category", c.toUpperCase());
  }
  const key = optionalEnv("PSI_API_KEY");
  if (key) params.set("key", key);

  const res = await fetch(`${ENDPOINT}?${params.toString()}`);
  if (!res.ok) {
    throw new Error(`PSI ${res.status}: ${await res.text()}`);
  }
  return res.json() as Promise<PsiResult>;
}

export type PsiResult = {
  lighthouseResult: {
    categories: Record<string, { score: number | null; title: string }>;
    audits: Record<string, { title: string; displayValue?: string; score: number | null }>;
  };
  loadingExperience?: {
    metrics?: Record<string, { percentile: number; category: string }>;
  };
};
