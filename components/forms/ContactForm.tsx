"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/schema";

const stages = ["Idea", "Pre-launch", "Early stage", "Growth stage", "Scaling"] as const;
const helpOptions = [
  "Influencer Campaigns",
  "Product Hunt Launch",
  "SaaS Growth Campaign",
  "Content & Creative",
  "Full Managed Campaign",
  "Something else",
] as const;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-heading text-xs uppercase tracking-[0.15em] text-sb-white/50">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-sb-pink">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-base sm:text-sm text-sb-white outline-none transition-colors placeholder:text-sb-white/25 focus:border-sb-lime";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glow-border flex flex-col items-center rounded-xl bg-white/2 p-12 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sb-lime text-sb-black">
          <Check size={26} />
        </span>
        <h3 className="font-heading mt-6 text-2xl font-semibold">We got the signal. 🐞</h3>
        <p className="mt-3 max-w-sm text-sm text-sb-white/60">
          Thanks for reaching out, our team is already buzzing. Check your
          inbox for a confirmation, we&apos;ll be in touch shortly.
        </p>
        <button
          data-cursor="pointer"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs uppercase tracking-[0.2em] text-sb-white/50 hover:text-sb-white"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Honeypot — invisible to real visitors, tabbed/screen-reader-skipped.
          Bots that auto-fill every field trip it; we drop those silently. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="companyWebsiteConfirm">Leave this field empty</label>
        <input
          {...register("companyWebsiteConfirm")}
          id="companyWebsiteConfirm"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} placeholder="your name" />
        </Field>
        <Field label="Work Email" error={errors.email?.message}>
          <input {...register("email")} className={inputClass} placeholder="you@company.com" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" error={errors.company?.message}>
          <input {...register("company")} className={inputClass} placeholder="Company Inc." />
        </Field>
        <Field label="Website" error={errors.website?.message}>
          <input {...register("website")} className={inputClass} placeholder="yourcompany.com" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company Stage" error={errors.stage?.message}>
          <select {...register("stage")} defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select stage
            </option>
            {stages.map((s) => (
              <option key={s} value={s} className="bg-sb-black-soft">
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="What do you need help with?" error={errors.helpWith?.message}>
          <select {...register("helpWith")} defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select an option
            </option>
            {helpOptions.map((h) => (
              <option key={h} value={h} className="bg-sb-black-soft">
                {h}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Budget Range (optional)" error={errors.budget?.message}>
        <input
          {...register("budget")}
          className={inputClass}
          
        />
      </Field>

      <Field label="Tell us about your project" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          className={inputClass}
          placeholder="What are you building, and what does success look like?"
        />
      </Field>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-sb-pink"
          >
            Something went wrong sending your message. Please try again.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        data-cursor="pointer"
        className="group relative mt-2 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full bg-sb-white px-8 py-4 font-heading text-sm font-semibold text-sb-black transition-opacity disabled:opacity-60"
      >
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-linear-to-r from-sb-pink via-sb-orange to-sb-lime transition-transform duration-300 ease-out group-hover:scale-y-100" />
        <span className="relative z-10 flex items-center gap-2">
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              Start the Conversation <ArrowRight size={15} />
            </>
          )}
        </span>
      </button>
    </form>
  );
}
