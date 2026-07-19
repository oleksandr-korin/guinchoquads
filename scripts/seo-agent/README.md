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

## Weekly snapshot

`scripts/seo-agent/snapshot.ts` collects one wide, structured record of GA4 + Search Console for the trailing 7 days and writes it to `data/analytics-snapshots/YYYY-MM-DD.json`. `snapshot-diff.ts` prints the delta between the two most recent files. The `data/analytics-snapshots/` folder is gitignored — snapshots stay on your machine only.

```
npm run seo:snap    # save today's snapshot
npm run seo:diff    # print delta vs previous snapshot
```

### Schedule it (macOS, launchd)

1. Create `~/.config/ga/seo-agent.env` with the three exports (same as above) so the wrapper picks them up outside your interactive shell.
2. Copy the template, substitute the repo path:
   ```
   sed "s|REPO_ROOT|$(pwd)|g" scripts/seo-agent/weekly.plist.example \
     > ~/Library/LaunchAgents/org.guinchotours.seo-weekly.plist
   launchctl load ~/Library/LaunchAgents/org.guinchotours.seo-weekly.plist
   ```
3. Force a test run:
   ```
   launchctl start org.guinchotours.seo-weekly
   tail -f data/analytics-snapshots/_run.log
   ```

Runs every Monday at 09:15 local time. To stop: `launchctl unload ~/Library/LaunchAgents/org.guinchotours.seo-weekly.plist`.

### Or just crontab

```
15 9 * * 1 /absolute/path/to/repo/scripts/seo-agent/run-weekly.sh
```
