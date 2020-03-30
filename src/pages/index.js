import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WritingsGallery from "../components/writings-gallery"
import Image from "../components/image"
import SEO from "../components/seo"
import BorderedTitle from "../components/bordered-title"
import ImageFace from "../components/image-face"

const IndexPage = () => (
  <Layout>
    <h1>The Feedback Loop</h1>
    <div class="site-title">On creating digital tools and human-computer interactions in them</div>
    <SEO title="Home" />
    <div><BorderedTitle title="About Me" /></div>
    <div className="about-me-container">
      <div className="about-me-image">
        <ImageFace />
      </div>

      <article className="about-me-text">
          <p>
            Hi, I'm Arttu and I work with software. Currently I'm a software 
            consultant focusing on how to help organizations work in a more agile way. Programming has
            been a long passion for me and I've been working as a developer, but I'm also
            interested in human-computer interaction and other aspects of software development. I have
            quite resently realized, that systemic thinking is something that resonates with me 
            and somewhat describes how I approach the world. 
          </p>
          <p>
            As a <strong>software developer</strong> I’ve been working mostly with Java 
            doing mission critical C2 and training applications.
          </p>
          <p>
            As a <strong>PhD researcher</strong> I study the effects of advanced automation 
            to operator performance and SA. Full autonomy is still far ahead and in some environments may never be a feasible option. Therefore augmenting human cognitive abilities with autonomous systems is the most interesting approach for me.
          </p>
          <p>
            You can follow me on <a href="https://twitter.com/arttuv">Twitter</a> or add me on <a href="https://www.linkedin.com/in/arttu-viljakainen/">LinkedIn.</a>
          </p>
          <p>
            This page is (being) built with Gatsby.
          </p>

        </article>
          
      </div>
    <BorderedTitle title="Writings" />
    <div className="archive">
      <WritingsGallery />
    </div>

    </Layout>
)

export default IndexPage
