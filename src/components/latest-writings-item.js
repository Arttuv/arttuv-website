import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import kebabCase from "lodash/kebabCase"

const LatestWritingsItem = ({ post }) => (

  <article className="latest-writings-item" key={post.frontmatter.title}>
      <div>
        <div className="latest-writings-item-image">  
        <Link className="latest-writings-item-title" to={post.frontmatter.path}>
          <h3>{post.frontmatter.title}</h3>
        </Link>
        </div>
        <div>
            <p className="latest-writing-item-date">
              <span className="highlight-color">{post.frontmatter.date}</span>{", " + post.fields.readingTime.text}
            </p>
          </div>
        {post.frontmatter.summary !== null && (<p className="latest-writings-item-summary">{post.frontmatter.summary}</p>)} 
        {post.frontmatter.summary === null && (<p className="latest-writings-item-summary">{post.excerpt}</p>)} 
        {post.frontmatter.featuredImage !== null && (
            <Img 
                sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                style={{margin: 'auto auto', width: '100%'}}
              />
            )}
        <div className="latest-writings-item-summary-read-more">

          {post.frontmatter.tags !== null && ( 
            post.frontmatter.tags.map( tag => {
              return <span key={"link-to-"+tag}><Link to={`/tags/${kebabCase(tag)}/`}>
                      {"#" + tag}
                    </Link></span>
            }))
          }

        </div>
      </div>
  </article>
)
export default LatestWritingsItem
