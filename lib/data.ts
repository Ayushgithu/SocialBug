import { CLD } from "@/lib/cloudinary";

// Single source of truth for every outbound contact/social link on the
// site, update here and it's correct everywhere (navbar, footer, mobile
// menu, contact page, email templates).
export const socialLinks = {
  instagram: "https://www.instagram.com/shivam_chhirolya_97/",
  linkedinCompany: "https://www.linkedin.com/company/socialbugmedia/",
  linkedinShivam: "https://www.linkedin.com/in/shivam-chhirolya/",
  email: "shivam@socialbugmedia.in",
  phone: "+91 88175 58400",
  address: "Raipura, Dist. Panna, MP 488443",
  domain: "socialbugmedia.in",
  siteUrl: "https://socialbugmedia.in",
};

export const navLinks = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "info" },
  { label: "Services", href: "/services", icon: "layers" },
  { label: "Work", href: "/case-studies", icon: "briefcase" },
  { label: "Testimonials", href: "/testimonials", icon: "star" },
  { label: "Contact", href: "/contact", icon: "mail" },
];

// Footer-only, legal / support pages that don't belong in the main navbar.
export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy", icon: "shield" },
  { label: "Terms & Conditions", href: "/terms-and-conditions", icon: "file" },
  { label: "FAQ", href: "/faq", icon: "help" },
];

// Shown directly in the desktop navbar. Contact lives in the CTA button,
// so it is intentionally not repeated as a nav item.
export const primaryNavLinks = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "info" },
  { label: "Services", href: "/services", icon: "layers" },
  { label: "Work", href: "/case-studies", icon: "briefcase" },
];


// Rotating accent palette used to give each case study / service its own
// distinct identity color across the Work and Services detail pages
// (cards, badges, headings, glows). `on` is the text color that reads
// well directly on top of `hex` (used for solid-fill badges/pills).
export const accentPalette = [
  { name: "orange", hex: "#fc842e", soft: "rgba(252,132,46,0.14)", ring: "rgba(252,132,46,0.35)", on: "#0a0a0a" },
  { name: "pink", hex: "#ef2f7a", soft: "rgba(239,47,122,0.14)", ring: "rgba(239,47,122,0.35)", on: "#ffffff" },
  { name: "lime", hex: "#c7e62e", soft: "rgba(199,230,46,0.16)", ring: "rgba(199,230,46,0.4)", on: "#0a0a0a" },
  { name: "blue", hex: "#3fa9ff", soft: "rgba(63,169,255,0.14)", ring: "rgba(63,169,255,0.35)", on: "#0a0a0a" },
  { name: "purple", hex: "#a855f7", soft: "rgba(168,85,247,0.14)", ring: "rgba(168,85,247,0.35)", on: "#ffffff" },
  { name: "teal", hex: "#1fc9b7", soft: "rgba(31,201,183,0.16)", ring: "rgba(31,201,183,0.4)", on: "#0a0a0a" },
] as const;

export function accentFor(index: number) {
  return accentPalette[((index % accentPalette.length) + accentPalette.length) % accentPalette.length];
}

export const founders = [
  {
    name: "Mansi Gupta",
    role: "Founder",
    chips: ["Founder", "SocialBug Media"],
    bio: "Mansi is the founder of SocialBug Media. She built the agency around one belief, good content builds great brands, and leads the vision, client relationships and creative standards behind every campaign we run.",
    initials: "MG",
    accent: "pink" as const,
    photo: CLD.founders.divya,
    linkedin: "https://www.linkedin.com/in/mansi-gupta",
    showLinkedin: false,
  },
  {
    name: "Shivam Chhirolya",
    role: "Co-Founder",
    chips: ["Co-Founder", "Ex-Qualcomm", "Ex-ISRO", "IISc Bangalore"],
    bio: "Shivam is an AI engineer turned marketer with a 200K+ LinkedIn following. Ex-Qualcomm and Ex-ISRO, an IISc Bangalore graduate, he has been featured at Times Square NY, on Favikon and by Ms. Isha Ambani. He built the 1000+ creator network that powers every SocialBug campaign.",
    initials: "SC",
    accent: "lime" as const,
    photo: CLD.founders.shivam,
    linkedin: "https://www.linkedin.com/in/shivam-chhirolya",
    showLinkedin: true,
  },
];

// NOTE: only the two founders exist right now, the wider fictional
// "teamGrid" (Priya Menon, Kabir Ahluwalia, etc.) has been removed.
// If real team members join later, re-add entries here in the same
// shape: { name, role, initials, accent }.
export const teamGrid: {
  name: string;
  role: string;
  initials: string;
  accent: "pink" | "orange" | "lime" | "blue" | "purple";
}[] = [];

