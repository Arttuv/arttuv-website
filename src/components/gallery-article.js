import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"
import kebabCase from "lodash/kebabCase"

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
          post.frontmatter.tags.map( tag => {
            return <div className="archive-article-item-topic" key={"gallery-article-item-topic" + tag}><Link to={`/tags/${kebabCase(tag)}/`}>
                    {"#" + tag}
                  </Link></div>
          }))}

      <span>
        {post.frontmatter.date}
        {", " + post.fields.readingTime.text}
      </span>
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
