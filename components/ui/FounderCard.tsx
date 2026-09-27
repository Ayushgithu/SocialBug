import Image from "next/image";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

export interface FounderCardProps {
  name: string;
  role: string;
  chips: string[];
  bio: string;
  photo: string;
  linkedin?: string;
  showLinkedin?: boolean;
}

/** Clean founder card, photo, name (accent serif), role chips, bio, LinkedIn. */
export default function FounderCard({
  name,
  chips,
  bio,
  photo,
  linkedin,
  showLinkedin = true,
}: FounderCardProps) {
  return (
    <article className="sb-card-shine relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-sb-panel transition-colors duration-300 hover:border-sb-orange/60">
      <div className="relative aspect-square w-full overflow-hidden bg-black">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-6 pb-8 pt-7 text-center sm:px-8">
        <div className="flex items-center justify-center gap-2.5">
          <h3 className="font-accent text-2xl text-sb-white sm:text-3xl">{name}</h3>

          {linkedin && showLinkedin && (
            <span
              aria-hidden="true"
              className="sb-icon-3d flex items-center justify-center transition-transform duration-300 ease-out hover:scale-125"
            >
              <LinkedInIcon size={22} />
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {chips.map((c, i) => (
            <span
              key={c}
              className={
                i === 0
                  ? "rounded border border-sb-orange bg-sb-orange px-3 py-1 font-heading text-[11px] font-semibold text-sb-black"
                  : "rounded border border-white/25 px-3 py-1 font-heading text-[11px] font-medium text-sb-white/80"
              }
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-sb-white/65">{bio}</p>
      </div>
    </article>
  );
}
