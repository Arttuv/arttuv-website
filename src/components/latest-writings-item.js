import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"
  
const LatestWritingsItem = ({ post }) => (

  <article className="latest-writings-item">
    <div className="latest-writings-item-image">
    
      {post.frontmatter.featuredImage !== null && (
        <Img 
            sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
            style={{margin: 'auto auto', width: '128px'}}
          />
      )}

    </div>
      <div>
        
        <Link to={post.frontmatter.path}>
          <h3>{post.frontmatter.title}</h3>
        </Link>
        {post.frontmatter.summary !== null && (<p className="latest-writings-item-summary">{post.frontmatter.summary}</p>)} 
        {post.frontmatter.summary === null && (<p className="latest-writings-item-summary">{post.excerpt}</p>)} 
        
        <div className="latest-writings-item-summary-read-more">
        {post.frontmatter.tags !== null && ( 
          <div className="latest-writings-item-topic">{post.frontmatter.tags}</div>
        )}
            <Link to={post.frontmatter.path}>
            {post.frontmatter.date}
            </Link>
        </div>
      </div>
  </article>
)
export default LatestWritingsItem
