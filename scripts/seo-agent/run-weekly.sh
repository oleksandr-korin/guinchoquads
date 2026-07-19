#!/usr/bin/env bash
# Weekly SEO snapshot. Wired for cron/launchd.
#
# Requires GOOGLE_APPLICATION_CREDENTIALS, GA_PROPERTY_ID, SC_SITE_URL to
# be readable in the environment. If you schedule this outside your
# interactive shell (cron/launchd), point ENV_FILE below at a file that
# exports those variables.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
ENV_FILE="${SEO_AGENT_ENV_FILE:-$HOME/.config/ga/seo-agent.env}"
LOG_FILE="$REPO_ROOT/data/analytics-snapshots/_run.log"

mkdir -p "$(dirname "$LOG_FILE")"

if [ -f "$ENV_FILE" ]; then
  # shellcheck disable=SC1090
  set -a
  . "$ENV_FILE"
  set +a
fi

cd "$REPO_ROOT"

# Make sure Homebrew node/npm are on PATH under launchd/cron.
if [ -d /opt/homebrew/bin ]; then
  export PATH="/opt/homebrew/bin:$PATH"
fi
if [ -d /usr/local/bin ]; then
  export PATH="/usr/local/bin:$PATH"
fi

{
  echo "=== $(date -u +%Y-%m-%dT%H:%M:%SZ) — running weekly snapshot ==="
  npm run --silent seo:snap
  echo "--- diff vs previous ---"
  npm run --silent seo:diff || echo "(no previous snapshot yet)"
  echo
} >> "$LOG_FILE" 2>&1
