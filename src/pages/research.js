import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Research" />
       <p>This page describes my research quite well.</p>
    </Layout>
)

export const query = graphql`
query {
    fileName: file(relativePath: { eq: "arttu_face_2019.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

`

export default IndexPage

