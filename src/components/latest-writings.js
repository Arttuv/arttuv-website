import React from "react"
import { StaticQuery, graphql } from "gatsby"
import LatestWritingsItem from "./latest-writings-item"

const LatestWritings = () => (
  <StaticQuery
    query={graphql`
    query {
        allMarkdownRemark( limit: 2, sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                type
                path                
                title
                tags
                summary
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        }
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
                    .map(edge => <LatestWritingsItem key={edge.node.id} post={edge.node} />)
       
    )}
    
  />
)

export default LatestWritings;