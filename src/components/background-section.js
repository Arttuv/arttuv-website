import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
// Use the following to support legacy browsers like IE11:
// import BackgroundImage from 'gatsby-background-image-es5'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js
 * @return {*}
 * @constructor
 */
const BackgroundSection = styled(({ title, className, children, featuredImage, imageId }) => {

  const imageData = featuredImage.childImageSharp.fluid
  return (
      <>
    <StyledFullScreenWrapper>
        <BackgroundImage
          Tag="section"
          className={className}
          // To style via external CSS see layout.css last examples:
          // className="test"
          fluid={imageData}
          backgroundColor={`#040e18`}
          // Title get's passed to both container and noscriptImg.
          title={imageId}
          // style={{
          //   // Defaults are overwrite-able by setting one of the following:
          //   // backgroundSize: '',
          //   // backgroundPosition: '',
          //   // backgroundRepeat: '',
          // }}
          // To "force" the classic fading in of every image (especially on
          // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
          // fadeIn={`soft`}
          // To be able to use stacking context changing elements yourself,
          // set this to true to disable the "opacity hack":
          // preserveStackingContext={true}
          // You can "safely" (look them up beforehand ; ) add other props:
          id={imageId}
          role="img"
          aria-label={imageId}
        >
         {children}

        </BackgroundImage>
        
    </StyledFullScreenWrapper>
    </>
  )
})`
width: 100vw;

// These three crucial styles (if existing) are directly parsed and added to 
// the pseudo-elements without further ado (except when overwritten).
//background-repeat: repeat-y;
//background-position: left center;
//background-size: cover;

// For pseudo-elements you have to overwrite the default options (see style={{}} above).
// See: https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles 
//&:after, &:before {
//   background-clip: content-box;
//   background-size: contain;
//}
`
export default BackgroundSection;