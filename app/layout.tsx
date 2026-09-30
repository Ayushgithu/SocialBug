import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SplashScreen from "@/components/layout/SplashScreen";
import RouteLoadingBar from "@/components/layout/RouteLoadingBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import NextTopLoader from 'nextjs-toploader';
import MobileCTABar from "@/components/ui/MobileCTABar";
import { CLD } from "@/lib/cloudinary";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://socialbugmedia.in"),
  title: {
    default: "SocialBug Media | Strategy. Content. Growth.",
    template: "%s | SocialBug Media",
  },
  description:
    "SocialBug Media helps SaaS companies, startups, and product launches grow through a curated network of 1000+ influencers, creators, and tech professionals.",
  keywords: [
    "influencer marketing",
    "SaaS growth",
    "Product Hunt launch",
    "creator network",
    "startup marketing agency",
  ],
  openGraph: {
    title: "SocialBug Media | Strategy. Content. Growth.",
    description:
      "We help ambitious products get seen, talked about, and shared through strategy, creator networks, and campaigns built to move.",
    url: "https://socialbugmedia.in",
    siteName: "SocialBug Media",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: CLD.ogImage,
        width: 1200,
        height: 630,
        alt: "SocialBug Media — Strategy. Content. Growth.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialBug Media | Strategy. Content. Growth.",
    description:
      "We help ambitious products get seen, talked about, and shared through strategy, creator networks, and campaigns built to move.",
    images: [CLD.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Favicons: app/icon.png, app/apple-icon.png, app/favicon.ico
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
        {/* Keep the shared Sora stylesheet in the App Router root layout. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-noise antialiased">
        <SmoothScroll>
          <CustomCursor />
          {/* <ScrollProgress /> */}
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