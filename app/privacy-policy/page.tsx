import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SocialBug Media collects, uses, and protects your information.",
  ...pageOG(
    "Privacy Policy | SocialBug Media",
    "How SocialBug Media collects, uses, and protects your information.",
    "/privacy-policy"
  ),
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title={
        <>
          PRIVACY <span className="gradient-text">POLICY.</span>
        </>
      }
      description="Plain-English notes on what we collect, why, and how you stay in control of it."
      updated="September 2026"
      sections={[
        {
          id: "overview",
          title: "Overview",
          content: (
            <>
              <p>
                SocialBug Media (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) runs influencer
                and creator-marketing campaigns for brands, and works with a network of creators to
                do it. This policy explains what personal information we collect through our
                website and while running a campaign, why we collect it, and the choices you have.
              </p>
              <p>
                By using our website or working with us as a client or a creator, you agree to the
                practices described here. If anything is unclear, contact us, details are at the
                bottom of this page.
              </p>
            </>
          ),
        },
        {
          id: "information-we-collect",
          title: "Information We Collect",
          content: (
            <>
              <p>We collect information in three broad ways:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="text-sb-white/85">You give it to us directly</span>, name,
                  email, company, phone number, and campaign details when you fill out our contact
                  form, book a call, or sign on as a client or creator.
                </li>
                <li>
                  <span className="text-sb-white/85">Automatically, as you browse</span>, pages
                  visited, device and browser type, and general location, collected through
                  cookies and analytics tools (see &quot;Cookies&quot; below).
                </li>
                <li>
                  <span className="text-sb-white/85">From public sources</span>, when evaluating a
                  creator for a campaign, we may review publicly available profile information
                  (follower count, engagement, content category) on platforms like LinkedIn,
                  Instagram, and X.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use-it",
          title: "How We Use It",
          content: (
            <>
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to enquiries and put together campaign proposals</li>
                <li>Match brands with relevant creators, and manage briefs, contracts, and payments</li>
                <li>Send campaign updates, invoices, and, if you&apos;ve opted in, occasional newsletters</li>
                <li>Improve our website and understand which pages and services are useful</li>
                <li>Meet legal, accounting, and tax obligations</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </>
          ),
        },
        {
          id: "creators",
          title: "Information About Creators",
          content: (
            <p>
              For creators in our network, we keep basic profile information (name, handle,
              platform, category, and contact details) so we can match you to relevant briefs. We
              only share your contact details with a brand once you&apos;ve agreed to be considered
              for that specific campaign, never in bulk, and never without your knowledge.
            </p>
          ),
        },
        {
          id: "cookies",
          title: "Cookies & Analytics",
          content: (
            <p>
              Our website uses a small number of cookies to remember basic preferences and to
              understand aggregate traffic through analytics tools. None of this is used to build
              an advertising profile of you, and you can clear or block cookies at any time through
              your browser settings, the site will still work, though some preferences won&apos;t
              be remembered.
            </p>
          ),
        },
        {
          id: "sharing",
          title: "How We Share Information",
          content: (
            <>
              <p>We share information only where it&apos;s needed to do the work:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>With creators or brands, for the specific campaign you&apos;re part of</li>
                <li>With service providers who help us run the business (email, payments, hosting), bound by their own confidentiality obligations</li>
                <li>Where required by law, or to protect our rights and the safety of our team and partners</li>
              </ul>
            </>
          ),
        },
        {
          id: "retention",
          title: "Data Retention",
          content: (
            <p>
              We keep information for as long as it&apos;s needed for the purpose it was
              collected, typically for the length of our working relationship plus a reasonable
              period afterwards for accounting and legal purposes. You can ask us to delete your
              information at any time, subject to any legal retention requirements.
            </p>
          ),
        },
        {
          id: "your-rights",
          title: "Your Rights",
          content: (
            <>
              <p>Depending on where you&apos;re located, you may have the right to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access the personal information we hold about you</li>
                <li>Ask us to correct or update it</li>
                <li>Ask us to delete it, or restrict how we use it</li>
                <li>Withdraw consent for marketing communications at any time</li>
              </ul>
              <p>To exercise any of these, just email us, see the contact card below.</p>
            </>
          ),
        },
        {
          id: "security",
          title: "Security",
          content: (
            <p>
              We use reasonable technical and organisational measures to protect the information
              we hold, including restricted access and secure storage. No method of transmission
              or storage is 100% secure, so we can&apos;t guarantee absolute security, but we take
              it seriously and review our practices regularly.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes To This Policy",
          content: (
            <p>
              We may update this policy from time to time as our services or applicable law
              change. We&apos;ll update the &quot;last updated&quot; date at the top of this page
              when we do, for significant changes, we&apos;ll make a reasonable effort to let
              active clients and creators know directly.
            </p>
          ),
        },
      ]}
    />
  );
}
