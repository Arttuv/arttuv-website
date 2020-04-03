import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"

const GalleryArticle = ({ post }) => (

  <article className="archive-article-item">
    <div>
      
      <Link to={post.frontmatter.path}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
      {post.frontmatter.summary !== null && (<p className="archive-article-item-summary">{post.frontmatter.summary}</p>)} 
      {post.frontmatter.summary === null && (<p className="archive-article-item-summary">{post.excerpt}</p>)} 
      
      <div className="archive-article-item-summary-read-more">
      {post.frontmatter.tags !== null && ( 
        <div className="archive-article-item-topic">{post.frontmatter.tags}</div>
      )}
          <Link to={post.frontmatter.path}>
          {post.frontmatter.date}
          </Link>
      </div>
    </div>
  
    <div className="archive-article-item-image">
  
      {post.frontmatter.featuredImage !== null && (
        <Img 
            sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
            style={{margin: 'auto auto', width: '96px'}}
          />
      )}

    </div>
</article>
)
export default GalleryArticle
