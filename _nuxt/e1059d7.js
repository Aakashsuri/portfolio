(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);n(27);var r=n(6),o={fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("misc").fetch();case 2:n=t.sent,r=n.blog_link,o=n.email,Object.assign(e,{blog:r,email:o});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{isNavbarOpenedOnPhone:!1,blog:"",email:""}},watch:{$route:function(){this.closeMobileNav()}},mounted:function(){var e=this;window.addEventListener("resize",(function(){return e.closeMobileNav()}))},methods:{toggleMobileNav:function(){document.body.classList.toggle("prevent-scroll-phone"),this.isNavbarOpenedOnPhone=!this.isNavbarOpenedOnPhone},closeMobileNav:function(){document.body.classList.remove("prevent-scroll-phone"),this.isNavbarOpenedOnPhone=!1}}},l=(n(219),n(24)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("nuxt-link",{staticClass:"header__brand",attrs:{to:"/"}},[r("img",{staticClass:"header__brand__img",attrs:{src:"/img/brand.png",alt:"Aakash Suri's Brand logo. Links to homepage"}})]),e._v(" "),r("div",{staticClass:"header__hamburger",class:{"header__hamburger--opened":e.isNavbarOpenedOnPhone},on:{click:e.toggleMobileNav}},[r("img",{attrs:{src:n(218),alt:"Hamburger menu - toggle navbar on smaller screens"}})]),e._v(" "),r("nav",{staticClass:"header__nav",class:{"header__nav--mobile-hidden":!e.isNavbarOpenedOnPhone}},[r("ul",{staticClass:"header__nav__list"},[r("li",{staticClass:"header__nav__item"},[r("nuxt-link",{attrs:{to:"/about"}},[e._v("About Suri")])],1),e._v(" "),r("li",{staticClass:"header__nav__item"},[r("a",{attrs:{href:e.blog,target:"_blank",rel:"noopener"}},[e._v("Blog")])]),e._v(" "),r("li",{staticClass:"header__nav__item italic"},[r("a",{attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))])])])])],1)}),[],!1,null,null,null);t.default=component.exports},121:function(e,t,n){"use strict";n(230),n(233);n(0).a.directive("aspect-ratio",(function(e,t){var n=t.value;e.style.paddingBottom="".concat((1/Number(n)*100).toFixed(2),"%")}))},122:function(e,t,n){"use strict";n(38),n(29),n(90),n(235),n(21);var r=n(44),o=n(0),l=n(173),c=n.n(l),d=n(85);d.a.methods.recalculateDimensions=function(e){var t=this.vertical?"height":"width",n=this.$children.filter((function(e){return"rl-carousel-slide"===e.$options.name}));if(this.slideCount=n.length,this.value>this.slideCount-1&&this.$emit("input",Math.max(this.slideCount-1,0)),this.clientSize=e.getBoundingClientRect()[t],this.slideSizes.splice(0,this.slideSizes.length),n.length>0){var o,l=n.map((function(s){return s.$el.getBoundingClientRect()[t]}));(o=this.slideSizes).push.apply(o,Object(r.a)(l)),this.carouselSize=l.reduce((function(a,e){return a+e}),0)}else this.carouselSize=0;this.$emit("size-calculated")},o.a.use(c.a),o.a.component("rl-carousel",d.a),o.a.component("rl-carousel-slide",d.b)},176:function(e,t,n){"use strict";var r={components:{SectionHeader:n(117).default}},o=(n(221),n(24)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"site-container"},[t("section-header"),this._v(" "),t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{SectionHeader:n(117).default})},179:function(e,t,n){n(180),e.exports=n(181)},218:function(e,t,n){e.exports=n.p+"img/hamburger.f2c5a9f.png"},219:function(e,t,n){"use strict";var r=n(82);n.n(r).a},220:function(e,t,n){(t=n(33)(!1)).push([e.i,'.header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;padding-top:1.5rem;padding-bottom:1.5rem}.header__hamburger{margin-left:auto;border-radius:9999px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:2rem;-webkit-tap-highlight-color:transparent;transition:transform .3s}.header__hamburger--opened{transform:rotate(-135deg)}.header__brand{display:flex;align-items:center;flex-shrink:0;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));margin-right:1.5rem}.header__brand__img{width:6rem;height:6rem;margin-right:.5rem}.header__nav{flex-grow:1;align-items:center;width:100%;height:100vh}.header__nav--mobile-hidden{display:none}.header__nav__list{font-size:1.5rem;font-family:"Libre Baskerville",Georgia,Cambria,"Times New Roman",Times,serif;--text-opacity:1;color:#f7fafc;color:rgba(247,250,252,var(--text-opacity));margin-left:auto;margin-top:4rem}.header__nav__item{display:block;margin-top:2.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header__nav__item>a{transition-property:background-color,border-color,color,fill,stroke;transition-duration:.1s}.header__nav__item>a:hover{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}@media (min-width:768px){.header{position:-webkit-sticky;position:sticky;top:0;z-index:10}.header__hamburger{display:none}.header__nav{display:flex;width:auto;height:auto}.header__nav--mobile-hidden{display:flex}.header__nav__list{margin-top:0}.header__nav__item{display:inline-block;margin-top:0;margin-right:4rem}.header__nav__item:last-child{margin-right:0}}',""]),e.exports=t},221:function(e,t,n){"use strict";var r=n(83);n.n(r).a},222:function(e,t,n){(t=n(33)(!1)).push([e.i,'html{font-family:"IBM Plex Sans",system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";overflow:hidden}body{--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));height:100vh;overflow:auto;overflow-x:hidden}body.prevent-scroll-phone{overflow:hidden}@media (min-width:768px){body.prevent-scroll-phone{overflow:auto;overflow-x:hidden}}.site-container{padding-left:1.5rem;padding-right:1.5rem;margin-left:auto;margin-right:auto;max-width:1280px}',""]),e.exports=t},82:function(e,t,n){var content=n(220);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("7810f3de",content,!0,{sourceMap:!1})},83:function(e,t,n){var content=n(222);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("4e8213bc",content,!0,{sourceMap:!1})}},[[179,4,1,5]]]);