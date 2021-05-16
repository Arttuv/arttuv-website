import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GalleryArticle from "./gallery-article"

var types = ["title-and-image", "title-and-image", "title-and-image", "title-and-image", "title-and-image", "title-and-image", "title-and-image","title-and-image","title-and-image", "title-and-image"];

const WritingsGallery = () => (
  <StaticQuery
    query={graphql`
    query {
        allMarkdownRemark(skip: 2, limit: 10, sort: { order: DESC, fields: [frontmatter___date] }) {
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
                        fluid(maxWidth: 250) {
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
    render={ data => (
                data.allMarkdownRemark.edges
                    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
                    .filter(edge => edge.node.frontmatter.type !== "graphical-page")
                    .map( (edge, index) => <GalleryArticle key={edge.node.id} post={edge.node} type={types[index]} />)
    )}
    
  />
)

export default WritingsGallery;