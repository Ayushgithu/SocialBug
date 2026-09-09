import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SplashScreen from "@/components/layout/SplashScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://socialbugmedia.com"),
  title: {
    default: "SocialBug Media — Strategy. Content. Growth.",
    template: "%s — SocialBug Media",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-noise antialiased">
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <SplashScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
