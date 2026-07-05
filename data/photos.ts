// Single source of truth for every photo slot on the site.
// When a real photo lands, drop the file into public/photos/<name> and
// change the `src` of the matching slot below. Then delete `placeholder: true`.
//
// While `placeholder: true`, the site renders a clear "PHOTO NEEDED" tile
// with the `brief` text so Arlindo can see exactly what to send.

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
    src: "",
    alt: "Riders on quad bikes along the Guincho coast at sunset",
    placeholder: true,
    brief:
      "Wide landscape shot of one or two quad riders on the Guincho coast — golden hour, cliffs and Atlantic behind them.",
  },

  signature: {
    src: "",
    alt: "Guided 3-hour quad tour along the Guincho trails",
    placeholder: true,
    brief:
      "Wide landscape of a small group riding the coastal trail with a guide. Used as a subtle background behind text.",
  },

  sightseeing: {
    src: "",
    alt: "Sintra + Cabo da Roca sightseeing tour",
    placeholder: true,
    brief:
      "Land Rover on a Sintra road, Sintra town view, or a wine-cellar tasting scene. Used as a subtle background.",
  },

  reviews: {
    src: "",
    alt: "Coastal landscape near Guincho",
    placeholder: true,
    brief:
      "Atmospheric coast / dunes shot — Guincho beach or cliff view. Used as a subtle background behind quotes.",
  },

  experience: {
    // Indexed by the experience slug. Extend Record when adding a new slug.
    "quad-bike-tours": {
      src: "",
      alt: "Quad Bike Tours",
      placeholder: true,
      brief: "Rider on a quad on the coastal trail. Action or ready-to-ride pose.",
    },
    "sea-kayak": {
      src: "",
      alt: "Sea Kayak",
      placeholder: true,
      brief: "Kayakers in a cove along the Atlantic coast near Guincho.",
    },
    "jeep-sintra-tour": {
      src: "",
      alt: "Jeep Sintra Tour",
      placeholder: true,
      brief:
        "Land Rover on the road with Sintra behind, or wine cellar tasting scene.",
    },
    "mountain-bike": {
      src: "",
      alt: "Mountain Bike",
      placeholder: true,
      brief: "Mountain biker on a forest / dune singletrack with ocean in view.",
    },
    hiking: {
      src: "",
      alt: "Hiking",
      placeholder: true,
      brief:
        "Small group hiking coastal cliffs or Sintra hills with a guide — the calm alternative.",
    },
    buggies: {
      src: "",
      alt: "Buggies",
      placeholder: true,
      brief: "Buggy on a dune or coastal trail. Two-seat side-by-side visible.",
    },
  },

  arlindo: {
    src: "",
    alt: "Arlindo — owner and lead guide, Guincho Adventours",
    placeholder: true,
    brief:
      "Working portrait of Arlindo — at the office in Areia, next to a quad, or on the trail. Portrait crop (4:5).",
  },
};
