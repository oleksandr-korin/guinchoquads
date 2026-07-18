async function fetchAndAudit(url: string) {
  const res = await fetch(url, {
    redirect: "manual",
    headers: { "user-agent": "seo-agent-audit/1.0" },
  });
  const status = res.status;
  const location = res.headers.get("location") ?? undefined;
  const xRobotsTag = res.headers.get("x-robots-tag") ?? undefined;

  if (status !== 200) {
    return { url, status, location, xRobotsTag };
  }
  const html = await res.text();

  const pick = (re: RegExp) => html.match(re)?.[1]?.trim();
  const title = pick(/<title>([^<]*)<\/title>/i);
  const description = pick(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i
  );
  const canonical = pick(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i
  );
  const robotsMeta = pick(
    /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i
  );
  const hasJsonLd = /application\/ld\+json/i.test(html);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const bytes = html.length;

  const canonicalMismatch =
    canonical !== undefined && canonical.replace(/\/$/, "") !== url.replace(/\/$/, "");
  const noindex = /noindex/i.test(robotsMeta ?? "") || /noindex/i.test(xRobotsTag ?? "");

  return {
    url,
    status,
    title,
    description,
    canonical,
    canonicalMismatch,
    robotsMeta,
    xRobotsTag,
    noindex,
    hasJsonLd,
    h1Count,
    bytes,
    warnings: [
      !title && "missing <title>",
      !description && "missing meta description",
      !canonical && "missing canonical",
      canonicalMismatch && `canonical mismatch (${canonical})`,
      noindex && "NOINDEX",
      h1Count !== 1 && `h1Count=${h1Count} (should be 1)`,
      !hasJsonLd && "no JSON-LD",
    ].filter(Boolean),
  };
}

async function main() {
  const sitemapUrl = process.argv[2] ?? "https://www.guinchotours.org/sitemap.xml";
  const smRes = await fetch(sitemapUrl);
  const smXml = await smRes.text();
  const urls = Array.from(smXml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);

  const results = [];
  for (const u of urls) {
    process.stderr.write(`checking ${u}\n`);
    try {
      results.push(await fetchAndAudit(u));
    } catch (e) {
      results.push({ url: u, error: (e as Error).message });
    }
  }

  const problems = results.filter(
    (r) => "warnings" in r && Array.isArray(r.warnings) && r.warnings.length > 0
  );

  console.log(
    JSON.stringify(
      {
        sitemap: sitemapUrl,
        total: urls.length,
        problemCount: problems.length,
        results,
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
