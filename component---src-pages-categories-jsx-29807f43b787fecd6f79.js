webpackJsonp([0x81a450a7cd7a],{224:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=n(i),f=r(25),l=n(f),s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.getcategoryList=function(){var e=new Set;this.props.postEdges.forEach(function(t){e.add(t.node.frontmatter.category)});var t=[],r=function(){for(var r=e,n=Array.isArray(r),o=0,r=n?r:r[Symbol.iterator]();;){var a;if(n){if(o>=r.length)break;a=r[o++]}else{if(o=r.next(),o.done)break;a=o.value}var u=a;t.push(u)}};return r(),t.sort()},t.prototype.render=function(){var e=this.getcategoryList();return c.default.createElement("div",{className:"see? categoryView flex center row wrap"},e.map(function(e,t){return c.default.createElement("div",{className:"flex wrap column"},c.default.createElement(l.default,{to:e.replace(" ","-"),key:t,className:"flex column"},c.default.createElement("h3",{style:{textTransform:"capitalize"}},e)))}))},t}(c.default.Component);t.default=s,e.exports=t.default},241:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.categoriesQuery=void 0;var i=r(1),c=n(i),f=r(17),l=n(f),s=r(224),p=n(s),d=r(33),y=n(d),h=r(11),m=n(h),b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return c.default.createElement("div",{className:"index-container"},c.default.createElement(l.default,{title:m.default.siteTitle}),c.default.createElement(y.default,{postEdges:e}),c.default.createElement(p.default,{postEdges:e}))},t}(c.default.Component);t.default=b;t.categoriesQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-categories-jsx-29807f43b787fecd6f79.js.map