(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159),s=a(161);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},157:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(38),c=a.n(o);a.d(t,"a",function(){return c.a});a(157),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},159:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(4),c=a.n(o),l=a(158),m=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],u=function(){return s.a.createElement("header",{className:"header",id:"top"},s.a.createElement("a",{href:"#top",className:"header__topbar"}),s.a.createElement("div",{className:"header__content-block"},s.a.createElement("div",{className:"header__logo-sec"},s.a.createElement(l.a,{to:"/",className:"header__logo"},"JS")),s.a.createElement("div",{className:"header__social-pack"},m.map(function(e,t){return s.a.createElement("div",{className:"header__social-sec",key:e.linkType},s.a.createElement("span",null," ",e.linkType," "),s.a.createElement("a",{href:e.socialLink+e.username,target:"_blank"}," @",e.username))}))))},p=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("p",{className:"footer__text center"},"Made with ",s.a.createElement("span",{role:"image"},"❤️")," JavaScript and SASS with React and Gatsby ",s.a.createElement("span",{role:"image"},"💻")))},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isHome:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({isHome:"/"===this.props.location.pathname})},a.render=function(){var e=this.props.children,t=this.state.isHome;return s.a.createElement("div",{className:t?"home":"show-content"},s.a.createElement(u,null),s.a.createElement("main",{className:"wrapper main"},e),s.a.createElement(p,null))},t}(s.a.PureComponent);d.propTypes={children:c.a.node.isRequired};t.a=d},160:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),o=a(4),c=a.n(o),l=a(57),m=a(2),u=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(163),l=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d5d7457c1d7038102499.js.map