import React from "react"
import Layout from "../components/layout"
import AllWritings from "../components/all-writings"
import TagsComponent from "../components/tags-component"
import BorderedTitle from "../components/bordered-title"
import Seo from "../components/seo"

const WritingsPage = () => (
  <>
    <Seo title="Writings" />
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