# seo-agent

Local tooling to observe and drive Guincho Adventours' Google Search visibility.

## Clients

- `clients/ga4.ts` — Google Analytics Data API v1 (GA4 property `545586473`)
- `clients/search-console.ts` — Search Console API (site `sc-domain:guinchotours.org` or `https://www.guinchotours.org/`)
- `clients/psi.ts` — PageSpeed Insights v5 (public, no auth)

## Setup

1. In Google Cloud Console, enable these APIs on the same project as the service account:
   - `analyticsdata.googleapis.com`
   - `searchconsole.googleapis.com`
   - `pagespeedonline.googleapis.com`
2. Create a service-account JSON key and save it **outside the repo**:
   ```
   ~/.config/ga/guinchotours.json
   ```
3. Grant the SA email access in each product's own admin:
   - GA4 → Admin → Property Access → Viewer
   - Search Console → Settings → Users and permissions → Full user
4. Add to your shell rc (or `.env.local`):
   ```
   export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.config/ga/guinchotours.json"
   export GA_PROPERTY_ID="545586473"
   export SC_SITE_URL="sc-domain:guinchotours.org"
   export PSI_API_KEY=""   # optional; PSI works unauthenticated with lower quota
   ```

## Run

Each script is a standalone entrypoint. Example:

```
npx tsx scripts/seo-agent/reports/traffic.ts --days=7
npx tsx scripts/seo-agent/reports/queries.ts --days=28 --limit=25
npx tsx scripts/seo-agent/reports/psi.ts https://www.guinchotours.org/
```

Nothing here writes to Google — read-only reporting until we add explicit action modules.
