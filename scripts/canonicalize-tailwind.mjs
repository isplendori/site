// One-shot script: convert arbitrary Tailwind values to canonical scale.
// Run from project root: node scripts/canonicalize-tailwind.mjs
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "src";
const SPACING_PREFIXES = [
  "gap", "gap-x", "gap-y",
  "p", "px", "py", "pt", "pb", "pl", "pr",
  "m", "mx", "my", "mt", "mb", "ml", "mr",
  "w", "h", "min-w", "min-h", "max-w", "max-h",
  "top", "bottom", "left", "right", "inset", "inset-x", "inset-y",
  "leading", "size", "translate-x", "translate-y",
];

const ROUNDED_MAP = {
  "2px": "sm",
  "4px": "sm",
  "6px": "md",
  "8px": "lg",
  "12px": "xl",
  "16px": "2xl",
  "24px": "3xl",
};

let touched = 0;

function pxToCanonical(px) {
  // Only convert integers. Decimals stay arbitrary.
  if (!/^\d+$/.test(px)) return null;
  const n = parseInt(px, 10);
  const divided = n / 4;
  return divided % 1 === 0 ? String(divided) : String(divided);
}

function transform(content) {
  let out = content;

  // spacing prefixes: prefix-[Npx]
  for (const prefix of SPACING_PREFIXES) {
    const re = new RegExp(`\\b${prefix.replace(/-/g, "\\-")}-\\[(\\d+)px\\]`, "g");
    out = out.replace(re, (_, px) => {
      const c = pxToCanonical(px);
      return c == null ? `${prefix}-[${px}px]` : `${prefix}-${c}`;
    });
  }

  // negative spacing: -prefix-[Npx]
  for (const prefix of SPACING_PREFIXES) {
    const re = new RegExp(`-${prefix.replace(/-/g, "\\-")}-\\[(\\d+)px\\]`, "g");
    out = out.replace(re, (_, px) => {
      const c = pxToCanonical(px);
      return c == null ? `-${prefix}-[${px}px]` : `-${prefix}-${c}`;
    });
  }

  // rounded named replacements
  for (const [px, name] of Object.entries(ROUNDED_MAP)) {
    out = out.replaceAll(`rounded-[${px}]`, `rounded-${name}`);
    out = out.replaceAll(`rounded-t-[${px}]`, `rounded-t-${name}`);
    out = out.replaceAll(`rounded-b-[${px}]`, `rounded-b-${name}`);
    out = out.replaceAll(`rounded-l-[${px}]`, `rounded-l-${name}`);
    out = out.replaceAll(`rounded-r-[${px}]`, `rounded-r-${name}`);
    out = out.replaceAll(`rounded-tl-[${px}]`, `rounded-tl-${name}`);
    out = out.replaceAll(`rounded-tr-[${px}]`, `rounded-tr-${name}`);
    out = out.replaceAll(`rounded-bl-[${px}]`, `rounded-bl-${name}`);
    out = out.replaceAll(`rounded-br-[${px}]`, `rounded-br-${name}`);
  }

  // font-family arbitrary -> font-* utility
  out = out.replace(/\[font-family:var\(--font-([\w-]+)\)\]/g, "font-$1");

  return out;
}

async function walk(dir) {
  const entries = await readdir(dir);
  for (const name of entries) {
    const path = join(dir, name);
    const s = await stat(path);
    if (s.isDirectory()) {
      await walk(path);
    } else if (s.isFile() && [".tsx", ".ts"].includes(extname(name))) {
      const original = await readFile(path, "utf8");
      const updated = transform(original);
      if (updated !== original) {
        await writeFile(path, updated, "utf8");
        touched++;
        console.log("updated:", path);
      }
    }
  }
}

await walk(ROOT);
console.log(`\ndone — ${touched} file(s) touched.`);
