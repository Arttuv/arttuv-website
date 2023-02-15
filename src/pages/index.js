import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WritingsGallery from "../components/writings-gallery"
import Seo from "../components/seo"
import BorderedTitle from "../components/bordered-title"
import LatestWritings from "../components/latest-writings"
import TagsComponent from "../components/tags-component"

const IndexPage = () => (
  <Layout>
    <Seo title="Home"/>
    <div><BorderedTitle title="Latest Writings" /></div>
    <div className="latest-writings">
      <LatestWritings className="latest-writings" />
    </div>
      <div className="archive">
        <WritingsGallery />
      </div>
    </Layout>
)

export default IndexPage
