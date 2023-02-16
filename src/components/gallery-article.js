import React from "react"
import { Link } from "gatsby"

const GalleryArticle = ({ post, type }) => (
  <article className={"archive-article-item " + "gallery-item-" + type}>
      <>
        <div>
          {post.frontmatter.tags !== null && (
            post.frontmatter.tags.map(tag => {
              return <div className="archive-article-item-topic" key={"gallery-article-item-topic" + tag}>
                {tag}
              </div>
            }))}
          <Link to={post.frontmatter.path}>
            <h3>{post.frontmatter.title}</h3>
          </Link>
          <div className="archive-article-item-summary-read-more">
            <span>
              {post.frontmatter.date}
              {post.fields.readingTime.text}
            </span>
          </div>
        </div>
      </>
  </article>
)
export default GalleryArticle
