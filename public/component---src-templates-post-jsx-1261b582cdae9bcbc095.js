(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),i=a(34),o=a.n(i),s=a(0),l=a.n(s),m=a(164),c=a.n(m),p=a(292),d=a.n(p),u=a(173),h=a.n(u),f=a(204),E=a(371),g=a.n(E),v=a(181),y=a.n(v),b=a(180),N=a.n(b),w=a(213),x=a.n(w),C=a(373),S=a.n(C),z=a(174),D=a.n(z),k=a(376),A=a.n(k),P=a(157),_=a.n(P),T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(o()(o()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(o()(o()(a))),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},a.render=function(){var e=this.props,t=e.postNode,a=e.expanded;if(!_.a.disqusShortname)return null;var n=t.frontmatter,r=y()(_.a.siteUrl,_.a.pathPrefix,t.fields.slug);return l.a.createElement(N.a,{className:"md-grid md-cell md-cell--12"},l.a.createElement(x.a,{title:"Comments",avatar:l.a.createElement(S.a,{icon:l.a.createElement(D.a,null,"comment")}),expander:!a}),l.a.createElement(h.a,{expandable:!a},l.a.createElement(g.a,{shortname:_.a.disqusShortname,identifier:n.title,title:n.title,url:r,category_id:n.category_id,onNewComment:this.notifyAboutComment})),l.a.createElement(A.a,{toasts:this.state.toasts,onDismiss:this.onSnackbarDismiss}))},t}(s.Component),L=a(197),R=a(205),U=a(198),I=a.n(U),j=(a(408),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postNode;return l.a.createElement("div",{className:"post-info"},l.a.createElement("div",{className:"date"},l.a.createElement(D.a,{iconClassName:"fa fa-calendar"}),I()(e.fields.date).format(_.a.dateFormat)))},t}(s.Component)),B=a(469),O=a(470),q=a(471),F=a(472),J=a(473),W=a(474),H=(a(410),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,i=y()(_.a.siteUrl,_.a.pathPrefix,a),o=n?36:48;return l.a.createElement("div",{className:"social-links"},l.a.createElement(B.a,{url:i,title:r.title},l.a.createElement(O.a,{round:!0,size:o})),l.a.createElement(q.a,{url:i},l.a.createElement(F.a,{round:!0,size:o})),l.a.createElement(J.a,{url:i,quote:t.excerpt},l.a.createElement(W.a,{round:!0,size:o})))},t}(s.Component)),M=a(237);a(464),a(466);a.d(t,"default",function(){return Q}),a.d(t,"pageQuery",function(){return G});var Q=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(o()(o()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props,t=e.pageContext,a=e.data,n=e.location,r=this.state.mobile,i=t.slug,o=!r,s=r?"post-overlap-mobile":"post-overlap",m=a.markdownRemark,p=m.frontmatter;p.id||(p.id=i),p.category_id||(p.category_id=_.a.postDefaultCategoryID);var u=r?180:350;return l.a.createElement(f.a,{location:n},l.a.createElement("div",{className:"post-page md-grid md-grid--no-spacing"},l.a.createElement(c.a,null,l.a.createElement("title",null,p.title),l.a.createElement("link",{rel:"canonical",href:""+_.a.siteUrl+p.id})),l.a.createElement(M.a,{postPath:i,postNode:m,postSEO:!0}),l.a.createElement(R.a,{postNode:m,coverHeight:u,coverClassName:"md-grid md-cell--9 post-cover"}),l.a.createElement("div",{className:"md-grid md-cell--9 post-page-contents mobile-fix "+s},l.a.createElement(d.a,{className:"md-grid md-cell md-cell--12 post detail-post-wrap"},l.a.createElement(h.a,{className:"post-body"},l.a.createElement("h1",{className:"post-header"},p.title),l.a.createElement(j,{postNode:m}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.html}})),l.a.createElement("div",{className:"post-meta"},l.a.createElement(L.a,{tags:p.tags}),l.a.createElement(H,{postPath:i,postNode:m,mobile:r}))),l.a.createElement(T,{postNode:m,expanded:o}))))},t}(l.a.Component),G="3288223027"},237:function(e,t,a){"use strict";a(74);var n=a(6),r=a.n(n),i=a(0),o=a.n(i),s=a(164),l=a.n(s),m=a(181),c=a.n(m),p=a(157),d=a.n(p),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,s=r.postPath,m=r.postSEO;if(m){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,a=p.cover,n=c()(d.a.siteUrl,d.a.pathPrefix,s)}else e=d.a.siteTitle,t=d.a.siteDescription,a=d.a.siteLogo;a=c()(d.a.siteUrl,d.a.pathPrefix,a);var u=c()(d.a.siteUrl,d.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:""}];return m&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),a="https://john015.github.io/assets/"+a.split("https://john015.github.io/")[1],o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:m?n:u}),m?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:d.a.siteFBAppID?d.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:d.a.userTwitter?d.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=u},408:function(e,t,a){},410:function(e,t,a){},464:function(e,t,a){},466:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-1261b582cdae9bcbc095.js.map