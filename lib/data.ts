export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Network", href: "/network" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Insights", href: "/insights" },
  { label: "Collaborations", href: "/collaborations" },
  { label: "Contact", href: "/contact" },
];

// Trimmed set shown directly in the desktop navbar — the rest live in the
// footer sitemap and the full-screen mobile menu.
export const primaryNavLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "Network", href: "/network" },
  { label: "Contact", href: "/contact" },
];

export const founders = [
  {
    name: "Rhea Kapoor",
    role: "Founder & CEO",
    bio: "Ten years deep in creator marketing before starting SocialBug — she still reads every campaign brief personally.",
    initials: "RK",
    accent: "pink" as const,
  },
  {
    name: "Devansh Rao",
    role: "Co-Founder & Head of Growth",
    bio: "Ex-growth lead at two SaaS unicorns. Obsessed with the data behind why a launch actually moves.",
    initials: "DR",
    accent: "lime" as const,
  },
];

export const teamGrid = [
  { name: "Priya Menon", role: "Creative Director", initials: "PM", accent: "orange" as const },
  { name: "Kabir Ahluwalia", role: "Influencer Sourcing Lead", initials: "KA", accent: "blue" as const },
  { name: "Simran Kaur", role: "Content Strategist", initials: "SK", accent: "pink" as const },
  { name: "Yusuf Sheikh", role: "Product Hunt Specialist", initials: "YS", accent: "purple" as const },
  { name: "Neha Iyer", role: "Community Lead", initials: "NI", accent: "lime" as const },
  { name: "Arjun Malhotra", role: "Analytics & Reporting", initials: "AM", accent: "orange" as const },
];

