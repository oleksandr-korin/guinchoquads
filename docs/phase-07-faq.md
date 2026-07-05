# Phase 7 — FAQ section (new)

Arlindo agreed to a FAQ block. The plan from the call:

> "I could use AI to create question / answer, and then you could review if that's okay."

The transcript itself is the source material. We draft the FAQs, Arlindo redlines them, then ship.

## Files

- `app/page.tsx` — new `<section id="faq">` (accordion style) before the Booking form.
- `data/faq.ts` — array of `{ q, a }` objects.

## Draft FAQ set (from the transcript, for Arlindo to review)

1. **How long are your tours?**
   1 h, 1 h 30, 2 h, and 3 h. Most guests pick the 1 h. The 2 h and 3 h show the best scenery — up to Peninha and along the coast.

2. **How much do the quad tours cost?**
   From €60 per person for a 1-hour ride, up to the 3-hour signature tour. See the Prices section for the full list. (Phase 3.)

3. **Can two people share one quad?**
   Yes on the 1 h / 1 h 30 tours. On the 2 h and 3 h tours, driver + passenger is only allowed if combined weight is under 130 kg — the terrain is more technical.

4. **Do I need experience to drive a quad?**
   No. All levels welcome. Every tour starts with a briefing and gear check.

5. **Do you organise stag parties and bachelor weekends?**
   Yes — big-group adventures are a big part of what we do. Tell us the size and date and we'll plan the day.

6. **Do you handle corporate events?**
   Yes. From 10 to 50+ people. We can run the whole group on quads, or split — some on quads with us, others on the Jeep tour with our partner to Sintra + wine cellars.

7. **Do you offer non-driving tours?**
   Yes — the Jeep sightseeing tour to Sintra, Cabo da Roca and a wine cellar. You get driven, so alcohol is welcome. (Phase 5.)

8. **What about safety and insurance?**
   Every tour is covered by our insurance. Our RNAAT registration is on file and displayed with the booking terms. (Phase 9.)

9. **How do I book?**
   Send us your dates and group size through the form on this page or by email. We answer everything by email — that's how we keep a clear record.

10. **Where do we meet?**
    Rua da Areia n.º 1306, Areia, 2750-095 Cascais. All tours start and end at our office.

## UI notes

- Accordion pattern (native `<details>` is fine, no JS required).
- Group by theme if the list grows: `Tours`, `Bookings & payment`, `Safety`, `Groups & events`.

## Acceptance

- 10 FAQs render in an accordion.
- Content is Arlindo-approved before production ship — the draft above is a starting point.

## Blockers

- Arlindo redlines the copy — the transcript is a rough source, some answers were inferred.
