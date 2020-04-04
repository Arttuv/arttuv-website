import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"
import kebabCase from "lodash/kebabCase"
import TagImage from "./tag-image"
const TagComponent = ({ tagName, tagCount }) => (
<div className="tag-item" key={tagName}>
    <TagImage tagName={tagName}/>
    <div className="tag-link">
        <Link to={`/tags/${kebabCase(tagName)}/`}>
            {tagName} ({tagCount})
        </Link>
    </div>
</div>
)
export default TagComponent
