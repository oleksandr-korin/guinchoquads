// Single source of truth for every photo slot on the site.
//
// TO ACTIVATE A PHOTO:
// 1. Drop the file into `public/photos/` using the exact filename below.
//    e.g. hero.jpg → /public/photos/hero.jpg
// 2. Delete the `placeholder: true` line from that slot.
// 3. Commit + push. Vercel auto-deploys.
//
// The `src` fields already point at the expected local paths — you never
// need to edit them unless you use a different filename. While `placeholder:
// true` is set, the site renders a "PHOTO NEEDED" tile with the `brief`
// text instead of hitting the (still-missing) file.

export type Photo = {
  src: string;
  alt: string;
  placeholder?: boolean;
  brief?: string; // one-line description of what to shoot — shown to Arlindo
};

const LOGO =
  "https://storage.googleapis.com/ployai/45579be0-a8f1-4cae-b0f7-129f8514ab2e/user/009b9641-ee6ae7-7ef3d436fbe34776a91961852583e353-mv2.png";

type PhotoManifest = {
  logo: Photo;
  hero: Photo;
  signature: Photo;
  sightseeing: Photo;
  reviews: Photo;
  experience: Record<string, Photo>;
  arlindo: Photo;
};

export const photos: PhotoManifest = {
  logo: {
    src: LOGO,
    alt: "Guincho Adventours",
  },

  hero: {
    src: "/photos/hero.jpg",
    alt: "Rider on a red quad bike above the Guincho coast",
  },

  signature: {
    src: "/photos/signature.jpg",
    alt: "Small group of riders stopped at a coastal viewpoint on the Guincho trail",
  },

  sightseeing: {
    src: "/photos/sightseeing.jpg",
    alt: "Sintra + Cabo da Roca sightseeing tour",
    placeholder: true,
    brief:
      "Land Rover on a Sintra road, Sintra town view, or a wine-cellar tasting scene. Used as a subtle background.",
  },

  reviews: {
    src: "/photos/reviews.jpg",
    alt: "Happy group of Guincho Adventours riders posed on quads at a coastal cliff",
  },

  experience: {
    // Indexed by the experience slug. Extend Record when adding a new slug.
    "quad-bike-tours": {
      src: "/photos/quad-bike-tours.jpg",
      alt: "Rider splashing a red quad through mud on the Guincho trails",
    },
    "sea-kayak": {
      src: "/photos/sea-kayak.jpg",
      alt: "Sea kayakers paddling in a rocky cove of the Atlantic coast",
    },
    "jeep-sintra-tour": {
      src: "/photos/jeep-sintra-tour.jpg",
      alt: "Jeep Sintra Tour",
      placeholder: true,
      brief:
        "Land Rover on the road with Sintra behind, or wine cellar tasting scene.",
    },
    "mountain-bike": {
      src: "/photos/mountain-bike.jpg",
      alt: "Mountain Bike",
      placeholder: true,
      brief: "Mountain biker on a forest / dune singletrack with ocean in view.",
    },
    hiking: {
      src: "/photos/hiking.jpg",
      alt: "Hiking",
      placeholder: true,
      brief:
        "Small group hiking coastal cliffs or Sintra hills with a guide — the calm alternative.",
    },
    buggies: {
      src: "/photos/buggies.jpg",
      alt: "Two riders celebrating in a green Guincho Adventours buggy at the coast",
    },
  },

  arlindo: {
    src: "/photos/arlindo.jpg",
    alt: "Arlindo — owner and lead guide, Guincho Adventours",
    placeholder: true,
    brief:
      "Working portrait of Arlindo — at the office in Areia, next to a quad, or on the trail. Portrait crop (4:5).",
  },
};
