/** Four-point lime sparkle used as the bullet marker on cards. */
export default function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#c8f000" aria-hidden className="mt-[3px] shrink-0">
      <path d="M12 2C12.6 7.4 16.6 11.4 22 12C16.6 12.6 12.6 16.6 12 22C11.4 16.6 7.4 12.6 2 12C7.4 11.4 11.4 7.4 12 2Z" />
    </svg>
  );
}