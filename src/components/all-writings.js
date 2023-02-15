import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AllWritingsItem from "./all-writings-item"

const AllWritings = () => (
  <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              type
              tags
              summary
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                } 
              }
            }
            fields {
              slug
              readingTime {
                text
              }
            }
          }
        }
      }
    }     
  `}

    render={data => (
                data.allMarkdownRemark.edges
                    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
                    .filter(edge => edge.node.frontmatter.type !== "graphical-page")
                    .map(edge => <AllWritingsItem key={edge.node.id} post={edge.node} />)
       
    )}
    
  />
)

export default AllWritings;