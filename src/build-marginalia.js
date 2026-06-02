import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";
import { marginaliaSourcePath, sanitizeMarginaliaHtml } from "./marginalia-source.js";

const marginaliaDirectory = join("src/content/marginalia");

function slugifyDateTime(value) {
  return value
    .replace(/[:.]/g, "-")
    .replace(/Z$/i, "")
    .toLowerCase();
}

function deriveSlug(entry) {
  return slugifyDateTime(entry.pubDate);
}

function yamlQuoted(value) {
  return JSON.stringify(value);
}

function yamlBlock(key, value) {
  return `${key}: |-\n${value.split("\n").map((line) => `  ${line}`).join("\n")}`;
}

function normalizeTags(tags = []) {
  return tags
    .map((tag) => typeof tag === "string" ? tag : tag?.name)
    .filter((tag) => typeof tag === "string" && tag.trim().length > 0);
}

function buildFrontmatter(entry) {
  const tags = normalizeTags(entry.tags);
  const lines = [
    "---",
    `pubDate: ${entry.pubDate}`,
  ];

  if (entry.source) {
    lines.push("source:");
    lines.push(`  provider: ${yamlQuoted(entry.source.provider)}`);

    if (entry.source.id) {
      lines.push(`  id: ${yamlQuoted(entry.source.id)}`);
    }

    if (entry.source.url) {
      lines.push(`  url: ${yamlQuoted(entry.source.url)}`);
    }
  }

  if (entry.discussion) {
    lines.push("discussion:");
    if (entry.discussion.provider) {
      lines.push(`  provider: ${yamlQuoted(entry.discussion.provider)}`);
    }
    if (entry.discussion.id) {
      lines.push(`  id: ${yamlQuoted(entry.discussion.id)}`);
    }
    lines.push(`  url: ${yamlQuoted(entry.discussion.url)}`);
    if (entry.discussion.publishedAt) {
      lines.push(`  publishedAt: ${entry.discussion.publishedAt}`);
    }
  }

  if (entry.updatedDate) {
    lines.push(`updatedDate: ${entry.updatedDate}`);
  }

  if (entry.language) {
    lines.push(`language: ${yamlQuoted(entry.language)}`);
  }

  if (entry.spoilerText) {
    lines.push(`spoilerText: ${yamlQuoted(entry.spoilerText)}`);
  }

  if (tags.length > 0) {
    lines.push("tags:");
    tags.forEach((tag) => {
      lines.push(`  - ${yamlQuoted(tag)}`);
    });
  }

  if (entry.card?.url && entry.card?.title) {
    lines.push("card:");
    lines.push(`  title: ${yamlQuoted(entry.card.title)}`);
    lines.push(`  url: ${yamlQuoted(entry.card.url)}`);

    if (entry.card.description) {
      lines.push(`  description: ${yamlQuoted(entry.card.description)}`);
    }

    if (entry.card.providerName) {
      lines.push(`  providerName: ${yamlQuoted(entry.card.providerName)}`);
    }

    if (entry.card.image) {
      lines.push(`  image: ${yamlQuoted(entry.card.image)}`);
    }
  }

  lines.push("---");

  const body = sanitizeMarginaliaHtml(entry.html);
  return `${lines.join("\n")}\n\n${body}\n`;
}

function clearGeneratedMarginalia(directory) {
  if (!existsSync(directory)) {
    return;
  }

  readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      unlinkSync(join(directory, entry.name));
    }
  });
}

const entriesById = JSON.parse(readFileSync(marginaliaSourcePath, "utf8"));
const seenFileNames = new Map();

mkdirSync(marginaliaDirectory, { recursive: true });
clearGeneratedMarginalia(marginaliaDirectory);

Object.values(entriesById)
  .forEach((entry) => {
    const fileName = `${deriveSlug(entry)}.md`;
    const entryReference = entry.source?.url ?? entry.discussion?.url ?? entry.pubDate;

    if (seenFileNames.has(fileName)) {
      throw new Error(
        `Duplicate marginalia slug '${fileName}' for '${seenFileNames.get(fileName)}' and '${entryReference}'`,
      );
    }

    seenFileNames.set(fileName, entryReference);
    const filePath = join(marginaliaDirectory, fileName);
    writeFileSync(filePath, buildFrontmatter(entry));
    console.log(`File '${filePath}' has been created successfully!`);
  });