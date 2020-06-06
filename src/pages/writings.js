import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import AllWritings from "../components/all-writings"
import TagsComponent from "../components/tags-component"
import BorderedTitle from "../components/bordered-title"
import SEO from "../components/seo"

const WritingsPage = () => (
  <>
    <SEO title="Writings" />
    <Layout>
      <BorderedTitle title="Tags" />
      <div className="archive-tags">
        <TagsComponent />
      </div>    
      <BorderedTitle title="Writings" />
      <div className="latest-writings">
        <AllWritings />
      </div>
    </Layout>
    </>
  )

export default WritingsPage