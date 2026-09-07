import { DISCLAIMER_TEXT } from "@/content/site";

export function DisclaimerBlock() {
  return (
    <p className="text-xs leading-relaxed text-text-light/80">
      <span className="font-semibold text-text-light">Medical disclaimer: </span>
      {DISCLAIMER_TEXT}
    </p>
  );
}
