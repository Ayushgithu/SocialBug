"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import {
  creatorSchema,
  NICHES,
  PLATFORMS,
  type CreatorFormValues,
  type PlatformKey,
} from "@/lib/creator-schema";
import { InstagramIcon, LinkedInIcon, XIcon } from "@/components/ui/SocialIcons";

const platformIcons = { linkedin: LinkedInIcon, twitter: XIcon, instagram: InstagramIcon };
const platformKeys: PlatformKey[] = ["linkedin", "twitter", "instagram"];

const emptyPlatform = { enabled: false, url: "", followers: "", cost: "" };

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-base sm:text-sm text-sb-white outline-none transition-colors placeholder:text-sb-white/25 focus:border-sb-lime";

function Field({
  label,
  error,
  children,
  htmlFor,
  plain,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  htmlFor?: string;
  plain?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className={
          plain
            ? "mb-2 block font-heading text-sm font-semibold text-sb-white"
            : "mb-2 block font-heading text-xs uppercase tracking-[0.15em] text-sb-white/50"
        }
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-sb-pink">{error}</p>}
    </div>
  );
}

function SectionTitle({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="mb-4 border-t border-white/10 pt-6">
      <h3 className="font-heading text-base font-semibold">{title}</h3>
      {hint && <p className="mt-1 text-sm text-sb-white/50">{hint}</p>}
    </div>
  );
}

