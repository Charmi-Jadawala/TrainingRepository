(self["webpackChunkblog_tezjs"] = self["webpackChunkblog_tezjs"] || []).push([[9102],{

/***/ 56156:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(44709);
  } else {}
  

/***/ }),

/***/ 44709:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(53547),__webpack_require__(78384),__webpack_require__(39711),__webpack_require__(74657)):0}(this,(function(n,e,t,r){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=115)}({0:function(n,e,t){n.exports=t(19)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(25),o=t(26),i=t(22),a=t(27);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},115:function(n,e,t){"use strict";t.r(e),t.d(e,"Link",(function(){return j}));var r,o,i=t(5),a=t.n(i),s=t(4),u=t.n(s),c=t(3),f=t.n(c),d=t(1),l=t.n(d),p=t(0),h=t.n(p),m=t(2),g=t.n(m),b=t(83),x=t.n(b),v=t(37),y=t(8),O=t(6),w=t(16),S=["href","to","children","disabled","startIcon","endIcon"],_=g.a.a(r||(r=f()(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  pointer-events: ",";\n  svg path {\n    fill: ",";\n  }\n  svg {\n    font-size: ","rem;\n  }\n  &:hover,\n  &:active {\n    color: ",";\n  }\n  ",";\n"])),(function(n){return n.disabled?"none":void 0}),(function(n){var e=n.disabled,t=n.theme;return e?t.colors.neutral600:t.colors.primary600}),.625,(function(n){return n.theme.colors.primary800}),w.a),T=g()(O.Box)(o||(o=f()(["\n  display: flex;\n"]))),j=function(n){var e=n.href,t=n.to,r=n.children,o=n.disabled,i=n.startIcon,s=n.endIcon,c=u()(n,S),f=e?"_blank":void 0,d=e?"noreferrer noopener":void 0;return l.a.createElement(_,a()({as:t&&!o?v.NavLink:"a",target:f,rel:d,to:o?void 0:t,href:o?"#":e,disabled:o},c),i&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingRight:2},i),l.a.createElement(y.Typography,{variant:"pi",textColor:o?"neutral600":"primary600"},r),s&&!e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},s),e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},l.a.createElement(x.a,null)))};j.displayName="Link",j.defaultProps={href:void 0,to:void 0,disabled:!1},j.propTypes={children:h.a.node.isRequired,disabled:h.a.bool,endIcon:h.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},startIcon:h.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")}}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},16:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var r=function(n){return function(e){var t=e.theme,r=e.size;return t.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(e){var t=e.theme,r=e.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},i=function(n){var e=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(e.colors.primary600,";\n    }\n  }\n")}},19:function(n,e,t){"use strict";var r=t(20);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e,t){var r=t(21);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){s=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},37:function(n,e){n.exports=t},4:function(n,e,t){var r=t(24);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return l}));var r,o=t(3),i=t.n(o),a=t(0),s=t.n(a),u=t(2),c=t.n(u),f=t(7),d={color:!0},l=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));l.displayName="Box",l.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},l.propTypes={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])}},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,s=o()(i,3),u=s[0],c=s[1],f=s[2],d="".concat(n,": ").concat(t.spaces[u],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),d}var l=t.spaces[r]||r;return"".concat(n,": ").concat(l,";")}}},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return d}));var r,o=t(3),i=t.n(o),a=t(0),s=t.n(a),u=t(2),c=["alpha","beta","delta","epsilon","omega","pi","sigma"],f={fontSize:!0,fontWeight:!0},d=t.n(u).a.span.withConfig({shouldForwardProp:function(n,e){return!f[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));d.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},d.propTypes={fontSize:s.a.oneOfType([s.a.number,s.a.string]),fontWeight:s.a.string,lineHeight:s.a.oneOfType([s.a.number,s.a.string]),textColor:s.a.string,textTransform:s.a.string,variant:s.a.oneOf(c)}},83:function(n,e){n.exports=r}})}));

/***/ }),

/***/ 87760:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}({0:function(t,r){t.exports=e},5:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 74657:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=72)}({0:function(t,r){t.exports=e},72:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M16.235 2.824a1.412 1.412 0 010-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 01-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 01-1.996-1.996l8.178-8.178h-2.945zm4.942 10.588a1.412 1.412 0 012.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 010 2.824H2.824v18.353h18.353v-7.765z",fill:"#32324D"}))}}})}));

/***/ }),

/***/ 16923:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=103)}({0:function(t,r){t.exports=e},103:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 83617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=109)}({0:function(t,r){t.exports=e},109:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",fill:"#8E8EA9"}))}}})}));

/***/ }),

/***/ 29102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ListView)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(89326);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(87760);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(56204);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Link.js
var Link = __webpack_require__(56156);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(40264);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(43546);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(47558);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(27523);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(90635);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Cross.js
var Cross = __webpack_require__(7228);
var Cross_default = /*#__PURE__*/__webpack_require__.n(Cross);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(67814);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/index.js











const StyledFontAwesomeIcon = (0,styled_components_browser_cjs["default"])(index_es/* FontAwesomeIcon */.G)`
  width: ${(0,build.pxToRem)(32)} !important;
  height: ${(0,build.pxToRem)(32)} !important;
  padding: ${(0,build.pxToRem)(9)};
  border-radius: ${(0,build.pxToRem)(64)};
  background: ${({ theme }) => theme.colors.neutral150};
  path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const CloseButton = styled_components_browser_cjs["default"].div`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,build.pxToRem)(8)};

  svg {
    width: ${(0,build.pxToRem)(10)};
    height: ${(0,build.pxToRem)(10)};
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  flex-shrink: 0;
  width: ${(0,build.pxToRem)(140)};
  height: ${(0,build.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${CloseButton} {
      display: block;
    }

    ${StyledFontAwesomeIcon} {
      background: ${({ theme }) => theme.colors.primary200};
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${Typography.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const StackCentered = (0,styled_components_browser_cjs["default"])(Stack.Stack)`
  align-items: center;
`;
function ComponentCard({ component, dzName, index, isActive, isInDevelopmentMode, onClick }) {
  const { modifiedData, removeComponentFromDynamicZone } = (0,useDataManager/* default */.Z)();
  const {
    schema: { icon, displayName }
  } = get_default()(modifiedData, ["components", component], {
    schema: { icon: null }
  });
  const onClose = (e) => {
    e.stopPropagation();
    removeComponentFromDynamicZone(dzName, index);
  };
  return /* @__PURE__ */ react.createElement("button", {
    type: "button",
    onClick
  }, /* @__PURE__ */ react.createElement(ComponentBox, {
    className: isActive ? "active" : "",
    borderRadius: "borderRadius",
    paddingLeft: 4,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(StackCentered, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(StyledFontAwesomeIcon, {
    icon
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    maxWidth: `calc(${(0,build.pxToRem)(140)} - 32px)`
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    ellipsis: true
  }, displayName))), isInDevelopmentMode && /* @__PURE__ */ react.createElement(CloseButton, {
    role: "button",
    tabIndex: 0,
    onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && onClose(e),
    onClick: onClose
  }, /* @__PURE__ */ react.createElement((Cross_default()), null))));
}
ComponentCard.defaultProps = {
  component: null,
  isActive: false,
  isInDevelopmentMode: false,
  onClick: () => {
  }
};
ComponentCard.propTypes = {
  component: (prop_types_default()).string,
  dzName: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  isActive: (prop_types_default()).bool,
  isInDevelopmentMode: (prop_types_default()).bool,
  onClick: (prop_types_default()).func
};
/* harmony default export */ const components_ComponentCard = (ComponentCard);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Tr/index.js


const Tr = styled_components_browser_cjs["default"].tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,build.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,build.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({ isFromDynamicZone, isChildOfDynamicZone, theme }) => {
  if (isChildOfDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  if (isFromDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  return `background: ${theme.colors.neutral150};`;
}}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;
/* harmony default export */ const components_Tr = (Tr);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentList/index.js






function ComponentList({
  customRowComponent,
  component,
  isFromDynamicZone,
  isNestedInDZComponent,
  firstLoopComponentUid
}) {
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  const {
    schema: { attributes }
  } = get_default()(modifiedData, ["components", component], {
    schema: { attributes: [] }
  });
  return /* @__PURE__ */ react.createElement(components_Tr, {
    isChildOfDynamicZone: isFromDynamicZone,
    className: "component-row"
  }, /* @__PURE__ */ react.createElement("td", {
    colSpan: 12
  }, /* @__PURE__ */ react.createElement(components_List, {
    customRowComponent,
    items: attributes,
    targetUid: component,
    firstLoopComponentUid: firstLoopComponentUid || component,
    editTarget: "components",
    isFromDynamicZone,
    isNestedInDZComponent,
    isSub: true,
    secondLoopComponentUid: firstLoopComponentUid ? component : null
  })));
}
ComponentList.defaultProps = {
  component: null,
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false
};
ComponentList.propTypes = {
  component: (prop_types_default()).string,
  customRowComponent: (prop_types_default()).func,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool
};
/* harmony default export */ const components_ComponentList = (ComponentList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DynamicZoneList/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));














const StyledAddIcon = (0,styled_components_browser_cjs["default"])((Plus_default()))`
  width: ${(0,build.pxToRem)(32)};
  height: ${(0,build.pxToRem)(32)};
  padding: ${(0,build.pxToRem)(9)};
  border-radius: ${(0,build.pxToRem)(64)};
  background: ${({ theme }) => theme.colors.primary100};
  path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const FixedBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  height: ${(0,build.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const ScrollableStack = (0,styled_components_browser_cjs["default"])(Stack.Stack)`
  width: 100%;
  overflow-x: auto;
`;
const ComponentContentBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  padding-top: ${(0,build.pxToRem)(90)};
`;
const ComponentStack = (0,styled_components_browser_cjs["default"])(Stack.Stack)`
  flex-shrink: 0;
  width: ${(0,build.pxToRem)(140)};
  height: ${(0,build.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;
function DynamicZoneList({ customRowComponent, components, addComponent, name, targetUid }) {
  const { isInDevelopmentMode } = (0,useDataManager/* default */.Z)();
  const [activeTab, setActiveTab] = (0,react.useState)(0);
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const handleClickAdd = () => {
    addComponent(name);
  };
  return /* @__PURE__ */ react.createElement(components_Tr, {
    className: "dynamiczone-row",
    isFromDynamicZone: true
  }, /* @__PURE__ */ react.createElement("td", {
    colSpan: 12
  }, /* @__PURE__ */ react.createElement(FixedBox, {
    paddingLeft: 8
  }, /* @__PURE__ */ react.createElement(ScrollableStack, {
    horizontal: true,
    spacing: 2
  }, isInDevelopmentMode && /* @__PURE__ */ react.createElement("button", {
    type: "button",
    onClick: handleClickAdd
  }, /* @__PURE__ */ react.createElement(ComponentStack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(StyledAddIcon, null), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: "primary600"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("button.component.add"),
    formatMessage: "Add a component"
  })))), components.map((component, index) => {
    return /* @__PURE__ */ react.createElement(components_ComponentCard, {
      key: component,
      dzName: name,
      index,
      component,
      isActive: activeTab === index,
      isInDevelopmentMode,
      onClick: () => toggle(index)
    });
  }))), /* @__PURE__ */ react.createElement(ComponentContentBox, null, components.map((component, index) => {
    const props = {
      customRowComponent,
      component
    };
    return /* @__PURE__ */ react.createElement(Box.Box, {
      tabId: `${index}`,
      key: component,
      style: { display: activeTab === index ? "block" : "none" }
    }, /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement(components_ComponentList, __spreadProps(__spreadValues({}, props), {
      isFromDynamicZone: true,
      targetUid,
      key: component
    })))));
  }))));
}
DynamicZoneList.defaultProps = {
  addComponent: () => {
  },
  components: [],
  customRowComponent: null,
  name: null
};
DynamicZoneList.propTypes = {
  addComponent: (prop_types_default()).func,
  components: prop_types_default().instanceOf(Array),
  customRowComponent: (prop_types_default()).func,
  name: (prop_types_default()).string,
  targetUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/BoxWrapper.js


const BoxWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral150};

    & td,
    & th {
      padding: ${({ theme }) => theme.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({ theme }) => theme.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral600};
    outline-offset: -4px;
  }
`;
/* harmony default export */ const List_BoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/NestedTFooter/index.js
var NestedTFooter_defProp = Object.defineProperty;
var NestedTFooter_getOwnPropSymbols = Object.getOwnPropertySymbols;
var NestedTFooter_hasOwnProp = Object.prototype.hasOwnProperty;
var NestedTFooter_propIsEnum = Object.prototype.propertyIsEnumerable;
var NestedTFooter_defNormalProp = (obj, key, value) => key in obj ? NestedTFooter_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var NestedTFooter_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (NestedTFooter_hasOwnProp.call(b, prop))
      NestedTFooter_defNormalProp(a, prop, b[prop]);
  if (NestedTFooter_getOwnPropSymbols)
    for (var prop of NestedTFooter_getOwnPropSymbols(b)) {
      if (NestedTFooter_propIsEnum.call(b, prop))
        NestedTFooter_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (NestedTFooter_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && NestedTFooter_getOwnPropSymbols)
    for (var prop of NestedTFooter_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && NestedTFooter_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};






const IconBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme, color }) => theme.colors[`${color}600`]};
  }
`;
const ButtonBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`;
const NestedTFooter = (_a) => {
  var _b = _a, { children, icon, color } = _b, props = __objRest(_b, ["children", "icon", "color"]);
  return /* @__PURE__ */ react.createElement(ButtonBox, NestedTFooter_spreadValues({
    paddingBottom: 4,
    paddingTop: 4,
    as: "button",
    type: "button"
  }, props), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(IconBox, {
    color,
    "aria-hidden": true,
    background: `${color}200`
  }, icon), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 3
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: `${color}600`
  }, children))));
};
NestedTFooter.propTypes = {
  color: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).string.isRequired,
  icon: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_NestedTFooter = (NestedTFooter);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/index.js
