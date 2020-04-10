import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"
  
const BlogPostSummary = ({ post }) => (

  <article className="blog-post-summary">
    <div className="blog-post-summary-image">
    
      {post.frontmatter.featuredImage !== null && (
        <Img 
            sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
            style={{margin: 'auto auto', width: '128px'}}
          />
      )}

    </div>
      
        {post.frontmatter.summary !== null && (<p className="blog-post-summary-text">{post.frontmatter.summary}</p>)} 
        
        <div className="blog-post-summary-info">
          {post.frontmatter.tags !== null && ( 
            <div className="blog-post-summary-tags">{post.frontmatter.tags}</div>
          )}
            {post.frontmatter.date}
        </div>
      
  </article>
)
export default BlogPostSummary