export const services = [
  {
    slug: "influencer-campaigns",
    number: "01",
    title: "Influencer Campaigns",
    short: "End-to-end creator campaigns built around your growth goals.",
    what: "Fully managed influencer campaigns — from creator shortlists to final reporting.",
    who: "SaaS companies and startups who want credible voices talking about their product.",
    handle: "Sourcing, briefing, negotiation, content approvals, posting schedules, and performance tracking.",
    outcomes: "Qualified reach, authentic content, and a repeatable creator pipeline.",
    workflow: ["Discovery call", "Creator shortlist", "Briefs & creative direction", "Content review", "Posting & amplification", "Reporting"],
    visual: "network",
  },
  {
    slug: "saas-growth-campaigns",
    number: "02",
    title: "SaaS Growth Campaigns",
    short: "Full-funnel campaigns designed for product-led growth.",
    what: "Multi-channel growth campaigns tuned for SaaS acquisition metrics.",
    who: "Founders and growth teams who need pipeline, not just impressions.",
    handle: "Channel strategy, creator + paid mix, landing experiences, and conversion tracking.",
    outcomes: "Lower CAC, more qualified signups, and compounding organic reach.",
    workflow: ["Funnel audit", "Channel mix", "Creative sprint", "Launch", "Optimize", "Scale"],
    visual: "graph",
  },
  {
    slug: "product-hunt-launches",
    number: "03",
    title: "Product Hunt Launches",
    short: "Launch-day domination, from timing to community push.",
    what: "Complete Product Hunt launch management — strategy to launch-day execution.",
    who: "Founders launching a new product or major feature publicly.",
    handle: "Timing, positioning, hunter selection, asset creation, and community activation.",
    outcomes: "Top-5 daily ranking potential, spikes in signups, and long-tail visibility.",
    workflow: ["Positioning", "Asset production", "Hunter outreach", "Community warm-up", "Launch day", "Post-launch push"],
    visual: "rocket",
  },
  {
    slug: "creator-sourcing",
    number: "04",
    title: "Creator Sourcing",
    short: "Access our curated network of 1000+ vetted creators.",
    what: "Precision-matched creator sourcing across tech, SaaS, and startup niches.",
    who: "Brands who already know what they want to say and need the right voices.",
    handle: "Vetting, audience quality checks, rate negotiation, and relationship management.",
    outcomes: "A shortlist of creators who actually match your audience and tone.",
    workflow: ["Brief intake", "Network search", "Vetting", "Shortlist", "Intro & negotiation", "Handoff"],
    visual: "network",
  },
  {
    slug: "content-creative",
    number: "05",
    title: "Content & Creative",
    short: "Scroll-stopping creative built for every platform.",
    what: "Creative direction and content production for campaigns and always-on brand content.",
    who: "Teams who need consistent, high-quality creative without an in-house studio.",
    handle: "Concepting, scripting, shot lists, editing, and platform-specific formatting.",
    outcomes: "A content library that performs across LinkedIn, X, YouTube, and Instagram.",
    workflow: ["Concept", "Script", "Production", "Edit", "Review", "Deliver"],
    visual: "cards",
  },
  {
    slug: "launch-strategy",
    number: "06",
    title: "Launch Strategy",
    short: "The strategic backbone behind every big moment.",
    what: "Go-to-market and launch strategy tailored to your category and timing.",
    who: "Founders planning a launch, relaunch, or major milestone announcement.",
    handle: "Market research, positioning, messaging architecture, and channel sequencing.",
    outcomes: "A clear, de-risked launch plan the whole team can execute against.",
    workflow: ["Research", "Positioning", "Messaging", "Channel plan", "Timeline", "Handoff"],
    visual: "board",
  },
  {
    slug: "community-activation",
    number: "07",
    title: "Community Activation",
    short: "Turn quiet audiences into loud, engaged communities.",
    what: "Community-first activation for launches, campaigns, and ongoing engagement.",
    who: "Brands with an audience that hasn't been mobilized yet.",
    handle: "Community mapping, seeding, engagement playbooks, and moderation support.",
    outcomes: "Higher engagement, organic advocacy, and a community that shows up on launch day.",
    workflow: ["Mapping", "Seeding", "Playbooks", "Activation", "Moderation", "Reporting"],
    visual: "waves",
  },
  {
    slug: "campaign-reporting",
    number: "08",
    title: "Campaign Reporting",
    short: "Clear data on what moved and what to do next.",
    what: "Transparent, real-time reporting across every campaign we run.",
    who: "Teams who need to prove ROI and plan the next move with confidence.",
    handle: "Tracking setup, live dashboards, mid-campaign insights, and final wrap reports.",
    outcomes: "Full visibility into reach, engagement, and conversion — no guesswork.",
    workflow: ["Tracking setup", "Baseline", "Live monitoring", "Mid-flight insights", "Final report", "Recommendations"],
    visual: "graph",
  },
];

export const caseStudies = [
  {
    slug: "flowstack",
    name: "FlowStack",
    industry: "SaaS · Workflow Automation",
    category: "SaaS",
    challenge: "Zero brand awareness ahead of a category-defining feature launch.",
    campaignType: "Influencer campaign + Product Hunt launch",
    strategy: "Built a 3-week momentum campaign combining 22 curated tech creators with a coordinated Product Hunt push.",
    execution: "Sourced creators from our SaaS + developer network, produced platform-native content, and orchestrated a synchronized launch day.",
    result: "+340% Reach",
    metrics: [
      { label: "Reach", value: "+340%" },
      { label: "Impressions", value: "1.2M+" },
      { label: "Engagement", value: "4.8x" },
      { label: "Product Hunt", value: "#2 Day" },
    ],
    quote: "SocialBug turned our launch into an actual event. The pipeline is still paying off.",
    author: "Co-founder, FlowStack",
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    industry: "Fintech · SaaS",
    category: "Product Launches",
    challenge: "A crowded fintech category with skeptical, hard-to-reach founders as the target audience.",
    campaignType: "Founder-led creator network + GTM strategy",
    strategy: "Activated a network of finance-focused creators and building-in-public founders to build early trust.",
    execution: "Ran a 6-week content series across LinkedIn and X, paired with a structured go-to-market rollout.",
    result: "1M+ Impressions",
    metrics: [
      { label: "Impressions", value: "1M+" },
      { label: "Signups", value: "+210%" },
      { label: "Engagement", value: "3.6x" },
      { label: "Creators", value: "18" },
    ],
    quote: "They understood our category better than most people inside our own team.",
    author: "Head of Growth, Ledgerly",
  },
  {
    slug: "orbitmail",
    name: "Orbitmail",
    industry: "Startup · Developer Tools",
    category: "Creator Campaigns",
    challenge: "A small team with no time or bandwidth to manage creator relationships in-house.",
    campaignType: "Fully managed influencer campaign",
    strategy: "Handled sourcing, content, and posting end-to-end while the founders focused on the product.",
    execution: "Coordinated 14 developer-focused creators across YouTube and X over an 8-week arc.",
    result: "4.8x Engagement",
    metrics: [
      { label: "Engagement", value: "4.8x" },
      { label: "Reach", value: "+190%" },
      { label: "New Users", value: "+12K" },
      { label: "Creators", value: "14" },
    ],
    quote: "Genuinely felt like an extension of our team, not an agency we hired.",
    author: "Founder, Orbitmail",
  },
];

