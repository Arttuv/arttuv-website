import { Link } from "gatsby"
import React from "react"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Footer = () => (
  <footer name="footer">
    <hr />
    <div className="footerContent">
      <div>
        <div className="rss-subscribe">
          <h1>Follow the updates on this site</h1>
          <div>
            <a href="/rss.xml">RSS Link</a>
            <p>Yes, RSS still exists \o/ Full text is provided in RSS so you'll never need to visit this site if you don't want to.</p>
          </div>
        </div>
      </div>
      <nav className="bottomNavigation">
        <ul style={{ listStyle: `none`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/writings/">Writings</ListLink>
          <ListLink to="/author/">Author</ListLink>
        </ul>
      </nav>
      </div>
      <div className="copyright">
        <p>
        © {new Date().getFullYear()} Arttu Viljakainen. 
        All texts published are under <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike License</a> - attribution is required. Ask permission before using any photos.
        Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <span>, icons by <a href="https://webkul.github.io/vivid/">Vivid</a> and <a href="https://www.iconfinder.com/Flatart">Flatart</a></span>
        </p>
    </div>
  </footer>  
)

export default Footer
