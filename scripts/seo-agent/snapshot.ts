// Weekly snapshot of the numbers we actually care about, saved to
// data/analytics-snapshots/<isoDate>.json. Snapshots are gitignored
// because they contain aggregate business data and this is a public repo.
//
// Run:   npx tsx scripts/seo-agent/snapshot.ts [--days=7]
//
// Diff against last week:  npx tsx scripts/seo-agent/snapshot-diff.ts
//
// The output shape is stable: snapshot-diff.ts reads it directly and any
// downstream tooling (dashboard, weekly email) can rely on the same keys.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ga4, propertyPath, lastNDays } from "./clients/ga4";
import { searchConsole, siteUrl, isoDaysAgo } from "./clients/search-console";

const CONVERSION_EVENTS = ["book_click", "phone_click"];
const OUT_DIR = "data/analytics-snapshots";

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

async function ga4Traffic(days: number) {
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [lastNDays(days)],
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
    metrics: [{ name: "sessions" }, { name: "activeUsers" }, { name: "engagedSessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
  });
  return (resp.rows ?? []).map((r) => ({
    channel: r.dimensionValues?.[0]?.value ?? "(unknown)",
    sessions: Number(r.metricValues?.[0]?.value ?? 0),
    users: Number(r.metricValues?.[1]?.value ?? 0),
    engaged: Number(r.metricValues?.[2]?.value ?? 0),
  }));
}

async function ga4Totals(days: number) {
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [lastNDays(days)],
    metrics: [
      { name: "sessions" },
      { name: "totalUsers" },
      { name: "engagedSessions" },
      { name: "screenPageViews" },
    ],
  });
  const [ev] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [lastNDays(days)],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: CONVERSION_EVENTS },
      },
    },
  });
  const sessions = Number(resp.rows?.[0]?.metricValues?.[0]?.value ?? 0);
  const users = Number(resp.rows?.[0]?.metricValues?.[1]?.value ?? 0);
  const engaged = Number(resp.rows?.[0]?.metricValues?.[2]?.value ?? 0);
  const pageViews = Number(resp.rows?.[0]?.metricValues?.[3]?.value ?? 0);
  const bookClicks = Number(
    ev.rows?.find((r) => r.dimensionValues?.[0]?.value === "book_click")?.metricValues?.[0]
      ?.value ?? 0
  );
  const phoneClicks = Number(
    ev.rows?.find((r) => r.dimensionValues?.[0]?.value === "phone_click")?.metricValues?.[0]
      ?.value ?? 0
  );
  return {
    sessions,
    users,
    engagedSessions: engaged,
    engagementRatePct: sessions > 0 ? +(engaged / sessions * 100).toFixed(2) : 0,
    pageViews,
    bookClicks,
    phoneClicks,
    conversionRatePct:
      sessions > 0 ? +(((bookClicks + phoneClicks) / sessions) * 100).toFixed(2) : 0,
  };
}

async function ga4TopCountries(days: number, limit = 10) {
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [lastNDays(days)],
    dimensions: [{ name: "country" }],
    metrics: [{ name: "sessions" }, { name: "engagedSessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  return (resp.rows ?? []).map((r) => ({
    country: r.dimensionValues?.[0]?.value ?? "(unknown)",
    sessions: Number(r.metricValues?.[0]?.value ?? 0),
    engaged: Number(r.metricValues?.[1]?.value ?? 0),
  }));
}

async function ga4TopLandingPages(days: number, limit = 15) {
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [lastNDays(days)],
    dimensions: [{ name: "landingPage" }],
    metrics: [{ name: "sessions" }, { name: "engagedSessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  return (resp.rows ?? []).map((r) => ({
    page: r.dimensionValues?.[0]?.value ?? "(unknown)",
    sessions: Number(r.metricValues?.[0]?.value ?? 0),
    engaged: Number(r.metricValues?.[1]?.value ?? 0),
  }));
}

async function scQueries(days: number, limit = 25) {
  const sc = await searchConsole();
  const { data } = await sc.searchanalytics.query({
    siteUrl: siteUrl(),
    requestBody: {
      startDate: isoDaysAgo(days),
      endDate: isoDaysAgo(1),
      dimensions: ["query"],
      rowLimit: limit,
      type: "web",
    },
  });
  return (data.rows ?? []).map((r) => ({
    query: r.keys?.[0] ?? "",
    clicks: r.clicks ?? 0,
    impressions: r.impressions ?? 0,
    ctr: +(r.ctr ?? 0).toFixed(4),
    position: +(r.position ?? 0).toFixed(2),
  }));
}

async function scPages(days: number, limit = 15) {
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
  return (data.rows ?? []).map((r) => ({
    page: r.keys?.[0] ?? "",
    clicks: r.clicks ?? 0,
    impressions: r.impressions ?? 0,
    ctr: +(r.ctr ?? 0).toFixed(4),
    position: +(r.position ?? 0).toFixed(2),
  }));
}

async function scOpportunities(days: number) {
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
  return (data.rows ?? [])
    .map((r) => {
      const impressions = r.impressions ?? 0;
      const position = r.position ?? 999;
      const distance = Math.max(1, position - 1);
      return {
        query: r.keys?.[0] ?? "",
        page: r.keys?.[1] ?? "",
        impressions,
        clicks: r.clicks ?? 0,
        position: +position.toFixed(2),
        opportunityScore: +(impressions / distance).toFixed(2),
      };
    })
    .filter((r) => r.position >= 5 && r.position <= 20 && r.impressions >= 1)
    .sort((a, b) => b.opportunityScore - a.opportunityScore)
    .slice(0, 20);
}

async function main() {
  const days = Number(arg("days", "7"));
  const now = new Date().toISOString();
  const dateKey = now.slice(0, 10);

  const [ga4Totals_, ga4Traffic_, countries, landing, queries, pages, opps] = await Promise.all([
    ga4Totals(days),
    ga4Traffic(days),
    ga4TopCountries(days),
    ga4TopLandingPages(days),
    scQueries(days),
    scPages(days),
    scOpportunities(days),
  ]);

  const snapshot = {
    date: dateKey,
    capturedAt: now,
    windowDays: days,
    ga4: {
      totals: ga4Totals_,
      byChannel: ga4Traffic_,
      topCountries: countries,
      topLandingPages: landing,
    },
    searchConsole: {
      topQueries: queries,
      topPages: pages,
      opportunities: opps,
    },
  };

  mkdirSync(OUT_DIR, { recursive: true });
  const out = join(OUT_DIR, `${dateKey}.json`);
  writeFileSync(out, JSON.stringify(snapshot, null, 2));

  console.log(
    JSON.stringify(
      {
        savedTo: out,
        headline: {
          sessions: ga4Totals_.sessions,
          bookClicks: ga4Totals_.bookClicks,
          conversionRatePct: ga4Totals_.conversionRatePct,
          nonBrandQueries:
            queries.filter((q) => !q.query.includes("guincho")).length,
          topOpportunity: opps[0] ?? null,
        },
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
