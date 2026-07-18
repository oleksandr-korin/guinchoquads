import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { requireEnv } from "../env";

let client: BetaAnalyticsDataClient | null = null;

export function ga4(): BetaAnalyticsDataClient {
  if (!client) {
    requireEnv("GOOGLE_APPLICATION_CREDENTIALS");
    client = new BetaAnalyticsDataClient();
  }
  return client;
}

export function propertyPath(): string {
  return `properties/${requireEnv("GA_PROPERTY_ID")}`;
}

export type DateRange = { startDate: string; endDate: string };

export function lastNDays(days: number): DateRange {
  return { startDate: `${days}daysAgo`, endDate: "today" };
}
