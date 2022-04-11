import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const GalleryArticle = ({ post, type }) => (

  <article className={"archive-article-item " + "gallery-item-" + type}>

    {type === 'title-and-image' && (
      <>
        <div>
          {post.frontmatter.tags !== null && (
            post.frontmatter.tags.map(tag => {
              return <div className="archive-article-item-topic" key={"gallery-article-item-topic" + tag}><Link to={`/tags/${kebabCase(tag)}/`}>
                {tag}
              </Link></div>
            }))}
          <Link to={post.frontmatter.path}>
            <h3>{post.frontmatter.title}</h3>
          </Link>
          <div className="archive-article-item-summary-read-more">
            <span>
              {post.frontmatter.date}
              {", " + post.fields.readingTime.text}
            </span>
          </div>
        </div>

        <div className="archive-article-item-image">

          {post.frontmatter.featuredImage !== null && (
            <GatsbyImage image={getImage(post.frontmatter.featuredImage.childImageSharp)}/>
          )}

        </div>
      </>
    )}

    {type === 'title-and-text' && (
      <>
        <div>
          {post.frontmatter.tags !== null && (
            post.frontmatter.tags.map(tag => {
              return <div className="archive-article-item-topic" key={"gallery-article-item-topic" + tag}><Link to={`/tags/${kebabCase(tag)}/`}>
                {tag}
              </Link></div>
            }))}
          <Link to={post.frontmatter.path}>
            <h3>{post.frontmatter.title}</h3>
          </Link>
          {post.frontmatter.summary !== null && (<p className="archive-article-item-summary">{post.frontmatter.summary}</p>)}
          {post.frontmatter.summary === null && (<p className="archive-article-item-summary">{post.excerpt}</p>)}

          <div className="archive-article-item-summary-read-more">
            <span>
              {post.frontmatter.date}
              {", " + post.fields.readingTime.text}
            </span>
          </div>
        </div>

      </>
    )}

    {type === 'quote' && (
      <>
        <div>
         
          {post.frontmatter.summary !== null && (<blockquote className="archive-article-item-quote">{post.frontmatter.summary}</blockquote>)}
          {post.frontmatter.summary === null && (<blockquote className="archive-article-item-quote">{post.excerpt}</blockquote>)}

          <div className="archive-article-item-summary-read-more">
          <Link to={post.frontmatter.path}>
            <span>{post.frontmatter.title + " "}</span>
          </Link>
           <span>
                {post.frontmatter.date}
                {", " + post.fields.readingTime.text + " "}
              </span>
              
          </div>
        </div>

      </>
    )}
  </article>
)
export default GalleryArticle
