(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"84bF":function(e,t,a){"use strict";a("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},"8ypT":function(e,t,a){},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(T,(0,l.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},T=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));T.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,k=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:O?1:0,transition:V?"opacity "+y+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},_=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&N,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:_,className:g,itemProp:E};if(h){var W=h,q=p(h);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&N)}),q.base64&&d.default.createElement(R,{ariaHidden:!0,src:q.base64,spreadProps:j,imageVariants:W,generateSources:I}),q.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,src:q.tracedSVG,spreadProps:j,imageVariants:W,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(T,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},q,{imageVariants:W}))}}))}if(m){var F=m,P=p(m),M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},V&&N)}),P.base64&&d.default.createElement(R,{ariaHidden:!0,src:P.base64,spreadProps:j,imageVariants:F,generateSources:I}),P.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,src:P.tracedSVG,spreadProps:j,imageVariants:F,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(F),d.default.createElement(T,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},P,{imageVariants:F}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});V.propTypes={resolutions:z,sizes:C,fixed:u.default.oneOfType([z,u.default.arrayOf(z)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=V;t.default=N},Bl7J:function(e,t,a){"use strict";a("84bF");var r=a("IRj2"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=function(e){return n.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},n.a.createElement(s.Link,{to:e.to},e.children))},l=function(e){e.siteTitle;var t=e.small;return n.a.createElement("div",{style:{margin:"0 auto",maxWidth:"60rem",padding:"1rem 1.0875rem 0rem"}},n.a.createElement("header",{style:{width:"100%",display:"inline-flex",justifyContent:"space-between",flexDirection:"row"}},n.a.createElement("span",{style:{display:"block"}}),!t&&n.a.createElement("span",{className:"site-title"},n.a.createElement(s.Link,{to:"/",style:{textAlign:"center",textShadow:"none",backgroundImage:"none",textDecoration:"none",color:"black"}},n.a.createElement("h1",null,"The ",n.a.createElement("br",null),"Feedback Loop")),n.a.createElement("div",{className:"site-description"},"On creating digital tools and human-computer interactions in them")),t&&n.a.createElement("span",{className:"site-title-small"},n.a.createElement(s.Link,{to:"/",style:{textAlign:"center",textShadow:"none",backgroundImage:"none",textDecoration:"none",color:"black"}},n.a.createElement("h1",null,"The Feedback Loop"))),n.a.createElement("ul",{style:{listStyle:"none"}},n.a.createElement(o,{to:"/"},"Home"),n.a.createElement(o,{to:"/writings/"},"Writings"),n.a.createElement(o,{to:"/author/"},"Author"))))};l.defaultProps={siteTitle:""};var d=l;a("8ypT"),a("fs3b"),t.a=function(e){var t=e.children,a=e.small,i=r.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{siteTitle:i.site.siteMetadata.title,small:a}),n.a.createElement("div",{className:"page-container"},n.a.createElement("main",null,t),n.a.createElement("footer",{style:{borderTopStyle:"solid",borderTopWidth:"1px",marginTop:"1.5rem",minHeight:"100%",paddingTop:"1.5rem"}},"© ",(new Date).getFullYear()," Arttu V. Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),n.a.createElement("span",null,", icons by ",n.a.createElement("a",{href:"https://webkul.github.io/vivid/"},"Vivid")))))}},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),l=a("czNK"),d=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),g=!i.ActiveXObject&&"ActiveXObject"in i,p=o.getWeak,h=Object.isExtensible,m=d.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(c(this,"WeakMap"),e,t)}},v=e.exports=a("4LiD")("WeakMap",b,y,d,!0,!0);f&&g&&(l((r=d.getConstructor(b,"WeakMap")).prototype,y),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"The Feedback Loop"}}}}')},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),l=a("SlkY"),d=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=d(5),g=d(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var d=e((function(e,r){o(e,d,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&l(r,a,e[n],e)}));return r(d.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),d},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},fs3b:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);t.a=function(e){var t=e.title;return i.a.createElement("div",{className:"bordered-title-bar"},i.a.createElement("h4",null,t),i.a.createElement("div",null))}}}]);
//# sourceMappingURL=0392dff11eb680332a2c566203e377d9f0ad103f-a117c957364747cb6b9d.js.map