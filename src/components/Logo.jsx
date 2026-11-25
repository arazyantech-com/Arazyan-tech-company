export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-indigo-400/40">
        <span className="absolute inset-1 rounded-full border border-blue-400/30" />
        <span className="relative text-sm font-bold text-white">A</span>
      </span>
      {!compact && <span className="text-base font-semibold uppercase tracking-[0.16em] text-white">Arazyan Technologies</span>}
    </span>
  );
}
