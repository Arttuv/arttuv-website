"use strict";(self.webpackChunkarttuv_website=self.webpackChunkarttuv_website||[]).push([[637],{9357:function(e,t,a){var n=a(7294),i=a(5414),l=a(9499),r=a(1597),m=function(e){var t=e.title,a=e.description,m=e.image,o=e.article,s=(0,l.useLocation)().pathname,u=(0,r.useStaticQuery)(c).site.siteMetadata,p=u.defaultTitle,d=u.titleTemplate,g=u.defaultDescription,E=u.siteUrl,h=u.defaultImage,f=u.twitterUsername,w={title:t||p,description:a||g,image:""+E+(m||h),url:""+E+s};return n.createElement(i.q,{title:w.title,titleTemplate:d},n.createElement("meta",{name:"description",content:w.description}),n.createElement("meta",{name:"image",content:w.image}),w.url&&n.createElement("meta",{property:"og:url",content:w.url}),!o?null:n.createElement("meta",{property:"og:type",content:"article"}),w.title&&n.createElement("meta",{property:"og:title",content:w.title}),w.description&&n.createElement("meta",{property:"og:description",content:w.description}),w.image&&n.createElement("meta",{property:"og:image",content:w.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f&&n.createElement("meta",{name:"twitter:creator",content:f}),w.title&&n.createElement("meta",{name:"twitter:title",content:w.title}),w.description&&n.createElement("meta",{name:"twitter:description",content:w.description}),w.image&&n.createElement("meta",{name:"twitter:image",content:w.image}))};t.Z=m,m.defaultProps={title:null,description:null,image:null,article:!1};var c="4202924991"},162:function(e,t,a){a.r(t);var n=a(7294),i=a(1977),l=a(9357);t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter,r=t.html;return n.createElement(i.Z,null,n.createElement(l.Z,{title:a.title}),n.createElement("article",{className:"blog-post"},n.createElement("p",{className:"category"},null!==a.tags&&a.tags.map((function(e){return n.createElement("span",{key:"link-span-key"+e},e)}))),n.createElement("h1",null,a.title),n.createElement("time",null,a.date),n.createElement("hr",null),n.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:r}})),n.createElement("div",{className:"comment-section"},n.createElement("p",null,"No comments, huh? I want to keep this site as low maintenance as possible (and not have any tracking). That's unfortunate, because I'd like to discuss topics I'm writing about, because any given text is just my understanding of it at that moment. You'd definitely have something valuable to say that would enable me to learn something new."),n.createElement("p",null,"If you found a mistake, disagree or would like to discuss, ",n.createElement("a",{href:"https://twitter.com/arttuv"},"DM me on Twitter")," or",n.createElement("a",{href:"mailto:arttu.viljakainen@gmail.com?subject="+a.title}," send me an email"),".")))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-4c582e5f97c50cf1ef84.js.map