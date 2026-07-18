// Blog posts — long-tail, local-authority content.
//
// Every post starts as a draft with [ARLINDO: ...] placeholders where his
// firsthand memory (trail names, dates, characters, incidents) matters most.
// Do not remove those markers until he has replaced them with real detail —
// they exist specifically so Google's helpful-content system rewards the
// article for showing lived experience instead of generic AI text.

export type PostSection = {
  heading?: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  coverPhotoKey?: string;
  author: string;
  status: "draft" | "published";
  sections: PostSection[];
  relatedTours: string[]; // tour slugs
  keywords: string[];
};

export const posts: Record<string, Post> = {
  "praia-do-abano-hidden-cove": {
    slug: "praia-do-abano-hidden-cove",
    title: "Praia do Abano — The Cove You Can Only Ride To",
    metaTitle: "Praia do Abano: Guincho's Hidden Cove — Guincho Adventours",
    metaDescription:
      "The one beach on the Guincho coast most visitors never see. What Praia do Abano actually is, how to get there, and why we stop the quads on the ridge above it.",
    excerpt:
      "You can drive twenty minutes from Cascais, hike past two of the most photographed beaches in Portugal, and still miss Praia do Abano — because the road never touches it. Here is what is down there, and why we stop there on the quad tours.",
    publishedAt: "2026-07-18",
    readingMinutes: 6,
    coverPhotoKey: "quad-bike-tours",
    author: "Arlindo",
    status: "draft",
    keywords: [
      "praia do abano",
      "hidden beach Cascais",
      "hidden beach Guincho",
      "quad tour Praia do Abano",
      "Cascais secret beach",
      "Guincho coast",
    ],
    relatedTours: ["quad-bike-tours", "hiking", "mountain-bike"],
    sections: [
      {
        paragraphs: [
          "If you drive north out of Cascais along the coast, you pass Praia do Guincho — the big Atlantic beach every guidebook lists — and then the road curves inland, up towards Cabo da Roca. Between those two points, tucked into a fold in the cliffs, is Praia do Abano. Most people who visit the Guincho coast never see it. The road never touches it. There is no car park, no restaurant, no lifeguard tower. To reach it you either walk down a rough footpath, or you ride in on the dirt tracks behind the dunes.",
          "That is why we stop the quad tours on the ridge above it. In eighteen years of running rides on this coast, the look on people's faces when they realise there is a beach directly below them that they had no idea existed — that is the moment they remember, more than the ride itself.",
        ],
      },
      {
        heading: "Where it actually is",
        paragraphs: [
          "Praia do Abano sits about 3 km north of Praia do Guincho, on the Cascais side of Cabo da Roca. On the map it is a small crescent of sand pinned between two headlands, with the Sintra hills rising directly behind it. From our office in Areia, we reach the ridge above it in about twenty minutes on a quad. On foot from the Guincho car park, you are looking at 45 minutes to an hour if you know the trail.",
          "[ARLINDO: add the exact trail name locals use — is it \"trilho do Abano\", \"caminho velho\", or something older? Any story behind the name?]",
        ],
      },
      {
        heading: "Why nobody walks in",
        paragraphs: [
          "The approach is the answer. The last kilometre down to the sand is loose, exposed, and unmarked. In summer the wind on the ridge above it can knock a small person sideways — Guincho's famous Nortada, the north wind, funnels straight through here. Most visitors reach the viewpoint above, take a photo, and turn back.",
          "That is exactly what makes it good. On a normal August afternoon, when Praia do Guincho has a thousand people on it, Praia do Abano has fifteen.",
        ],
      },
      {
        heading: "What is actually down there",
        paragraphs: [
          "A crescent of coarse Atlantic sand, cliff on both sides, and the kind of surf that reminds you why sea kayakers respect this coast. No shade. No fresh water. No signal in some spots. In winter the storms rearrange the sand — some years there is more beach, some years there is almost none.",
          "[ARLINDO: what wildlife do you see there most often — kestrels, gulls, the occasional seal? Any month it is clearly best?]",
          "[ARLINDO: is there anything human down there — the old fishermen's shelter, a wreck, a bunker from the Estado Novo years? The concrete blocks up on the ridge — what were those for?]",
        ],
      },
      {
        heading: "The dirt track and its story",
        paragraphs: [
          "The track we ride in on runs behind the primary dune, then climbs into pine and eucalyptus. It is a working track — used by the parks service, by the local shepherds who still bring goats up onto the hills, and by the fire brigade in summer. It has been there longer than the tarmac road on the coast.",
          "[ARLINDO: any story from the eighteen years you have ridden it? The year the fire came through. The night you took a group in December and the fog swallowed the coast. The two Dutch riders who dropped a helmet camera and came back three years later to look for it.]",
        ],
      },
      {
        heading: "How to actually get to Praia do Abano",
        paragraphs: [
          "There are three honest ways in. On foot, from the Praia do Guincho north car park — allow an hour each way, wear real shoes, take water, do not attempt it in flip-flops. By mountain bike, on the same trails we use for the guided rides. Or by quad, on the tours that leave from our office in Areia.",
          "If you are staying in Cascais and only have half a day, the 1 h 30 quad tour is the direct route — we drop by Praia do Abano on the way out and let you stand on the ridge above it for a photo before we ride back. If you have more time and want to actually walk down onto the sand, the coastal hiking tour is the one to book.",
        ],
      },
      {
        heading: "Practical notes",
        paragraphs: [
          "Best months to visit: May, June, September, October. July and August are windy and hot. Winter is dramatic and often empty, but check the swell forecast — the cove can be unsafe to descend into after storms.",
          "There are no facilities. Nearest toilets, water and food are 3 km south at Praia do Guincho, or back in Areia.",
          "Cabo da Roca — mainland Europe's westernmost point — is a further 4 km up the coast, so most first-time visitors combine the two.",
        ],
      },
    ],
  },
};

export const postSlugs = Object.keys(posts);

export function publishedPosts(): Post[] {
  return postSlugs
    .map((s) => posts[s])
    .filter((p) => p.status === "published")
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function allSitemapPosts(): Post[] {
  // Include drafts in dev, exclude in prod. Sitemap.ts imports this and
  // the sitemap generator itself is only ever rendered on the server, so
  // process.env is a safe filter here.
  const isProd = process.env.VERCEL_ENV === "production";
  return postSlugs
    .map((s) => posts[s])
    .filter((p) => (isProd ? p.status === "published" : true))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
