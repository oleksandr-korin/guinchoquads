import { ga4, propertyPath, lastNDays } from "../clients/ga4";

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

type LangRow = {
  language: string;
  sessions: number;
  engagedSessions: number;
  engagementRatePct: number;
};

type GeoRow = {
  country: string;
  city?: string;
  sessions: number;
  engagedSessions: number;
  engagementRatePct: number;
};

async function main() {
  const days = Number(arg("days", "28"));
  const dateRange = lastNDays(days);

  const [countryResp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [dateRange],
    dimensions: [{ name: "country" }],
    metrics: [
      { name: "sessions" },
      { name: "engagedSessions" },
      { name: "totalUsers" },
    ],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 30,
  });

  const [cityResp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [dateRange],
    dimensions: [{ name: "country" }, { name: "city" }],
    metrics: [{ name: "sessions" }, { name: "engagedSessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 40,
  });

  const [languageResp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [dateRange],
    dimensions: [{ name: "language" }],
    metrics: [{ name: "sessions" }, { name: "engagedSessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 20,
  });

  const byCountry: GeoRow[] = (countryResp.rows ?? []).map((r) => {
    const sessions = Number(r.metricValues?.[0]?.value ?? 0);
    const engaged = Number(r.metricValues?.[1]?.value ?? 0);
    return {
      country: r.dimensionValues?.[0]?.value ?? "(unknown)",
      sessions,
      engagedSessions: engaged,
      engagementRatePct:
        sessions > 0 ? Math.round((engaged / sessions) * 10000) / 100 : 0,
    };
  });

  const byCity: GeoRow[] = (cityResp.rows ?? []).map((r) => {
    const sessions = Number(r.metricValues?.[0]?.value ?? 0);
    const engaged = Number(r.metricValues?.[1]?.value ?? 0);
    return {
      country: r.dimensionValues?.[0]?.value ?? "(unknown)",
      city: r.dimensionValues?.[1]?.value ?? "(unknown)",
      sessions,
      engagedSessions: engaged,
      engagementRatePct:
        sessions > 0 ? Math.round((engaged / sessions) * 10000) / 100 : 0,
    };
  });

  const byLanguage: LangRow[] = (languageResp.rows ?? []).map((r) => {
    const sessions = Number(r.metricValues?.[0]?.value ?? 0);
    const engaged = Number(r.metricValues?.[1]?.value ?? 0);
    return {
      language: r.dimensionValues?.[0]?.value ?? "(unknown)",
      sessions,
      engagedSessions: engaged,
      engagementRatePct:
        sessions > 0 ? Math.round((engaged / sessions) * 10000) / 100 : 0,
    };
  });

  console.log(
    JSON.stringify(
      {
        windowDays: days,
        note:
          "engagementRatePct is the GA4 'quality visit' proxy. > 60% = strong intent, < 40% = mostly bounces. Compare countries to decide translation priority.",
        byCountry,
        byCity,
        byLanguage,
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
