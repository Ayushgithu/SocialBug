<<<<<<< HEAD
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SplashScreen from "@/components/layout/SplashScreen";
import RouteLoadingBar from "@/components/layout/RouteLoadingBar";
=======
import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SplashScreen from "@/components/layout/SplashScreen";
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
<<<<<<< HEAD
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://socialbugmedia.in"),
  title: {
    default: "SocialBug Media | Strategy. Content. Growth.",
    template: "%s | SocialBug Media",
=======

export const metadata: Metadata = {
  metadataBase: new URL("https://socialbugmedia.com"),
  title: {
    default: "SocialBug Media — Strategy. Content. Growth.",
    template: "%s — SocialBug Media",
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
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
<<<<<<< HEAD
    title: "SocialBug Media | Strategy. Content. Growth.",
    description:
      "We help ambitious products get seen, talked about, and shared through strategy, creator networks, and campaigns built to move.",
    url: "https://socialbugmedia.in",
    siteName: "SocialBug Media",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
=======
    title: "SocialBug Media — Strategy. Content. Growth.",
    description:
      "We help ambitious products get seen, talked about, and shared through strategy, creator networks, and campaigns built to move.",
    url: "https://socialbugmedia.com",
    siteName: "SocialBug Media",
    type: "website",
  },
  icons: {
    icon: "/logo/socialbug-icon.png",
  },
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      <body className="bg-noise antialiased">
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <SplashScreen />
<<<<<<< HEAD
          <RouteLoadingBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
=======
          <Navbar />
          <main>{children}</main>
          <Footer />
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        </SmoothScroll>
      </body>
    </html>
  );
}
