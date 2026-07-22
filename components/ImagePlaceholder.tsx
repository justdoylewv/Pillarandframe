interface ImagePlaceholderProps {
  label?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  dark?: boolean;
  className?: string;
}

const aspects = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export default function ImagePlaceholder({
  label = "Photo coming soon",
  aspect = "video",
  dark = false,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspects[aspect]} flex items-center justify-center border ${
        dark ? "border-shale bg-ink" : "border-ash-100 bg-bone"
      } ${className}`}
    >
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.3em] ${
          dark ? "text-ash-500" : "text-ash-300"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
