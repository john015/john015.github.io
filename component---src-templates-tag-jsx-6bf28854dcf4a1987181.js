(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return f});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(170),l=n.n(s),c=n(211),d=n(195),u=n(163),p=n.n(u),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:"Tagged in "+(e.charAt(0).toUpperCase()+e.slice(1))},o.a.createElement("div",{className:"tag-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,'Posts tagged as "'+e+'" | '+p.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:p.a.siteUrl+"/tags/"+e})),o.a.createElement(d.a,{postEdges:t})))},t}(o.a.Component),f="3824571933"},192:function(e,t,n){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var a=i(n(199)),r=i(n(200));function i(e){return e&&e.__esModule?e:{default:e}}t.default=a.default,t.Media=a.default,t.MediaOverlay=r.default},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){"use strict";n(78);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(38),l=n.n(s),c=n(188),d=n.n(c),u=n(180),p=n.n(u),m=n(181),f=n.n(m),h=n(37),g=n(205),v=n.n(g),E=n(192),w=n.n(E),y=n(204),R=n(212),b=n(163),k=n.n(b),z=(n(193),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t,a=t?162:225;return o.a.createElement(d.a,{key:e.path,raise:!0,className:" post-preview md-grid md-cell md-cell--12"},o.a.createElement(h.Link,{style:{textDecoration:"none"},to:e.path},o.a.createElement(w.a,{style:{height:a,paddingBottom:"0px"}},o.a.createElement(R.a,{postNode:e,coverHeight:a})),o.a.createElement("div",{className:"title-container"},o.a.createElement("h2",null,e.title),o.a.createElement("div",{className:"date"},o.a.createElement(f.a,{iconClassName:"fa fa-calendar"}),v()(e.date).format(k.a.dateFormat)))),o.a.createElement(p.a,{expandable:n},e.excerpt,o.a.createElement(y.a,{tags:e.tags})))},t}(i.Component)),M=(n(194),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=this.props.postEdges,t=[];return e.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},n.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"post-preview-wrap"},e.map(function(e){return o.a.createElement(z,{key:e.title,postInfo:e})})))},t}(o.a.Component));t.a=M}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-6bf28854dcf4a1987181.js.map