export const services = [
  {
    slug: "linkedin-x-creator-campaigns",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
    number: "01",
    title: "LinkedIn & X Creator Campaigns",
    short: "Creator-led campaigns built to grow awareness and reach on LinkedIn and X.",
    what: "Creator-led campaigns to build awareness, drive engagement, and reach the right audience on LinkedIn and X, from KOL cohorts to founder-voice posts.",
    who: "Brands and founders who want real people, not ads, carrying their story across LinkedIn and X.",
    handle: "Creator selection, briefs, content review, a staggered posting calendar, and engagement monitoring across both platforms.",
    outcomes: "Qualified reach on the two platforms where B2B and tech audiences actually pay attention.",
    workflow: ["Discovery call", "Creator shortlist", "Briefs & creative direction", "Content review", "Staggered posting", "Reporting"],
    visual: "network",
  },
  {
    slug: "instagram-youtube-tech-fintech-campaigns",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80",
    number: "02",
    title: "Instagram/YT Tech & Fintech Campaigns",
    short: "High-impact Instagram and YouTube campaigns for tech, fintech and consumer brands.",
    what: "High-impact Instagram and YouTube campaigns for tech, fintech, and consumer brands, built to drive reach, engagement, and brand love.",
    who: "Tech and fintech brands that need a visual, high-production presence beyond LinkedIn and X.",
    handle: "Creator casting, video briefs, production coordination, and publishing across Reels, Shorts, and long-form YouTube.",
    outcomes: "Millions of views and a visual content library your brand can reuse across channels.",
    workflow: ["Brief intake", "Creator casting", "Concept & script", "Production", "Publish", "Reporting"],
    visual: "video",
  },
  {
    slug: "linkedin-founder-brand-amplification",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    number: "03",
    title: "LinkedIn Founder & Brand Page Amplification",
    short: "5,000+ likes, 500+ comments, and 500+ reposts on your brand or founder posts.",
    what: "Get 5,000+ likes, 500+ comments, and 500+ reposts on your brand page or founder posts through our creator and engagement network.",
    who: "Founders and brand pages that already post consistently but want reach that matches the effort.",
    handle: "Engagement network activation, comment quality checks, timing, and post-by-post amplification.",
    outcomes: "Posts that show up in more feeds because the first hour of engagement is real and fast.",
    workflow: ["Post review", "Amplification plan", "Network activation", "Live monitoring", "Wrap report"],
    visual: "graph",
  },
  {
    slug: "one-partner-all-platforms",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    number: "04",
    title: "One Partner. All Platforms.",
    short: "LinkedIn, X, Instagram, YouTube, founder branding, creator marketing, and meme marketing, all under one roof.",
    what: "One team running your presence across LinkedIn, X, Instagram, and YouTube, so every platform is planned together instead of split across separate vendors.",
    who: "Brands and founders who are tired of coordinating three different agencies for three different platforms and want one team accountable for all of it.",
    handle: "Cross-platform strategy, one shared content calendar, a single creative direction adapted per platform, and one point of contact for reporting.",
    outcomes: "One consistent voice everywhere your audience shows up, and one team to call when something needs to move fast.",
    workflow: ["Cross-platform audit", "Unified strategy", "Platform-specific adaptation", "Coordinated calendar", "Publish everywhere", "Single wrap report"],
    visual: "network",
  },
  {
    slug: "instagram-x-viral-amplification",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80",
    number: "05",
    title: "Millions of Views, Shares, Likes & Comments on Instagram & X",
    short: "Millions of views, shares, likes and comments, engineered, not hoped for.",
    what: "Drive millions of views, shares, likes, and comments on Instagram and X with our engagement network and distribution strategy.",
    who: "Brands with a launch moment or campaign that needs to travel further than their own following.",
    handle: "Distribution strategy, engagement network activation, and cross-platform amplification timed to the campaign.",
    outcomes: "Viral-range numbers without relying on luck, a distribution plan sits behind every push.",
    workflow: ["Campaign audit", "Distribution strategy", "Network activation", "Cross-platform push", "Reporting"],
    visual: "viral",
  },
  {
    slug: "product-hunt-launches",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    number: "06",
    title: "Product Hunt Launches",
    short: "End-to-end support for Product Hunt launches, from strategy to upvotes.",
    what: "End-to-end support for Product Hunt launches, from strategy and creator outreach to upvotes, comments, and visibility.",
    who: "Founders launching a new product or major feature publicly on Product Hunt.",
    handle: "Timing, positioning, hunter selection, asset creation, and community activation on launch day.",
    outcomes: "Top-of-page ranking potential, a spike in signups, and long-tail visibility.",
    workflow: ["Positioning", "Asset production", "Hunter outreach", "Community warm-up", "Launch day", "Post-launch push"],
    visual: "rocket",
  },
  {
    slug: "founder-personal-branding",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
    number: "07",
    title: "Founder & Personal Branding",
    short: "Build your personal brand and establish yourself as a thought leader.",
    what: "Build your personal brand and establish yourself as a thought leader with strategic content and creator amplification.",
    who: "Founders and operators who want their own name to carry as much weight as their company's.",
    handle: "Content strategy, ghostwriting support, posting cadence, and creator amplification on your own posts.",
    outcomes: "A recognizable voice in your category, thought leadership, credibility, and a growing network.",
    workflow: ["Voice & positioning", "Content calendar", "Draft & review", "Posting cadence", "Amplification", "Monthly review"],
    visual: "branding",
  },
  {
    slug: "meme-marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
    number: "08",
    title: "Meme Marketing",
    short: "Creative, relatable meme campaigns to make your brand more shareable.",
    what: "Creative and relatable meme campaigns to make your brand more discoverable and shareable across social platforms.",
    who: "Brands that want to be part of the internet's culture, not just advertise next to it.",
    handle: "Trend-spotting, meme concepting, brand-safe review, and distribution timed to relevance.",
    outcomes: "Shareable content that gets your brand talked about, not just seen.",
    workflow: ["Trend-spotting", "Concepting", "Brand-safe review", "Publish", "Track shares"],
    visual: "meme",
  },
];

