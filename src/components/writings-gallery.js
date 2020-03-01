import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import GalleryArticle from "./gallery-article"

export default () => (
  <StaticQuery
    query={graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                summary
              }
            }
          }
        }
      }
    `}

    render={data => (
                data.allMarkdownRemark.edges
                    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
                    .map(edge => <GalleryArticle key={edge.node.id} post={edge.node} />)
       
    )}
    
  />
)