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
    alt: "Horseback rider on the Moorish Castle parapet in Sintra, misty hills sweeping down to the coast",
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
      alt: "Fleet of Land Rover Defenders — including the zebra-print safari — on a Sintra staging area",
    },
    "mountain-bike": {
      src: "/photos/mountain-bike.jpg",
      alt: "Guided mountain-bike group stopped at a coastal lighthouse with the Atlantic behind",
    },
    hiking: {
      src: "/photos/hiking.jpg",
      alt: "Small group hiking a coastal trail with the Atlantic behind",
    },
    buggies: {
      src: "/photos/buggies.jpg",
      alt: "Two riders celebrating in a green Guincho Adventours buggy at the coast",
    },
  },

  arlindo: {
    src: "/photos/arlindo.jpg",
    alt: "Arlindo — owner and lead guide, on the trail in a Guincho Adventours shirt",
  },
};
