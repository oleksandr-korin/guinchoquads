import { ga4, propertyPath } from "../clients/ga4";

async function main() {
  const [totalsResp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
    metrics: [
      { name: "totalUsers" },
      { name: "newUsers" },
      { name: "sessions" },
      { name: "engagedSessions" },
      { name: "screenPageViews" },
    ],
  });

  const [firstResp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics: [{ name: "totalUsers" }],
    orderBys: [{ dimension: { dimensionName: "date", orderType: "ALPHANUMERIC" } }],
    limit: 1,
  });

  const totals = totalsResp.rows?.[0]?.metricValues ?? [];
  const raw = firstResp.rows?.[0]?.dimensionValues?.[0]?.value ?? "";
  const firstDayWithData = raw
    ? `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`
    : "";

  console.log(
    JSON.stringify(
      {
        firstDayWithData,
        totalUsers: Number(totals[0]?.value ?? 0),
        newUsers: Number(totals[1]?.value ?? 0),
        sessions: Number(totals[2]?.value ?? 0),
        engagedSessions: Number(totals[3]?.value ?? 0),
        pageViews: Number(totals[4]?.value ?? 0),
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
