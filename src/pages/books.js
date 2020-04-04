import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WritingsGallery from "../components/writings-gallery"
import Image from "../components/image"
import SEO from "../components/seo"
import BorderedTitle from "../components/bordered-title"
import ImageFace from "../components/image-face"
import LatestWritings from "../components/latest-writings"
import TagsComponent from "../components/tags-component"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Books" />
        <h1>Books</h1>
        <p>This is a bit... unfinished.</p>
    </Layout>
)

export const query = graphql`
query {
    fileName: file(relativePath: { eq: "arttu_face_2019.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

`

export default IndexPage

