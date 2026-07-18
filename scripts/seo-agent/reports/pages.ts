import { searchConsole, siteUrl, isoDaysAgo } from "../clients/search-console";

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

async function main() {
  const days = Number(arg("days", "28"));
  const limit = Number(arg("limit", "20"));

  const sc = await searchConsole();
  const { data } = await sc.searchanalytics.query({
    siteUrl: siteUrl(),
    requestBody: {
      startDate: isoDaysAgo(days),
      endDate: isoDaysAgo(1),
      dimensions: ["page"],
      rowLimit: limit,
      type: "web",
    },
  });

  const rows = (data.rows ?? []).map((r) => ({
    page: r.keys?.[0] ?? "",
    clicks: r.clicks ?? 0,
    impressions: r.impressions ?? 0,
    ctr: r.ctr ?? 0,
    position: r.position ?? 0,
  }));

  console.log(JSON.stringify({ windowDays: days, rows }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
