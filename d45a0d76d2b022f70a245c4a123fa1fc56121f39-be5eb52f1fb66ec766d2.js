(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=f(r);o&&o!==h&&e(t,o,n)}var i=u(r);p&&(i=i.concat(p(r)));for(var c=s(t),m=s(r),y=0;y<i.length;++y){var g=i[y];if(!(a[g]||n&&n[g]||m&&m[g]||c&&c[g])){var v=d(r,g);try{l(t,g,v)}catch(b){}}}}return t}},"84bF":function(e,t,r){"use strict";r("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},"8oxB":function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,l=[],u=!1,p=-1;function d(){u&&s&&(u=!1,s.length?l=s.concat(l):p=-1,l.length&&f())}function f(){if(!u){var e=c(d);u=!0;for(var t=l.length;t;){for(s=l,l=[];++p<t;)s&&s[p].run();p=-1,t=l.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"8ujH":function(e,t,r){r("pIFo"),r("V+eJ"),r("f3/d");var n=r("GTTd")("jsonp");e.exports=function(e,t,r){"function"==typeof t&&(r=t,t={});t||(t={});var i,c,s=t.prefix||"__jp",l=t.name||s+o++,u=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;p&&(c=setTimeout((function(){h(),r&&r(new Error("Timeout"))}),p));function h(){i.parentNode&&i.parentNode.removeChild(i),window[l]=a,c&&clearTimeout(c)}return window[l]=function(e){n("jsonp got",e),h(),r&&r(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(l)).replace("?&","?"),n('jsonp req "%s"',e),(i=document.createElement("script")).src=e,f.parentNode.insertBefore(i,f),function(){window[l]&&h()}};var o=0;function a(){}},"8ypT":function(e,t,r){},Bl7J:function(e,t,r){"use strict";r("84bF");var n=r("IRj2"),o=r("q1tI"),a=r.n(o),i=r("Wbzz"),c=function(e){return a.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},a.a.createElement(i.Link,{to:e.to},e.children))},s=function(e){e.siteTitle;var t=e.small;return a.a.createElement("div",{style:{margin:"0 auto",maxWidth:"60rem",padding:"1rem 1.0875rem 0rem"}},a.a.createElement("header",{style:{width:"100%",display:"inline-flex",justifyContent:"space-between",flexDirection:"row"}},a.a.createElement("span",{style:{display:"block"}}),!t&&a.a.createElement("span",{className:"site-title"},a.a.createElement(i.Link,{to:"/",style:{textAlign:"center",textShadow:"none",backgroundImage:"none",textDecoration:"none",color:"black"}},a.a.createElement("h1",null,"The ",a.a.createElement("br",null),"Feedback Loop")),a.a.createElement("div",{className:"site-description"},"On creating digital tools and human-computer interactions in them")),t&&a.a.createElement("span",{className:"site-title-small"},a.a.createElement(i.Link,{to:"/",style:{textAlign:"center",textShadow:"none",backgroundImage:"none",textDecoration:"none",color:"black"}},a.a.createElement("h1",null,"The Feedback Loop"))),a.a.createElement("ul",{style:{listStyle:"none"}},a.a.createElement(c,{to:"/"},"Home"),a.a.createElement(c,{to:"/writings/"},"Writings"),a.a.createElement(c,{to:"/author/"},"Author"))))};s.defaultProps={siteTitle:""};var l=s,u=r("G04T"),p=r.n(u),d=(r("VRzm"),r("Btvt"),r("o0o1")),f=r.n(d),h=(r("ls82"),r("2Spj"),r("hHhE"),r("V+eJ"),r("rGqo"),r("yt8O"),r("RW0V"),r("91GP"),r("17x9")),m=r.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(g(t)),t.handleErrored=t.handleErrored.bind(g(t)),t.handleChange=t.handleChange.bind(g(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(g(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return a.a.createElement("div",y({},t,{ref:this.handleRecaptchaRef}))},n}(a.a.Component);v.displayName="ReCAPTCHA",v.propTypes={sitekey:m.a.string.isRequired,onChange:m.a.func,grecaptcha:m.a.object,theme:m.a.oneOf(["dark","light"]),type:m.a.oneOf(["image","audio"]),tabindex:m.a.number,onExpired:m.a.func,onErrored:m.a.func,size:m.a.oneOf(["compact","normal","invisible"]),stoken:m.a.string,hl:m.a.string,badge:m.a.oneOf(["bottomright","bottomleft","inline"])},v.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};r("f3/d");var b=r("2mql"),w=r.n(b);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var x={},S=0;var L,O,k=(L=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},O=(O={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,n;function a(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}n=t,(r=a).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var i=a.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+S++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof L?L():L,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=x[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[O.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=O,o=n.globalName,a=n.callbackName,i=n.scriptId;if(o&&void 0!==window[o]&&(x[t]={loaded:!0,observers:{}}),x[t]){var c=x[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},x[t]={loaded:!1,observers:s};var l=document.createElement("script");l.src=t,l.async=!0,i&&(l.id=i);var u=function(e){if(x[t]){var r=x[t].observers;for(var n in r)e(r[n])&&delete r[n]}};a&&"undefined"!=typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=x[t];e&&(e.loaded=!0,u((function(t){return!a&&(t(e),!0)})))},l.onerror=function(){var e=x[t];e&&(e.errored=!0,u((function(t){return t(e),!0})))},document.body.appendChild(l)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===O.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=x[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===O.removeOnUnmount&&delete x[e])},i.render=function(){var t=O.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),a=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(a[t]=void 0!==window[t]?window[t]:void 0),a.ref=n,Object(o.createElement)(e,a)},a}(o.Component),n=Object(o.forwardRef)((function(e,t){return Object(o.createElement)(r,E({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:m.a.func},w()(n,e)})(v);function _(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,o)}var T="advertise",R="show_captcha",j="verified",C="finished",N=function(e){e.siteTitle,e.small;var t=Object(o.useState)(T),r=t[0],n=t[1],i=Object(o.useState)(""),c=i[0],s=i[1],l=Object(o.useState)("N"),u=l[0],d=l[1],h=Object(o.useState)(null),m=h[0],y=h[1],g=function(){var e,t=(e=f.a.mark((function e(t){var r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(c.length>0)){e.next=10;break}return(r={})["gdpr[25193]"]=u,e.next=6,p()(c,r);case 6:o=e.sent,y(o),n(C),console.log(o);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){_(a,n,o,i,c,"next",e)}function c(e){_(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"rssSubscribe"},a.a.createElement("h1",null,"RSS"),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("a",{href:"/rss.xml"},"RSS Link")),a.a.createElement("p",null,"Yes, RSS still exists \\o/ Full text is provided in RSS so you'll never need to visit this site if you don't want to."))),a.a.createElement("div",{className:"mailchimpSubscribe"},a.a.createElement("h1",null,"Follow using Mailchimp"),a.a.createElement("p",null,"Emails are used only to provide updates on this website, not to deliver any kind of advertisements. Unfortunately you'll need to pass ReCaptcha to subscribe because of how the world works."),a.a.createElement("p",null,"We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. ",a.a.createElement("a",{href:"https://mailchimp.com/legal/",target:"_blank"},"Learn more about Mailchimp's privacy practices here.")),r===T&&a.a.createElement("p",null,a.a.createElement("a",{href:"#footer",onClick:function(){return n(R)}},"Verify ReCaptcha")," to show the subscription form."),r===R&&a.a.createElement(k,{className:"reCaptchaContainer",sitekey:"6LcjgvEUAAAAAJ-rYjKkLeWoLi1ThewAIyvNf5Ij",onChange:function(e){n(null===e?T:j)},size:"normal"}),r===j&&a.a.createElement("form",{onSubmit:g},a.a.createElement("input",{type:"email",placeholder:"type your email",value:c,onChange:function(e){s(e.target.value)}}),a.a.createElement("h2",null,"Marketing Permissions"),a.a.createElement("p",null,"Please confirm you would like to hear from Arttu Viljakainen by:"),a.a.createElement("fieldset",{className:"mc_fieldset gdprRequired mc-field-group",name:"interestgroup_field"},a.a.createElement("label",{className:"checkbox subfield",htmlFor:"gdpr_25193"},"Email",a.a.createElement("input",{type:"checkbox",id:"gdpr_25193",name:"gdpr[25193]",value:"Y",onChange:function(e){d(e.target.value)},className:"av-checkbox gdpr",required:!0}))),a.a.createElement("input",{className:"mailchimpSubscribeButton",type:"submit",value:"Subscribe"})),r===C&&a.a.createElement("p",{className:"mailchimpResponse",dangerouslySetInnerHTML:function(e){return{__html:e.msg}}(m)})))},I=function(e){return a.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},a.a.createElement(i.Link,{to:e.to},e.children))},P=function(e){e.siteTitle,e.small;return a.a.createElement("footer",{name:"footer",style:{borderTopStyle:"solid",borderTopWidth:"1px",marginTop:"1.5rem",minHeight:"100%",paddingTop:"1.5rem"}},a.a.createElement("div",{className:"bottomNavigation"},a.a.createElement("ul",{style:{listStyle:"none"}},a.a.createElement(I,{to:"/"},"Home"),a.a.createElement(I,{to:"/writings/"},"Writings"),a.a.createElement(I,{to:"/author/"},"Author"),a.a.createElement(I,{to:"#heading"},"^Top"))),a.a.createElement(N,null),a.a.createElement("div",{className:"copyright"},"© ",(new Date).getFullYear()," Arttu V. Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),a.a.createElement("span",null,", icons by ",a.a.createElement("a",{href:"https://webkul.github.io/vivid/"},"Vivid"))))};P.defaultProps={siteTitle:""};var A=P;r("8ypT"),r("fs3b"),t.a=function(e){var t=e.children,r=e.small,o=n.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{siteTitle:o.site.siteMetadata.title,small:r}),a.a.createElement("div",{className:"page-container"},a.a.createElement("main",null,t),a.a.createElement(A,{siteTitle:o.site.siteMetadata.title,small:r})))}},G04T:function(e,t,r){"use strict";r("pIFo"),r("VRzm"),r("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("8ujH"),a=(n=o)&&n.__esModule?n:{default:n},i=r("H/qo");var c=function(e){return new Promise((function(t,r){return(0,a.default)(e,{param:"c",timeout:3500},(function(e,n){e&&r(e),n&&t(n)}))}))},s=function(e){var t="";for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=r.substring(0,6)?r:r.toUpperCase();t=t.concat("&"+n+"="+e[r])}return t};t.default=function(e,t,r){var n=(0,i.validate)(e),o=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var a="https://arttuv.us8.list-manage.com/subscribe/post?u=e6fa8cd1f7936f091c9072614&amp;id=d39685d12d";arguments.length<3&&"string"==typeof t?a=t:"string"==typeof r&&(a=r),a=a.replace(/\/post/g,"/post-json");var l="&EMAIL="+o+s(t),u=""+a+l;return c(u)}},GTTd:function(e,t,r){(function(n){function o(){var e;try{e=t.storage.debug}catch(r){}return!e&&void 0!==n&&"env"in n&&(e={}.DEBUG),e}r("pIFo"),r("Oyvg"),r("SRfc"),(t=e.exports=r("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,r("8oxB"))},"H/qo":function(e,t,r){"use strict";r("dZ+Y"),r("KKXr");var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"The Feedback Loop"}}}}')},OGtf:function(e,t,r){var n=r("XKFU"),o=r("eeVq"),a=r("vhPU"),i=/"/g,c=function(e,t,r,n){var o=String(a(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},QXP7:function(e,t){var r=1e3,n=6e4,o=60*n,a=24*o;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){t=t||{};var c,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===s&&!1===isNaN(e))return t.long?i(c=e,a,"day")||i(c,o,"hour")||i(c,n,"minute")||i(c,r,"second")||c+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},bRoh:function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;s++;var o=t.formatters[n];if("function"==typeof o){var a=i[s];r=o.call(e,a),i.splice(s,1),s--}return r})),t.formatArgs.call(e,i);var l=r.log||t.log||console.log.bind(console);l.apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}r("Oyvg"),r("KKXr"),r("2Spj"),r("pIFo"),(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r("QXP7"),t.names=[],t.skips=[],t.formatters={}},fs3b:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n);t.a=function(e){var t=e.title;return o.a.createElement("div",{className:"bordered-title-bar"},o.a.createElement("h4",null,t),o.a.createElement("div",null))}},h7Nl:function(e,t,r){var n=Date.prototype,o=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},ls82:function(e,t,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof u?t:u,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var l={};function u(){}function p(){}function d(){}var f={};f[o]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(S([])));m&&m!==t&&r.call(m,o)&&(f=m);var y=d.prototype=u.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function v(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=y.constructor=d,d.constructor=p,d[i]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(v.prototype),v.prototype[a]=function(){return this},e.AsyncIterator=v,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new v(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),y[i]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case d:case i:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case u:case f:case l:return e;default:return t}}case y:case m:case a:return t}}}function v(e){return g(e)===d}t.typeOf=g,t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=o,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=m,t.Portal=a,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===s||e===c||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(e){return v(e)||g(e)===p},t.isConcurrentMode=v,t.isContextConsumer=function(e){return g(e)===u},t.isContextProvider=function(e){return g(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return g(e)===f},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===y},t.isMemo=function(e){return g(e)===m},t.isPortal=function(e){return g(e)===a},t.isProfiler=function(e){return g(e)===s},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===h}}}]);
//# sourceMappingURL=d45a0d76d2b022f70a245c4a123fa1fc56121f39-be5eb52f1fb66ec766d2.js.map