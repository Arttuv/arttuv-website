import React from "react"
import Layout from "../components/layout"
import AllWritings from "../components/all-writings"
import BorderedTitle from "../components/bordered-title"
import Seo from "../components/seo"

const WritingsPage = () => (
  <>
    <Seo title="Writings" />
    <Layout>
      <BorderedTitle title="Writings" />
      <article className="all-writings">
        <AllWritings />
      </article>
    </Layout>
    </>
  )

export default WritingsPage