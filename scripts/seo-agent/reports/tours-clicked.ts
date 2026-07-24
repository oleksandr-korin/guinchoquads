import { ga4, propertyPath, lastNDays } from "../clients/ga4";

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

// Two angles on "which tour is a booking-clicker after":
//   1. book_click / pagePath  — the URL the click fired from (most direct)
//   2. pricing_tier_click by tier — separate event with tier param
//   3. book_click custom cta_source param, if it's been registered as a
//      custom dimension in GA4 admin (usually needs one-time setup)

async function main() {
  const days = Number(arg("days", "7"));
  const range = lastNDays(days);

  const [byPage] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [range],
    dimensions: [{ name: "eventName" }, { name: "pagePath" }],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: ["book_click", "whatsapp_click"] },
      },
    },
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 50,
  });

  async function safeReport(dim: string, filterEvents: string[]) {
    try {
      const [resp] = await ga4().runReport({
        property: propertyPath(),
        dateRanges: [range],
        dimensions: [{ name: "eventName" }, { name: dim }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: {
          filter: {
            fieldName: "eventName",
            inListFilter: { values: filterEvents },
          },
        },
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      });
      return { rows: resp.rows ?? [], err: null };
    } catch (e) {
      return { rows: [], err: String(e) };
    }
  }

  const byTier = await safeReport("customEvent:tier", ["pricing_tier_click"]);
  const bySource = await safeReport("customEvent:cta_source", ["book_click", "whatsapp_click"]);

  const rows = (byPage.rows ?? []).map((r) => ({
    event: r.dimensionValues?.[0]?.value ?? "",
    pagePath: r.dimensionValues?.[1]?.value ?? "",
    events: Number(r.metricValues?.[0]?.value ?? 0),
    users: Number(r.metricValues?.[1]?.value ?? 0),
  }));

  const tiers = byTier.rows.map((r) => ({
    tier: r.dimensionValues?.[1]?.value ?? "(unknown)",
    events: Number(r.metricValues?.[0]?.value ?? 0),
    users: Number(r.metricValues?.[1]?.value ?? 0),
  }));

  const sources = bySource.rows.map((r) => ({
    event: r.dimensionValues?.[0]?.value ?? "",
    source: r.dimensionValues?.[1]?.value ?? "(not-set)",
    events: Number(r.metricValues?.[0]?.value ?? 0),
    users: Number(r.metricValues?.[1]?.value ?? 0),
  }));

  console.log(
    JSON.stringify(
      {
        windowDays: days,
        byPage: rows,
        byTier: tiers,
        bySource: sources,
        errors: { tier: byTier.err, source: bySource.err },
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
