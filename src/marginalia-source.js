import sanitizeHtml from "sanitize-html";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { JSDOM } from "jsdom";

const writingsDirectory = join("src/content/writings");

export const marginaliaSourcePath = join("src/external-data", "marginalia-source.json");

export const marginaliaHtmlSanitizeOptions = {
  allowedTags: ["p", "a", "br", "em", "strong", "code"],
  allowedAttributes: {
    a: ["href", "target", "rel", "translate"],
  },
  allowedSchemes: ["http", "https", "mailto"],
};

export function sanitizeMarginaliaHtml(html) {
  return sanitizeHtml(html, marginaliaHtmlSanitizeOptions).trim();
}

function getMarkdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return getMarkdownFiles(entryPath);
    }

    return entry.name.endsWith(".md") ? [entryPath] : [];
  });
}

function getNestedFrontmatterValue(frontmatter, fieldName) {
  const match = frontmatter.match(new RegExp(`^\\s+${fieldName}:\\s*"?(.+?)"?$`, "m"));
  return match ? match[1] : null;
}

function getFrontmatterBlock(frontmatter, fieldName) {
  const match = frontmatter.match(new RegExp(`(?:^|\\n)${fieldName}:\\n([\\s\\S]*?)(?=\\n[^\\s][^\\n]*:|$)`));
  return match ? match[1] : null;
}

function getCanonicalMastodonStatusKey(instanceUrl, statusId) {
  return `${instanceUrl}:${statusId}`;
}

function getCanonicalMastodonDiscussionKey(url, statusId) {
  if (!url || !statusId) {
    return null;
  }

  try {
    const { host } = new URL(url);
    return getCanonicalMastodonStatusKey(host, statusId);
  } catch {
    return null;
  }
}

export function getWritingDiscussionKeys(provider = "Mastodon") {
  return new Set(
    getMarkdownFiles(writingsDirectory)
      .map((writingPath) => {
        const source = readFileSync(writingPath, "utf8");
        const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/);
        if (!frontmatterMatch) {
          return null;
        }

        const discussionBlock = getFrontmatterBlock(frontmatterMatch[1], "discussion");
        if (!discussionBlock) {
          return null;
        }

        const discussionProvider = getNestedFrontmatterValue(discussionBlock, "provider");
        const id = getNestedFrontmatterValue(discussionBlock, "id");
        const url = getNestedFrontmatterValue(discussionBlock, "url");

        if (discussionProvider && discussionProvider !== provider) {
          return null;
        }

        if (provider === "Mastodon") {
          return getCanonicalMastodonDiscussionKey(url, id);
        }

        return id;
      })
      .filter(Boolean),
  );
}

function toDisplayUrl(href) {
  try {
    const url = new URL(href);
    return `${url.host}${url.pathname}${url.search}`.replace(/\/$/, "");
  } catch {
    return href;
  }
}

function cleanMastodonStatusHtml(status) {
  const dom = new JSDOM(`<body>${status.content}</body>`);
  const { document } = dom.window;

  document.querySelectorAll("span.invisible").forEach((element) => {
    element.remove();
  });

  document.querySelectorAll("span.ellipsis").forEach((element) => {
    element.replaceWith(document.createTextNode(element.textContent ?? ""));
  });

  document.querySelectorAll("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) {
      return;
    }

    const text = anchor.textContent?.replace(/\s+/g, " ").trim() ?? "";
    anchor.textContent = text || toDisplayUrl(href);
  });

  if (status.card?.url) {
    document.querySelectorAll("p").forEach((paragraph) => {
      const links = Array.from(paragraph.querySelectorAll("a[href]"));
      if (links.length !== 1) {
        return;
      }

      const [link] = links;
      if (link.href !== status.card.url) {
        return;
      }

      link.remove();
      Array.from(paragraph.querySelectorAll("br")).forEach((lineBreak) => {
        lineBreak.remove();
      });

      const remainingText = paragraph.textContent?.replace(/\s+/g, " ").trim() ?? "";
      if (!remainingText) {
        paragraph.remove();
      }
    });
  }

  return sanitizeMarginaliaHtml(document.body.innerHTML);
}

function normalizeMastodonStatus(status) {
  const entry = {
    id: status.id,
    pubDate: status.created_at,
    source: {
      provider: "Mastodon",
      id: status.id,
      url: status.url,
    },
    discussion: {
      provider: "Mastodon",
      id: status.id,
      url: status.url,
      publishedAt: status.created_at,
    },
    html: cleanMastodonStatusHtml(status),
  };

  if (status.edited_at) {
    entry.updatedDate = status.edited_at;
  }

  if (status.language) {
    entry.language = status.language;
  }

  if (status.spoiler_text) {
    entry.spoilerText = status.spoiler_text;
  }

  if (status.tags.length > 0) {
    entry.tags = status.tags.map((tag) => tag.name);
  }

  if (status.card?.url && status.card?.title) {
    entry.card = {
      title: status.card.title,
      url: status.card.url,
    };

    if (status.card.description) {
      entry.card.description = status.card.description;
    }

    if (status.card.provider_name) {
      entry.card.providerName = status.card.provider_name;
    }

    if (status.card.image) {
      entry.card.image = status.card.image;
    }
  }

  return entry;
}

function isOwnPublicMarginaliaStatus(status, writingDiscussionKeys, username, instanceUrl) {
  const accountHandle = status.account?.acct;
  const ownAccountHandle = `${username}@${instanceUrl}`;

  return (accountHandle === username || accountHandle === ownAccountHandle)
    && status.visibility === "public"
    && status.reblog === null
    && status.in_reply_to_id === null
    && status.content.length > 0
    && !writingDiscussionKeys.has(getCanonicalMastodonStatusKey(instanceUrl, status.id));
}

export function buildMarginaliaSourceFromMastodon(statusesById, { username, instanceUrl }) {
  const writingDiscussionKeys = getWritingDiscussionKeys("Mastodon");

  return Object.values(statusesById)
    .map((entry) => entry.content)
    .filter((status) => isOwnPublicMarginaliaStatus(status, writingDiscussionKeys, username, instanceUrl))
    .reduce((entriesById, status) => {
      entriesById[getCanonicalMastodonStatusKey(instanceUrl, status.id)] = normalizeMastodonStatus(status);
      return entriesById;
    }, {});
}

export function writeMarginaliaSource(entriesById, filePath = marginaliaSourcePath) {
  writeFileSync(filePath, JSON.stringify(entriesById, null, 2));
}