import { searchConsole, siteUrl, isoDaysAgo } from "../clients/search-console";

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

async function main() {
  const days = Number(arg("days", "28"));
  const minPos = Number(arg("minPos", "5"));
  const maxPos = Number(arg("maxPos", "20"));
  const minImpressions = Number(arg("minImpressions", "1"));
  const limit = Number(arg("limit", "50"));

  const sc = await searchConsole();
  const { data } = await sc.searchanalytics.query({
    siteUrl: siteUrl(),
    requestBody: {
      startDate: isoDaysAgo(days),
      endDate: isoDaysAgo(1),
      dimensions: ["query", "page"],
      rowLimit: 1000,
      type: "web",
    },
  });

  const scored = (data.rows ?? [])
    .map((r) => {
      const query = r.keys?.[0] ?? "";
      const page = r.keys?.[1] ?? "";
      const impressions = r.impressions ?? 0;
      const position = r.position ?? 999;
      const clicks = r.clicks ?? 0;
      const distanceToTop = Math.max(1, position - 1);
      const opportunityScore = Math.round((impressions / distanceToTop) * 100) / 100;
      return { query, page, impressions, clicks, position, opportunityScore };
    })
    .filter(
      (r) =>
        r.position >= minPos &&
        r.position <= maxPos &&
        r.impressions >= minImpressions
    )
    .sort((a, b) => b.opportunityScore - a.opportunityScore)
    .slice(0, limit);

  console.log(
    JSON.stringify(
      {
        windowDays: days,
        filter: { minPos, maxPos, minImpressions },
        note:
          "opportunityScore = impressions / (position - 1). Higher = more traffic unlocked if you move up.",
        rows: scored,
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
