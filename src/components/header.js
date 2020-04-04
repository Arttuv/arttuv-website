import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div style={{ margin: `0 auto`, maxWidth: `60rem`, padding: `1rem 1.0875rem 0rem` }}>
    <header style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'row' }}>
      <span style={{display: 'block'}}></span>
      
        <span className="site-title">
        <Link to="/" style={{ textAlign: 'center', textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `black` }}>
          <h1>The <br/>Feedback Loop</h1>
          </Link>
          <div className="site-description">On creating digital tools and human-computer interactions in them</div>
        </span>
      
      <ul style={{ listStyle: `none`}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/writings/">Writings</ListLink>
        <ListLink to="/author/">Author</ListLink>
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