var List_defProp = Object.defineProperty;
var List_defProps = Object.defineProperties;
var List_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var List_getOwnPropSymbols = Object.getOwnPropertySymbols;
var List_hasOwnProp = Object.prototype.hasOwnProperty;
var List_propIsEnum = Object.prototype.propertyIsEnumerable;
var List_defNormalProp = (obj, key, value) => key in obj ? List_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var List_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (List_hasOwnProp.call(b, prop))
      List_defNormalProp(a, prop, b[prop]);
  if (List_getOwnPropSymbols)
    for (var prop of List_getOwnPropSymbols(b)) {
      if (List_propIsEnum.call(b, prop))
        List_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var List_spreadProps = (a, b) => List_defProps(a, List_getOwnPropDescs(b));
















function List({
  addComponentToDZ,
  customRowComponent,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  isMain,
  isNestedInDZComponent,
  isSub,
  items,
  secondLoopComponentUid,
  targetUid
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const { isInDevelopmentMode, modifiedData, isInContentTypeView } = (0,useDataManager/* default */.Z)();
  const { onOpenModalAddField } = (0,useFormModalNavigation/* default */.Z)();
  const onClickAddField = () => {
    trackUsage("hasClickedCTBAddFieldBanner");
    onOpenModalAddField({ forTarget: editTarget, targetUid });
  };
  if (!targetUid) {
    return /* @__PURE__ */ react.createElement(Table.Table, {
      colCount: 2,
      rowCount: 2
    }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "sigma",
      textColor: "neutral600"
    }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "sigma",
      textColor: "neutral600"
    }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(build.EmptyBodyTable, {
      colSpan: 2,
      content: {
        id: (0,getTrad/* default */.Z)("table.content.create-first-content-type"),
        defaultMessage: "Create your first Collection-Type"
      }
    }));
  }
  if (items.length === 0 && isMain) {
    return /* @__PURE__ */ react.createElement(Table.Table, {
      colCount: 2,
      rowCount: 2
    }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "sigma",
      textColor: "neutral600"
    }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "sigma",
      textColor: "neutral600"
    }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(build.EmptyBodyTable, {
      action: /* @__PURE__ */ react.createElement(Button.Button, {
        onClick: onClickAddField,
        size: "L",
        startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
        variant: "secondary"
      }, formatMessage({
        id: (0,getTrad/* default */.Z)("table.button.no-fields"),
        defaultMessage: "Add new field"
      })),
      colSpan: 2,
      content: isInContentTypeView ? {
        id: (0,getTrad/* default */.Z)("table.content.no-fields.collection-type"),
        defaultMessage: "Add your first field to this Collection-Type"
      } : {
        id: (0,getTrad/* default */.Z)("table.content.no-fields.component"),
        defaultMessage: "Add your first field to this component"
      }
    }));
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(List_BoxWrapper, null, /* @__PURE__ */ react.createElement(Box.Box, List_spreadValues({
    paddingLeft: 6,
    paddingRight: isMain ? 6 : 0
  }, isMain && { style: { overflowX: "auto" } }), /* @__PURE__ */ react.createElement("table", null, isMain && /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("th", null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement("th", {
    colSpan: "2"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement("tbody", null, items.map((item) => {
    const { type } = item;
    const CustomRow = customRowComponent;
    return /* @__PURE__ */ react.createElement(react.Fragment, {
      key: item.name
    }, /* @__PURE__ */ react.createElement(CustomRow, List_spreadProps(List_spreadValues({}, item), {
      isNestedInDZComponent,
      targetUid,
      editTarget,
      firstLoopComponentUid,
      isFromDynamicZone,
      secondLoopComponentUid
    })), type === "component" && /* @__PURE__ */ react.createElement(components_ComponentList, List_spreadProps(List_spreadValues({}, item), {
      customRowComponent,
      targetUid,
      isNestedInDZComponent: isFromDynamicZone,
      editTarget,
      firstLoopComponentUid
    })), type === "dynamiczone" && /* @__PURE__ */ react.createElement(components_DynamicZoneList, List_spreadProps(List_spreadValues({}, item), {
      customRowComponent,
      addComponent: addComponentToDZ,
      targetUid
    })));
  })))), isMain && isInDevelopmentMode && /* @__PURE__ */ react.createElement(Table.TFooter, {
    icon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    onClick: onClickAddField
  }, formatMessage({
    id: (0,getTrad/* default */.Z)(`form.button.add.field.to.${modifiedData.contentType ? modifiedData.contentType.schema.kind : editTarget || "collectionType"}`),
    defaultMessage: "Add another field"
  })), isSub && isInDevelopmentMode && /* @__PURE__ */ react.createElement(components_NestedTFooter, {
    icon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    onClick: onClickAddField,
    color: isFromDynamicZone ? "primary" : "neutral"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)(`form.button.add.field.to.component`),
    defaultMessage: "Add another field"
  }))));
}
List.defaultProps = {
  addComponentToDZ: () => {
  },
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false,
  isMain: false,
  isSub: false,
  items: [],
  secondLoopComponentUid: null,
  targetUid: null
};
List.propTypes = {
  addComponentToDZ: (prop_types_default()).func,
  customRowComponent: (prop_types_default()).func,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool,
  isMain: (prop_types_default()).bool,
  items: prop_types_default().instanceOf(Array),
  secondLoopComponentUid: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  isSub: (prop_types_default()).bool
};
/* harmony default export */ const components_List = (List);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(49549);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Lock.js
var Lock = __webpack_require__(83617);
var Lock_default = /*#__PURE__*/__webpack_require__.n(Lock);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Trash.js
var Trash = __webpack_require__(62982);
var Trash_default = /*#__PURE__*/__webpack_require__.n(Trash);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/icons/Curve.js
var Curve_defProp = Object.defineProperty;
var Curve_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Curve_hasOwnProp = Object.prototype.hasOwnProperty;
var Curve_propIsEnum = Object.prototype.propertyIsEnumerable;
var Curve_defNormalProp = (obj, key, value) => key in obj ? Curve_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Curve_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Curve_hasOwnProp.call(b, prop))
      Curve_defNormalProp(a, prop, b[prop]);
  if (Curve_getOwnPropSymbols)
    for (var prop of Curve_getOwnPropSymbols(b)) {
      if (Curve_propIsEnum.call(b, prop))
        Curve_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const StyledBox = (0,styled_components_browser_cjs["default"])(Box.Box)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme, color }) => theme.colors[color]};
    display: block;
  }
