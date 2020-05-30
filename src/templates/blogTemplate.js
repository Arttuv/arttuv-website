import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostSummary from "../components/blog-post-summary"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout small="small">
      <SEO title={frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div>
            <p className="blog-post-date">{frontmatter.date} <br />
            
            {frontmatter.tags !== null && ( 
              frontmatter.tags.map( tag => {
                return <span><Link to={`/tags/${kebabCase(tag)}/`}>
                        {"#" + tag}
                  </Link></span>
          }))
          }
            
            
            </p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <div className="commentsSection">
        <p>
          No comments, huh? I haven't found an easy and non-intrusive way to implements comments. I mean, I don't want to add a comment system that tracks people visiting this site etc. That's unfortunate, because I'd like to discuss topics I'm writing about, because any given text is just my understanding of it at that moment. You'd definitely have something valuable to say that would enable me to learn something new. 
        </p>
        <p>
          If you found a mistake, disagree or would like to discuss, <a href="https://twitter.com/arttuv">DM me on Twitter</a> or 
          <a href={"mailto:arttu.viljakainen@gmail.com?subject=" + frontmatter.title + ""}> send me an email</a>.
        </p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
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
                sizes(maxWidth: 250) {
                ...GatsbyImageSharpSizes
                }
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