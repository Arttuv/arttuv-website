import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostSummary = ({ post }) => (
  <article className="blog-post-summary">
    <div className="blog-post-summary-image">
    
      {post.frontmatter.featuredImage !== null && (
        <GatsbyImage image={getImage(post.frontmatter.featuredImage.childImageSharp)}/>
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
