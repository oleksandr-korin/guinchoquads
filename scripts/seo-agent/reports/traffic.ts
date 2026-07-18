import { ga4, propertyPath, lastNDays } from "../clients/ga4";

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

async function main() {
  const days = Number(arg("days", "7"));
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [lastNDays(days)],
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
    metrics: [
      { name: "sessions" },
      { name: "activeUsers" },
      { name: "engagedSessions" },
      { name: "conversions" },
    ],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
  });

  const rows = (resp.rows ?? []).map((r) => ({
    channel: r.dimensionValues?.[0]?.value ?? "(unknown)",
    sessions: Number(r.metricValues?.[0]?.value ?? 0),
    users: Number(r.metricValues?.[1]?.value ?? 0),
    engaged: Number(r.metricValues?.[2]?.value ?? 0),
    conversions: Number(r.metricValues?.[3]?.value ?? 0),
  }));

  console.log(JSON.stringify({ windowDays: days, rows }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
