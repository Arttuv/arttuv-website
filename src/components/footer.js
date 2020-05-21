import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp';
import MailchimpSubscribe from "./mailchimp-subscribe";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Footer = ({ siteTitle, small}) => (

    <footer name="footer" style={{
        borderTopStyle: `solid`,
        borderTopWidth: `1px`,
        marginTop: '1.5rem',
        minHeight: `100%`,
        paddingTop: `1.5rem`
      }}>
  <div className="footerContent">

      <div>
      <MailchimpSubscribe />      
      </div>
      <div className="bottomNavigation">
          <ul style={{ listStyle: `none`}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/writings/">Writings</ListLink>
            <ListLink to="/author/">Author</ListLink>
            <a href="#top">^ Top</a>
          </ul>
        </div>
  </div>
        <div className="copyright">
          © {new Date().getFullYear()} Arttu V. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <span>, icons by <a href="https://webkul.github.io/vivid/">Vivid</a> and <a href="https://www.iconfinder.com/Flatart">Flatart</a></span>
      </div>

      </footer>
      )

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
