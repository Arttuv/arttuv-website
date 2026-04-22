import axios from 'axios';
import { existsSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { buildMarginaliaSourceFromMastodon, marginaliaSourcePath, writeMarginaliaSource } from './marginalia-source.js';
import { mastodonSources } from './mastodon-sources.js';

async function fetchMastodonPublications(instanceUrl, username) {
    try {
        // Step 1: Get the user's account information
        const userResponse = await axios.get(`https://${instanceUrl}/api/v1/accounts/lookup`, {
            params: {
                acct: username,
            },
        });

        const userId = userResponse.data.id;
        console.log(`Fetched user ID: ${userId} for username: ${username}`);

        // Step 2: Fetch the user's statuses (publications)
        let publications = [];
        let maxId = null;
        let fetchMore = true;

        while (fetchMore) {
            const statusesResponse = await axios.get(`https://${instanceUrl}/api/v1/accounts/${userId}/statuses`, {
                params: {
                    max_id: maxId,
                    limit: 40, // You can fetch up to 40 statuses at a time
                },
            });

            const statuses = statusesResponse.data;

            if (statuses.length === 0) {
                fetchMore = false;
            } else {
                publications = publications.concat(statuses);
                maxId = statuses[statuses.length - 1].id;
            }
        }

        console.log(`Fetched ${publications.length} publications for user ${username}`);
        return publications;
    } catch (error) {
        console.error('Error fetching publications:', error);
        return [];
    }
}

function readCachedStatuses(filePath) {
    if (!existsSync(filePath)) {
        return {};
    }

    return JSON.parse(readFileSync(filePath, 'utf8'));
}

async function updateData({ instanceUrl, username }) {
    const publications = await fetchMastodonPublications(instanceUrl, username);
    const fetchedById = publications.reduce( (dictionary, publication) => {
        dictionary[publication.id] = {
            'id': publication.id,
            'content': publication
        }
        return dictionary;
    }, {});

    const filePath = join('src/external-data/', `${instanceUrl}-${username}.json`);

    const parsedById = readCachedStatuses(filePath);

    const mergedById = {...parsedById, ...fetchedById};

    writeFileSync(filePath, JSON.stringify(mergedById, null, 2));

    return buildMarginaliaSourceFromMastodon(mergedById, { instanceUrl, username });
}

async function updateAllData() {
    const allMarginaliaEntries = {};

    for (const source of mastodonSources) {
        const sourceEntries = await updateData(source);
        Object.assign(allMarginaliaEntries, sourceEntries);
    }

    writeMarginaliaSource(allMarginaliaEntries, marginaliaSourcePath);
    console.log(`Wrote ${Object.keys(allMarginaliaEntries).length} normalized marginalia entries to ${marginaliaSourcePath}`);
}

updateAllData();

