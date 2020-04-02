/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import BorderedTitle from "../components/bordered-title"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className = "page-container">
        <main>{children}</main>
        <footer style={{
          borderTopStyle: `solid`,
          borderTopWidth: `1px`,
          marginTop: '1.5rem',
          minHeight: `100%`,
          paddingTop: `1.5rem`
        }}>
          © {new Date().getFullYear()} Arttu V. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <span>, icons by <a href="https://webkul.github.io/vivid/">Vivid</a></span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
