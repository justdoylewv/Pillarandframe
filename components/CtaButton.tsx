import Link from "next/link";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "solidLight" | "outlineLight";
  className?: string;
}

const styles: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  // On light surfaces
  solid:
    "bg-black text-paper hover:bg-coal border border-black hover:border-coal",
  outline:
    "border border-ash-300 text-black hover:border-black",
  // On dark surfaces
  solidLight:
    "bg-paper text-black hover:bg-bone border border-paper hover:border-bone",
  outlineLight:
    "border border-paper/25 text-paper hover:border-paper",
};

export default function CtaButton({
  href,
  children,
  variant = "solid",
  className = "",
}: CtaButtonProps) {
  const cls = `inline-block rounded-[2px] px-9 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${styles[variant]} ${className}`;
  const external = href.startsWith("http") || href === "#";
  if (external) {
    return (
      <a href={href} className={cls} {...(href !== "#" ? { target: "_blank", rel: "noopener" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
