import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WritingsGallery from "../components/writings-gallery"
import Image from "../components/image"
import SEO from "../components/seo"
import BorderedTitle from "../components/bordered-title"
import ImageFace from "../components/image-face"
import LatestWritings from "../components/latest-writings"
import TagsComponent from "../components/tags-component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div><BorderedTitle title="Latest" /></div>
    <LatestWritings />
    <div><BorderedTitle title="Author" /></div>
    <div className="about-me-container">
      <div className="about-me-image">
        <ImageFace />
      </div>
      
        <article className="about-me-text">
          <p>
            Arttu works as a software consultant focusing on how to help organizations work 
            in a more agile way. Programming has been a long passion for him, but he also 
            enjoys focusing on human-computer interaction and other aspects of software development.
          </p>
          <p>
            Follow on <a href="https://twitter.com/arttuv">Twitter</a> or add on <a href="https://www.linkedin.com/in/arttu-viljakainen/">LinkedIn.</a>
          </p>
          <p>
            This page is (being) built with Gatsby.
          </p>
        </article>
          
      </div>
        <BorderedTitle title="Archive" />
        <p className="archive-description">I have quite resently realized, that systems thinking is something that resonates with me and somewhat describes how I approach the world. Most of these writings are about human-computer interaction, but I expect there to be a lot of texts about how organizations do software in the future.</p>
        <div className="archive-tags">
          <TagsComponent />
        </div>
        <div className="archive">
          <WritingsGallery />
        </div>

    </Layout>
)

export default IndexPage
