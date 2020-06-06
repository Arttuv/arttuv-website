import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const CVPage = () => (
  <Layout>
    <SEO title="CV" />
    <h1>Arttu Viljakainen</h1>
    <p>
      I'm a software developer.
    </p>
    <p>
      I'm a PhD researcher in Tampere University focusing to studying how advanced automation and
      artificial intelligence should be incorporated to digital tools to empower human users.
    </p>
    <p>
      Follow on <a href="https://twitter.com/arttuv">Twitter</a> or add on <a href="https://www.linkedin.com/in/arttu-viljakainen/">LinkedIn.</a>
    </p>
  </Layout>
)

export default CVPage
