import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostSummary from "../components/blog-post-summary"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import GraphicalLayout from "../components/graphical-layout"
import WritingsGallery from "../components/writings-gallery"
import Image from "../components/image"
import BorderedTitle from "../components/bordered-title"
import ImageFace from "../components/image-face"
import LatestWritings from "../components/latest-writings"
import TagsComponent from "../components/tags-component"
import Img from "gatsby-image"
import BackgroundSection from "../components/background-section"
import Header from "../components/header";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title="Notetaking" />
      <Header small="small" dark="dark"></Header>
      <div className="graphical-page-background">
        <div className="graphical-page-header-image">
          <BackgroundSection> 
          </BackgroundSection>
        </div>

        <GraphicalLayout small="small">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}/>
        </GraphicalLayout>
      </div>

    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        summary
        featuredImage {
            childImageSharp {
                sizes(maxWidth: 250) {
                ...GatsbyImageSharpSizes
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
    ipadproprocreate: file(relativePath: { eq: "ipad-pro-procreate.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leuchtturmPentelTradio: file(relativePath: { eq: "leuchtturm1917-pentel-tradio-05.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leuchtturmBauhaus: file(relativePath: { eq: "leuchtturm1917-bauhaus.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
  }
`