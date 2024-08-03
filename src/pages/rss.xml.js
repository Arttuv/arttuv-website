import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export function GET(context) {
  const postImportResult = import.meta.glob('../pages/writings/*.md', { eager: true });
  const posts = Object.values(postImportResult);
  return rss({
    title: 'arttuv.com',
    description: 'Arttu Viljakainen',
    site: context.site,
    items: posts.map((post) => ({
      link: post.url,
      content: sanitizeHtml(post.compiledContent()),
      ...post.frontmatter,
    })),
  });
}