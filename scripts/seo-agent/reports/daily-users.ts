import { ga4, propertyPath } from "../clients/ga4";

// Daily unique visitors from the day GA4 started tracking until today.
// Useful for the "how are we trending?" question at any point.

async function main() {
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics: [
      { name: "totalUsers" },
      { name: "newUsers" },
      { name: "sessions" },
      { name: "engagedSessions" },
    ],
    orderBys: [{ dimension: { dimensionName: "date", orderType: "ALPHANUMERIC" } }],
    limit: 400,
  });

  const rows = (resp.rows ?? []).map((r) => {
    const raw = r.dimensionValues?.[0]?.value ?? "";
    const iso = raw
      ? `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`
      : "";
    const sessions = Number(r.metricValues?.[2]?.value ?? 0);
    const engaged = Number(r.metricValues?.[3]?.value ?? 0);
    return {
      date: iso,
      users: Number(r.metricValues?.[0]?.value ?? 0),
      newUsers: Number(r.metricValues?.[1]?.value ?? 0),
      sessions,
      engagedSessions: engaged,
      engagementRatePct:
        sessions > 0 ? +(engaged / sessions * 100).toFixed(1) : 0,
    };
  });

  const totals = rows.reduce(
    (acc, r) => ({
      users: acc.users + r.users,
      newUsers: acc.newUsers + r.newUsers,
      sessions: acc.sessions + r.sessions,
    }),
    { users: 0, newUsers: 0, sessions: 0 }
  );

  console.log(
    JSON.stringify(
      {
        firstDay: rows[0]?.date,
        lastDay: rows[rows.length - 1]?.date,
        days: rows.length,
        totals,
        daily: rows,
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
