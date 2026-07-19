// Compare the two most recent snapshots and print week-over-week deltas.
//
// Run:   npx tsx scripts/seo-agent/snapshot-diff.ts
//        npx tsx scripts/seo-agent/snapshot-diff.ts --from=2026-07-12 --to=2026-07-19

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "data/analytics-snapshots";

function arg(name: string): string | undefined {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit?.split("=")[1];
}

type Snapshot = {
  date: string;
  windowDays: number;
  ga4: {
    totals: {
      sessions: number;
      users: number;
      engagedSessions: number;
      engagementRatePct: number;
      pageViews: number;
      bookClicks: number;
      phoneClicks: number;
      conversionRatePct: number;
    };
    topLandingPages: Array<{ page: string; sessions: number }>;
    topCountries: Array<{ country: string; sessions: number }>;
  };
  searchConsole: {
    topQueries: Array<{ query: string; clicks: number; impressions: number; position: number }>;
    opportunities: Array<{ query: string; position: number; impressions: number }>;
  };
};

function listSnapshots(): string[] {
  return readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();
}

function load(dateKey: string): Snapshot {
  return JSON.parse(readFileSync(join(DIR, `${dateKey}.json`), "utf-8"));
}

function delta(a: number, b: number) {
  const abs = a - b;
  const pct = b === 0 ? (a === 0 ? 0 : 100) : (abs / b) * 100;
  return { current: a, previous: b, delta: +abs.toFixed(2), pctChange: +pct.toFixed(1) };
}

function main() {
  const files = listSnapshots();
  if (files.length < 2) {
    console.error(
      `Need at least 2 snapshots in ${DIR}/. Found ${files.length}. Run: npx tsx scripts/seo-agent/snapshot.ts`
    );
    process.exit(1);
  }

  const toKey = (arg("to") ?? files[files.length - 1]).replace(/\.json$/, "");
  const fromKey = (arg("from") ?? files[files.length - 2]).replace(/\.json$/, "");

  const to = load(toKey);
  const from = load(fromKey);

  const t = to.ga4.totals;
  const p = from.ga4.totals;

  const oldQueries = new Set(from.searchConsole.topQueries.map((q) => q.query));
  const newQueries = to.searchConsole.topQueries
    .filter((q) => !oldQueries.has(q.query))
    .map((q) => ({ query: q.query, impressions: q.impressions, position: q.position }));

  console.log(
    JSON.stringify(
      {
        from: fromKey,
        to: toKey,
        windowDays: to.windowDays,
        ga4: {
          sessions: delta(t.sessions, p.sessions),
          users: delta(t.users, p.users),
          engagementRatePct: delta(t.engagementRatePct, p.engagementRatePct),
          bookClicks: delta(t.bookClicks, p.bookClicks),
          conversionRatePct: delta(t.conversionRatePct, p.conversionRatePct),
        },
        searchConsole: {
          newQueriesThisWeek: newQueries,
          topOpportunityNow: to.searchConsole.opportunities[0] ?? null,
        },
      },
      null,
      2
    )
  );
}

main();