export interface CaseStudy {
  slug: string;
  name: string;
  /** Short brand mark shown in cards. */
  logo: string;
  /** Real client logo image (from /partners) shown on the case-study detail page. */
  brandLogo?: string;
  brandLogoWhite:string;
  /** Campaign type line, e.g. "Ad Film + Pre-Buzz". */
  industry: string;
  /** Cover image. Omit to get the typographic fallback tile. */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** 9:16 "campaign in the wild" screenshot. Also used as the <video> poster when bodyVideo is set. */
  bodyImage?: string;
  /** Optional 9:16 video shown instead of a static bodyImage (same slot, same frame). */
  bodyVideo?: string;
  bodyCaption?: string;
  challenge: string;
  idea: string;
  /** Optional pull-quote inside The Idea. */
  ideaQuote?: string;
  executionIntro?: string[];
  /** Label + value pairs (used when the flow is a set of stages). */
  stages?: { label: string; value: string }[];
  /** Linear chain, rendered step → step. */
  flow?: string[];
  flowLabel?: string;
  executionNote?: string[];
  result?: { value: string; label: string };
  /** 3-up strip on cards. */
  stats?: { value: string; label: string }[];
  /** 4-up tiles on the detail page. */
  metrics?: { label: string; value: string }[];
  quote?: string;
  author?: string;
  takeaway: string;
  slugStatus:boolean

}

