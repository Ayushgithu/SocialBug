import { socialLinks, founders } from "@/lib/data";
import { CLD } from "@/lib/cloudinary";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "SocialBug Media",
    alternateName: "SocialBug",
    url: socialLinks.siteUrl,
    logo: CLD.logo.full,
    image: CLD.ogImage,
    description:
      "SocialBug Media helps SaaS companies, startups, and product launches grow through a curated network of 1000+ influencers, creators, and tech professionals.",
    email: socialLinks.email,
    telephone: socialLinks.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: socialLinks.address,
      addressCountry: "IN",
    },
    sameAs: [socialLinks.instagram, socialLinks.linkedinCompany],
    founder: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
      ...(f.showLinkedin ? { sameAs: [f.linkedin] } : {}),
    })),
    areaServed: "IN",
    knowsAbout: [
      "Influencer Marketing",
      "Creator Marketing",
      "LinkedIn Growth",
      "Product Hunt Launches",
      "Meme Marketing",
      "SaaS Marketing",
      "Founder Personal Branding",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}