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
// white images
  partners: {
    amd: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593103/amd_white.png",
    aurm: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593104/auram_white.png",
    blackberrys: "https://res.cloudinary.com/q00g4kki/image/upload/v1790589742/blueberrys.png",
    cleartrip: "https://res.cloudinary.com/q00g4kki/image/upload/v1790589744/cleantrip.png",
    coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593093/coinswitch_white.png",
    duroflex: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-duroflex.png",
    flipkartGiftcard: "https://res.cloudinary.com/q00g4kki/image/upload/v1790595913/a2bf2c92-4967-4710-8d2f-863363cecf0b.png",
    geeksforgeeks: "https://res.cloudinary.com/q00g4kki/image/upload/v1790589752/gfg.png",
    gritzo: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-gritzo.png",
    haabuild: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593098/haabuild_white.png",
    kurkure: "https://res.cloudinary.com/q00g4kki/image/upload/v1790588689/a807ca65-4103-48ad-8d42-54557ec62c18.png",
    latentforceAi: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593099/latent_white.png",
    lays: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-lays.png",
    myntra: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593100/myntra_white.png",
    nebius: "https://res.cloudinary.com/q00g4kki/image/upload/v1790598716/04cdcfa8-9e98-40cf-9604-661d56d4c2be.png",
    primeVideo: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593098/prime_video_white.avif",
    supertails: "https://res.cloudinary.com/q00g4kki/image/upload/v1790593103/supertails_white.png",
    vivo: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-vivo.png",
    xiaomi: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-xiaomi.png",
    boat:"https://res.cloudinary.com/q00g4kki/image/upload/v1790595521/da06ea9f-5c1f-4e92-a4e0-dcc53380afca.png",
    suzlon:"https://res.cloudinary.com/q00g4kki/image/upload/v1790664269/ee09fb9c-989e-4d59-b3ef-2027a405bf81.png",
    zeiss: "https://res.cloudinary.com/q00g4kki/image/upload/PLACEHOLDER/partners-zeiss.png",
    hkvital :"https://res.cloudinary.com/q00g4kki/image/upload/v1790661833/bba2fb13-a2e8-465c-a33b-da036346f744.png"
  },
  // dark images
  partners_dark: {
    amd: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590598/amdd.png",
    aurm: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590599/auram.png",
    blackberrys: "https://res.cloudinary.com/q00g4kki/image/upload/v1790659888/9e7a5bf6-6bb7-48ec-b248-f6b3f6613e0b.png",
    cleartrip: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590604/cleantrip.png",
    coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590604/coinswitch.png",
    duroflex: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590607/duraflex.png",
    flipkartGiftcard: "https://res.cloudinary.com/q00g4kki/image/upload/v1790595959/2e312cec-bdfb-4fd7-a9dc-547b7a7274b7.png",
    geeksforgeeks: "https://res.cloudinary.com/q00g4kki/image/upload/v1790597217/358e6143-1beb-40dc-9274-dc30ebbc2351.png",
    gritzo: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590586/gritzo.png",
    haabuild: "https://res.cloudinary.com/q00g4kki/image/upload/v1790659735/920541c3-d1e6-4133-b254-489d542e1462.png",
    kurkure: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590592/kurkure.png",
    latentforceAi: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590589/latent.png",
    lays: "https://res.cloudinary.com/q00g4kki/image/upload/v1790596369/lays.png",
    myntra: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590591/myntra.png",
    nebius: "https://res.cloudinary.com/q00g4kki/image/upload/v1790598610/e2ff8e5b-54a0-4ec6-a226-94ac3bada737.png",
    primeVideo: "https://res.cloudinary.com/q00g4kki/image/upload/v1790589683/prime-video.png",
    supertails: "https://res.cloudinary.com/q00g4kki/image/upload/v1790590595/supertails.png",
    vivo: "https://res.cloudinary.com/q00g4kki/image/upload/v1790596598/b65ceaec-a59e-4108-90cf-124a62dad8fe.png",
    xiaomi: "https://res.cloudinary.com/q00g4kki/image/upload/v1790597701/794657d8-d50f-48ab-a08f-368f228f4663.png",
    boat:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596305/dd07baa5-5826-43a0-8677-1d20078f922e.png",
    zeiss: "https://res.cloudinary.com/q00g4kki/image/upload/v1790596562/a5743e62-b0a1-4102-91f0-e40fda241269.png",
    lava:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596867/c91e4e15-f663-4d80-8a06-b838ca289784.png",
    lemonn:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596862/0215f241-5df2-4b75-a56f-2da03dcc6ac1.png",
    pocketFM:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596847/00b04efa-1f4b-4d89-85e1-fb4c30bf4e49.png",
    samsung:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596837/b89ea0b1-8a3d-48a3-8c41-782f9e3cdef4.png",
    chemistAtplay:"https://res.cloudinary.com/q00g4kki/image/upload/v1790659566/e0fd8fc0-c2da-4e22-a44c-aa564a0fe025.png",
    razorPay:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596815/2c9338a7-0bda-43ef-b887-4ec810e87e46.png",
    pinLab:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596802/eae6ced6-c472-4ee9-a8e2-2b9f0269f3ea.png",
    lensKart:"https://res.cloudinary.com/q00g4kki/image/upload/v1790596774/adbde0f6-65e7-4c45-b55e-bc0c8f76f7f1.png",
    hkvital:"https://res.cloudinary.com/q00g4kki/image/upload/v1790661919/9e21f031-fdcc-4a63-87d0-040a91c94753.png",
    suzlon:"https://res.cloudinary.com/q00g4kki/image/upload/v1790664506/b3d9c696-9699-4768-9629-f59fd312d209.png"
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
      suzlon: "https://res.cloudinary.com/q00g4kki/image/upload/v1790665505/58337bac-8221-4262-a7c2-13cac0e5f9d6.png",
      hkvitals: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575796/hkvitals-cover.webp",
      coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575779/coinswitch-cover.webp",
      nebius: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575783/nebius-cover.webp",
    },
    bodies: {
      myntra: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575778/myntra-body.webp",
      flipkart: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575793/flipkart-body.webp",
      amazonPrime: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575787/amazon-prime-body.webp",
      latentforce: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575792/latentforce-body.webp",
      boatSnapdragon: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575777/boat-snapdragon-body.webp",
      boatSlazer: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575789/boat-slazer-body.webp",
      supertails: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575795/supertails-body.webp",
      suzlon: "https://res.cloudinary.com/q00g4kki/image/upload/v1790665505/58337bac-8221-4262-a7c2-13cac0e5f9d6.png",
      hkvitals: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575790/hkvitals-body.webp",
      coinswitch: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575791/coinswitch-body.webp",
      nebius: "https://res.cloudinary.com/q00g4kki/image/upload/v1790575794/nebius-body.webp",
    },
    suzlonVideo: "https://res.cloudinary.com/q00g4kki/video/upload/v1790574782/suzlon-video.mp4",
  },
} as const;