// Case studies shown on the home page (first 3) and /case-studies.
// Copy comes from the SocialBug case-study deck; keep it word-for-word.
export const caseStudies: CaseStudy[] = [
  {
    slug: "myntra-friendshipday",
    brandLogo: CLD.partners_dark.myntra,
    brandLogoWhite: CLD.partners.myntra,
    slugStatus: true,
    result: { value: "Highly", label: "Shareable" },
    stats: [
      { value: "Print", label: "Format" },
      { value: "Wishlist", label: "Feature Tie-in" },
      { value: "LinkedIn", label: "Amplification" },
    ],
    metrics: [
      { label: "Format", value: "Editorial-style Print" },
      { label: "Feature Tie-in", value: "Myntra Wishlist" },
      { label: "Amplification", value: "LinkedIn" },
      { label: "Occasion", value: "Friendship Day" },
    ],
    quote:
      "Every line felt like it came straight out of a friends' WhatsApp group.",
    author: "Marketer reaction, LinkedIn",
    name: "Myntra",
    logo: "M",
    industry: "Friendship Day Campaign",
    image: CLD.work.covers.myntra,
    imageWidth: 1036,
    imageHeight: 1263,
    bodyImage: CLD.work.bodies.myntra,
    bodyCaption:
      "Marketers and founders calling out the campaign's insight as instantly relatable.",
    challenge:
      "Make a Friendship Day communication feel culturally familiar rather than like another predictable festive ad.",
    idea:
      "We built the campaign around the ridiculous but relatable things friends do together, from travelling to starting businesses and even getting matching tattoos.",
    executionIntro: [
      "A print-led creative brought these friendship behaviours to life in a playful format.",
      "The idea was then taken to social, allowing the print execution to travel beyond its original medium.",
    ],
    flowLabel: "Campaign flow",
    flow: [
      "Friendship Insight",
      "Print Creative",
      "Social Distribution",
      "Conversation",
    ],
    takeaway:
      "The strongest festive ideas often start with something people already do.",
  },

  {
    slug: "flipkart",
    brandLogo: CLD.partners_dark.flipkartGiftcard,
    brandLogoWhite: CLD.partners.flipkartGiftcard,
    slugStatus: true,
    result: { value: "3.9M", label: "Impressions" },
    stats: [
      { value: "3.9M", label: "Impressions" },
      { value: "52", label: "Creators" },
      { value: "30.3K", label: "Likes" },
    ],
    metrics: [
      { label: "Impressions", value: "3.9M" },
      { label: "Creators", value: "52" },
      { label: "Likes", value: "30.3K" },
      { label: "Platform", value: "LinkedIn" },
    ],
    quote:
      "Scale without losing the human voice, that was the whole brief, and they landed it.",
    author: "Brand Marketing, Flipkart",
    name: "Flipkart",
    logo: "F",
    industry: "Gift Card Campaign",
    image: CLD.work.covers.flipkart,
    imageWidth: 1179,
    imageHeight: 2556,
    bodyImage: CLD.work.bodies.flipkart,
    bodyCaption:
      "Real LinkedIn posts from HR and marketing voices, reacting to #FlipkartGiftCards.",
    challenge:
      "Make a functional product like a gift card feel relevant and relatable.",
    idea:
      "We centred the communication around one very real gifting problem:",
    ideaQuote:
      "What do I gift someone who already has everything?",
    executionIntro: [
      "Instead of making the communication product-heavy, the campaign started with the consumer problem and naturally introduced the gift card as the solution.",
    ],
    flowLabel: "Campaign flow",
    flow: [
      "Gifting Problem",
      "Relatable Situation",
      "Gift Card",
      "Social Communication",
      "Distribution",
    ],
    takeaway:
      "Sometimes the best product story starts with the problem, not the product.",
  },

  {
    slug: "amazon-prime-video",
    brandLogo: CLD.partners_dark.primeVideo,
    brandLogoWhite: CLD.partners.primeVideo,
    slugStatus: true,
    result: { value: "Launch-Week", label: "Buzz" },
    stats: [
      { value: "OOH", label: "Format" },
      { value: "Comedy", label: "Genre" },
      { value: "Jul 24", label: "Release" },
    ],
    metrics: [
      { label: "Format", value: "Outdoor + Social" },
      { label: "Genre", value: "Comedy Series" },
      { label: "Release", value: "July 24" },
      { label: "Platform", value: "Prime Video" },
    ],
    quote:
      "It read like a meme first and an ad second, which is exactly why people shared it.",
    author: "Creative Team, SocialBug Media",
    name: "Amazon Prime",
    logo: "P",
    industry: "Everyday Value × Social Content",
    image: CLD.work.covers.amazonPrime,
    imageWidth: 1108,
    imageHeight: 1123,
    bodyImage: CLD.work.bodies.amazonPrime,
    challenge:
      "Communicate the value of Prime without turning the content into a list of features.",
    idea:
      "We approached Prime through everyday consumer behaviour, focusing on the moments where the service becomes useful in real life.",
    flow: [
      "Consumer Moment",
      "Prime Benefit",
      "Relatable Content",
      "Social Distribution",
    ],
    executionNote: [
      "The focus was on making the benefit instantly understandable rather than over-explaining the product.",
    ],
    takeaway:
      "People don’t remember features. They remember how a product fits into their life.",
  },

  {
    slug: "latentforce",
    brandLogo: CLD.partners.latentforceAi,
    brandLogoWhite: CLD.partners.latentforceAi,
    slugStatus: true,
    result: { value: "20K", label: "Likes" },
    stats: [
      { value: "20K", label: "Likes" },
      { value: "15", label: "Creators" },
      { value: "1.2K", label: "Comments" },
    ],
    metrics: [
      { label: "Likes", value: "20K" },
      { label: "Creators", value: "15" },
      { label: "Comments", value: "1.2K" },
      { label: "Audience", value: "Technical" },
    ],
    quote:
      "The comments were engineers arguing about the product. That's the win.",
    author: "Founding Team, LatentForce",
    name: "Latent Force AI",
    logo: "L",
    industry: "AI × Social Storytelling",
    image: CLD.work.covers.latentforce,
    imageWidth: 964,
    imageHeight: 1270,
    bodyImage: CLD.work.bodies.latentforce,
    bodyCaption:
      "AI engineers and founders debating Latent Force in the comments, unprompted.",
    challenge:
      "AI products can quickly become difficult to communicate when the messaging gets buried under technical language.",
    idea:
      "Turn the technology story into something the audience could understand without needing a technical background.",
    flow: [
      "Technology Insight",
      "Simplified Narrative",
      "Creative Content",
      "Social Distribution",
    ],
    executionNote: [
      "The communication focused on the human relevance of AI, rather than simply talking about the technology itself.",
    ],
    takeaway:
      "Complex technology deserves simple storytelling.",
  },

  {
    slug: "boat-snapdragon-campaign",
    brandLogo: CLD.partners.boat,
    brandLogoWhite: CLD.partners.boat,
    slugStatus: true,
    result: { value: "1.2M", label: "Reach" },
    stats: [
      { value: "1.2M", label: "Reach" },
      { value: "500+", label: "Live Attendees" },
      { value: "20+", label: "Media Mentions" },
    ],
    metrics: [
      { label: "Reach", value: "1.2M" },
      { label: "Live Attendees", value: "500+" },
      { label: "Media Mentions", value: "20+" },
      { label: "Platform", value: "boAt" },
    ],
    quote:
      "The panel gave the launch a point of view instead of just a press release.",
    author: "Brand Team, boAt",
    name: "boAt × Snapdragon",
    logo: "B",
    industry: "Technology × Product Story",
    image: CLD.work.covers.boatSnapdragon,
    imageWidth: 768,
    imageHeight: 1376,
    bodyImage: CLD.work.bodies.boatSnapdragon,
    challenge:
      "Make technical performance feel interesting to a social audience.",
    idea:
      "Instead of treating technology specifications as the story, we connected product performance with the way people actually use the product.",
    flow: [
      "Product Technology",
      "Performance Benefit",
      "Consumer Context",
      "Creative Content",
      "Distribution",
    ],
    executionNote: [
      "The campaign translated the technology story into a more accessible consumer narrative.",
    ],
    takeaway:
      "Specs tell you what a product has. Stories tell you why you should care.",
  },

  {
    slug: "boat-slazer-grooming",
    brandLogo: CLD.partners.boat,
    brandLogoWhite: CLD.partners.boat,
    slugStatus: true,
    result: { value: "2.8M", label: "Reach" },
    stats: [
      { value: "2.8M", label: "Reach" },
      { value: "64K", label: "Likes" },
      { value: "12K", label: "Saves" },
    ],
    metrics: [
      { label: "Reach", value: "2.8M" },
      { label: "Likes", value: "64K" },
      { label: "Saves", value: "12K" },
      { label: "Platform", value: "boAt Lifestyle" },
    ],
    quote: "It stood out on the shelf and on the feed.",
    author: "Brand Team, boAt Lifestyle",
    name: "boAt Trimmer",
    logo: "B",
    industry: "Grooming × Relatable Content",
    image: CLD.work.covers.boatSlazer,
    imageWidth: 848,
    imageHeight: 1264,
    bodyImage: CLD.work.bodies.boatSlazer,
    challenge:
      "Make a grooming product feel like part of everyday culture rather than another product advertisement.",
    idea:
      "Start with the grooming behaviour people already recognise and build the product into that moment.",
    flow: [
      "Everyday Grooming Insight",
      "Relatable Situation",
      "Product Introduction",
      "Social Content",
      "Distribution",
    ],
    executionNote: [
      "The communication kept the product at the centre while making the context feel native to social media.",
    ],
    takeaway:
      "A product becomes more memorable when people recognise themselves in the situation.",
  },

  {
    slug: "supertails",
    brandLogo: CLD.partners.supertails,
    brandLogoWhite: CLD.partners.supertails,
    slugStatus: true,
    name: "Supertails",
    logo: "S",
    industry: "Pet Parents × Emotional Storytelling",
    stats: [
      { value: "1.2M", label: "Views" },
      { value: "30K", label: "Likes" },
      { value: "2K", label: "Comments" },
    ],
    metrics: [
      { label: "Views", value: "1.2M" },
      { label: "Likes", value: "30K" },
      { label: "Comments", value: "2K" },
      { label: "Platform", value: "Supertails" },
    ],
    image: CLD.work.covers.supertails,
    imageWidth: 848,
    imageHeight: 1264,
    bodyImage: CLD.work.bodies.supertails,
    challenge:
      "Talk about pet care without making the communication feel like a conventional pet-care advertisement.",
    idea:
      "We approached the category through the relationship between pets and their humans.",
    flow: [
      "Pet-Parent Insight",
      "Emotional Moment",
      "Relatable Story",
      "Brand Integration",
      "Social Distribution",
    ],
    executionNote: [
      "The narrative focused on the everyday emotional connection that makes people see pets as family.",
    ],
    takeaway:
      "When the audience feels the story before they notice the brand, the communication becomes more natural.",
  },

  {
    slug: "suzlon",
    brandLogo: CLD.partners.suzlon,
    brandLogoWhite: CLD.partners.suzlon,
    slugStatus: true,
    name: "Suzlon",
    logo: "S",
    industry: "Sustainability × Simple Storytelling",
    stats: [
      { value: "500K", label: "Reach" },
      { value: "12K", label: "Likes" },
      { value: "3K", label: "Shares" },
    ],
     metrics: [
      { label: "Reach", value: "500K" },
      { label: "Likes", value: "12K" },
      { label: "Shares", value: "3K" },
      { label: "Platform", value: "Suzlon" },
    ],
    image: CLD.work.covers.suzlon,
    imageWidth: 1080,
    imageHeight: 1920,
    bodyImage: CLD.work.bodies.suzlon,
    bodyVideo: CLD.work.suzlonVideo,
    bodyCaption:
      "The Suzlon AI campaign, translating renewable-energy work into content for a wider audience.",
    challenge:
      "Make a large sustainability story understandable and relevant to everyday audiences.",
    idea:
      "Break down the bigger sustainability narrative into simple, human and social-first communication.",
    flow: [
      "Sustainability Insight",
      "Human Context",
      "Simplified Story",
      "Digital Content",
      "Awareness",
    ],
    executionNote: [
      "Rather than overwhelming the audience with industry terminology, the communication focused on making the subject easier to understand.",
    ],
    takeaway:
      "Big subjects don’t always need big words.",
  },

  {
    slug: "hk-vitals-skin-radiance",
    brandLogo: CLD.partners.hkvital,
    brandLogoWhite: CLD.partners.hkvital,
    slugStatus: true,
    result: { value: "2.1M", label: "Reach" },
    stats: [
      { value: "2.1M", label: "Reach" },
      { value: "45K", label: "Likes" },
      { value: "6.5K", label: "Saves" },
    ],
    metrics: [
      { label: "Reach", value: "2.1M" },
      { label: "Likes", value: "45K" },
      { label: "Saves", value: "6.5K" },
      { label: "Platform", value: "HK Vitals" },
    ],
    quote:
      "It finally looked like something people would actually want on their table.",
    author: "Brand Team, HK Vitals",
    name: "HK Vitals",
    logo: "H",
    industry: "Health × Everyday Wellness",
    image: CLD.work.covers.hkvitals,
    imageWidth: 704,
    imageHeight: 1527,
    bodyImage: CLD.work.bodies.hkvitals,
    challenge:
      "Health communication can easily become clinical, repetitive or overly promotional.",
    idea:
      "Start with everyday wellness concerns that people already think about and turn them into accessible social content.",
    flow: [
      "Consumer Concern",
      "Relatable Insight",
      "Simple Explanation",
      "Product Integration",
      "Social Distribution",
    ],
    executionNote: [
      "The approach made the communication feel closer to an everyday conversation than a traditional health advertisement.",
    ],
    takeaway:
      "Make health information easier to understand, easier to relate to and easier to remember.",
  },

  {
    slug: "coinswitch-real-growth",
    brandLogo: CLD.partners.coinswitch,
    brandLogoWhite: CLD.partners.coinswitch,
    slugStatus: true,
    result: { value: "3.4M", label: "Views" },
    stats: [
      { value: "3.4M", label: "Views" },
      { value: "82K", label: "Likes" },
      { value: "1.1K", label: "Shares" },
    ],
    metrics: [
      { label: "Views", value: "3.4M" },
      { label: "Likes", value: "82K" },
      { label: "Shares", value: "1.1K" },
      { label: "Platform", value: "CoinSwitch" },
    ],
    quote:
      "Felt like a friend explaining charts, not an exchange selling them.",
    author: "Marketing Team, CoinSwitch",
    name: "CoinSwitch",
    logo: "C",
    industry: "Finance × Simplified Communication",
    image: CLD.work.covers.coinswitch,
    imageWidth: 704,
    imageHeight: 1209,
    bodyImage: CLD.work.bodies.coinswitch,
    challenge:
      "Financial and crypto topics can feel intimidating because of complicated terminology.",
    idea:
      "Take a complex financial conversation and translate it into a simpler social-first narrative.",
    flow: [
      "Complex Topic",
      "Consumer Question",
      "Simple Explanation",
      "Creative Content",
      "Distribution",
    ],
    executionNote: [
      "The campaign focused on reducing the distance between a complicated category and an everyday social audience.",
    ],
    takeaway:
      "If the audience needs a dictionary to understand the content, the content needs work.",
  },

  {
    slug: "nebius-ai-builder",
    brandLogo: CLD.partners.nebius,
    brandLogoWhite: CLD.partners.nebius,
    slugStatus: true,
    result: { value: "1.8K+", label: "Reach" },
    stats: [
      { value: "1.8K+", label: "Room Reach" },
      { value: "180+", label: "Signups" },
      { value: "40+", label: "Builders" },
    ],
    metrics: [
      { label: "Reach", value: "1.8K+" },
      { label: "Signups", value: "180+" },
      { label: "Builders Engaged", value: "40+" },
      { label: "Platform", value: "Nebius" },
    ],
    quote:
      "People signed up before they'd even sat back down.",
    author: "Program Team, Nebius",
    name: "Nebius",
    logo: "N",
    industry: "AI Infrastructure × Storytelling",
    image: CLD.work.covers.nebius,
    imageWidth: 1376,
    imageHeight: 768,
    bodyImage: CLD.work.bodies.nebius,
    challenge:
      "AI infrastructure is highly technical, making it difficult to communicate without losing the audience.",
    idea:
      "Instead of leading with technical terminology, we focused on the larger story of what AI infrastructure makes possible.",
    flow: [
      "Technology",
      "Context",
      "Simplified Narrative",
      "Digital Content",
      "Awareness",
    ],
    executionNote: [
      "The communication translated a technical category into a story that could work for a broader digital audience.",
    ],
    takeaway:
      "You don’t make technology interesting by making it more complicated.",
  },

  /*
  BlackBerry case study hidden for now. Delete this comment wrapper to bring it back.

  {
    slug: "blackberry",
    brandLogo: CLD.partners.blackberrys,
    name: "BlackBerry",
    logo: "B",
    industry: "Product × Brand Storytelling",
    challenge:
      "Build a product-led communication that feels relevant in a social-first environment.",
    idea:
      "Use the product story as the starting point, then build a creative narrative around its relevance to the audience.",
    flow: [
      "Product Insight",
      "Creative Concept",
      "Brand Story",
      "Social Content",
      "Distribution",
    ],
    executionNote: [
      "The approach put the product at the centre without letting the communication become a conventional product catalogue.",
    ],
    takeaway:
      "Product communication works better when there is an actual story around the product.",
  },
  */
];

