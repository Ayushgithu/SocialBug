/**
 * Central place for EVERY Cloudinary URL used on the site.
 *
 * - Real links are already filled in (Flipkart cover, Suzlon video).
 * - Every value containing "PLACEHOLDER" is still to be replaced: upload the
 *   file to Cloudinary, then paste its full URL over the placeholder string.
 * - Nothing else in the code needs to change — components and lib/data.ts
 *   read from this object.
 *
 * (Favicons app/icon.png, app/apple-icon.png, app/favicon.ico must stay as
 * local files — Next.js only picks those up from the app/ folder.)
 */
export const CLD = {
  logo: {
    full: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/logo-sb-logo-full.png",
    iconDark: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/logo-sb-icon-dark.png",
  },

  ogImage: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/og-image.png",

  founders: {
    divya: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/founders-divya-chhiroliya.jpeg",
    shivam: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/founders-shivam-chhirolya.jpeg",
  },

  creatorPosts: [
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-01.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-02.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-03.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-04.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-05.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-06.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-07.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-08.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-09.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-10.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-11.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-12.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-13.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/creator-posts-post-14.webp",
  ],

  partners: {
    amd: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-amd.png",
    aurm: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-aurm.png",
    blackberrys: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-blackberrys.png",
    cleartrip: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-cleartrip.png",
    coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-coinswitch.png",
    duroflex: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-duroflex.png",
    flipkartGiftcard: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-flipkart-giftcard.png",
    geeksforgeeks: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-geeksforgeeks.png",
    gritzo: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-gritzo.png",
    haabuild: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-haabuild.png",
    kurkure: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-kurkure.png",
    latentforceAi: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-latentforce-ai.png",
    lays: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-lays.png",
    myntra: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-myntra.png",
    nebius: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-nebius.png",
    primeVideo: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-prime-video.png",
    supertails: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-supertails.png",
    vivo: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-vivo.png",
    xiaomi: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-xiaomi.png",
    zeiss: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-zeiss.png",
  },

  work: {
    covers: {
      myntra: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-myntra-cover.webp",
      flipkart: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575797/flipkart-cover.webp",
      amazonPrime: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-amazon-prime.webp",
      latentforce: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-latentforce-cover.webp",
      boatSnapdragon: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-boat-snapdragon-cover.webp",
      boatSlazer: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-boat-slazer-cover.webp",
      supertails: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-supertails-cover.webp",
      suzlon: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-suzlon-cover.webp",
      hkvitals: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-hkvitals-cover.webp",
      coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-coinswitch-cover.webp",
      nebius: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-nebius-cover.webp",
    },
    bodies: {
      myntra: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-myntra-body.webp",
      flipkart: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-flipkart-body.webp",
      amazonPrime: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-amazon-prime-body.webp",
      latentforce: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-latentforce-body.webp",
      boatSnapdragon: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-boat-snapdragon-body.webp",
      boatSlazer: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-boat-slazer-body.webp",
      supertails: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-supertails-body.webp",
      suzlon: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-suzlon-body.webp",
      hkvitals: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-hkvitals-body.webp",
      coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-coinswitch-body.webp",
      nebius: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/work-details-nebius-body.webp",
    },
    suzlonVideo: "https://res.cloudinary.com/q00g4kki/video/upload/v1790574782/suzlon-video.mp4",
  },
} as const;