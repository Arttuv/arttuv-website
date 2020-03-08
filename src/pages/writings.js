import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import WritingsGallery from "../components/writings-gallery"

const IndexPage = () => (
  <Layout>
    <WritingsGallery />
  </Layout>)

export default IndexPage