`;
const Svg = styled_components_browser_cjs["default"].svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Curve = (props) => /* @__PURE__ */ react.createElement(StyledBox, null, /* @__PURE__ */ react.createElement(Svg, Curve_spreadValues({
  width: "20",
  height: "23",
  viewBox: "0 0 20 23",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /* @__PURE__ */ react.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"
})));
Curve.propTypes = {
  color: (prop_types_default()).string.isRequired
};
/* harmony default export */ const icons_Curve = (Curve);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/UpperFirst/index.js


const UpperFirst = ({ content }) => upperFirst_default()(content);
UpperFirst.defaultProps = {
  content: null
};
UpperFirst.propTypes = {
  content: (prop_types_default()).string
};
/* harmony default export */ const components_UpperFirst = (UpperFirst);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/BoxWrapper.js


const BoxWrapper_BoxWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  position: relative;
`;
/* harmony default export */ const ListRow_BoxWrapper = (BoxWrapper_BoxWrapper);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js
var AttributeIcon = __webpack_require__(71243);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/index.js
var ListRow_defProp = Object.defineProperty;
var ListRow_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListRow_hasOwnProp = Object.prototype.hasOwnProperty;
var ListRow_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListRow_defNormalProp = (obj, key, value) => key in obj ? ListRow_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListRow_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListRow_hasOwnProp.call(b, prop))
      ListRow_defNormalProp(a, prop, b[prop]);
  if (ListRow_getOwnPropSymbols)
    for (var prop of ListRow_getOwnPropSymbols(b)) {
      if (ListRow_propIsEnum.call(b, prop))
        ListRow_defNormalProp(a, prop, b[prop]);
    }
  return a;
};



















