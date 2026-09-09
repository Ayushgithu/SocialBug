"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";

export default function TestimonialPreview() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Social Proof" align="center">
          PEOPLE WHO&apos;VE
          <br />
          FELT THE <span className="gradient-text">BUZZ.</span>
        </SectionHeading>
      </div>

      <div className="mt-16">
        <TestimonialsMarquee />
      </div>

      <div className="mt-14 flex justify-center">
        <Button href="/testimonials" variant="outline">
          Read All Stories →
        </Button>
      </div>
    </section>
  );
}
