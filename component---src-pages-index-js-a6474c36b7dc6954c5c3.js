(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return A(t||a).src},A=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),p=function(e){var t=u(e),a=m(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,w=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),l.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+a+i+t+r+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=e.ariaHidden,s=l.default.createElement(j,(0,d.default)({src:t},n,{ariaHidden:r}));return a.length>1?l.default.createElement("picture",null,i(a),s):s},j=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:i,src:n},A,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,E=e.loading,x=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,d.default)({opacity:B?1:0,transition:z?"opacity "+b+"ms":"none"},o),O="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},L=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&C,{},o,{},f),D={title:t,alt:this.state.isVisible?"":a,style:L,className:m,itemProp:w};if(g){var P=g,Y=A(g);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&C)}),Y.base64&&l.default.createElement(R,{ariaHidden:!0,src:Y.base64,spreadProps:D,imageVariants:P,generateSources:I}),Y.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,src:Y.tracedSVG,spreadProps:D,imageVariants:P,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(P),l.default.createElement(j,{alt:a,title:t,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:E},Y,{imageVariants:P}))}}))}if(p){var V=p,Q=A(p),T=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},r);return"inherit"===r.display&&delete T.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,width:Q.width,opacity:this.state.imgLoaded?0:1,height:Q.height},z&&C)}),Q.base64&&l.default.createElement(R,{ariaHidden:!0,src:Q.base64,spreadProps:D,imageVariants:V,generateSources:I}),Q.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,src:Q.tracedSVG,spreadProps:D,imageVariants:V,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(V),l.default.createElement(j,{alt:a,title:t,width:Q.width,height:Q.height,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:E},Q,{imageVariants:V}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:N,sizes:O,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=z;t.default=C},INYr:function(e,t,a){"use strict";var i=a("XKFU"),n=a("CkkT")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},"LF+6":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("Wbzz");t.a=function(e){var t=e.post;return n.a.createElement("div",null,n.a.createElement(r.Link,{to:t.frontmatter.path},t.frontmatter.title," (",t.frontmatter.date,")"))}},OGtf:function(e,t,a){var i=a("XKFU"),n=a("eeVq"),r=a("vhPU"),s=/"/g,o=function(e,t,a,i){var n=String(r(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("Wbzz"),s=a("Bl7J"),o=a("a2Gk"),d=(a("LF+6"),a("9eSz")),l=a.n(d),c=function(e){var t,a=e.post;return n.a.createElement("article",{className:"article"},n.a.createElement(r.Link,{to:a.frontmatter.path},n.a.createElement("h3",null,a.frontmatter.title)),null!==a.frontmatter.featuredImage&&n.a.createElement(l.a,{style:(t={width:"20%",float:"left",marginRight:"1.5rem",filter:"grayScale(100%)"},t.filter="opacity(.8)",t.display="inline-block",t),sizes:a.frontmatter.featuredImage.childImageSharp.sizes}),null!==a.frontmatter.summary&&n.a.createElement("p",null,a.frontmatter.summary),null===a.frontmatter.summary&&n.a.createElement("p",null,a.excerpt),n.a.createElement("div",{className:"article-read-more"},n.a.createElement(r.Link,{to:a.frontmatter.path},a.frontmatter.date)))},u=function(){return n.a.createElement(r.StaticQuery,{query:"452698791",render:function(e){return e.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return n.a.createElement(c,{key:e.node.id,post:e.node})}))},data:o})},f=(a("tBDR"),a("vrFN")),m=function(e){var t=e.title;return n.a.createElement("div",{className:"bordered-title-bar"},n.a.createElement("h4",null,t),n.a.createElement("div",null))},A=a("qcH0"),g=function(){var e=A.data;return n.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})};t.default=function(){return n.a.createElement(s.a,null,n.a.createElement("h1",null,"Software, Human-Computer Interaction"),n.a.createElement(f.a,{title:"Home"}),n.a.createElement("div",null,n.a.createElement(m,{title:"About Me"})),n.a.createElement("div",{className:"about-me-container"},n.a.createElement("div",{className:"about-me-image"},n.a.createElement(g,null)),n.a.createElement("div",{className:"about-me-text"},n.a.createElement("p",null,"Hi, I'm Arttu and I work with software. Currently I'm a software consultant focusing on how to help organizations work in a more agile way."),n.a.createElement("p",null,"As a software developer I’ve been working mostly with Java doing mission critical C2 and training applications."),n.a.createElement("p",null,"As a PhD researcher I study the effects of advanced automation to operator performance and SA. Full autonomy is still far ahead and in some environments may never be a feasible option. Therefore augmenting human cognitive abilities with autonomous systems is the most interesting approach for me."),n.a.createElement("p",null,"You can follow me on ",n.a.createElement("a",{href:"https://twitter.com/arttuv"},"Twitter")," or add me on ",n.a.createElement("a",{href:"https://www.linkedin.com/in/arttu-viljakainen/"},"LinkedIn.")),n.a.createElement("p",null,"This pages is under construction - I'm transitioning my content from WP to Gatsby."))),n.a.createElement(m,{title:"Writings"}),n.a.createElement("div",{className:"archive"},n.a.createElement(u,null)))}},a2Gk:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"b745f057-82e4-5177-bb94-fae519f66ae9","excerpt":"Few days ago I started to think that yes, actually I have some experience on developing a platform game, and there were quite a many surprisingly important things to consider when designing the platform game experience. Ultimately it means keeping a…","frontmatter":{"date":"June 30, 2019","path":"/writings/ux-of-a-platform-game","title":"UX of a Platform Game","summary":"Some years ago I tried building a platformer game (PC / Android) and found the experience interesting from the UX point of view. This is my recap of what I remember. TLDR: You can cheat to make it feel more like a game. Physics simulation rarely makes a good game (at least you\'ll need to fine tune your character movement physics).","featuredImage":{"id":"57986dfe-0ee0-5004-b6bc-724c88fc09db","childImageSharp":{"id":"78c2497b-eace-5dd2-8e44-c79145c53790","sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABn0lEQVQ4y62TTWrCUBDH8yXGYAMtWhsXNSpkoaCiiKAbz9I7dOe3gi5d9xY9gAZREzcewDsoKIo7+bfvadKYFNpSAz/mzZCZzMw/j2EYBhYsy0IQhD9Bcpw1GJdzCxj7K/F4HP1+H+12G71eD51Oh9LtdilOv9VqYTAYIJlMwlnjqmAul8NiscB4rGNumJjPDcxmMxiGQSFngmmamEwmWC6XKBaLNJfjOO/IoihCURRElSeI/xnZguN4PMhB+B+fIb++wx/VaFzw+cDzvD0a6YZYEvudKNI92Jc3CJeCTkgRUtAxorvoV0DTNCqKfBe0X1A/hRoOh1SMcDh8tZ5ms0lzPKJYXyuVStB1HbFYDAx7jmUyGaxWK0yn03P8UlCWZYxGI5TL5e9Fce8iFAohEolQ+5MQnpEtAoEA8vk8UqkUstksPRNLIJ2m02nbEgqFAiRJ8opitVupVHA6nbDZbHA4HLDdbrHb7bDf722IfzwesV6vQZ5qteod2WpZVVW6/Hq9ThfeaDQo5Oz2a7UavTGJRMIrys3vsvs/+wvu/A82DrJhoXfcSwAAAABJRU5ErkJggg==","aspectRatio":1.3333333333333333,"src":"/static/59c5630f6238d78b19272827bb560611/1711c/Corner-cases-in-platformer-physics.003.png","srcSet":"/static/59c5630f6238d78b19272827bb560611/b98be/Corner-cases-in-platformer-physics.003.png 158w,\\n/static/59c5630f6238d78b19272827bb560611/704a2/Corner-cases-in-platformer-physics.003.png 315w,\\n/static/59c5630f6238d78b19272827bb560611/1711c/Corner-cases-in-platformer-physics.003.png 630w,\\n/static/59c5630f6238d78b19272827bb560611/a9ac2/Corner-cases-in-platformer-physics.003.png 945w,\\n/static/59c5630f6238d78b19272827bb560611/a8378/Corner-cases-in-platformer-physics.003.png 1024w","sizes":"(max-width: 630px) 100vw, 630px"}}}}}},{"node":{"id":"0d352139-8c7a-5e45-9b65-42b8ce628ce2","excerpt":"Automation and analytics are good means to improve operator and overall system performance. Ever increasing amount of data means that in many situations human operators are no longer able to keep up with the pace, and using software to help is a must…","frontmatter":{"date":"June 28, 2019","path":"/writings/automation-and-the-role-of-human-operators","title":"Automation and the role of human operators","summary":null,"featuredImage":null}}},{"node":{"id":"76bf5cc4-7f95-58b1-ac49-a40ef2ed14f5","excerpt":"Designing to Support (Distributed) Situation Awareness Both Situation Awareness and Distributed Situation Awareness are interesting concepts to consider when designing complex systems. Both have their own design methods, processes and measurement…","frontmatter":{"date":"June 26, 2019","path":"/writings/designing-to-support-dsa","title":"Designing to Support (Distributed) Situation Awareness","summary":"Situation awareness and distributed situation awareness are interesting concepts, but how does it map to the real world? How can we as designers take the concept and use it to guide our designs, to support rather than hinder the situation awareness of the end users?","featuredImage":null}}},{"node":{"id":"0600da47-fbf8-587d-a10e-f90062d5d943","excerpt":"Distributed situation awareness (DSA) is model that takes a systemic view to situation awareness (SA). Stanton et al. have described their DSA model in an article “Distributed situation awareness in dynamic systems: theoretical development and…","frontmatter":{"date":"June 24, 2019","path":"/writings/distributed-situation-awareness-dsa","title":"Distributed Situation Awareness (DSA)","summary":null,"featuredImage":null}}},{"node":{"id":"b1c19fca-dda9-5adc-a33b-dafdd26fabc7","excerpt":"Situation awareness (SA) is an interesting concept to consider in software design. The term comes from human factors research and was at first made popular by Mica R. Endsley, one of the most cited SA researchers. Stanton et al. have published a…","frontmatter":{"date":"June 23, 2019","path":"/writings/situation-awareness","title":"Situation Awareness (SA)","summary":null,"featuredImage":null}}},{"node":{"id":"d1bb2de1-92c3-56dd-a865-d9ce4077e742","excerpt":"Jakob Nielsen had a keynote at the UX Conference on Web UX 2016 vs 2004. They made a study on web UX on 2016 and reflected that to the results from similar study in 2004. The video is only 20 minutes and worth watching. Below you can find a short…","frontmatter":{"date":"June 15, 2017","path":"/writings/nielsen-wb-ux-2016-vs-2004","title":"Nielsen: Web UX 2016 vs 2004","summary":null,"featuredImage":null}}},{"node":{"id":"c1a3e3a6-776c-5a53-bd99-24599c8ceb95","excerpt":"Different reference types in Java provide access to the object lifecycle, giving us tools for object reuse (object pools) and even a possibility to achieve a reliable object finalization. Differences between references can be explained by…","frontmatter":{"date":"June 15, 2017","path":"/writings/reference-types-in-java","title":"Reference Types in Java","summary":null,"featuredImage":null}}},{"node":{"id":"130c060b-755d-5791-a7af-a22334559e0e","excerpt":"It’s interesting how old many of the usability (and software engineering) ideas are. I run into an old classic: Designing for Usability: Key Principles and What Designers Think (Gould & Lewis, 1985). Gould and Lewis introduce three principles that…","frontmatter":{"date":"May 11, 2017","path":"/writings/designing-for-usability-1985","title":"Designing for Usability 1985","summary":null,"featuredImage":null}}},{"node":{"id":"6afbc645-0b06-54e8-b665-444c86d62242","excerpt":"We participated in the first Hello World Open with Louhigames’ crew. Hello World Open is a Finnish coding competition and this was the first year it was organized. 200 teams participated and around 100 of them were able to enter a working program. We…","frontmatter":{"date":"October 18, 2012","path":"/writings/26th-in-hello-world-open-2012","title":"26th in the Hello World Open 2012","summary":null,"featuredImage":null}}},{"node":{"id":"6939a0aa-42ae-5462-8a6b-3e888783283a","excerpt":"This is about the usability of health care systems (EPR) in Finland. You can read an English summary of the usability study in the end of the article in this link. Potilastietojärjestelmien käytettävyyttä on viime aikoina tutkittu aika paljon. Vuonna…","frontmatter":{"date":"April 18, 2012","path":"/writings/potilastietojarjestelmien-kaytettavyys-2010","title":"Potilastietojärjestelmien käytettävyys 2010","summary":null,"featuredImage":null}}},{"node":{"id":"383162bb-226b-56bf-99c1-141096e6591d","excerpt":"This is in Finnish about ISO 9241-210 (former ISO 13407). You can read about that for example in Userfocus or by getting a copy of the standard from ISO. Huomasin gradua tehdessäni, että ISO 13407 onkin vanhentunutta tietoa, sillä nykyisin se…","frontmatter":{"date":"March 29, 2012","path":"/writings/iso-9241-210","title":"ISO 9241-210 (ISO 13407:n korvaaja)","summary":null,"featuredImage":null}}},{"node":{"id":"d7454f5a-dc72-5497-8d75-935840fd12ea","excerpt":"Creating usable software is not easy. You are blind to the usability problems of your user interface because you know how things work. You don’t need feedback in a way that other users of your system need. You don’t need the system to tell you what…","frontmatter":{"date":"November 14, 2010","path":"/writings/how-do-people-act","title":"How do people act","summary":null,"featuredImage":null}}},{"node":{"id":"506ce90b-b140-5c7c-9f4e-0649e0cf0c88","excerpt":"People tend to use faulty mental models when thinking what caused some action to fail or succeed. People blame environment for their own misfortunes. If things go wrong, it wasn’t my fault but the environment caused it. I got no chance. And the…","frontmatter":{"date":"October 11, 2010","path":"/writings/whos-fault-is-it-anyway","title":"Who\'s fault is it anyway?","summary":null,"featuredImage":null}}}]}}}')},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"id":"c2dc95de-8f68-52a4-924b-389c63b0442a","childImageSharp":{"id":"cdabb0fb-add6-59dd-a950-8608beb3399c","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},qcH0:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"id":"e83243fe-e2a2-5109-85b8-3da1fb923a78","childImageSharp":{"id":"da88e3d8-9d93-5095-9e4a-0a7d5a0910aa","fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAAFAv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdcaCHEqMaEY0bPj/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIDABITBBAUIjP/2gAIAQEAAQUCZraBkc4yaJujS6swjMmpZE5Sqsc3Wf12/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiIxAxASIUH/2gAIAQEABj8Ck7SgyyRXI4i0qfMstyXVD3//xAAeEAEAAgICAwEAAAAAAAAAAAABABExQSFhEFFxgf/aAAgBAQABPyELMwRIhWjMOSQPtEVavzzfqLirNwTKf3dSwQr04J2i9lzH0Y+ef//aAAwDAQACAAMAAAAQswUw/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAIBABAAEEAgIDAAAAAAAAAAAAAREAITFRQXEQYYGRof/aAAgBAQABPxAB6JkOeqxitazV91JIQo2iH7oiUA0Z91MHZ2s8Pmk1lK53RyjQl8ph620wLUmQjncUxvTlR33NWg4o6hIfvgUIr//Z","aspectRatio":0.6666666666666666,"src":"/static/bab1b350680bb72f77a5529e3dcb6e84/9dc27/arttu_face_2019.jpg","srcSet":"/static/bab1b350680bb72f77a5529e3dcb6e84/25b50/arttu_face_2019.jpg 75w,\\n/static/bab1b350680bb72f77a5529e3dcb6e84/aabdf/arttu_face_2019.jpg 150w,\\n/static/bab1b350680bb72f77a5529e3dcb6e84/9dc27/arttu_face_2019.jpg 300w,\\n/static/bab1b350680bb72f77a5529e3dcb6e84/32fd5/arttu_face_2019.jpg 450w,\\n/static/bab1b350680bb72f77a5529e3dcb6e84/4fe8c/arttu_face_2019.jpg 600w,\\n/static/bab1b350680bb72f77a5529e3dcb6e84/68f48/arttu_face_2019.jpg 724w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},tBDR:function(e,t,a){"use strict";a("ezAz"),a("q1tI"),a("9eSz")}}]);
//# sourceMappingURL=component---src-pages-index-js-a6474c36b7dc6954c5c3.js.map