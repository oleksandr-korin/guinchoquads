# Phase 17 — Domains & canonical host

The site owns two domains through Wix: `guinchotours.org` (primary) and `guinchotours.com` (secondary). Google should only ever see one canonical host so that inbound links, backlinks, and search-ranking authority consolidate on a single URL.

## Canonical

**`https://www.guinchotours.org`** — every other host variant 308s here.

## What's on Vercel

Project: `guinchoquads` (team `okorin-3095s-projects`). Domains attached to the project:

| Domain | Purpose | State |
|---|---|---|
| `www.guinchotours.org` | Canonical | Serves the app. |
| `guinchotours.org` | Apex | 308 → `www.guinchotours.org` via `next.config.ts`. |
| `www.guinchotours.com` | Secondary | 308 → `www.guinchotours.org` via `next.config.ts`. |
| `guinchotours.com` | Secondary apex | 308 → `www.guinchotours.org` via `next.config.ts`. |

The redirect is implemented in `next.config.ts` (not Vercel's dashboard-level "Domain redirect") so the intent is version-controlled and survives project moves.

## DNS state (2026-07-18)

Both `.com` records point at Vercel's edge IP `76.76.21.21`, so requests hit the project and the code-level 308 fires. **However**, `vercel domains inspect guinchotours.com` reports:

> This Domain is not configured properly. Nameservers point at `ns8.wixdns.net` / `ns9.wixdns.net` instead of the intended `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.

That warning is **cosmetic for now** — the A record makes the domain work regardless. If Wix ever changes their edge IPs or introduces a proxy layer, or if we later want automatic SSL/wildcard renewals fully managed by Vercel, we would need to switch nameservers.

**When to fix it** — only if any of these happens:
- SSL cert renewal ever fails on a `.com` host (Vercel needs to manage the TXT/CNAME renewal challenge).
- We want to add subdomains beyond www / apex (e.g. `book.guinchotours.com`) without editing Wix DNS every time.
- Wix retires legacy A-record support.

Until then, leave nameservers on Wix. Wix keeps the domain UI (renewals, contact info) in one place; Vercel handles serving.

## When to un-redirect `.com`

Never, unless a marketing reason emerges to run a separate `.com` site (e.g. paid landing pages that shouldn't dilute the `.org` SEO). In that case, either:

1. Remove the `.com` host block from `next.config.ts` and let Vercel serve `.com` alongside `.org` (two duplicate sites — will cannibalise search).
2. Or move `.com` to its own Vercel project pointed at a different codebase.

Neither is planned. Assume the 308 is permanent.

## How to verify from the CLI

```
# Should return 308 with Location: https://www.guinchotours.org/
curl -sI https://guinchotours.com/ | head -3
curl -sI https://www.guinchotours.com/ | head -3
curl -sI https://guinchotours.org/ | head -3

# Should return 200
curl -sI https://www.guinchotours.org/ | head -3
```

## History

- 2026-07-18: `.com` was still pointing at old Wix site until Alex updated its A record to `76.76.21.21`. Alex added both `.com` hosts to the Vercel project via `vercel domains add`. Redirect wired in `next.config.ts`. Commit `9727ecd`.
