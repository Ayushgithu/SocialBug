import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about how SocialBug Media works, timelines, platforms covered, and getting started.",
  ...pageOG(
    "FAQ | SocialBug Media",
    "Answers to common questions about how SocialBug Media works, timelines, platforms covered, and getting started.",
    "/faq"
  ),
};

const FAQS = [
  {
    q: "What does SocialBug Media do?",
    a: "Creator-led marketing and social media campaigns across LinkedIn, X and Instagram.",
  },
  {
    q: "How quickly can you launch a campaign?",
    a: "Ready-to-execute campaigns can go live within 30 minutes.",
  },
  {
    q: "How many creators do you have?",
    a: "We work with a network of 1,000+ LinkedIn creators across multiple industries.",
  },
  {
    q: "Can you find creators for us?",
    a: "Yes. We handle discovery, shortlisting, coordination and campaign execution.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We work with startups, SaaS, AI, fintech, B2B and established brands.",
  },
  {
    q: "Can you handle the entire campaign?",
    a: "Yes, from strategy and creator selection to content, publishing, amplification and reporting.",
  },
  {
    q: "Can you help with founder personal branding?",
    a: "Yes. We help founders build visibility through content, thought leadership and creator amplification.",
  },
  {
    q: "How do we start?",
    a: "Share your brief, objective, timeline and budget. We'll take it from there.",
  },
  {
    q: "How much can you boost a LinkedIn or X post?",
    a: "We can run targeted amplification campaigns to help a post reach 5,000+ likes and 200+ reposts, depending on the campaign size, content and creator mix.",
  },
  {
    q: "Can you generate millions of views on any given post?",
    a: "Yes. We can amplify campaigns across Instagram and X through multiple creators and distribution channels, with campaigns capable of generating millions of cumulative views.",
  },
  {
    q: "Can you boost an existing post?",
    a: "Yes. Simply share the post with us. We handle the creator selection, coordination and amplification to push the post beyond its existing audience.",
  },
  {
    q: "Can you help boost upvotes for a product launch?",
    a: "Yes. We can run creator-led campaigns to increase upvotes, visibility and engagement around your Product Hunt launch and help your product reach a larger relevant audience.",
  },
  {
    q: "Can you help make my Product Hunt launch more visible?",
    a: "Yes. We can coordinate creators and your existing community to drive early visibility, traffic and engagement during your launch window.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked"
        title={
          <>
            QUESTIONS, <span className="gradient-text">ANSWERED.</span>
          </>
        }
        description="Everything brands and creators usually ask before working with us. Don't see yours? Just reach out."
      />

      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow={`${FAQS.length} Questions`} align="center">
            EVERYTHING YOU NEED <span className="gradient-text">TO KNOW.</span>
          </SectionHeading>

          <div className="mt-10">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Still Curious"
        heading={
          <>
            DIDN&apos;T FIND YOUR
            <br />
            <span className="gradient-text">ANSWER?</span>
          </>
        }
        primaryLabel="Ask Us Directly"
      />
    </>
  );
}
