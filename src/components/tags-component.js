import React from "react"
import { graphql, StaticQuery } from "gatsby"
import TagComponent from "./tag-item"

const TagsComponent = () => (
  <div className="archive-tags-container">
    <h3>Tags</h3>
  <div className="archive-tags">
    
    <StaticQuery
    query={graphql`
    query {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}

    render=
      {data => (
        data.allMarkdownRemark.group
          .map(edge => <TagComponent key={edge.fieldValue} tagName={edge.fieldValue} tagCount={edge.totalCount} />) 
    )}
    
  />
  </div>
  </div>
)

export default TagsComponent;