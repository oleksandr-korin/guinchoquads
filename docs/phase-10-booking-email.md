# Phase 10 — Booking CTA (mailto, no form)

**Decision (revised):** No form on the site. Every "book" CTA opens the visitor's default email client with a pre-filled subject and body. Simpler to ship, no server, no anti-spam surface. Arlindo already prefers email — this is the same channel with fewer moving parts.

## Files

- `app/page.tsx` — replace the entire `<form>` block in the Contact section with a "Book by email" panel (headline, blurb, primary mailto button, secondary tel button, contact facts).
- Remove pending work: no `app/api/booking/route.ts`, no `app/components/booking-form.tsx`, no `resend` dependency, no `.env.example` for Resend.

## Behaviour

- Primary CTA everywhere on the page (`BOOK A TOUR`, per-tour cards, stag / corporate CTAs) becomes an `<a href="mailto:...">`.
- Different origins on the page pass different pre-fill strings so Arlindo can tell where the enquiry came from.

### Mailto template

```
mailto:{arlindo1},{arlindo2}
?subject=Guincho Adventours — Booking enquiry: {experience-or-duration}
&body=Hi Arlindo,

I'd like to book:  {experience-or-duration}
Preferred date:    
Group size:        
Name:              
Phone:             

Anything else:

Thanks!
```

- All whitespace and newlines URL-encoded (`%20`, `%0A`).
- Helper: extract a small `mailtoLink({ subject, prefill })` util (inline in `page.tsx`, no extra file).

### Where the CTAs point

| Location | Subject | `experience-or-duration` |
|---|---|---|
| Header + Hero `BOOK A TOUR` | `Booking enquiry` | (blank — visitor writes) |
| Signature-tour CTA | `Booking enquiry: 3-hour guided ride` | `3-hour guided ride` |
| Prices tier cards (1h/1h30/2h/3h) | `Booking enquiry: {tier}` | `{tier}` |
| Experience cards | `Booking enquiry: {title}` | `{title}` |
| Jeep sightseeing CTA | `Booking enquiry: Jeep Sintra tour` | `Jeep Sintra tour` |
| Stag party CTA | `Stag party enquiry` | `Stag party` |
| Corporate CTA | `Corporate event enquiry` | `Corporate event` |

## Contact panel (replaces the form)

Right-hand column of the Contact section becomes:

- Big `EMAIL US` button → mailto (primary, lime pill).
- `CALL US` button → tel:+351934479075 (secondary, outlined pill).
- Second phone number below.
- Address, hours.

## Acceptance

- No `<form>` on the page.
- Every CTA that used to say "Book a tour" opens the default mail client with the right subject and body.
- Two Arlindo emails are in the `mailto:` recipient list.
- Nothing depends on a server route or third-party email provider.

## Blockers

- Arlindo's two email addresses. Until confirmed, use one placeholder and mark with a `PHASE-12` comment (see `phase-12-open-questions.md`).
