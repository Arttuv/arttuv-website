import axios from 'axios';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

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
    }
}


async function updateData(instanceUrl, username) {

    const publications = await fetchMastodonPublications(instanceUrl, username);
    const fetchedById = publications.reduce( (dictionary, publication) => {
        dictionary[publication.id] = {
            'id': publication.id,
            'content': publication
        }
        return dictionary;
    }, {});

    const filePath = join('src/external-data/', `${instanceUrl}-${username}.json`);
    
    const readById = await readFileSync(filePath, 'utf8');
    const parsedById = JSON.parse(readById);

    const mergedById = {...parsedById, ...fetchedById};
    console.log(mergedById);

    writeFileSync(filePath, JSON.stringify(mergedById, null, 2));
}

const instanceUrl = 'scholar.social';
const username = 'arttuv';

updateData(instanceUrl, username);