export const testimonials = [
  {
    name: "Ritika Shah",
    role: "Founder, FlowStack",
    quote: "SocialBug didn't just find creators — they built us momentum we're still riding.",
    category: "Founders",
    format: "quote",
  },
  {
    name: "Dev Malhotra",
    role: "Head of Growth, Ledgerly",
    quote: "The most strategic influencer team we've worked with. Every creator felt intentional.",
    category: "SaaS",
    format: "social",
  },
  {
    name: "Ayaan Kapoor",
    role: "Founder, Orbitmail",
    quote: "Our Product Hunt launch hit #2 of the day because of how tightly they ran it.",
    category: "Product Launches",
    format: "quote",
  },
  {
    name: "Simran Kohli",
    role: "Marketing Lead, Nimbus",
    quote: "Fast, sharp, and internet-fluent. They speak the same language as our audience.",
    category: "SaaS",
    format: "voice",
  },
  {
    name: "Kabir Anand",
    role: "Creator Partner",
    quote: "Best brand brief I've ever received — clear, respectful of creative freedom.",
    category: "Creators",
    format: "social",
  },
  {
    name: "Meher Chawla",
    role: "Founder, Loopwise",
    quote: "They treated our launch like it was their own company. Rare to find.",
    category: "Founders",
    format: "quote",
  },
];

export const insights = [
  { slug: "influencer-marketing-for-saas", title: "Why Influencer Marketing Works Differently for SaaS", category: "SaaS Growth", readTime: "6 min" },
  { slug: "product-hunt-launch-checklist", title: "The Product Hunt Launch Checklist Nobody Gives You", category: "Product Hunt", readTime: "8 min" },
  { slug: "building-in-public-playbook", title: "The Building-in-Public Playbook for Early Founders", category: "Building in Public", readTime: "5 min" },
  { slug: "creator-economy-2026", title: "What's Actually Changing in the Creator Economy", category: "Creator Economy", readTime: "7 min" },
  { slug: "startup-launch-timing", title: "How to Time a Startup Launch for Maximum Noise", category: "Startup Launches", readTime: "4 min" },
  { slug: "finding-the-right-creators", title: "Finding Creators Who Actually Move Your Category", category: "Influencer Marketing", readTime: "6 min" },
];

export const networkCategories = [
  { label: "Founders", desc: "Building in public, sharing real traction and lessons." },
  { label: "Developers", desc: "Technical creators trusted by technical audiences." },
  { label: "Marketers", desc: "Growth and performance voices with engaged followings." },
  { label: "SaaS Professionals", desc: "Operators who speak the language of your buyers." },
  { label: "Product Builders", desc: "Makers documenting the craft of building products." },
  { label: "Creators", desc: "Full-time creators across every major platform." },
  { label: "Tech Professionals", desc: "Engineers and leaders with credibility in tech circles." },
];

