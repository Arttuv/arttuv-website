import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

// Check documentation https://docs.astro.build/en/guides/rss/#including-full-post-content
export async function get(context) {
  const postImportResult = import.meta.glob('./writings/*.md', {eager: true} )
  const posts = Object.values(postImportResult)
  return rss({
    title: 'arttuv.com',
    description: 'Arttu Viljakainen',
    site: context.site,
    items: posts.map((post) => ({
      link: post.url,
      content: sanitizeHtml(post.compiledContent()),
      ...post.frontmatter
    })),
  });
}