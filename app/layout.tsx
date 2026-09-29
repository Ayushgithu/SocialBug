import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SplashScreen from "@/components/layout/SplashScreen";
import RouteLoadingBar from "@/components/layout/RouteLoadingBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import NextTopLoader from 'nextjs-toploader';
import MobileCTABar from "@/components/ui/MobileCTABar";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://socialbugmedia.in"),
  title: {
    default: "SocialBug Media | Strategy. Content. Growth.",
    template: "%s | SocialBug Media",
  },
  description:
    "SocialBug Media helps SaaS companies, startups, and product launches grow through a curated network of 1000+ influencers, creators, and tech professionals.",
  keywords: [
    "SocialBug Media","influencer marketing agency","creator marketing agency","influencer marketing agency India",
    "creator marketing agency India","influencer marketing company","social media marketing agency","content marketing agency",
    "digital marketing agency India","startup marketing agency","SaaS marketing agency","SaaS growth agency",
    "SaaS growth marketing","B2B SaaS marketing agency","product launch marketing agency","Product Hunt launch agency",
    "Product Hunt marketing","Product Hunt launch marketing","Product Hunt launch strategy","Product Hunt upvotes agency",
    "Product Hunt PR","Product Hunt growth agency","LinkedIn marketing agency","LinkedIn growth agency",
    "LinkedIn creator marketing","LinkedIn influencer marketing","LinkedIn ghostwriting agency","LinkedIn content agency",
    "LinkedIn personal branding agency","LinkedIn founder branding","LinkedIn brand page growth","LinkedIn organic growth agency",
    "LinkedIn ads and organic agency","LinkedIn thought leadership agency","LinkedIn creator network","LinkedIn campaign agency",
    "X marketing agency","Twitter marketing agency","X creator campaigns","Twitter creator campaigns","X growth agency",
    "Twitter growth agency","Instagram marketing agency","Instagram influencer marketing","Instagram creator marketing",
    "Instagram growth agency","Instagram campaign agency","Instagram reels marketing agency","Instagram UGC agency",
    "YouTube marketing agency","YouTube influencer marketing","YouTube creator marketing","YouTube tech influencer marketing",
    "YouTube fintech marketing","tech influencer marketing","fintech influencer marketing","fintech marketing agency",
    "tech marketing agency","AI marketing agency","AI product marketing","AI startup marketing","AI infrastructure marketing",
    "founder personal branding agency","founder branding agency","personal branding agency India","executive branding agency",
    "founder marketing agency","CEO personal branding","startup founder marketing","D2C marketing agency","D2C influencer marketing",
    "ecommerce influencer marketing","ecommerce marketing agency","meme marketing agency","meme marketing India",
    "brand meme marketing","relatable content marketing","viral marketing agency","viral content agency",
    "viral amplification agency","social amplification agency","organic reach agency","engagement marketing agency",
    "creator network India","influencer network India","creator collective India","micro influencer agency",
    "nano influencer agency","macro influencer agency","influencer collaboration agency","influencer campaign management",
    "influencer marketing management","influencer outreach agency","creator partnerships agency","brand partnerships agency",
    "brand storytelling agency","brand content agency","social content agency","social media strategy agency",
    "social media growth agency","social media management agency","content strategy agency","content creation agency",
    "campaign management agency","integrated marketing agency","performance marketing agency","growth marketing agency",
    "growth hacking agency","startup growth agency","early stage startup marketing","seed stage startup marketing",
    "Series A marketing agency","tech startup marketing India","SaaS content marketing","SaaS social media marketing",
    "SaaS founder marketing","SaaS launch marketing","product marketing agency","go to market agency","GTM marketing agency",
    "launch marketing agency","app launch marketing","website launch marketing","brand launch agency","marketing agency for founders",
    "marketing agency for startups","marketing agency for SaaS companies","marketing agency for tech companies",
    "marketing agency for fintech companies","marketing agency for D2C brands","marketing agency for ecommerce brands",
    "social media agency Madhya Pradesh","social media agency India","digital marketing agency Panna","influencer marketing agency Panna",
    "boutique marketing agency India","creator economy agency","creator economy India","influencer marketplace India",
    "influencer marketing platform","creator collaboration platform","content amplification agency","paid amplification agency",
    "organic amplification agency","LinkedIn ghostwriter for founders","LinkedIn content writer agency","LinkedIn post writing agency",
    "thought leadership content agency","B2B content marketing agency","B2B influencer marketing","B2B social media agency",
    "tech PR agency","startup PR agency","product PR agency","launch PR agency","earned media agency","word of mouth marketing agency",
    "referral marketing agency","community marketing agency","community building agency","brand awareness agency",
    "brand visibility agency","online visibility agency","digital PR agency","reputation marketing agency",
    "social proof marketing agency","testimonial marketing agency","case study marketing agency","results driven marketing agency",
    "data driven marketing agency","ROI focused marketing agency","full funnel marketing agency","top of funnel marketing agency",
    "demand generation agency","lead generation agency social","content distribution agency","multi platform marketing agency",
    "cross platform content agency","platform agnostic marketing agency","one partner all platforms","social media outsourcing agency",
    "outsource social media India","hire influencer marketing agency","hire creator marketing agency","hire LinkedIn agency",
    "hire Instagram marketing agency","hire Product Hunt agency","best influencer marketing agency India",
    "best creator marketing agency India","best LinkedIn marketing agency India","best Product Hunt launch agency",
    "best meme marketing agency","top influencer marketing agency India","top social media agency India",
    "top SaaS marketing agency India","affordable influencer marketing agency","budget friendly marketing agency startups",
    "fast turnaround marketing agency","30 minute campaign launch","quick campaign launch agency","same day campaign agency",
    "influencer marketing for SaaS","influencer marketing for fintech","influencer marketing for AI products",
    "influencer marketing for apps","influencer marketing for founders","influencer marketing for personal brands",
    "creator marketing for Product Hunt","creator marketing for app launch","creator marketing for tech products",
    "viral marketing India","viral campaign agency India","viral content strategy agency","trending content agency",
    "meme page marketing","brand meme campaign","relatable marketing campaign","humor marketing agency",
    "entertainment marketing agency","pop culture marketing agency","Gen Z marketing agency","millennial marketing agency",
    "youth marketing agency India","student audience marketing","college audience marketing agency","campus marketing agency",
    "influencer seeding agency","product seeding agency","gifting campaign agency","unboxing campaign agency",
    "review campaign agency","UGC campaign agency","user generated content agency","authentic marketing agency",
    "storytelling marketing agency","narrative marketing agency","brand narrative agency","emotional marketing agency",
    "emotional storytelling agency","campaign strategy agency","creative strategy agency","content calendar agency",
    "social media calendar agency","editorial calendar agency","influencer vetting agency","influencer discovery agency",
    "influencer matching agency","brand influencer matchmaking","influencer database India","creator database India",
    "verified influencer network","1000 plus creators network","creator network across platforms","multi niche creator network",
    "tech creator network","fintech creator network","lifestyle creator network","fashion creator network",
    "beauty creator network","fitness creator network","health creator network","wellness creator network",
    "pet care creator network","sustainability creator network","finance creator network","gadget creator network",
    "gaming creator network","food creator network","travel creator network","business creator network",
    "productivity creator network","education creator network","edtech marketing agency","healthtech marketing agency",
    "medtech marketing agency","insurtech marketing agency","proptech marketing agency","agritech marketing agency",
    "cleantech marketing agency","climatetech marketing agency","deep tech marketing agency","web3 marketing agency",
    "crypto marketing agency","blockchain marketing agency","NFT marketing agency","gaming startup marketing agency",
    "consumer app marketing agency","B2C marketing agency","mobile app marketing agency India","SaaS onboarding content agency",
    "customer story marketing agency","brand ambassador agency","spokesperson marketing agency","celebrity endorsement agency",
    "athlete endorsement marketing","doctor influencer marketing","medical influencer marketing","finance influencer marketing",
    "stock market influencer marketing","investing content marketing agency","personal finance influencer marketing",
    "career influencer marketing","HR influencer marketing","recruitment marketing agency","employer branding agency",
    "internal comms content agency","event marketing agency social","conference marketing agency","webinar promotion agency",
    "product demo marketing agency","feature launch marketing agency","funding announcement marketing","fundraise PR agency",
    "investor relations content agency","annual report content agency","brand refresh marketing agency","rebrand marketing agency",
    "logo launch marketing agency","website redesign marketing agency","landing page marketing agency","conversion focused content agency",
    "SEO content agency","organic search marketing agency","content marketing strategy India","inbound marketing agency India",
    "outbound marketing agency India","account based marketing agency","ABM agency India","enterprise marketing agency India",
    "SME marketing agency India","small business marketing agency India","local business marketing agency",
    "retail marketing agency India","FMCG marketing agency","consumer goods marketing agency","apparel marketing agency",
    "beauty brand marketing agency","skincare marketing agency","wellness brand marketing agency","pet brand marketing agency",
    "grooming brand marketing agency","electronics brand marketing agency","audio brand marketing agency","wearable tech marketing agency",
    "smart device marketing agency","renewable energy marketing agency","solar energy marketing agency","green energy marketing agency",
    "sustainability marketing India","ESG communications agency","corporate storytelling agency","B2B storytelling agency",
    "explainer content agency","how to content marketing","educational content marketing agency","tutorial marketing agency",
    "listicle content agency","carousel content agency","reels production agency","short form video agency",
    "video content marketing agency","video marketing agency India","video creator network","video editing agency for brands",
    "motion graphics marketing agency","animated content agency","infographic marketing agency","design led marketing agency",
    "creative agency India","boutique creative agency India","full service marketing agency India","integrated communications agency",
    "PR and social media agency","media relations agency India","press coverage agency","news amplification agency",
    "journalist outreach agency","blogger outreach agency","podcast marketing agency","podcast promotion agency",
    "newsletter marketing agency","email plus social agency","omnichannel marketing agency","multi channel campaign agency",
    "campaign amplification network","reach and engagement agency","impressions driven marketing","views driven marketing campaign",
    "million views campaign agency","viral views campaign","likes and comments campaign","engagement rate marketing agency",
    "social media KPI agency","marketing analytics agency social","campaign reporting agency","campaign measurement agency",
    "influencer ROI agency","influencer marketing metrics agency","brand lift agency","awareness campaign agency",
    "consideration campaign agency","conversion campaign social","retargeting content agency","funnel content agency",
    "top funnel content agency","middle funnel content agency","bottom funnel content agency","customer acquisition agency social",
    "user acquisition agency","app install campaign agency","waitlist marketing agency","early access marketing agency",
    "beta launch marketing agency","MVP marketing agency","pre launch marketing agency","post launch marketing agency",
    "growth loop marketing agency","viral loop marketing agency","referral loop agency","network effect marketing agency",
    "community led growth agency","product led growth marketing agency","founder led marketing agency","founder led growth agency",
    "bootstrap startup marketing","funded startup marketing agency","unicorn marketing agency India","scale up marketing agency",
    "growth stage marketing agency","marketing agency for Series B","marketing agency for pre seed startups",
    "marketing partner for startups","fractional CMO agency","outsourced marketing team India","marketing agency retainer India",
    "project based marketing agency","campaign based marketing agency","one off campaign agency","always on marketing agency",
    "always on social agency","evergreen content agency","seasonal campaign agency","festival campaign agency India",
    "friendship day campaign agency","Diwali campaign agency","Holi campaign agency","new year campaign agency",
    "Republic Day campaign agency","gift card campaign agency","ecommerce festive campaign agency","sale campaign marketing agency",
    "discount promotion agency social","offer campaign agency","limited time offer marketing","flash sale marketing agency",
    "shopping campaign agency","marketplace marketing agency","online marketplace campaign agency","app store marketing agency",
    "play store marketing agency","ASO marketing support agency","mobile marketing agency India","telecom brand marketing agency",
    "OTT marketing agency","streaming platform marketing agency","entertainment brand marketing agency","content platform marketing agency",
    "media brand marketing agency","publishing brand marketing agency","creator monetization consulting","influencer contract agency",
    "influencer negotiation agency","talent management adjacent agency","creator talent agency India","social media talent agency",
    "digital talent agency India","brand collab agency","collab marketing agency","co-marketing agency","partnership marketing agency",
    "cross promotion agency","affiliate marketing agency India","performance based influencer marketing","CPM campaign agency social",
    "CPC social campaign agency","paid social agency India","social media ads agency India","Meta ads agency","Instagram ads agency",
    "LinkedIn ads agency","X ads agency","YouTube ads agency","programmatic advertising agency social","media buying agency social",
    "media planning agency India","brand strategy agency India","positioning agency India","messaging strategy agency",
    "value proposition agency","competitive positioning agency","market entry marketing agency","India market entry agency",
    "global brand India entry marketing","cross border marketing agency","localization marketing agency","Hindi content marketing agency",
    "regional language marketing agency","vernacular marketing agency India","tier 2 tier 3 marketing agency",
    "small town marketing agency India","rural marketing agency India","pan India marketing agency","national campaign agency India",
    "SocialBug","social bug media","socialbugmedia","Mansi Gupta","Shivam Chhirolya","socialbug agency","socialbug influencer marketing",
    "socialbug creator network","socialbug case studies","socialbug services","socialbug LinkedIn agency","socialbug Product Hunt agency"
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "SocialBug Media | Strategy. Content. Growth.",
    description:
      "We help ambitious products get seen, talked about, and shared through strategy, creator networks, and campaigns built to move.",
    url: "https://socialbugmedia.in",
    siteName: "SocialBug Media",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialBug Media | Strategy. Content. Growth.",
    description:
      "We help ambitious products get seen, talked about, and shared through strategy, creator networks, and campaigns built to move.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="bg-noise antialiased">
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <SplashScreen />
          <RouteLoadingBar />
          <NextTopLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          {/* spacer so the sticky mobile bar never covers the footer's last line */}
          <div className="h-20 sm:hidden" aria-hidden />
          <BackToTop />
          <WhatsAppButton />
          <MobileCTABar />
        </SmoothScroll>
      </body>
    </html>
  );
}