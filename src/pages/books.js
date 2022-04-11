import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Books" />
        <h1>Books</h1>
        <p>This is a bit... unfinished.</p>
    </Layout>
)

export const query = graphql`
query {
    fileName: file(relativePath: { eq: "arttu_face_2019.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }

`

export default IndexPage

