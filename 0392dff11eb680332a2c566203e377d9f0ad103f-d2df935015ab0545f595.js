(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,i){"use strict";i("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,i){"use strict";i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("EK0E"),i("INYr"),i("0mN4");var r=i("TqRt");t.__esModule=!0,t.default=void 0;var a,n=r(i("PJYZ")),s=r(i("VbXa")),o=r(i("8OQS")),d=r(i("pVnL")),l=r(i("q1tI")),u=r(i("17x9")),c=function(e){var t=(0,d.default)({},e),i=t.resolutions,r=t.sizes,a=t.critical;return i&&(t.fixed=i,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,i=e.fixed;return p(t||i).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),i=g(t);return h[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,i=e.srcSet,r=e.srcSetWebp,a=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:n}),l.default.createElement("source",{media:a,srcSet:i,sizes:n}))}))}function E(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function L(e){return e.map((function(e){var t=e.src,i=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:r})}))}function O(e,t){var i=e.srcSet,r=e.srcSetWebp,a=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var i=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return i&&(i.observe(e),S.set(e,t)),function(){i.unobserve(e),S.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+s+o+i+r+t+n+a+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=function(e){var t=e.src,i=e.imageVariants,r=e.generateSources,a=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(z,(0,d.default)({src:t},a,{ariaHidden:n}));return i.length>1?l.default.createElement("picture",null,r(i),s):s},z=l.default.forwardRef((function(e,t){var i=e.sizes,r=e.srcSet,a=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:i,srcSet:r,src:a},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=y&&m(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&v&&!i.isCritical&&!i.seenBefore;var r=i.isCritical||y&&(b||!i.useIOSupport);return i.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),i=g(t),h[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,r=e.className,a=e.style,n=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,O=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,d.default)({opacity:R?1:0,transition:C?"opacity "+y+"ms":"none"},o),x="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&N,{},o,{},f),j={title:t,alt:this.state.isVisible?"":i,style:T,className:g,itemProp:S};if(h){var W=h,q=p(h);return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),x&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&N)}),q.base64&&l.default.createElement(V,{ariaHidden:!0,src:q.base64,spreadProps:j,imageVariants:W,generateSources:I}),q.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,src:q.tracedSVG,spreadProps:j,imageVariants:W,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(W),l.default.createElement(z,{alt:i,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:i,title:t,loading:E},q,{imageVariants:W}))}}))}if(m){var P=m,M=p(m),H=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},C&&N)}),M.base64&&l.default.createElement(V,{ariaHidden:!0,src:M.base64,spreadProps:j,imageVariants:P,generateSources:I}),M.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,src:M.tracedSVG,spreadProps:j,imageVariants:P,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(P),l.default.createElement(z,{alt:i,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:i,title:t,loading:E},M,{imageVariants:P}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),x=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});C.propTypes={resolutions:_,sizes:x,fixed:u.default.oneOfType([_,u.default.arrayOf(_)]),fluid:u.default.oneOfType([x,u.default.arrayOf(x)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=C;t.default=N},EK0E:function(e,t,i){"use strict";var r,a=i("dyZX"),n=i("CkkT")(0),s=i("KroJ"),o=i("Z6vF"),d=i("czNK"),l=i("ZD67"),u=i("0/R4"),c=i("s5qY"),f=i("s5qY"),g=!a.ActiveXObject&&"ActiveXObject"in a,p=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},v=e.exports=i("4LiD")("WeakMap",b,y,l,!0,!0);f&&g&&(d((r=l.getConstructor(b,"WeakMap")).prototype,y),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,i=t[e];s(t,e,(function(t,a){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,a);return"set"==e?this:n}return i.call(this,t,a)}))})))},INYr:function(e,t,i){"use strict";var r=i("XKFU"),a=i("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("nGyu")(n)},ZD67:function(e,t,i){"use strict";var r=i("3Lyj"),a=i("Z6vF").getWeak,n=i("y3w9"),s=i("0/R4"),o=i("9gX7"),d=i("SlkY"),l=i("CkkT"),u=i("aagx"),c=i("s5qY"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var i=b(this,e);i?i[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,i,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&d(r,i,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var i=a(e);return!0===i?h(c(this,t)).delete(e):i&&u(i,this._i)&&delete i[this._i]},has:function(e){if(!s(e))return!1;var i=a(e);return!0===i?h(c(this,t)).has(e):i&&u(i,this._i)}}),l},def:function(e,t,i){var r=a(n(t),!0);return!0===r?h(e).set(t,i):r[e._i]=i,e},ufstore:h}}}]);
//# sourceMappingURL=0392dff11eb680332a2c566203e377d9f0ad103f-d2df935015ab0545f595.js.map