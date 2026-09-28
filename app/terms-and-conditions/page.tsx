import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import LegalLayout from "@/components/ui/LegalLayout";
import { business } from "@/lib/business";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern using SocialBug Media's website and services.",
  ...pageOG(
    "Terms & Conditions | SocialBug Media",
    "The terms that govern using SocialBug Media's website and services.",
    "/terms-and-conditions"
  ),
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title={
        <>
          TERMS &amp; <span className="gradient-text">CONDITIONS.</span>
        </>
      }
      description="The ground rules for working with SocialBug Media, written to be read, not just filed away."
      updated="September 2026"
      sections={[
        {
          id: "acceptance",
          title: "Acceptance Of Terms",
          content: (
            <p>
              By using this website, signing a proposal, or engaging SocialBug Media for a
              campaign, you agree to these terms. If you&apos;re agreeing on behalf of a company,
              you confirm you have the authority to do so. If you don&apos;t agree with any part
              of these terms, please don&apos;t use our services.
            </p>
          ),
        },
        {
          id: "services",
          title: "Our Services",
          content: (
            <p>
              SocialBug Media provides influencer and creator-marketing services, including
              strategy, creator sourcing, content direction, campaign management, and reporting.
              The exact scope, deliverables, timeline, and fees for any engagement are set out in
              a separate proposal or statement of work agreed with you, these terms sit alongside
              that document, not in place of it.
            </p>
          ),
        },
        {
          id: "client-responsibilities",
          title: "Client Responsibilities",
          content: (
            <>
              <p>To keep a campaign on schedule, clients agree to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide accurate brand, product, and campaign information</li>
                <li>Review and approve creative briefs and content within the agreed turnaround time</li>
                <li>Make payments according to the schedule in the proposal</li>
                <li>Only request content and claims that are truthful and legally compliant</li>
              </ul>
            </>
          ),
        },
        {
          id: "creator-engagements",
          title: "Creator Engagements",
          content: (
            <p>
              Creators working with us through a campaign are independent contractors, not
              employees of SocialBug Media or our clients. Specific deliverables, usage rights, and
              payment terms for each creator are confirmed individually before a campaign begins.
              Creators are expected to disclose paid partnerships in line with applicable
              advertising-standards and platform guidelines.
            </p>
          ),
        },
        {
          id: "payment",
          title: "Payment Terms",
          content: (
            <p>
              Fees, payment schedule, and currency are set out in your proposal or invoice. Unless
              otherwise agreed in writing, invoices are due within 15 days of the invoice date.
              Late payments may pause campaign work until the account is brought current. All fees
              are exclusive of applicable taxes unless stated otherwise.
            </p>
          ),
        },
        {
          id: "intellectual-property",
          title: "Intellectual Property",
          content: (
            <p>
              Strategy documents, creative concepts, and reports we produce remain our
              intellectual property until full payment is received, at which point usage rights
              transfer as agreed in the proposal. Content created by network creators is licensed
              for the specific usage (organic, paid, duration) agreed at the time of the campaign -
              broader usage requires a separate agreement with the creator.
            </p>
          ),
        },
        {
          id: "confidentiality",
          title: "Confidentiality",
          content: (
            <p>
              Both parties agree to keep confidential information, unreleased product details,
              campaign budgets, performance data, and anything marked as confidential, private,
              and to use it only for the purposes of the engagement. This obligation continues even
              after the engagement ends.
            </p>
          ),
        },
        {
          id: "liability",
          title: "Limitation Of Liability",
          content: (
            <p>
              We work hard to deliver campaigns that perform, but we can&apos;t guarantee specific
              results, reach, engagement, and conversions depend on factors outside our control,
              including platform algorithms and audience behaviour. To the extent permitted by law,
              our liability for any claim arising from our services is limited to the fees paid for
              the campaign in question.
            </p>
          ),
        },
        {
          id: "termination",
          title: "Termination",
          content: (
            <p>
              Either party may terminate an engagement with written notice as specified in the
              proposal (typically 30 days), subject to payment for work completed and committed
              creator contracts up to the termination date. We reserve the right to pause or end an
              engagement immediately in cases of non-payment or a breach of these terms.
            </p>
          ),
        },
        {
          id: "governing-law",
          title: "Governing Law",
          content: (
            <p>
              These terms are governed by the laws of India, and any disputes arising from them
              will be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana,
              unless otherwise agreed in a signed contract.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes To These Terms",
          content: (
            <p>
              We may update these terms occasionally to reflect changes in our services or
              applicable law. Continued use of our website or services after an update means you
              accept the revised terms. Active client and creator agreements are governed by the
              terms in place when that agreement was signed, unless we agree to an update in
              writing.
            </p>
          ),
        },
        {
          id: "business-details",
          title: "Business Details",
          content: (
            <>
              <p>The business behind these terms and all invoices we issue:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Business name: {business.legalName}</li>
                <li>GSTIN: {business.gstin}</li>
                <li>Billing and legal queries: {socialLinks.email}</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}