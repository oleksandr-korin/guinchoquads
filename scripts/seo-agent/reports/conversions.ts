import { ga4, propertyPath, lastNDays } from "../clients/ga4";

// The only "money moment" on this site: user clicks a mailto or tel link.
// Those clicks are fired as GA4 events named "book_click" and "phone_click"
// from data-track attributes in the app. Everything else is upstream.

const CONVERSION_EVENTS = ["book_click", "phone_click"];

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

type Row = Record<string, string | number>;

async function runReport(opts: {
  dateRange: { startDate: string; endDate: string };
  breakdown: string;
}): Promise<Row[]> {
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [opts.dateRange],
    dimensions: [{ name: "eventName" }, { name: opts.breakdown }],
    metrics: [{ name: "eventCount" }, { name: "sessions" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: CONVERSION_EVENTS },
      },
    },
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 100,
  });

  return (resp.rows ?? []).map((r) => ({
    event: r.dimensionValues?.[0]?.value ?? "",
    [opts.breakdown]: r.dimensionValues?.[1]?.value ?? "(unknown)",
    eventCount: Number(r.metricValues?.[0]?.value ?? 0),
    sessions: Number(r.metricValues?.[1]?.value ?? 0),
  }));
}

async function totals(dateRange: { startDate: string; endDate: string }) {
  const [resp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [dateRange],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: CONVERSION_EVENTS },
      },
    },
  });

  const bookClicks = Number(
    resp.rows?.find((r) => r.dimensionValues?.[0]?.value === "book_click")
      ?.metricValues?.[0]?.value ?? 0
  );
  const phoneClicks = Number(
    resp.rows?.find((r) => r.dimensionValues?.[0]?.value === "phone_click")
      ?.metricValues?.[0]?.value ?? 0
  );

  const [sessionsResp] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [dateRange],
    metrics: [{ name: "sessions" }],
  });
  const sessions = Number(sessionsResp.rows?.[0]?.metricValues?.[0]?.value ?? 0);

  return {
    sessions,
    bookClicks,
    phoneClicks,
    conversionRatePct:
      sessions > 0 ? Math.round(((bookClicks + phoneClicks) / sessions) * 10000) / 100 : 0,
  };
}

async function main() {
  const days = Number(arg("days", "28"));
  const dateRange = lastNDays(days);

  const [byChannel, byLandingPage, byCountry, byPage, summary] = await Promise.all([
    runReport({ dateRange, breakdown: "sessionDefaultChannelGroup" }),
    runReport({ dateRange, breakdown: "landingPage" }),
    runReport({ dateRange, breakdown: "country" }),
    runReport({ dateRange, breakdown: "pagePath" }),
    totals(dateRange),
  ]);

  console.log(
    JSON.stringify(
      {
        windowDays: days,
        note:
          "conversionRatePct = (book_click + phone_click) / sessions. Below industry benchmark (2-4%) means the pages persuade poorly OR the traffic intent is wrong.",
        summary,
        byChannel,
        byLandingPage,
        byPage,
        byCountry,
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
