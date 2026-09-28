/** Pink → purple → orange, repeating. Shared by Services + Work cards. */
export const CARD_ACCENTS = [
  { from: "#ff3d6e", to: "#ff7a95", text: "#f0386b", soft: "rgba(255,61,110,0.08)", glow: "rgba(255,61,110,0.38)" },
  { from: "#7250c4", to: "#9d80dc", text: "#6f47c2", soft: "rgba(114,80,196,0.08)", glow: "rgba(114,80,196,0.38)" },
  { from: "#ff9a2e", to: "#ffbb6b", text: "#ff8a1f", soft: "rgba(255,154,46,0.09)", glow: "rgba(255,154,46,0.38)" },
];

export function cardAccentFor(index: number) {
  const n = CARD_ACCENTS.length;
  return CARD_ACCENTS[((index % n) + n) % n];
}