import { readFileSync } from "fs";
import { join } from "path";

export function GET() {
  try {
    const svgPath = join(process.cwd(), "public", "favicon.svg");
    const svg = readFileSync(svgPath);
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  } catch {
    const ico = Buffer.from(
      "AAABAAEAAQEAAAEAGAAwAAAAFgAAACgAAAABAAAAAgAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAA=",
      "base64"
    );
    return new Response(ico, {
      headers: { "Content-Type": "image/x-icon", "Cache-Control": "public, max-age=0, must-revalidate" },
    });
  }
}
