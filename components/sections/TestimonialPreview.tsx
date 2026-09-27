"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";

export default function TestimonialPreview() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Social Proof" align="center">
          PEOPLE WHO&apos;VE
          <br />
          FELT THE <span className="gradient-text">BUZZ.</span>
        </SectionHeading>
      </div>

      <div className="mt-14">
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
