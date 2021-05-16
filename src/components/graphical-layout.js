/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Footer from "./footer";
import "./layout.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const GraphicalLayout = ({ children, small, title, summary }) => {
  const data = useStaticQuery(graphql`
    query PageTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className = {"page-container graphical-page"}>
        
        <div className="title-section">
          <h1>{title}</h1>
          <div className="title-motivation">
            <p>{summary}</p>
          </div>
      
        </div>
        <div className="graphical-page-menu">
            <ul style={{ listStyle: `none`}}>
              <ListLink to="/">Back Home</ListLink>
            </ul>
          </div>
      </div>
     
      <div className = {"graphical-page-container"}>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} small={small}/>
      </div>
    </>
  )
}

GraphicalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GraphicalLayout
