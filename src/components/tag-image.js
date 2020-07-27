import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const TagImage = ({tagName}) => {
  const data = useStaticQuery(graphql`
    query {
      hciPlaceholderImage: file(relativePath: { eq: "hci-placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      devPlaceholderImage: file(relativePath: { eq: "dev-placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      researchPlaceholderImage: file(relativePath: { eq: "research-placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <div className="tag-image">
    {console.log(tagName)}
    {tagName === 'hci' && 
      <Img fluid={data.hciPlaceholderImage.childImageSharp.fluid}  />
    }
    {tagName === 'dev' && 
      <Img fluid={data.devPlaceholderImage.childImageSharp.fluid}  />
    } 
    {tagName === 'research' && 
      <Img fluid={data.researchPlaceholderImage.childImageSharp.fluid}  />
    } 
    </div>
}

export default TagImage
