import { google, type searchconsole_v1 } from "googleapis";
import { requireEnv } from "../env";

let client: searchconsole_v1.Searchconsole | null = null;

export async function searchConsole(): Promise<searchconsole_v1.Searchconsole> {
  if (client) return client;
  requireEnv("GOOGLE_APPLICATION_CREDENTIALS");
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  client = google.searchconsole({ version: "v1", auth });
  return client;
}

export function siteUrl(): string {
  return requireEnv("SC_SITE_URL");
}

export function isoDaysAgo(days: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}