export const networkCreators = [
  { name: "Ananya Verma", handle: "@ananyabuilds", category: "Founders", accent: "pink" as const },
  { name: "Rohan Deshpande", handle: "@rohan.ships", category: "SaaS Professionals", accent: "orange" as const },
  { name: "Kavya Nair", handle: "@kavyagrowth", category: "Marketers", accent: "lime" as const },
  { name: "Aditya Bhatt", handle: "@adityacodes", category: "Developers", accent: "blue" as const },
  { name: "Ishita Sharma", handle: "@ishita.makes", category: "Product Builders", accent: "purple" as const },
  { name: "Vikram Oberoi", handle: "@vikramtech", category: "Tech Professionals", accent: "pink" as const },
  { name: "Meera Pillai", handle: "@meeracreates", category: "Creators", accent: "orange" as const },
  { name: "Sahil Khanna", handle: "@sahil.saas", category: "SaaS Professionals", accent: "lime" as const },
];

// Engagement models shown as a comparison table on /services.
export const engagementTiers = [
  {
    name: "Launch Sprint",
    tagline: "One moment, done right.",
    price: "From $4,500",
    best: "Single Product Hunt launch or announcement",
    rows: {
      "Strategy call": "1 session",
      "Creator network access": "Curated shortlist",
      "Content direction": "Light touch",
      "Posting coordination": "Launch day only",
      "Reporting": "Post-launch summary",
      "Timeline": "2–3 weeks",
    },
  },
  {
    name: "Growth Retainer",
    tagline: "Ongoing momentum, monthly.",
    price: "From $9,500/mo",
    best: "SaaS teams running always-on campaigns",
    rows: {
      "Strategy call": "Bi-weekly",
      "Creator network access": "Full network",
      "Content direction": "Full creative direction",
      "Posting coordination": "Rolling calendar",
      "Reporting": "Live dashboard + monthly review",
      "Timeline": "3-month minimum",
    },
    highlight: true,
  },
  {
    name: "Full Managed",
    tagline: "We run growth like it's our own.",
    price: "Custom",
    best: "Funded startups scaling across channels",
    rows: {
      "Strategy call": "Weekly",
      "Creator network access": "Full network + priority intros",
      "Content direction": "Embedded creative team",
      "Posting coordination": "Daily",
      "Reporting": "Live dashboard + dedicated lead",
      "Timeline": "6-month minimum",
    },
  },
];

// Generic platform categories referenced descriptively (not sponsorships).
export const platformIcons = [
  "LinkedIn", "Instagram", "X / Twitter", "YouTube", "TikTok", "Threads",
  "Product Hunt", "Substack", "Discord", "Slack", "Reddit", "Pinterest",
  "Twitch", "Medium", "Spotify", "Telegram", "WhatsApp", "Snapchat",
  "GitHub", "Behance", "Dribbble", "Facebook", "Google", "Figma", "Notion",
];

// Stylised placeholder wordmarks to round out the collaborations wall.
const logoWords = [
  "Nova", "Orbit", "Flux", "Vertex", "Loop", "Pulse", "Drift", "Nexus",
  "Quartz", "Ember", "Halo", "Zenith", "Kite", "Bloom", "Rally", "Signal",
  "Crest", "Fable", "Grove", "Ionic", "Vantage", "Wave", "Anchor", "Beacon",
  "Cascade", "Delta", "Echo", "Frame", "Glide", "Harbor", "Ivory", "Junction",
  "Kindle", "Lattice", "Mosaic", "Nimbus", "Onyx", "Prism", "Quill", "Ridge",
  "Spark", "Tandem", "Union", "Vector", "Willow", "Yonder", "Zephyr", "Atlas",
  "Basecamp", "Compass", "Domino", "Emberly", "Forge", "Glacier", "Horizon",
  "Indigo", "Juniper", "Keystone", "Lumen", "Meridian", "Nectar", "Opal",
];

export const collaborationLogos = [
  ...platformIcons.map((name) => ({ name, type: "platform" as const })),
  ...logoWords.map((name) => ({ name, type: "partner" as const })),
];

export const collaborationStats = [
  { label: "Platforms we run campaigns on", value: "22+" },
  { label: "Client & network partners", value: "80+" },
  { label: "Countries represented", value: "30+" },
  { label: "Avg. platforms per campaign", value: "4.2" },
];

