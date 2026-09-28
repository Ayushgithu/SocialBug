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
    full: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575700/sb-logo-full.png",
    iconDark: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575700/sb-icon-dark.png",
  },

  ogImage: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/og-image.png",

  founders: {
    divya: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575047/divya-chhiroliya.jpg",
    shivam: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575047/shivam-chhirolya.jpg",
  },

  creatorPosts: [
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-01.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-02.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-03.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-04.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-05.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-06.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-07.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-08.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-09.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-10.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-11.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-12.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-13.webp",
    "https://res.cloudinary.com/q00g4kki/image/upload/v1790574954/post-14.webp",
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
      myntra: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575782/myntra-cover.webp",
      flipkart: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575797/flipkart-cover.webp",
      amazonPrime: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575764/amazon-prime.webp",
      latentforce: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575785/latentforce-cover.webp",
      boatSnapdragon: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575780/boat-snapdragon-cover.webp",
      boatSlazer: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575765/boat-slazer-cover.webp",
      supertails: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575786/supertails-cover.webp",
      suzlon: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575775/suzlon-cover.webp",
      hkvitals: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575796/hkvitals-cover.webp",
      coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575779/coinswitch-cover.webp",
      nebius: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575783/nebius-cover.webp",
    },
    bodies: {
      myntra: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575795/supertails-body.webp",
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