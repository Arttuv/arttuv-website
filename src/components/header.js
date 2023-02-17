import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ small, dark }) => 
(
  <>
      <header>  
        <span className="site-title">
          <Link to="/" style={{ textAlign: 'center', textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `black` }}>
            <h1>arttuv.com</h1>
          </Link>
        </span>
        <nav>
          <ul style={{ listStyle: `none`}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/writings/">Writings</ListLink>
            <ListLink to="/author/">Author</ListLink>
          </ul>
        </nav>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
