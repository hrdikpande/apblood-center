/**
 * Pure CSS ambient background — the site's one signature visual motif.
 * No JS animation cost; safe to mount eagerly since it never blocks LCP
 * (it is absolutely positioned behind static, already-painted hero text).
 * Highly abstracted per the patient-sensitivity rule: soft translucent
 * rose/crimson orbs and line-art only, never literal blood imagery.
 */
export function CellFlowBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <div className="animate-cell-a absolute -top-24 -right-16 size-[28rem] rounded-full bg-rose/60 blur-3xl" />
      <div className="animate-cell-b absolute top-1/3 -left-24 size-[24rem] rounded-full bg-rose/50 blur-3xl" />
      <div className="animate-cell-c absolute bottom-[-6rem] right-1/4 size-[20rem] rounded-full bg-brand/[0.06] blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="120" cy="120" r="60" stroke="currentColor" className="text-brand" strokeWidth="1.5" />
        <circle cx="680" cy="200" r="90" stroke="currentColor" className="text-brand" strokeWidth="1.5" />
        <circle cx="600" cy="480" r="50" stroke="currentColor" className="text-brand" strokeWidth="1.5" />
        <circle cx="180" cy="460" r="34" stroke="currentColor" className="text-brand" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
