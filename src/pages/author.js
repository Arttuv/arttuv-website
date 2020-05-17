import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const CVPage = () => (
  <Layout>
    <SEO title="Arttu Viljakainen" />
    <h1>Arttu Viljakainen</h1>
    <p>
      I work as a software consultant focusing on how to help organizations build software 
      in an agile way. Programming has been a long passion for him, but he also 
      enjoys the field of human-computer interaction and other aspects of software development.
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
