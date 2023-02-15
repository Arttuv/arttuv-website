import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const AllWritingsItem = ({ post }) => (

  <article className="all-writings-item" key={post.frontmatter.title}>
  <Link to={post.frontmatter.path}>
    <h2>{post.frontmatter.title}</h2>
  </Link>
  <div>
    <p>{post.frontmatter.summary}</p>
    <time>
      <strong>{post.frontmatter.date}</strong>{", " + post.fields.readingTime.text}
    </time>
  </div>

  </article>
)
export default AllWritingsItem
