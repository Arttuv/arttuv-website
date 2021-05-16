import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import GraphicalLayout from "../components/graphical-layout"
import BackgroundSection from "../components/background-section"
import Header from "../components/header";

function getClassNames(small, dark) {
  let classNames = small ? "small-header-container" : "normal-header-container";
  classNames += dark ? " dark-header-container" : " light-header-container";
  return classNames;
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Seo title={frontmatter.title} />
      <div className={"header-container " + getClassNames("small", "dark")}>
        <Header small="small" dark="dark"></Header>
      </div>
      <div className="graphical-page-background">
        <div className="graphical-page-header-image">
          <BackgroundSection nameForClass="className" featuredImage={frontmatter.featuredImage} imageId={frontmatter.imageId}> 
          </BackgroundSection>
        </div>

        <GraphicalLayout small="small" title={frontmatter.title} summary={frontmatter.summary}>
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
        imageId
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
    site {
      siteMetadata {
        title
      }
    }
  }
`