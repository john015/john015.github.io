(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(170),c=a.n(l),s=a(211),p=a(195),m=a(247),d=a(163),u=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.location,n=t.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:a,title:"John`s Dev log"},o.a.createElement("div",{className:"index-container"},o.a.createElement(c.a,null,o.a.createElement("title",null,u.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:""+u.a.siteUrl})),o.a.createElement(m.a,{postEdges:n}),o.a.createElement(p.a,{postEdges:n})))},t}(o.a.Component);t.default=h;var f="1014838814"},189:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},192:function(e,t,a){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var n=i(a(199)),r=i(a(200));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default,t.Media=n.default,t.MediaOverlay=r.default},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a(78);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(38),c=a.n(l),s=a(188),p=a.n(s),m=a(180),d=a.n(m),u=a(181),h=a.n(u),f=a(37),g=a(205),E=a.n(g),v=a(192),y=a.n(v),w=a(204),x=a(212),b=a(163),N=a.n(b),T=(a(193),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(c()(c()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.postInfo,t=this.state.mobile,a=t,n=t?162:225;return o.a.createElement(p.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},o.a.createElement(f.Link,{style:{textDecoration:"none"},to:e.path},o.a.createElement(y.a,{style:{height:n,paddingBottom:"0px"}},o.a.createElement(x.a,{postNode:e,coverHeight:n})),o.a.createElement("div",{className:"title-container"},o.a.createElement("h2",null,e.title),o.a.createElement("div",{className:"date"},o.a.createElement(h.a,{iconClassName:"fa fa-calendar"}),E()(e.date).format(N.a.dateFormat)))),o.a.createElement(d.a,{expandable:a},e.excerpt,o.a.createElement(w.a,{tags:e.tags})))},t}(i.Component)),R=(a(194),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=this.props.postEdges,t=[];return e.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},a.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"post-preview-wrap"},e.map(function(e){return o.a.createElement(T,{key:e.title,postInfo:e})})))},t}(o.a.Component));t.a=R},247:function(e,t,a){"use strict";a(79);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(170),c=a.n(l),s=a(189),p=a.n(s),m=a(163),d=a.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,l=r.postPath,s=r.postSEO;if(s){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,a=m.cover,n=p()(d.a.siteUrl,d.a.pathPrefix,l)}else e=d.a.siteTitle,t=d.a.siteDescription,a=d.a.siteLogo;a=p()(d.a.siteUrl,d.a.pathPrefix,a);var u=p()(d.a.siteUrl,d.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:""}];return s&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),a="https://john015.github.io/assets/"+a.split("https://john015.github.io/")[1],o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:s?n:u}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:d.a.siteFBAppID?d.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:d.a.userTwitter?d.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-index-jsx-4bd4893a4238c1067e1a.js.map