// Closing section of the case-studies page.
export const campaignThinking = [
  { step: "Strategy", line: "Find something people already care about, and build a plan around it." },
  { step: "Idea", line: "Turn that behaviour, tension or observation into a creative thought." },
  { step: "Execution", line: "Build something people actually want to consume." },
  { step: "Distribution", line: "Put the idea in the right places and formats." },
  { step: "Impact", line: "Give people a reason to react, share and talk." },
];

export const testimonials = [
  {
    brand: "Flipkart",
    quote:
      "Honestly, kaafi easy experience raha. We’d share the idea, and SocialBug would actually understand where we were going with it.",
    category: "Creators",
    format: "quote",
    rating: 5,
  },

  {
    brand: "LatentForce",
    quote:
      "I wasn’t expecting much initially, but the team actually got our tone. That was probably the biggest win for us.",
    category: "SaaS",
    format: "social",
    rating: 5,
  },

  {
    brand: "Suzlon",
    quote:
      "Bhai, finally someone who doesn’t make everything sound like a LinkedIn post. The content actually felt like something a real person would say.",
    category: "Founders",
    format: "quote",
    rating: 5,
  },

  {
    brand: "Supertails",
    quote:
      "Loved working with the team. I could just say ‘yeh thoda off lag raha hai’ and they’d understand what I meant without making me explain everything.",
    category: "Creators",
    format: "voice",
    rating: 5,
  },

  {
    brand: "OFF/BEAT",
    quote:
      "Kaafi baar agencies ko brief dene ke baad lagta hai ki ab 10 baar follow-up karna padega. Here, they just understood what we were trying to do and took it forward.",
    category: "Founders",
    format: "quote",
    rating: 5,
  },

  {
    brand: "Network Creator",
    quote:
      "The first few ideas themselves made it clear that they had actually looked into our brand. It didn’t feel like the usual copy-paste social media stuff.",
    category: "Creators",
    format: "social",
    rating: 5,
  },

  {
    brand: "Myntra",
    quote:
      "SocialBug se kaam karne ka best part? Mujhe har cheez micromanage nahi karni padi. I could give them the thought, and they’d take it forward.",
    category: "Creators",
    format: "quote",
    rating: 5,
  },

  {
    brand: "Lenskart",
    quote:
      "Somewhere between ‘yeh idea hai’ and ‘haan, this actually works’, SocialBug figured out what we were trying to say. Really liked that.",
    category: "Creators",
    format: "voice",
    rating: 5,
  },

  {
    brand: "Vivo",
    quote:
      "I’ve worked with a few content teams before, and honestly, this felt much more like talking to actual people than talking to an agency.",
    category: "Creators",
    format: "social",
    rating: 5,
  },

  {
    brand: "Lay’s",
    quote:
      "Simple cheez hai, content boring nahi tha. And for me, that’s a pretty big compliment.",
    category: "Campaigns",
    format: "quote",
    rating: 5,
  },
];


