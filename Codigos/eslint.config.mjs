import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "fix-svg.js",
    "replace.js",
    "replace-dark-mode.js",
    "replace-hero.js",
    "src/fix-svg.js",
    "src/replace.js",
    "src/replace-dark-mode.js",
    "src/replace-hero.js",
  ]),
]);

export default eslintConfig;
