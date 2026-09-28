import { type ClassValue, clsx } from "clsx";
import type { Metadata } from "next";
import { CLD } from "@/lib/cloudinary";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Per-page openGraph + twitter metadata, sharing the one branded OG image
 * (Cloudinary: CLD.ogImage) so every page gets a proper title/description on
 * social previews instead of falling back to the site-wide default.
 * `path` is the route, e.g. "/about" (leave empty for the homepage).
 */
export function pageOG(
  title: string,
  description: string,
  path = "",
  imageUrl?: string
): Pick<Metadata, "openGraph" | "twitter"> {
  const url = `https://socialbugmedia.in${path}`;
  const image = {
    url: imageUrl || CLD.ogImage,
    width: 1200,
    height: 630,
    alt: title,
  };
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: "SocialBug Media",
      type: "website",
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}