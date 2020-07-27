import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundImage } from "gatsby-background-image"
import kebabCase from "lodash/kebabCase"
import TagImage from "./tag-image"

var descriptions = {
    "hci": "Human-computer interaction, from professional application point of view.",
    "research": "Things related to my research or information gathering / overload.",
    "dev": "Usually these are about the less technical aspects of software development."
}
const TagComponent = ({ tagName, tagCount }) => (
<div className="tag-item" key={tagName}>
    <div className="tag-link">
        <Link to={`/tags/${kebabCase(tagName)}/`}>
            {tagName} ({tagCount})
        </Link>
        
    </div>
    <TagImage tagName={tagName}/>
    
    <p>{descriptions[tagName]}</p>
</div>
)
export default TagComponent
