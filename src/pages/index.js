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
    <div><BorderedTitle title="Latest Writings" /></div>
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
            Arttu is a software developer and works as a software consultant focusing on how to help 
            organizations build software in an agile way. Programming has been a long passion for him, but he also 
            enjoys the field of human-computer interaction and other aspects of software development. Humans as 
            collaborative digital tool makers is an interesting viewpoint.
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
        <BorderedTitle title="Topics" />
        <div className="archive-description">
          <p>
            Topics on this site are related to software development from various viewpoints - I don't limit myself too much. I'm conducting research on human-computer interaction and naturally have something to say about that as well.
          </p>
          <p>
            Lately I've been mainly interested in how teams and organizations create software, what kind of problems large software teams are facing, and how we could help them perform better.
          </p>
          <p>
            Learning new things is a big part of my life, and that's why I also write about notetaking, information processing (RSS and such), and everything related.
          </p>
        </div>
          
        <TagsComponent />
        <BorderedTitle title="Excerpts" />
        <div className="archive">
          <WritingsGallery />
        </div>

    </Layout>
)

export default IndexPage