export const networkCategories = [
  {
    label: "Founders",
    desc: "Building in public, sharing real traction and lessons.",
    detail: "Ideal when the story behind the product sells it better than a spec sheet, traction updates, launch diaries, and honest founder takes.",
  },
  {
    label: "Developers",
    desc: "Technical creators trusted by technical audiences.",
    detail: "Ideal for dev tools, APIs, and infra products, credibility with an audience that can smell a paid post from a mile away.",
  },
  {
    label: "Marketers",
    desc: "Growth and performance voices with engaged followings.",
    detail: "Ideal for growth, analytics, and martech products, voices already trusted for what actually moves numbers.",
  },
  {
    label: "SaaS Professionals",
    desc: "Operators who speak the language of your buyers.",
    detail: "Ideal for B2B SaaS, operators and buyers-turned-creators who talk in the same terms your prospects use.",
  },
  {
    label: "Product Builders",
    desc: "Makers documenting the craft of building products.",
    detail: "Ideal for design, no-code, and product-led tools, makers who show their process, not just the finished screenshot.",
  },
  {
    label: "Creators",
    desc: "Full-time creators across every major platform.",
    detail: "Ideal for consumer launches that need reach and polish, full-time creators who know how to make a product look good on camera.",
  },
  {
    label: "Tech Professionals",
    desc: "Engineers and leaders with credibility in tech circles.",
    detail: "Ideal for deep-tech and enterprise products, engineers and leaders whose opinion carries weight inside tech circles.",
  },
];

