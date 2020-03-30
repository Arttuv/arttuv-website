import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"

const GalleryArticle = ({ post }) => (

  <article className="article">
      {post.frontmatter.featuredImage !== null && (
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      )}
      <div>
        <Link to={post.frontmatter.path}>
          <h3>{post.frontmatter.title}</h3>
        </Link>
        {post.frontmatter.tags !== null && ( 
          <div className="article-topic">{post.frontmatter.tags}</div>
        )}
        {post.frontmatter.summary !== null && (<p>{post.frontmatter.summary}</p>)} 
        {post.frontmatter.summary === null && (<p>{post.excerpt}</p>)} 
        <div className="article-read-more">
            <Link to={post.frontmatter.path}>
            {post.frontmatter.date}
            </Link>
        </div>
      </div>
  </article>
)
export default GalleryArticle
