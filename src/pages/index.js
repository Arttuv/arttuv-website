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
    <SEO title="Home"/>
    <div><BorderedTitle title="Latest" /></div>
    <div className="latest-writings">
      <LatestWritings className="latest-writings" />
    </div>
    <div><BorderedTitle title="Author" /></div>
    <div className="about-me-container">
      <div className="about-me-image">
        <ImageFace />
      </div>
      
        <article className="about-me-text">
          <p>
            Arttu works as a software consultant focusing on how to help organizations build software 
            in an agile way. Programming has been a long passion for him, but he also 
            enjoys the field of human-computer interaction and other aspects of software development.
          </p>
          <p>
            Follow on <a href="https://twitter.com/arttuv">Twitter</a> or add on <a href="https://www.linkedin.com/in/arttu-viljakainen/">LinkedIn.</a> Read more about <Link to="/author/">author</Link>.
          </p>
          <p>
            This page is (being) built with Gatsby.
          </p>
        </article>
          
      </div>

        <BorderedTitle title="Pages" />
        <div className="editors-choice">
        <article>
          <h3> <Link to="/notetaking/">Notetaking</Link></h3>
          <p>I like taking handwritten notes, be it traditional pen & paper or digital iPad Pro & Apple Pencil.</p>
          <p>I buy too many pens and notebooks, and I'll never stop searching That Perfect notetaking app.</p>
        </article>
        <article>
          <h3> <Link to="/books/">Books</Link></h3>
          <p>I love books and I try to read as much as I can. I share the best over here.</p>
          <p>Concentrating on non-fiction.</p>
        </article>
        <article>
          <h3><Link to="/research/">Research</Link></h3>
          <p>I'm a PhD researcher at Tampere University.</p>
          <p>My research interest is how to design software to augment human cognitive performance.</p>
        </article>
        </div>
        <BorderedTitle title="Archive" />
        <p className="archive-description">I have quite resently realized, that systems thinking is something that resonates with me and somewhat describes how I approach the world. Most of these writings are about human-computer interaction, but I expect there to be a lot of texts about how organizations build software in the future.</p>
        <div className="archive-tags">
          <TagsComponent />
        </div>
        <div className="archive">
          <WritingsGallery />
        </div>

    </Layout>
)

export default IndexPage
