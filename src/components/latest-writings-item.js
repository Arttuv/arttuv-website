import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const LatestWritingsItem = ({ post }) => (

  <article className="latest-writings-item" key={post.frontmatter.title}>
      <div>
      <div className="latest-writings-item-summary-read-more">
          {post.frontmatter.tags !== null && ( 
        post.frontmatter.tags.map( tag => {
          return <span key={"link-to-"+tag}><Link to={`/tags/${kebabCase(tag)}/`}>
                  {"" + tag}
                </Link></span>
        }))
      }
    </div>
        <Link className="latest-writings-item-title" to={post.frontmatter.path}>
          <h3>{post.frontmatter.title}</h3>
        </Link>
        <div>
            <p className="latest-writing-item-date">
              <strong>{post.frontmatter.date}</strong>{", " + post.fields.readingTime.text}
            </p>
          </div>
        {post.frontmatter.summary !== null && (<p className="latest-writings-item-summary">{post.frontmatter.summary}</p>)} 
        {post.frontmatter.summary === null && (<p className="latest-writings-item-summary">{post.excerpt}</p>)} 
        {post.frontmatter.featuredImage !== null && (
            <GatsbyImage image={getImage(post.frontmatter.featuredImage.childImageSharp)}/>
            )}
      </div>
  </article>
)
export default LatestWritingsItem
