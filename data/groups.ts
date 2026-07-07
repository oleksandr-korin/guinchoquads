export type GroupPage = {
  slug: string;
  eyebrow: string;
  title: string;
  headline: string;
  intro: string;
  description: string[];
  logistics: string[];
  who: string[];
  activities: string[];
  cta: { label: string; topic: string };
  photoKey: string;
  related: { href: string; label: string; blurb: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export const groups: Record<string, GroupPage> = {
  "stag-parties": {
    slug: "stag-parties",
    eyebrow: "STAG & BACHELOR",
    title: "Stag Parties",
    headline: "BIG GROUP. BIG ADVENTURE.",
    intro:
      "Bachelor weekends, birthdays, and end-of-year mates trips on quads and buggies along the Guincho coast.",
    description: [
      "Stag / bachelor weekends are a big part of our business. We run groups of 6 to 20+ regularly and know how to keep 15 helmeted friends moving on the same trail without anyone getting stranded or bored.",
      "The 1-hour and 1 h 30 quad tours are the sweet spot: fast, cheap enough that nobody argues about splitting the bill, and back at the office in time to lunch and reset before the next thing.",
      "We can also help slot in a beach lunch, a Sesimbra kayak session, or a Sintra Jeep afternoon around the ride — tell us what the weekend looks like and we'll build the day around it.",
    ],
    logistics: [
      "Small groups (up to 6): the 1-hour quad tour works clean.",
      "Medium groups (7–15): the 1 h 30 tier adds extra briefing time and more guides on the trail.",
      "Big groups (15–25): we run in two waves — half the group rides while the other half sets up the next thing.",
      "One booking, one invoice — we sort the logistics with the organiser, not each individual.",
    ],
    who: [
      "Stag / bachelor weekends.",
      "Milestone birthdays (30, 40, 50).",
      "End-of-university group trips.",
      "Any group where everyone wants to actually be in the photo, not watching from the side.",
    ],
    activities: [
      "Quad bike tours (1 h, 1 h 30, 2 h, 3 h).",
      "Buggies for the couples in the group.",
      "Sea kayak add-on for a second-day activity.",
      "Sintra Jeep tour if the crew wants a chill day.",
    ],
    cta: { label: "Plan the party", topic: "Stag / bachelor party" },
    photoKey: "quad-bike-tours",
    related: [
      {
        href: "/tours/quad-bike-tours",
        label: "Quad bike tours",
        blurb: "The most-booked ride for groups.",
      },
      {
        href: "/tours/buggies",
        label: "Buggies",
        blurb: "Side-by-side for couples in the group.",
      },
      {
        href: "/groups/corporate",
        label: "Corporate events",
        blurb: "Same operation, different weekend crowd.",
      },
    ],
    metaTitle: "Stag Party & Bachelor Weekend Quad Tours — Cascais",
    metaDescription:
      "Stag parties, bachelor weekends and big-group quad tours from Guincho, Cascais. Groups from 6 to 25, one booking, one invoice. From €60 per rider.",
    keywords: [
      "stag party Cascais",
      "bachelor party Portugal",
      "group quad tour Sintra",
      "stag do Portugal quads",
    ],
  },

  corporate: {
    slug: "corporate",
    eyebrow: "CORPORATE",
    title: "Corporate Events",
    headline: "OFF-SITES, TEAM DAYS, INCENTIVE TRIPS.",
    intro:
      "Corporate off-sites and team-building days combining coastal quads with a Sintra Jeep + wine tasting for the calmer half of the group.",
    description: [
      "The corporate offer is the one where we get to combine our whole product line. Half the group can be on the coast in a cloud of dust; the other half can be in a Land Rover on the Sintra ridge with a wine tasting at the end. Nobody left out, nobody forced into an activity they didn't sign up for.",
      "We run corporate groups of 10 to 50+ regularly. One point of contact, one invoice, and briefings translated to English on the day if the group is mixed nationalities.",
      "For larger companies we work with our Land Rover partner in Sintra — if your group is bigger than our quad fleet, they run the sightseeing half in parallel.",
    ],
    logistics: [
      "Groups from 10 to 50+ people.",
      "One point of contact, one invoice, VAT receipt for the finance team.",
      "English briefings and multi-lingual guides on request.",
      "Split the group: some on quads, some on the Jeep tour, meet for lunch.",
      "Hotel pickup for the Jeep half of the group.",
    ],
    who: [
      "Company off-sites and team days.",
      "End-of-quarter celebrations.",
      "Incentive trips and client entertainment.",
      "Groups where some people don't want to drive an off-road machine.",
    ],
    activities: [
      "Quad tours (1 h or 1 h 30 for bigger groups).",
      "Sintra Jeep tour with optional wine tasting.",
      "Sea kayak session for a second-day activity.",
      "Combined day: coast + Sintra + wine, all logistics run by us.",
    ],
    cta: {
      label: "Request a corporate proposal",
      topic: "Corporate event proposal",
    },
    photoKey: "jeep-sintra-tour",
    related: [
      {
        href: "/tours/jeep-sintra-tour",
        label: "Sintra Jeep tour",
        blurb: "The calmer half of your corporate day.",
      },
      {
        href: "/tours/quad-bike-tours",
        label: "Quad bike tours",
        blurb: "The adrenaline half.",
      },
      {
        href: "/groups/stag-parties",
        label: "Stag parties",
        blurb: "Big-group quad tours by another name.",
      },
    ],
    metaTitle: "Corporate Events & Team Building — Cascais",
    metaDescription:
      "Corporate off-sites in Cascais: coastal quad tours, Sintra Jeep with wine tasting, groups 10–50+, one invoice. 18 years running big-group adventure days.",
    keywords: [
      "corporate event Cascais",
      "team building Sintra",
      "company off-site Portugal",
      "corporate quad tour",
    ],
  },
};

export const groupSlugs = Object.keys(groups);
