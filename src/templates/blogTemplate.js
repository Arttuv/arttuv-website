import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} />
        <article className="blog-post">
            <p className="category">
              {frontmatter.tags !== null && (
                    frontmatter.tags.map( tag => {
                      return <span key={"link-span-key" + tag}>
                              {tag}
                              </span>
                    }))
              }
            </p>
            <h1>{frontmatter.title}</h1>
            <time>
              {frontmatter.date}
            </time>
            <hr />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      <div className="comment-section">
        <p>
          No comments, huh? I want to keep this site as low maintenance as possible (and not have any tracking). That's unfortunate, because I'd like to discuss topics I'm writing about, because any given text is just my understanding of it at that moment. You'd definitely have something valuable to say that would enable me to learn something new. 
        </p>
        <p>
          If you found a mistake, disagree or would like to discuss, 
          <a href={"mailto:arttu.viljakainen@gmail.com?subject=" + frontmatter.title + ""}> send me an email</a>.
        </p>
        </div>
    </Layout>
  )
}

export const writings = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        summary
        featuredImage {
            childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`

export default BlogTemplate;