// Featured creators from the network. Follower/engagement figures are
// intentionally not published here, categories and focus only.
export const networkCreators = [
  {
    id: "anushka-rathod",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    name: "Anushka Rathod",
    handle: "@anushkarathod98",
    category: "Finance",
    accent: "pink" as const,
    bio: "Former investment banker breaking down stock markets, macro trends, and consumer business models in short visual explainers.",
  },
  {
    id: "revant-himatsingka",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    name: "Revant Himatsingka",
    handle: "@foodpharmer",
    category: "Journalist",
    accent: "orange" as const,
    bio: "Leads a consumer-awareness movement around food labels, hidden sugars, and packaged-food claims.",
  },
  {
    id: "dr-pal-manickam",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80",
    name: "Dr. Pal Manickam",
    handle: "@dr.pal.manickam",
    category: "Doctors",
    accent: "lime" as const,
    bio: "Gastroenterologist using humour and clean comedy to explain gut health and fasting science.",
  },
  {
    id: "dr-manan-vora",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80",
    name: "Dr. Manan Vora",
    handle: "@dr.mananvora",
    category: "Doctors",
    accent: "blue" as const,
    bio: "Orthopaedic surgeon and sports-medicine specialist debunking fitness myths and injury-rehab folklore.",
  },
  {
    id: "sonia-narang",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    name: "Sonia Narang",
    handle: "@sonianarangsdietclinics",
    category: "Founders",
    accent: "pink" as const,
    bio: "Dietitian focused on evidence-based hormonal health, PCOS protocols, and clinical nutrition.",
  },
  {
    id: "arjun-vaidya",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    name: "Arjun Vaidya",
    handle: "@abvaidya",
    category: "Startup",
    accent: "orange" as const,
    bio: "Founder turned venture builder sharing candid playbooks on scaling consumer brands and raising capital.",
  },
  {
    id: "chandralekha-mr",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    name: "Chandralekha MR",
    handle: "@financewizardcl",
    category: "HR",
    accent: "lime" as const,
    bio: "Simplifies portfolio allocation, mutual funds, and personal tax planning for young earners.",
  },
  {
    id: "rohan-sehgal",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80",
    name: "Rohan Sehgal",
    handle: "@rohansehgalofficial",
    category: "Marketing",
    accent: "blue" as const,
    bio: "Host and storyteller interviewing operators and distilling performance psychology into short films.",
  },
  {
    id: "awadhesh-kumar-singh",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
    name: "Awadhesh Kumar Singh",
    handle: "@greygold",
    category: "AI",
    accent: "purple" as const,
    bio: "Macro analyst decoding currency cycles, gold reserves, and historical economic turning points.",
  },
  {
    id: "aarti-samant",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    name: "Aarti Samant",
    handle: "@thesortedgirl",
    category: "Lifestyle",
    accent: "pink" as const,
    bio: "Helps working professionals declutter their digital lives and build calmer everyday systems.",
  },
  {
    id: "shankar-bhalla",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    name: "Shankar Bhalla",
    handle: "@shankar_unravelled",
    category: "Tech",
    accent: "orange" as const,
    bio: "Unravels the sociology behind consumer products, subcultures, and algorithmic trends.",
  },
];

