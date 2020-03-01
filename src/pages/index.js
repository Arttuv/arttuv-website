import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WritingsGallery from "../components/writings-gallery"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Software, Human-Computer Interaction</h1>
    <p>Hi, I'm Arttu and I work with software. Currently I'm a software 
      consultant focusing on how to help organizations work in a more agile way.
    </p>
    <p>As a software developer I’ve been working mostly with Java 
      doing mission critical C2 and training applications.
    </p>
    <p>As a PhD researcher I study the effects of advanced automation 
      to operator performance and SA. Full autonomy is still far ahead and in some environments may never be a feasible option. Therefore augmenting human cognitive abilities with autonomous systems is the most interesting approach for me.</p>
    <p>
      You can follow me on <a href="https://twitter.com/arttuv">Twitter</a> or add me on <a href="https://www.linkedin.com/in/arttu-viljakainen/">LinkedIn.</a>
    </p>
    <p>
      This pages is under construction - I'm transitioning my content from WP to Gatsby.
    </p>
    <div className="archive">
      <WritingsGallery />
    </div>

    </Layout>
)

export default IndexPage
