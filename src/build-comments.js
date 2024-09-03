import { writeFile, readFileSync, existsSync } from 'fs';
import { join } from 'path';

const instanceUrl = 'scholar.social';
const username = 'arttuv';

const filePath = join('src/external-data/', `${instanceUrl}-${username}.json`);
const readById = await readFileSync(filePath, 'utf8');

const parsedById = JSON.parse(readById);

Object.entries(parsedById).forEach(([id, publication]) => { 

    const newComment = join('src/content/comments/', `${publication.content.created_at}.md`);
    const content = `---
author: ${publication.content.account.username}
pubDate: ${publication.content.created_at}
mastodon: "${publication.content.id}"
---`;

    if (publication.content.content.length > 0 && !existsSync(newComment)) {
        writeFile(newComment, content, (err) => {
            if (err) {
                console.error('Error creating the file:', err);
            } else {
                console.log(`File '${newComment}' has been created successfully!`);
            }
        });
    }
})