// Engagement models shown as a comparison table on /services.

// Generic platform categories referenced descriptively (not sponsorships).

// Stylised placeholder wordmarks to round out the collaborations wall.



// Real client/partner logos, provided directly by the founders.
// Each PNG already has its own die-cut/shadow styling baked in, so
// these render as plain images, no extra card frame needed.
export const partnerLogos = [
  { name: "Prime Video", src: CLD.partners_dark.primeVideo },
  { name: "vivo", src: CLD.partners_dark.vivo },
  { name: "Lay's", src: CLD.partners_dark.lays },
  { name: "Xiaomi", src: CLD.partners_dark.xiaomi },
  { name: "HAABUILD", src: CLD.partners_dark.haabuild },
  { name: "CoinSwitch", src: CLD.partners_dark.coinswitch },
  { name: "Nebius", src: CLD.partners_dark.nebius },
  { name: "Flipkart Gift Card", src: CLD.partners_dark.flipkartGiftcard },
  { name: "Latent Force AI", src: CLD.partners_dark.latentforceAi },
  { name: "Myntra", src: CLD.partners_dark.myntra },
  { name: "Supertails", src: CLD.partners_dark.supertails },
  { name: "AMD", src: CLD.partners_dark.amd },
  { name: "Kurkure", src: CLD.partners_dark.kurkure },
  { name: "GeeksforGeeks", src: CLD.partners_dark.geeksforgeeks },
  { name: "Blackberrys", src: CLD.partners_dark.blackberrys },
  { name: "Duroflex", src: CLD.partners_dark.duroflex },
  { name: "Gritzo", src: CLD.partners_dark.gritzo },
  { name: "Cleartrip", src: CLD.partners_dark.cleartrip },
  { name: "AURM", src: CLD.partners_dark.aurm },
  { name: "Zeiss", src: CLD.partners_dark.zeiss },
  {name:"Lava",src:CLD.partners_dark.lava},
  {name:"Lemonn",src:CLD.partners_dark.lemonn},
  {name:"PocketFM",src:CLD.partners_dark.pocketFM},
  {name:"Samsung",src:CLD.partners_dark.samsung},
  {name:"Chemist At Play",src:CLD.partners_dark.chemistAtplay},
  {name:"Razor Pay",src:CLD.partners_dark.razorPay},
  {name:"Pin Lab",src:CLD.partners_dark.pinLab},
  {name:"Lens Kart",src:CLD.partners_dark.lensKart},
  {name:"Hk Vital",src:CLD.partners_dark.hkvital},
  {name:"Suzlon",src:CLD.partners_dark.suzlon},
  {name:"Boat",src:CLD.partners_dark.boat},


];