import React from "react"
import { Link } from "gatsby"

const GalleryArticle = ({ post }) => (
  <article className="article">
    <h3>{post.frontmatter.title}</h3>
    {post.frontmatter.summary !== null && (<p>{post.frontmatter.summary}</p>)} 
    {post.frontmatter.summary === null && (<p>{post.excerpt}</p>)} 
    
    <p>{post.frontmatter.date}</p>
  </article>
)
export default GalleryArticle
