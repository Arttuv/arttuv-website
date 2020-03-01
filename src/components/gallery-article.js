import React from "react"
import { Link } from "gatsby"

const GalleryArticle = ({ post }) => (
  <article className="article">
      <Link to={post.frontmatter.path}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
    
    {post.frontmatter.summary !== null && (<p>{post.frontmatter.summary}</p>)} 
    {post.frontmatter.summary === null && (<p>{post.excerpt}</p>)} 
    <div className="article-read-more">
        <Link to={post.frontmatter.path}>
        {post.frontmatter.date}
        </Link>
    </div>
  </article>
)
export default GalleryArticle
