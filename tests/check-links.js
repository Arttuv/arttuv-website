import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { JSDOM } from "jsdom";

const distDir = resolve("dist");

async function collectFiles(dir, files = new Map()) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(full, files);
    } else {
      const rel = "/" + full.slice(distDir.length + 1);
      files.set(rel, full);
    }
  }
  return files;
}

function resolveLink(href, fromPath) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  const url = new URL(clean, `http://localhost${fromPath}`);
  return url.pathname;
}

async function main() {
  const files = await collectFiles(distDir);
  const htmlFiles = [...files.entries()].filter(([p]) => p.endsWith(".html"));
  const broken = [];

  for (const [relPath, absPath] of htmlFiles) {
    const html = await readFile(absPath, "utf-8");
    const dom = new JSDOM(html);
    const anchors = dom.window.document.querySelectorAll("a[href]");

    for (const a of anchors) {
      const href = a.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("//")
      )
        continue;

      const resolved = resolveLink(href, relPath);
      if (!resolved) continue;

      const candidates = [
        resolved,
        resolved + "index.html",
        resolved.replace(/\/$/, "") + "/index.html",
      ];
      const found = candidates.some((c) => files.has(c));

      if (!found) {
        broken.push({ page: relPath, href, resolved });
      }
    }
  }

  if (broken.length > 0) {
    console.error(`\n❌ Found ${broken.length} broken internal link(s):\n`);
    for (const { page, href, resolved } of broken) {
      console.error(`  ${page}  →  ${href}  (resolved: ${resolved})`);
    }
    process.exit(1);
  }

  console.log(`✅ All internal links OK (checked ${htmlFiles.length} pages)`);
}

main();
