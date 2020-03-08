import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"

const GalleryArticle = ({ post }) => (

  <article className="article">
      <Link to={post.frontmatter.path}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
      {post.frontmatter.featuredImage !== null && (
        <Img style={{width: `20%`, float: `left`, marginRight: `1.5rem`, filter: `grayScale(100%)`, filter: `opacity(.8)`, display: `inline-block`}} sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
    )}
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