function ListRow({
  configurable,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  name,
  onClick,
  relation,
  repeatable,
  secondLoopComponentUid,
  target,
  targetUid,
  type
}) {
  const { contentTypes, isInDevelopmentMode, removeAttribute } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const isMorph = type === "relation" && relation.includes("morph");
  const ico = ["integer", "biginteger", "float", "decimal"].includes(type) ? "number" : type;
  let readableType = type;
  if (["integer", "biginteger", "float", "decimal"].includes(type)) {
    readableType = "number";
  } else if (["string"].includes(type)) {
    readableType = "text";
  }
  const contentType = get_default()(contentTypes, [target], {});
  const contentTypeFriendlyName = get_default()(contentType, ["schema", "displayName"], "");
  const isPluginContentType = get_default()(contentType, "plugin");
  const src = target ? "relation" : ico;
  const handleClick = () => {
    if (isMorph) {
      return;
    }
    if (configurable !== false) {
      const attrType = type;
      onClick(editTarget, secondLoopComponentUid || firstLoopComponentUid || targetUid, name, attrType);
    }
  };
  let loopNumber;
  if (secondLoopComponentUid && firstLoopComponentUid) {
    loopNumber = 2;
  } else if (firstLoopComponentUid) {
    loopNumber = 1;
  } else {
    loopNumber = 0;
  }
  return /* @__PURE__ */ react.createElement(ListRow_BoxWrapper, ListRow_spreadValues({
    as: "tr"
  }, (0,build.onRowClick)({
    fn: handleClick,
    condition: isInDevelopmentMode && configurable && !isMorph
  })), /* @__PURE__ */ react.createElement("td", {
    style: { position: "relative" }
  }, loopNumber !== 0 && /* @__PURE__ */ react.createElement(icons_Curve, {
    color: isFromDynamicZone ? "primary200" : "neutral150"
  }), /* @__PURE__ */ react.createElement(Stack.Stack, {
    paddingLeft: 2,
    spacing: 4,
    horizontal: true
  }, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, {
    key: src,
    type: src
  }), /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, name))), /* @__PURE__ */ react.createElement("td", null, target ? /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: (0,getTrad/* default */.Z)(`modelPage.attribute.${isMorph ? "relation-polymorphic" : "relationWith"}`),
    defaultMessage: "Relation with"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", {
    style: { fontStyle: "italic" }
  }, /* @__PURE__ */ react.createElement(components_UpperFirst, {
    content: contentTypeFriendlyName
  }), "\xA0", isPluginContentType && `(${formatMessage({
    id: (0,getTrad/* default */.Z)(`from`),
    defaultMessage: "from"
  })}: ${isPluginContentType})`)) : /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${readableType}`),
    defaultMessage: type
  }), "\xA0", repeatable && formatMessage({
    id: (0,getTrad/* default */.Z)("component.repeatable"),
    defaultMessage: "(repeatable)"
  }))), /* @__PURE__ */ react.createElement("td", null, isInDevelopmentMode ? /* @__PURE__ */ react.createElement(Flex.Flex, ListRow_spreadValues({
    justifyContent: "flex-end"
  }, build.stopPropagation), configurable ? /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 1
  }, !isMorph && /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleClick,
    label: `${formatMessage({
      id: "app.utils.edit",
      defaultMessage: "Edit"
    })} ${name}`,
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((Pencil_default()), null)
  }), /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: (e) => {
      e.stopPropagation();
      removeAttribute(editTarget, name, secondLoopComponentUid || firstLoopComponentUid || "");
    },
    label: `${formatMessage({
      id: "global.delete",
      defaultMessage: "Delete"
    })} ${name}`,
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null)
  })) : /* @__PURE__ */ react.createElement((Lock_default()), null)) : /* @__PURE__ */ react.createElement(Box.Box, {
    height: (0,build.pxToRem)(32)
  })));
}
ListRow.defaultProps = {
  configurable: true,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  onClick: () => {
  },
  relation: "",
  repeatable: false,
  secondLoopComponentUid: null,
  target: null,
  targetUid: null,
  type: null
};
ListRow.propTypes = {
  configurable: (prop_types_default()).bool,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func,
  relation: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool,
  secondLoopComponentUid: (prop_types_default()).string,
  target: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_ListRow = ((0,react.memo)(ListRow));


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getAttributeDisplayedType.js
const getAttributeDisplayedType = (type) => {
  let displayedType;
  switch (type) {
    case "date":
    case "datetime":
    case "time":
    case "timestamp":
      displayedType = "date";
      break;
    case "integer":
    case "biginteger":
    case "decimal":
    case "float":
      displayedType = "number";
      break;
    case "string":
    case "text":
      displayedType = "text";
      break;
    case "":
      displayedType = "relation";
      break;
    default:
      displayedType = type;
  }
  return displayedType;
};
/* harmony default export */ const utils_getAttributeDisplayedType = (getAttributeDisplayedType);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Layer.js
var Layer = __webpack_require__(16923);
var Layer_default = /*#__PURE__*/__webpack_require__.n(Layer);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/LinkToCMSettingsView/index.js







const cmPermissions = {
  collectionTypesConfigurations: [
    {
      action: "plugin::content-manager.collection-types.configure-view",
      subject: null
    }
  ],
  componentsConfigurations: [
    {
      action: "plugin::content-manager.components.configure-layout",
      subject: null
    }
  ],
  singleTypesConfigurations: [
    {
      action: "plugin::content-manager.single-types.configure-view",
      subject: null
    }
  ]
};
const LinkToCMSettingsView = ({
  disabled,
  isTemporary,
  isInContentTypeView,
  contentTypeKind,
  targetUid
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const {
    collectionTypesConfigurations,
    componentsConfigurations,
    singleTypesConfigurations
  } = cmPermissions;
  const label = formatMessage({ id: "content-type-builder.form.button.configure-view" });
  let permissionsToApply = collectionTypesConfigurations;
  const handleClick = () => {
    if (isTemporary) {
      return false;
    }
    if (isInContentTypeView) {
      push(`/content-manager/collectionType/${targetUid}/configurations/edit`);
    } else {
      push(`/content-manager/components/${targetUid}/configurations/edit`);
    }
    return false;
  };
  if (isInContentTypeView && contentTypeKind === "singleType") {
    permissionsToApply = singleTypesConfigurations;
  }
  if (!isInContentTypeView) {
    permissionsToApply = componentsConfigurations;
  }
  return /* @__PURE__ */ react.createElement(build.CheckPermissions, {
    permissions: permissionsToApply
  }, /* @__PURE__ */ react.createElement(Button.Button, {
    startIcon: /* @__PURE__ */ react.createElement((Layer_default()), null),
    variant: "tertiary",
    onClick: handleClick,
    disabled: isTemporary || disabled
  }, label));
};
LinkToCMSettingsView.defaultProps = {
  contentTypeKind: "collectionType",
  isInContentTypeView: true,
  isTemporary: false,
  targetUid: ""
};
LinkToCMSettingsView.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  contentTypeKind: (prop_types_default()).string,
  isInContentTypeView: (prop_types_default()).bool,
  isTemporary: (prop_types_default()).bool,
  targetUid: (prop_types_default()).string
};
/* harmony default export */ const ListView_LinkToCMSettingsView = ((0,react.memo)(LinkToCMSettingsView));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/index.js
var ListView_defProp = Object.defineProperty;
var ListView_defProps = Object.defineProperties;
var ListView_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ListView_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ListView_hasOwnProp = Object.prototype.hasOwnProperty;
var ListView_propIsEnum = Object.prototype.propertyIsEnumerable;
var ListView_defNormalProp = (obj, key, value) => key in obj ? ListView_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ListView_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ListView_hasOwnProp.call(b, prop))
      ListView_defNormalProp(a, prop, b[prop]);
  if (ListView_getOwnPropSymbols)
    for (var prop of ListView_getOwnPropSymbols(b)) {
      if (ListView_propIsEnum.call(b, prop))
        ListView_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ListView_spreadProps = (a, b) => ListView_defProps(a, ListView_getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

























const ListView = () => {
  const {
    initialData,
    modifiedData,
    isInDevelopmentMode,
    isInContentTypeView,
    submitData
  } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const match = (0,react_router_dom_min.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID");
  const {
    onOpenModalAddComponentsToDZ,
    onOpenModalAddField,
    onOpenModalEditField,
    onOpenModalEditSchema
  } = (0,useFormModalNavigation/* default */.Z)();
  const firstMainDataPath = isInContentTypeView ? "contentType" : "component";
  const mainDataTypeAttributesPath = [firstMainDataPath, "schema", "attributes"];
  const targetUid = get_default()(modifiedData, [firstMainDataPath, "uid"]);
  const isTemporary = get_default()(modifiedData, [firstMainDataPath, "isTemporary"], false);
  const contentTypeKind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], null);
  const attributes = get_default()(modifiedData, mainDataTypeAttributesPath, []);
  const isFromPlugin = has_default()(initialData, [firstMainDataPath, "plugin"]);
  const hasModelBeenModified = !isEqual_default()(modifiedData, initialData);
  const forTarget = isInContentTypeView ? "contentType" : "component";
  const handleClickAddComponentToDZ = (dynamicZoneTarget) => {
    onOpenModalAddComponentsToDZ({ dynamicZoneTarget, targetUid });
  };
  const handleClickEditField = (forTarget2, targetUid2, attributeName, type) => __async(undefined, null, function* () {
    const attributeType = utils_getAttributeDisplayedType(type);
    const step = type === "component" ? "2" : null;
    onOpenModalEditField({
      forTarget: forTarget2,
      targetUid: targetUid2,
      attributeName,
      attributeType,
      step
    });
  });
  let label = get_default()(modifiedData, [firstMainDataPath, "schema", "displayName"], "");
  const kind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], "");
  const isCreatingFirstContentType = (match == null ? void 0 : match.params.currentUID) === "create-content-type";
  if (!label && isCreatingFirstContentType) {
    label = formatMessage({
      id: (0,getTrad/* default */.Z)("button.model.create"),
      defaultMessage: "Create new collection type"
    });
  }
  const onEdit = () => {
    const contentType = kind || firstMainDataPath;
    if (contentType === "collectionType") {
      trackUsage("willEditNameOfContentType");
    }
    if (contentType === "singleType") {
      trackUsage("willEditNameOfSingleType");
    }
    onOpenModalEditSchema({
      modalType: firstMainDataPath,
      forTarget: firstMainDataPath,
      targetUid,
      kind: contentType
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Prompt, {
    message: formatMessage({ id: (0,getTrad/* default */.Z)("prompt.unsaved") }),
    when: hasModelBeenModified
  }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    id: "title",
    primaryAction: isInDevelopmentMode && /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 2
    }, !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      variant: "secondary",
      onClick: () => {
        onOpenModalAddField({ forTarget, targetUid });
      }
    }, formatMessage({ id: (0,getTrad/* default */.Z)("button.attributes.add.another") })), /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      onClick: () => submitData(),
      type: "submit",
      disabled: isEqual_default()(modifiedData, initialData)
    }, formatMessage({
      id: "global.save",
      defaultMessage: "Save"
    }))),
    secondaryAction: isInDevelopmentMode && !isFromPlugin && !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Pencil_default()), null),
      variant: "tertiary",
      onClick: onEdit
    }, formatMessage({
      id: "app.utils.edit",
      defaultMessage: "Edit"
    })),
    title: upperFirst_default()(label),
    subtitle: formatMessage({
      id: (0,getTrad/* default */.Z)("listView.headerLayout.description"),
      defaultMessage: "Build the data architecture of your content"
    }),
    navigationAction: /* @__PURE__ */ react.createElement(Link.Link, {
      startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null),
      to: "/plugins/content-type-builder/"
    }, formatMessage({
      id: "global.back",
      defaultMessage: "Back"
    }))
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 4
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "flex-end"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 2
  }, /* @__PURE__ */ react.createElement(ListView_LinkToCMSettingsView, {
    key: "link-to-cm-settings-view",
    targetUid,
    isTemporary,
    isInContentTypeView,
    contentTypeKind,
    disabled: isCreatingFirstContentType
  }))), /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral0",
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(components_List, {
    items: attributes,
    customRowComponent: (props) => /* @__PURE__ */ react.createElement(components_ListRow, ListView_spreadProps(ListView_spreadValues({}, props), {
      onClick: handleClickEditField
    })),
    addComponentToDZ: handleClickAddComponentToDZ,
    targetUid,
    editTarget: forTarget,
    isMain: true
  })))));
};
/* harmony default export */ const pages_ListView = (ListView);


/***/ })

}]);