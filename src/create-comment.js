import { writeFile } from 'fs';
import { join } from 'path';

// Get the current timestamp
const timestamp = new Date().toISOString().replace(/:/g, '-');
const filename = `${timestamp}.md`;

// Content to be written in the new file
const content = `---
author: ${process.argv[2]}
pubDate: ${timestamp}
target: must add something
---
`;

// Define the file path
const filePath = join('src/content/comments/', filename);

// Write the file
writeFile(filePath, content, (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log(`File '${filename}' has been created successfully!`);
    }
});