export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif tracking-tight ${className}`}>
      Pillar <span className="italic text-purple-500">&amp;</span> Frame
    </span>
  );
}
