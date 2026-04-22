import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { buildMarginaliaSourceFromMastodon, marginaliaSourcePath, writeMarginaliaSource } from "./marginalia-source.js";
import { mastodonSources } from "./mastodon-sources.js";

const entriesById = {};

mastodonSources.forEach(({ instanceUrl, username }) => {
	const rawMastodonDataPath = join("src/external-data", `${instanceUrl}-${username}.json`);
	if (!existsSync(rawMastodonDataPath)) {
		console.warn(`Skipping missing Mastodon cache file: ${rawMastodonDataPath}`);
		return;
	}

	const statusesById = JSON.parse(readFileSync(rawMastodonDataPath, "utf8"));
	Object.assign(entriesById, buildMarginaliaSourceFromMastodon(statusesById, { instanceUrl, username }));
});

writeMarginaliaSource(entriesById, marginaliaSourcePath);

console.log(`File '${marginaliaSourcePath}' has been created successfully!`);