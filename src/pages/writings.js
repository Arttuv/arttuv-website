import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import AllWritings from "../components/all-writings"

const IndexPage = () => (
  <Layout>
    <AllWritings />
  </Layout>)

export default IndexPage