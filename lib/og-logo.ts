import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The logo as a data URI — `next/og` renders at build time and cannot fetch
 * relative asset paths, so the file is inlined instead.
 */
export const logoDataUri = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), "public", "logo.jpeg")
).toString("base64")}`;
