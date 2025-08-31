// scripts/hash.mjs
// Usage: node scripts/hash.mjs "Your Access Code"

import { createHash } from "node:crypto";

const pass = process.argv.slice(2).join(" ");
if (!pass) {
  console.error('Usage: node scripts/hash.mjs "Your Access Code"');
  process.exit(1);
}

const hash = createHash("sha256").update(pass, "utf8").digest("hex");
console.log(hash);