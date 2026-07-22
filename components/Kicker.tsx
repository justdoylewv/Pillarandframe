interface KickerProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function Kicker({ children, dark = false, className = "" }: KickerProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.3em] ${
        dark ? "text-ash-300" : "text-ash-500"
      } ${className}`}
    >
      <span className="h-[3px] w-[3px] shrink-0 bg-gold-500" aria-hidden="true" />
      {children}
    </span>
  );
}
