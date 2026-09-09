import { Check } from "lucide-react";
import { engagementTiers } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const ROW_LABELS = [
  "Strategy call",
  "Creator network access",
  "Content direction",
  "Posting coordination",
  "Reporting",
  "Timeline",
];

export default function EngagementTable() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {engagementTiers.map((tier) => (
        <div
          key={tier.name}
          className={`glow-border relative flex flex-col rounded-3xl p-8 ${
            tier.highlight ? "bg-white/[0.05]" : "bg-white/[0.02]"
          }`}
        >
          {tier.highlight && (
            <Badge className="absolute -top-3 left-8">Most Popular</Badge>
          )}
          <h3 className="font-heading text-xl font-semibold">{tier.name}</h3>
          <p className="mt-1 text-sm text-sb-white/50">{tier.tagline}</p>
          <p className="font-display gradient-text mt-6 text-3xl">{tier.price}</p>
          <p className="mt-2 text-xs text-sb-white/45">{tier.best}</p>

          <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-white/10 pt-6 text-sm">
            {ROW_LABELS.map((label) => (
              <li key={label} className="flex items-start justify-between gap-3">
                <span className="flex items-start gap-2 text-sb-white/50">
                  <Check size={14} className="mt-0.5 shrink-0 text-sb-lime" />
                  {label}
                </span>
                <span className="text-right text-sb-white/75">
                  {tier.rows[label as keyof typeof tier.rows]}
                </span>
              </li>
            ))}
          </ul>

          <Button
            href="/contact"
            variant={tier.highlight ? "primary" : "outline"}
            className="mt-8 w-full justify-center"
          >
            Get Started
          </Button>
        </div>
      ))}
    </div>
  );
}
