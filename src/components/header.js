import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div style={{ margin: `0 auto`, maxWidth: `60rem`, padding: `1rem 1.0875rem 1.45rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `black` }}>
          <h3 style={{ display: `inline`, decoration: `none`}}>Arttu V.</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/writings/">Writings</ListLink>
        <ListLink to="/cv/">CV</ListLink>
      </ul>
  </header>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
