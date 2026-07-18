import { runPsi } from "../clients/psi";

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error("usage: tsx scripts/seo-agent/reports/psi.ts <url> [--strategy=mobile|desktop]");
    process.exit(2);
  }
  const strategyArg = process.argv.find((a) => a.startsWith("--strategy="));
  const strategy = (strategyArg?.split("=")[1] as "mobile" | "desktop") ?? "mobile";

  const result = await runPsi(url, strategy);
  const scores: Record<string, number | null> = {};
  for (const [k, v] of Object.entries(result.lighthouseResult.categories)) {
    scores[k] = v.score;
  }
  const cwv = result.loadingExperience?.metrics ?? {};

  console.log(
    JSON.stringify(
      {
        url,
        strategy,
        lighthouse: scores,
        crux: Object.fromEntries(
          Object.entries(cwv).map(([k, v]) => [k, { percentile: v.percentile, category: v.category }])
        ),
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