export default function CreatorForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<CreatorFormValues>({
    resolver: zodResolver(creatorSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      city: "",
      niche: [],
      nicheOther: "",
      designation: "",
      company: "",
      age: "",
      highlights: "",
      linkedin: { ...emptyPlatform },
      twitter: { ...emptyPlatform },
      instagram: { ...emptyPlatform },
      companyWebsiteConfirm: "",
    },
  });

  const niche = useWatch({ control, name: "niche" });
  const enabled = {
    linkedin: useWatch({ control, name: "linkedin.enabled" }),
    twitter: useWatch({ control, name: "twitter.enabled" }),
    instagram: useWatch({ control, name: "instagram.enabled" }),
  };

  function toggleNiche(n: (typeof NICHES)[number]) {
    const next = niche.includes(n) ? niche.filter((x) => x !== n) : [...niche, n];
    setValue("niche", next, { shouldDirty: true, shouldValidate: isSubmitted });
  }

  function togglePlatform(k: PlatformKey) {
    setValue(`${k}.enabled`, !enabled[k], { shouldDirty: true, shouldValidate: isSubmitted });
  }

  async function onSubmit(values: CreatorFormValues) {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/creator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.status === 429) {
        setErrorMsg("Too many attempts from this device. Please try again in a while.");
        setStatus("error");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setErrorMsg("Something went wrong saving your details. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center py-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sb-lime text-sb-black">
          <Check size={26} />
        </span>
        <h3 className="font-heading mt-6 text-2xl font-semibold">You&apos;re on the list.</h3>
        <p className="mt-3 max-w-sm text-sm text-sb-white/60">
          Thanks for joining the SocialBug creator network. When a campaign fits your profile,
          we&apos;ll reach out on WhatsApp or email.
        </p>
        <button
          data-cursor="pointer"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs uppercase tracking-[0.2em] text-sb-white/50 hover:text-sb-white"
        >
          Add another creator
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot: hidden from real visitors, bots that fill every field get dropped. */}
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

      {/* About you */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name *" htmlFor="name" error={errors.name?.message}>
          <input id="name" {...register("name")} autoComplete="name" className={inputClass} placeholder="your name" />
        </Field>
        <Field label="WhatsApp Number *" htmlFor="whatsapp" error={errors.whatsapp?.message}>
          <input
            id="whatsapp"
            {...register("whatsapp")}
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+91 00000 00000"
          />
        </Field>
        <Field label="Email *" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            {...register("email")}
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@gmail.com"
          />
        </Field>
        <Field label="City" htmlFor="city" error={errors.city?.message}>
          <input id="city" {...register("city")} autoComplete="address-level2" className={inputClass} placeholder="Where you're based" />
        </Field>
      </div>

      {/* Niche */}
      <div>
        <SectionTitle title="What do you create about?" hint="Pick all that fit." />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Niche">
          {NICHES.map((n) => {
            const on = niche.includes(n);
            return (
              <button
                key={n}
                type="button"
                aria-pressed={on}
                data-cursor="pointer"
                onClick={() => toggleNiche(n)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sb-lime ${
                  on
                    ? "border-sb-lime bg-sb-lime text-sb-black"
                    : "border-white/15 bg-white/[0.03] text-sb-white/70 hover:border-white/40"
                }`}
              >
                {n}
              </button>
            );
          })}
        </div>
        <AnimatePresence initial={false}>
          {niche.includes("Others") && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <Field label="Your niche" htmlFor="nicheOther" error={errors.nicheOther?.message}>
                  <input
                    id="nicheOther"
                    {...register("nicheOther")}
                    className={inputClass}
                    placeholder="e.g. Parenting, Real estate, Pets"
                  />
                </Field>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Work */}
      <div>
        <SectionTitle title="About your work" />
        <div className="grid gap-6 sm:grid-cols-3">
          <Field label="Designation" htmlFor="designation" error={errors.designation?.message}>
            <input id="designation" {...register("designation")} className={inputClass} placeholder="Founder, Designer..." />
          </Field>
          <Field label="Company" htmlFor="company" error={errors.company?.message}>
            <input id="company" {...register("company")} className={inputClass} placeholder="Where you work" />
          </Field>
          <Field label="Age" htmlFor="age" error={errors.age?.message}>
            <input
              id="age"
              {...register("age")}
              inputMode="numeric"
              maxLength={2}
              className={inputClass}
              placeholder="25"
            />
          </Field>
        </div>
      </div>

      {/* Platforms */}
      <div>
        <SectionTitle
          title="Where do you create?"
          hint="Pick every platform you post on. Skip the ones you don't."
        />
        <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Platforms">
          {platformKeys.map((k) => {
            const Icon = platformIcons[k];
            const on = enabled[k];
            return (
              <button
                key={k}
                type="button"
                aria-pressed={on}
                data-cursor="pointer"
                onClick={() => togglePlatform(k)}
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sb-lime ${
                  on
                    ? "border-sb-lime bg-sb-lime/10 text-sb-white"
                    : "border-white/15 bg-white/[0.03] text-sb-white/70 hover:border-white/40"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={22} />
                  {PLATFORMS[k].label}
                </span>
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    on ? "border-sb-lime bg-sb-lime text-sb-black" : "border-white/25"
                  }`}
                >
                  {on && <Check size={12} strokeWidth={3} />}
                </span>
              </button>
            );
          })}
        </div>
        {errors.linkedin?.enabled?.message && (
          <p className="mt-2 text-xs text-sb-pink">{errors.linkedin.enabled.message}</p>
        )}

        <div className="mt-4 flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {platformKeys.map((k) =>
              enabled[k] ? (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="mb-4 font-heading text-sm font-semibold">{PLATFORMS[k].label}</p>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Field label="Profile link *" htmlFor={`${k}-url`} error={errors[k]?.url?.message}>
                          <input
                            id={`${k}-url`}
                            {...register(`${k}.url`)}
                            className={inputClass}
                            placeholder={PLATFORMS[k].urlPlaceholder}
                          />
                        </Field>
                      </div>
                      <Field label="Followers *" htmlFor={`${k}-followers`} error={errors[k]?.followers?.message}>
                        <input
                          id={`${k}-followers`}
                          {...register(`${k}.followers`)}
                          inputMode="numeric"
                          className={inputClass}
                          placeholder="25000 or 25k"
                        />
                      </Field>
                      <Field label={PLATFORMS[k].costLabel} htmlFor={`${k}-cost`} error={errors[k]?.cost?.message}>
                        <input
                          id={`${k}-cost`}
                          {...register(`${k}.cost`)}
                          inputMode="numeric"
                          className={inputClass}
                          placeholder="5000"
                        />
                      </Field>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Highlights */}
      <Field
        plain
        label="Highlights you wish to mention"
        htmlFor="highlights"
        error={errors.highlights?.message}
      >
        <textarea
          id="highlights"
          {...register("highlights")}
          rows={4}
          maxLength={1000}
          className={inputClass}
          placeholder="Past brand collaborations, best-performing posts, awards, anything you want us to know."
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button
          type="submit"
          disabled={status === "loading"}
          data-cursor="pointer"
          className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full bg-sb-white px-8 py-4 font-heading text-sm font-semibold text-sb-black transition-opacity disabled:opacity-60"
        >
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-linear-to-r from-sb-pink via-sb-orange to-sb-lime transition-transform duration-300 ease-out group-hover:scale-y-100" />
          <span className="relative z-10 flex items-center gap-2">
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Saving...
              </>
            ) : (
              "Get listed"
            )}
          </span>
        </button>
        <p className="text-xs text-sb-white/45">Takes 2 minutes. No spam, only relevant campaigns.</p>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            role="alert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-sb-pink"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}