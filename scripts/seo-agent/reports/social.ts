import { ga4, propertyPath } from "../clients/ga4";

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

// Break down social + referral traffic by source. Instagram shows up as
// instagram.com or l.instagram.com; Facebook as facebook.com / m.facebook.com.
async function main() {
  const days = Number(arg("days", "365"));

  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [{ startDate: `${days}daysAgo`, endDate: "today" }],
    dimensions: [
      { name: "sessionSource" },
      { name: "sessionMedium" },
      { name: "sessionDefaultChannelGroup" },
    ],
    metrics: [
      { name: "sessions" },
      { name: "totalUsers" },
      { name: "engagedSessions" },
    ],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 50,
  });

  const rows = (resp.rows ?? []).map((r) => ({
    source: r.dimensionValues?.[0]?.value ?? "(unknown)",
    medium: r.dimensionValues?.[1]?.value ?? "(unknown)",
    channel: r.dimensionValues?.[2]?.value ?? "(unknown)",
    sessions: Number(r.metricValues?.[0]?.value ?? 0),
    users: Number(r.metricValues?.[1]?.value ?? 0),
    engaged: Number(r.metricValues?.[2]?.value ?? 0),
  }));

  console.log(JSON.stringify({ windowDays: days, rows }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
