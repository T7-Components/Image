!function(e){function t(t){for(var o,i,l=t[0],c=t[1],s=t[2],f=0,p=[];f<l.length;f++)i=l[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0,2:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;a.push([6,0]),n()}({11:function(e,t,n){},13:function(e,t,n){},3:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(0),i=n.n(a),l=n(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}(this,u(t).call(this,e)),Object(l.bind)(p(p(n))),n.intersectionObservers={},n.image=null,n.preloader=document.createElement("img"),n.preservedStyle={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.image,t=this.addEventListeners,n=this.getIntersectionObserver,o=this.props;n(o.rootMargin,o.thresholds).observe(e),t()}},{key:"componentWillUnmount",value:function(){var e=this.image,t=this.getIntersectionObserver,n=this.removeEventListeners,o=this.props;t(o.rootMargin,o.thresholds).unobserve(e),n()}},{key:"componentDidUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.rootMargin,n=e.src,o=e.thresholds,r=this.image,a=this.preloader,i=this.addEventListeners,l=this.getIntersectionObserver,c=this.removeEventListeners,s=this.props,u=s.rootMargin,f=s.src,p=s.thresholds;if(f!==n&&(c(),a.src=f,i()),u!==t||p!==o){var d=l(t,o),h=l(u,p);d.unobserve(r),h.observe(r)}}},{key:"addEventListeners",value:function(){var e=this.preloader,t=this.onPreloaderLoad,n=this.onPreloaderError;e.addEventListener("load",t),e.addEventListener("error",n)}},{key:"removeEventListeners",value:function(){var e=this.image,t=this.preloader,n=this.onImageLoad,o=this.onPreloaderLoad,r=this.onPreloaderError;e.removeEventListener("load",n),t.removeEventListener("load",o),t.removeEventListener("error",r)}},{key:"onPreloaderLoad",value:function(){var e=this.image,t=this.preloader,n=this.onImageLoad;e.addEventListener("load",n),e.src=t.src}},{key:"onPreloaderError",value:function(){var e=this.image,t=this.props.fallback;t&&(e.src=t)}},{key:"onImageLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.image,n=this.preservedStyle,o=this.props,r=o.fallback,a=o.onFallback,i=o.onLoad,l=o.src;t.style.backgroundImage=n.backgroundImage,t.src===l&&i(e),t.src===r&&a({type:"fallback",target:t})}},{key:"onIntersection",value:function(){var e=this.image,t=this.preloader,n=this.preservedStyle,o=this.props,r=o.onIntersection,a=o.placeholder,i=o.src;n.backgroundImage=e.style.backgroundImage,a&&(e.style.backgroundImage=n.backgroundImage?"url(".concat(a,"),").concat(n.backgroundImage):"url(".concat(a,")")),i&&(t.src=i),r({type:"intersection",target:e})}},{key:"getPreloaderSrc",value:function(e,t){var n=Number(e)||0,o=Number(t)||0;return'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="'.concat(n,'" height="').concat(o,'"%3E%3C/svg%3E')}},{key:"getIntersectionObserver",value:function(e,t){var n=this.onIntersection,o=this.intersectionObservers,r=String(e),a=(t instanceof Array?t:String(t).trim().split(/\s+/)).map(function(e){return Number(e)||0}),i=a.join(" ");if(o[r]||(o[r]={}),!o[r][i]){o[r][i]={observe:function(){},unobserve:function(){}};var l={rootMargin:r,thresholds:a};if("function"==typeof window.IntersectionObserver){var c=new window.IntersectionObserver(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intersectionRatio,a=e.target;t>0&&(o[r][i].unobserve(a),n())})},l);o[r][i]=c}}return o[r][i]}},{key:"render",value:function(){var e=this,t=this.getPreloaderSrc,n=this.props,o=n.alt,a=n.height,i=n.style,l=n.width,c={alt:o,height:a,src:t(l,a),style:i,width:l,ref:function(t){e.image=t}};return r.a.createElement("img",c)}}]),t}();d.propTypes={src:i.a.string,alt:i.a.string,placeholder:i.a.string,fallback:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number]),rootMargin:i.a.string,style:i.a.object,thresholds:i.a.oneOfType([i.a.arrayOf(i.a.oneOfType([i.a.string,i.a.number])),i.a.string,i.a.number]),onIntersection:i.a.func,onLoad:i.a.func,onFallback:i.a.func},d.defaultProps={alt:"",width:0,height:0,rootMargin:"0px 0px 0px 0px",thresholds:.01,onFallback:function(){},onIntersection:function(){},onLoad:function(){}},t.default=d},6:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(5),i=n.n(a),l=(n(11),n(13),n(3));function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"@t7/image"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/T7-Components/image/blob/master/source/demo.js"},'View "demo.js" on GitHub')),r.a.createElement("p",null,"Scroll waaay down…"),r.a.createElement("hr",null),r.a.createElement("div",{className:"keep-scrolling"},"Keep scrolling down…"),r.a.createElement("hr",null),r.a.createElement("p",null,"The following image will load approximately 5 seconds after scrolling 50% into view."),r.a.createElement("p",null,r.a.createElement(l.default,{alt:"IMAGE 1",width:"800",height:"200",src:"https://sloow.me/5000/placehold.it/800x200/69c/fff?text=IMAGE+1",fallback:"https://placehold.it/800x200/69c/fff?text=IMAGE+1+FALLBACK",style:{background:"#69c"},rootMargin:"0px 0px 0px 0px",thresholds:"0.5",onIntersection:function(e){window.console&&window.console.log("IMAGE 1 INTERSECTION")},onLoad:function(e){window.console&&window.console.log("IMAGE 1 LOADED")},onFallback:function(e){window.console&&window.console.log("IMAGE 1 FALLBACK LOADED")}})),r.a.createElement("hr",null),r.a.createElement("p",null,"The following image will fail approximately 5 seconds after scrolling 50% into view."),r.a.createElement("p",null,"There may then be a slight delay, as the fallback image is fetched form the server."),r.a.createElement("p",null,r.a.createElement(l.default,{alt:"IMAGE 2",width:"800",height:"200",src:"https://sloow.me/5000+404/placehold.it/800x200/393/fff?text=IMAGE+2",fallback:"https://placehold.it/800x200/393/fff?text=IMAGE+2+FALLBACK",style:{background:"#393"},rootMargin:"0px 0px 0px 0px",thresholds:"0.5",onIntersection:function(e){window.console&&window.console.log("IMAGE 2 INTERSECTION")},onLoad:function(e){window.console&&window.console.log("IMAGE 2 LOADED")},onFallback:function(e){window.console&&window.console.log("IMAGE 2 FALLBACK LOADED")}})))}}]),t}(),h=document.getElementById("root");i.a.render(r.a.createElement(d,null),h)}});