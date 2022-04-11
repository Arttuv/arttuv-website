import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      devPlaceholderImage: file(relativePath: { eq: "dev-placeholder.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      researchPlaceholderImage: file(relativePath: { eq: "research-placeholder.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  const hciPlaceholderImage = getImage(data.hciPlaceholderImage.childImageSharp)
  const devPlaceholderImage = getImage(data.devPlaceholderImage.childImageSharp)
  const researchPlaceholderImage = getImage(data.researchPlaceholderImage.childImageSharp)

  return <div className="tag-image">
    {console.log(tagName)}
    {tagName === 'hci' && 
      <GatsbyImage image={hciPlaceholderImage} />
    }
    {tagName === 'dev' && 
      <GatsbyImage image={devPlaceholderImage} />
    } 
    {tagName === 'research' && 
      <GatsbyImage image={researchPlaceholderImage} />
    } 
    </div>
}

export default TagImage
