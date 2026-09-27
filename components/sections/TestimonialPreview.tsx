"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";

export default function TestimonialPreview() {
  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
=======
    <section className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        <SectionHeading eyebrow="Social Proof" align="center">
          PEOPLE WHO&apos;VE
          <br />
          FELT THE <span className="gradient-text">BUZZ.</span>
        </SectionHeading>
      </div>

<<<<<<< HEAD
      <div className="mt-14">
=======
      <div className="mt-16">
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
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
