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
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Notetaking" />
        <article>
            <h1>
                Notetaking
            </h1>
            <p>
                I like taking notes by handwriting - you can almost always bring your notebook with you, and
                it doesn't feel as disrespectful to not down some words by hand compared to using computer for the same task.
            </p>

            <Img fluid={data.leuchtturmPentelTradio.childImageSharp.fluid}  />

            <p>
                Sometimes it isn't practical to use physical notebook, so I also have an iPad Pro with Apple Pencil for digital notetaking. iPad is exceptionally well suited for reading and marking books if they are in PDF format.
            </p>
            <h2>Physical Notetaking</h2>
            <p>
                My go-to notebook is Leuchttur1917 with dotted pages. The paper is of good quality, dots are right on spot and the pages have a bit yellowish color to them. For example Noona notebooks are too white and the dots are too close to each other. 
            </p>

            <Img fluid={data.leuchtturmBauhaus.childImageSharp.fluid}  />

            <p>
                Currently my favorite pen is Pentel Tradio 05. I like using rollerball pens because they are so smooth but also leave a solid mark.
            </p>
            <h2>Digital Notetaking</h2>
            <p> 
                I went through a lot of devices when I was looking for the perfect match for digital notetaking with a pen. Of course, there is no perfect way to do it, but the closest I could find is iPad Pro with Apple Pencil.
            </p>
            <Img fluid={data.ipadproprocreate.childImageSharp.fluid}  />
            <p>I have three kinds of digital notetaking needs:</p>
            <ul>
                <li>Reading and annotating PDF files</li>
                <li>Notetaking</li>
                <li>Sketchnoting</li>
            </ul>
            <p>
                <strong>Reading and annotating PDF files:</strong> Notability has been nerly pefect for this task. You can add PDF files to it and it converts them to notes, which you can read and annotate. It remembers where you are reading and annotating is effortless - you can highlight or add underlines and write on the margins. Exporting to PDF is a possibility as well, so you are not completely locked down to the app.
            </p>
            <p>
                Plain old <strong>notetaking</strong> is a bit trickier to tackle. Notability of course is a good option for notetaking too, but its organizational features are limited: you can create "folders" and put them into stacks, but that's it. No tags, no nested folders. GoodNotes has more features in this sense, but to me its UI feels a bit too crowded and I haven't used it much. I'm been using Bear a bit for keeping typed notes, and it also has very limited capability for hand written notes, but it definitely is not meant to be used that way. 
            </p>
            <p>
                Procreate is an awesome piece of software for painting and a really good candidate for <strong>sketchnoting</strong> as well. It has a good selection of calligraphy pens and writing and drawing always feels a pleasure. As a painting software it doesn't support multiple pages, unless you count the layers, so it can't be recommending it for notetaking is a bit risky. Still, nothing in the world of digital notetaking beats the feel of Procreate on iPad with Apple Pencil.
            </p>
        </article>
    </Layout>
)

export const query = graphql`
query {
    ipadproprocreate: file(relativePath: { eq: "ipad-pro-procreate.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leuchtturmPentelTradio: file(relativePath: { eq: "leuchtturm1917-pentel-tradio-05.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leuchtturmBauhaus: file(relativePath: { eq: "leuchtturm1917-bauhaus.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    
}

`

export default IndexPage

