/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import Footer from "./footer";
import "./layout.css"

function getClassNames(small, dark) {
  let classNames = small ? "small-header-container" : "normal-header-container";
  classNames += dark ? " dark-header-container" : " light-header-container";
  return classNames;
}

const Layout = ({ children, small, dark }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <a name="top"></a>
      <div className={"header-container " + getClassNames(small, dark)}>
        <Header siteTitle={data.site.siteMetadata.title} small={small}/>
      </div>
      <div className = {"page-container"}>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} small={small}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
