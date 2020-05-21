import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import AllWritings from "../components/all-writings"
import TagsComponent from "../components/tags-component"
import BorderedTitle from "../components/bordered-title"

const WritingsPage = () => (
    <Layout>
    <BorderedTitle title="Tags" />
    <div className="archive-tags">
      <TagsComponent />
    </div>    
    <BorderedTitle title="Writings" />
    <AllWritings />
    </Layout>
  )

export default WritingsPage