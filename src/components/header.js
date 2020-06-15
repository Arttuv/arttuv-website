import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

function getClassNames(small, dark) {
  let classNames = small ? "small-header" : "normal-header";
  classNames += dark ? " dark-header" : " light-header";
  return classNames;
}

const Header = ({ small, dark }) => 
(
  <>
    <a name="top"></a>
      <header className={getClassNames(small, dark)}>
        {!small ? (<span style={{display: 'block'}}></span>) : null}
          {!small && (
            <span className="site-title">
            <Link to="/" style={{ textAlign: 'center', textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `black` }}>
              <h1>A. <br /> Viljakainen</h1>
            </Link>

            <div className="site-description">On creating digital tools and human-computer interactions in them</div>
          </span>
          )}
          {small && (
            <span className="site-title-small">
            <Link to="/" style={{ textAlign: 'center', textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `black` }}>
              <h1>A. Viljakainen</h1>
            </Link>
          </span>
          )}    

        <ul style={{ listStyle: `none`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/writings/">Writings</ListLink>
          <ListLink to="/author/">Author</ListLink>
        </ul>
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
