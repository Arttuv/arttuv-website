import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const AllWritingsItem = ({ post }) => (

  <article className="all-writings-item" key={post.frontmatter.title}>
      <div>
        <Link className="all-writings-item-title" to={post.frontmatter.path}>
          <h3>{post.frontmatter.title}</h3>
        </Link>   
        <div>
          <p className="latest-writing-item-date">
            <strong>{post.frontmatter.date}</strong>{", " + post.fields.readingTime.text}
          </p>
        </div>
      </div>
  </article>
)
export default AllWritingsItem
