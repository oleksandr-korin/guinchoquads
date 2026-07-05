const IMG_BASE =
  "https://storage.googleapis.com/ployai/45579be0-a8f1-4cae-b0f7-129f8514ab2e/user";

export type Experience = {
  slug: string;
  title: string;
  desc: string;
  img: string;
};

// PHASE-11: images below are AI placeholders. Hiking has no dedicated photo
// in the current set — using a landscape shot until a real one is delivered.
export const experiences: Experience[] = [
  {
    slug: "quad-bike-tours",
    title: "Quad Bike Tours",
    desc: "Twin-track coastal and mountain trails. First-timers and thrill-seekers welcome — the workhorse of every ride we run.",
    img: `${IMG_BASE}/996babc5-ai-generated-1782050451945.png`,
  },
  {
    slug: "sea-kayak",
    title: "Sea Kayak",
    desc: "Paddle the turquoise coves and caves of the Atlantic shore, guided by locals who know the tides.",
    img: `${IMG_BASE}/41b1fb31-ai-generated-1782050293644.png`,
  },
  {
    slug: "jeep-sintra-tour",
    title: "Jeep Sintra Tour",
    desc: "Sintra UNESCO town, Cabo da Roca and a wine cellar — you get driven in a Land Rover. Ideal for larger groups and non-active guests.",
    img: `${IMG_BASE}/f5dac523-ai-generated-1782050304656.png`,
  },
  {
    slug: "mountain-bike",
    title: "Mountain Bike",
    desc: "Forest and dune singletrack with ocean views. Guided rides for confident riders.",
    img: `${IMG_BASE}/55ae8a0e-ai-generated-1782050335003.png`,
  },
  {
    slug: "hiking",
    title: "Hiking",
    desc: "The calm alternative. Coastal cliffs and Sintra hills on foot, at your own pace with a local guide.",
    img: `${IMG_BASE}/eefde744-ai-generated-1782050332322.png`,
  },
  {
    slug: "buggies",
    title: "Buggies",
    desc: "Side-by-side power for small groups. Limited availability — get in touch to check dates.",
    img: `${IMG_BASE}/34ca6319-ai-generated-1782050291738.png`,
  },
];
