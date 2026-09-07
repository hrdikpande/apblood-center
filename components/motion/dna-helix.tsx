/** Fine line-art DNA helix accent — pure CSS/SVG stroke animation. */
export function DnaHelix({ className = "h-16 w-6" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 0 C4 20, 36 20, 36 40 C36 60, 4 60, 4 80 C4 100, 36 100, 36 120 C36 140, 4 140, 4 160"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand/25 animate-helix"
        strokeDasharray="6 6"
      />
      <path
        d="M36 0 C36 20, 4 20, 4 40 C4 60, 36 60, 36 80 C36 100, 4 100, 4 120 C4 140, 36 140, 36 160"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-ruby/20 animate-helix"
        strokeDasharray="6 6"
      />
    </svg>
  );
}
