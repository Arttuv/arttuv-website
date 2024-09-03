import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts =  (await getCollection('writings')).map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.summary,
    link: `/${post.collection}/${post.slug}/`,
    body: post.body
  }))
  const allItems = [...posts]
  allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  return rss({
    // `<title>` field in output xml
    title: 'arttuv.com',
    // `<description>` field in output xml
    description: 'Arttu Viljakainen, a software development consultant',
    // Pull in your project "site" from the endpoint context
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: allItems.map((post) => ({
      link: post.link,
      content: sanitizeHtml(parser.render(post.body)),
      ...post,
    })),
  });
}
