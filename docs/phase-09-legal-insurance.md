# Phase 9 — Legal & insurance disclosure

Arlindo has a legal setup that customers (and partners) look for on the site: insurance, RNAAT registration, and clear terms & conditions. The current rebuild has none of it.

## Files

- `app/terms/page.tsx` — new page for Terms & Conditions.
- `app/page.tsx` — footer additions + booking-form checkbox linking to `/terms`.

## What to add

### Terms & Conditions page (`/terms`)

Bullet-list version, plain language. Arlindo's line was: "just take it and make it a bit nicer, but they sign, they read stuff." Keep it readable, don't over-lawyer.

Sections:

1. Who we are (Guincho Adventours, RNAAT number, address).
2. Booking + payment terms.
3. Cancellation policy.
4. Insurance coverage — what is and isn't covered.
5. Safety rules — helmets, briefing, weight limits (see Phase 3 for the 130 kg driver+passenger rule).
6. Photography / media consent.
7. Contact.

### Footer additions

- Link `Terms & Conditions` → `/terms`.
- Small print with **RNAAT registration number** and **insurance underwriter** — the piece Arlindo said partners specifically ask for.

### Booking form additions

- Checkbox: "I have read and agree to the Terms & Conditions" linking to `/terms`. Required before submit.

## Copy source

Arlindo mentioned there's an existing terms page (possibly on the Wix site). We need the current text as a starting point rather than drafting from scratch — see Phase 12 (Wix access).

## Acceptance

- `/terms` renders as a legible legal page.
- Footer surfaces the RNAAT number and the Terms link.
- Booking form has a required acceptance checkbox.

## Blockers

- ~~Existing Terms text~~ — resolved: extracted from Arlindo's PDF, cleaned up and rendered at `/terms`.
- ~~RNAAT number~~ — resolved: `78/2008`.
- Insurance underwriter name — still needs to come from Arlindo.
- NIF / VAT number — still needs to come from Arlindo.
