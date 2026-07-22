import { ga4, propertyPath, lastNDays } from "../clients/ga4";

const CONVERSION_EVENTS = ["book_click", "whatsapp_click", "phone_click"];

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split("=")[1] : fallback;
}

async function main() {
  const days = Number(arg("days", "1"));
  const dateRange = lastNDays(days);

  const [byCity] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [dateRange],
    dimensions: [
      { name: "eventName" },
      { name: "country" },
      { name: "city" },
    ],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: CONVERSION_EVENTS },
      },
    },
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 50,
  });

  const [totalsByEvent] = await ga4().runReport({
    property: propertyPath(),
    dateRanges: [dateRange],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: CONVERSION_EVENTS },
      },
    },
  });

  const totals = (totalsByEvent.rows ?? []).map((r) => ({
    event: r.dimensionValues?.[0]?.value ?? "",
    eventCount: Number(r.metricValues?.[0]?.value ?? 0),
    uniqueUsers: Number(r.metricValues?.[1]?.value ?? 0),
  }));

  const rows = (byCity.rows ?? []).map((r) => ({
    event: r.dimensionValues?.[0]?.value ?? "",
    country: r.dimensionValues?.[1]?.value ?? "(unknown)",
    city: r.dimensionValues?.[2]?.value ?? "(unknown)",
    eventCount: Number(r.metricValues?.[0]?.value ?? 0),
    uniqueUsers: Number(r.metricValues?.[1]?.value ?? 0),
  }));

  console.log(
    JSON.stringify(
      { windowDays: days, totalsByEvent: totals, rows },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
