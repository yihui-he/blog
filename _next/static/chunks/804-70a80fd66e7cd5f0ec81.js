(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{6804:function(e,t,r){"use strict";r.d(t,{mf:function(){return be},mK:function(){return _e},lN:function(){return X}});var n=r(4942),o=r(5987),i=r(7294),s=r(9008),a=r(1664),c=r(5152),l=r(4184),u=r.n(l),d=r(1163),p=r(8276),m=r(3353),h=r.n(m),g=r(8586),f=r(8950),j=r(440),x=r(8971),v=r(9350),_=r(5203),b=r(2009),w=r(7873),y=r(4338),k=r(4021);function N(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.uuid,o=void 0===n||n,i=(0,w.q)(e,{uuid:!1});if(!i)return null;var s=y.JN[i];return s||(0,k.S)(e,t,{uuid:o})}var P=!!y.IT;function C(e,t){return[e,t.toString()].filter(Boolean).join("?")}var O=function(e,t){if(!e)return null;if(e.startsWith("data:"))return e;if(y.EN&&e.startsWith(y.EN))return e;if(e.startsWith("/images")&&(e="https://www.notion.so".concat(e)),!e.startsWith("https://images.unsplash.com")){e="https://www.notion.so".concat(e.startsWith("/image")?e:"/image/".concat(encodeURIComponent(e)));var r=new URL(e),n="space"===t.parent_table?"block":t.parent_table;"collection"===n&&(n="block"),r.searchParams.set("table",n),r.searchParams.set("id",t.id),r.searchParams.set("cache","v2"),e=r.toString()}return S(e)},S=function(e){return e.startsWith("data:")?e:y.EN?"".concat(y.EN,"/").concat(encodeURIComponent(e)):e},I=r(5946);var M=r(5861),E=r(7757),A=r.n(E),W=r(3144),B=r.n(W),D=r(7070),F=r.n(D)()((function(e){return T.apply(this,arguments)}),{maxAge:1e4});function T(){return(T=(0,M.Z)(A().mark((function e(t){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B()(y.hi.searchNotion,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){if(console.log(e),e.ok)return e;var t=new Error(e.statusText);return t.response=e,Promise.reject(t)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=r(5893),L=function(e){var t=e.site;if(!t.fontFamily)return null;var r=[t.fontFamily],n=r.map((function(e){return e.replace(/ /g,"+")})).map((function(e){return"family=".concat(e,":ital,wght@0,200..700;1,200..700")})).join("&"),o="https://fonts.googleapis.com/css?".concat(n,"&display=swap"),i=r.map((function(e){return'"'.concat(e,'"')})).join(", ");return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s.default,{children:[(0,Z.jsx)("link",{rel:"stylesheet",href:o}),(0,Z.jsx)("style",{children:"\n          .notion.notion-app {\n            font-family: ".concat(i,", -apple-system, BlinkMacSystemFont,\n              'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif,\n              'Segoe UI Emoji', 'Segoe UI Symbol';\n          }\n        ")})]})})},G=r(1230),R=r.n(G),H=["className"];function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.className,r=(0,o.Z)(e,H);return(0,Z.jsxs)("svg",z(z({className:u()(R().loadingIcon,t)},r),{},{viewBox:"0 0 24 24",children:[(0,Z.jsx)("defs",{children:(0,Z.jsxs)("linearGradient",{x1:"28.1542969%",y1:"63.7402344%",x2:"74.6289062%",y2:"17.7832031%",id:"linearGradient-1",children:[(0,Z.jsx)("stop",{stopColor:"rgba(164, 164, 164, 1)",offset:"0%"}),(0,Z.jsx)("stop",{stopColor:"rgba(164, 164, 164, 0)",stopOpacity:"0",offset:"100%"})]})}),(0,Z.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",children:(0,Z.jsx)("g",{transform:"translate(-236.000000, -286.000000)",children:(0,Z.jsxs)("g",{transform:"translate(238.000000, 286.000000)",children:[(0,Z.jsx)("circle",{id:"Oval-2",stroke:"url(#linearGradient-1)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),(0,Z.jsx)("path",{d:"M10,2 C4.4771525,2 0,6.4771525 0,12",id:"Oval-2",stroke:"rgba(164, 164, 164, 1)",strokeWidth:"4"}),(0,Z.jsx)("rect",{id:"Rectangle-1",fill:"rgba(164, 164, 164, 1)",x:"8",y:"0",width:"4",height:"4",rx:"8"})]})})})]}))},V=function(){return(0,Z.jsx)("div",{className:R().container,children:(0,Z.jsx)(q,{})})},J=function(e){var t=e.site;return(0,Z.jsxs)(s.default,{children:[(0,Z.jsx)("meta",{charSet:"utf-8"}),(0,Z.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,Z.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(null===t||void 0===t?void 0:t.description)&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("meta",{name:"description",content:t.description}),(0,Z.jsx)("meta",{property:"og:description",content:t.description})]}),(0,Z.jsx)("meta",{name:"theme-color",content:"#EB625A"}),(0,Z.jsx)("meta",{property:"og:type",content:"website"})]})},X=function(e){var t=e.site,r=e.pageId,n=e.error,o=(null===t||void 0===t?void 0:t.name)||"Notion Page Not Found";return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(J,{site:t}),(0,Z.jsxs)(s.default,{children:[(0,Z.jsx)("meta",{property:"og:site_name",content:o}),(0,Z.jsx)("meta",{property:"og:title",content:o}),(0,Z.jsx)("title",{children:o})]}),(0,Z.jsx)("div",{className:R().container,children:(0,Z.jsxs)("main",{className:R().main,children:[(0,Z.jsx)("h1",{children:"Notion Page Not Found"}),n?(0,Z.jsx)("p",{children:n.message}):r&&(0,Z.jsxs)("p",{children:['Make sure that Notion page "',r,'" is publicly accessible.']}),(0,Z.jsx)("img",{src:"/404.png",alt:"404 Not Found",className:R().errorImage})]})})]})},K=r(155),Y=r(8193),Q=function(e){var t=e.tweet;return(0,Z.jsxs)("div",{className:R().pageActions,children:[(0,Z.jsx)("a",{className:R().likeTweet,href:"https://twitter.com/intent/like?tweet_id=".concat(t),target:"_blank",rel:"noopener noreferrer",title:"Like this post on Twitter",children:(0,Z.jsx)(K.Zwb,{})}),(0,Z.jsx)("a",{className:R().retweet,href:"https://twitter.com/intent/retweet?tweet_id=".concat(t),target:"_blank",rel:"noopener noreferrer",title:"Retweet this post on Twitter",children:(0,Z.jsx)(Y.GaC,{})})]})},$=r(885),ee=r(9583),te=function(e){var t=e.isDarkMode,r=e.toggleDarkMode,n=i.useState(!1),o=(0,$.Z)(n,2),s=o[0],a=o[1],c=i.useCallback((function(e){e.preventDefault(),r()}),[r]);return i.useEffect((function(){a(!0)}),[]),(0,Z.jsxs)("footer",{className:R().footer,children:[(0,Z.jsxs)("div",{className:R().copyright,children:["Copyright 2021 ",y.v]}),s?(0,Z.jsx)("div",{className:R().settings,children:(0,Z.jsx)("a",{className:R().toggleDarkMode,onClick:c,title:"Toggle dark mode",children:t?(0,Z.jsx)(K.tjP,{}):(0,Z.jsx)(K.ijp,{})})}):null,(0,Z.jsxs)("div",{className:R().social,children:[y.km&&(0,Z.jsx)("a",{className:R().twitter,href:"https://twitter.com/".concat(y.km),title:"Twitter @".concat(y.km),target:"_blank",rel:"noopener noreferrer",children:(0,Z.jsx)(ee.fWC,{})}),y.bW&&(0,Z.jsx)("a",{className:R().github,href:"https://github.com/".concat(y.bW),title:"GitHub @".concat(y.bW),target:"_blank",rel:"noopener noreferrer",children:(0,Z.jsx)(ee.hJX,{})}),y.kG&&(0,Z.jsx)("a",{className:R().linkedin,href:"https://www.linkedin.com/in/".concat(y.kG),title:"LinkedIn ".concat(y.v),target:"_blank",rel:"noopener noreferrer",children:(0,Z.jsx)(ee.ltd,{})})]})]})},re=r(7696),ne=r.n(re),oe=[y.km&&{name:"twitter",href:"https://twitter.com/".concat(y.km),title:"Twitter @".concat(y.km),icon:(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,Z.jsx)("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"})})},y.bW&&{name:"github",href:"https://github.com/".concat(y.bW),title:"GitHub @".concat(y.bW),icon:(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,Z.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})},y.kG&&{name:"linkedin",href:"https://www.linkedin.com/in/".concat(y.kG),title:"LinkedIn ".concat(y.v),icon:(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,Z.jsx)("path",{d:"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"})})}].filter(Boolean),ie=function(){return(0,Z.jsx)("div",{className:ne().pageSocial,children:oe.map((function(e){return(0,Z.jsxs)("a",{className:u()(ne().action,ne()[e.name]),href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[(0,Z.jsx)("div",{className:ne().actionBg,children:(0,Z.jsx)("div",{className:ne().actionBgPane})}),(0,Z.jsx)("div",{className:ne().actionBg,children:e.icon})]},e.name)}))})},se=function(){return(0,Z.jsx)("a",{href:"https://github.com/transitive-bullshit/nextjs-notion-starter-kit",target:"_blank",rel:"noopener noreferrer",className:R().githubCorner,"aria-label":"View source on GitHub",children:(0,Z.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#70B7FD",color:"#fff",position:"absolute",zIndex:1001,top:0,right:0,border:0,transform:"scale(1, 1)"},"aria-hidden":"true",children:[(0,Z.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),(0,Z.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:R().octoArm}),(0,Z.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:R().octoBody})]})})},ae=r(5671),ce=r(9521),le=r(7326),ue=r(136),de=r(2963),pe=r(1120);function me(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,pe.Z)(e);if(t){var o=(0,pe.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,de.Z)(this,r)}}var he=function(e){(0,ue.Z)(r,e);var t=me(r);function r(e){var o;if((0,ae.Z)(this,r),o=t.call(this,e),(0,n.Z)((0,le.Z)(o),"reference",void 0),(0,n.Z)((0,le.Z)(o),"scriptElement",void 0),"issue-term"===e.issueMap&&void 0===e.issueTerm)throw Error("Property 'issueTerm' must be provided with issueMap 'issue-term'");if("issue-number"===e.issueMap&&void 0===e.issueNumber)throw Error("Property 'issueNumber' must be provided with issueMap 'issue-number'");return o.reference=i.createRef(),o.state={pending:!0},o}return(0,ce.Z)(r,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=document.querySelector("iframe.utterances-frame");t&&t.contentWindow.postMessage({type:"set-theme",theme:e.theme},"https://utteranc.es/")}},{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.repo,n=t.issueMap,o=t.issueTerm,i=t.issueNumber,s=t.label,a=t.theme,c=document.createElement("script");c.src="https://utteranc.es/client.js",c.async=!0,c.defer=!0,c.setAttribute("repo",r),c.setAttribute("crossorigin","annonymous"),c.setAttribute("theme",a),c.onload=function(){return e.setState({pending:!1})},s&&c.setAttribute("label",s),"issue-number"===n?c.setAttribute("issue-number",i.toString()):"issue-term"===n?c.setAttribute("issue-term",o):c.setAttribute("issue-term",n),this.scriptElement=c,this.reference.current.appendChild(c)}},{key:"render",value:function(){return(0,Z.jsx)("div",{className:R().comments,children:(0,Z.jsx)("div",{className:R().utterances,ref:this.reference,children:this.state.pending&&(0,Z.jsx)("p",{children:"Loading Comments..."})})})}}]),r}(i.Component),ge=["href","as","passHref","prefetch","replace","scroll","shallow","locale"];function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var xe=(0,c.default)((function(){return Promise.all([r.e(573),r.e(387)]).then(r.bind(r,9387)).then((function(e){return e.Equation}))}),{loadableGenerated:{webpack:function(){return[9387]},modules:["../components/NotionPage.tsx -> react-notion-x"]}}),ve=(0,c.default)((function(){return Promise.all([r.e(573),r.e(387)]).then(r.bind(r,9387)).then((function(e){return e.Modal}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[9387]},modules:["../components/NotionPage.tsx -> react-notion-x"]}}),_e=function(e){var t,r,n,i,c=e.site,l=e.recordMap,m=e.error,k=e.pageId,S=(0,d.useRouter)(),M=(0,p.Z)("lite"),E={};M&&(E.lite=M);var A="true"===M,W=new URLSearchParams(E),B=(0,g.Z)(!1,{classNameDark:"dark-mode"});if(S.isFallback)return(0,Z.jsx)(V,{});var D=Object.keys((null===l||void 0===l?void 0:l.block)||{}),T=null===l||void 0===l||null===(t=l.block)||void 0===t||null===(r=t[D[0]])||void 0===r?void 0:r.value;if(m||!c||!D.length||!T)return(0,Z.jsx)(X,{site:c,pageId:k,error:m});var G=(0,_.H)(T,l)||c.name;if(console.log("notion page",{isDev:y.r8,title:G,pageId:k,rootNotionPageId:c.rootNotionPageId,recordMap:l}),!y.sk){var H=window;H.pageId=k,H.recordMap=l,H.block=T}var U=function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,b.G)(n)===e.rootNotionPageId?C("/",r):C("/".concat(N(n,t,{uuid:P})),r)}}(c,l,W),z=!y.r8&&function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,w.q)(r,{uuid:!0});return(0,b.G)(r)===e.rootNotionPageId?"https://".concat(e.domain):"https://".concat(e.domain,"/").concat(N(n,t,{uuid:P}))}}(c,l)(k),q="page"===T.type&&"collection"===T.parent_table,K=!!q,Y=O((null===(n=T.format)||void 0===n?void 0:n.page_cover)||y.yN,T),$=null!==(i=function(e,t){return(0,I.r)("Description",e,t)}(T,l))&&void 0!==i?i:y.WL,ee=null,re=null;if(q){y.hV&&(ee=(0,Z.jsx)(he,{repo:y.hV,issueMap:"issue-term",issueTerm:"title",theme:B.value?"photon-dark":"github-light"}));var ne=function(e,t){return(0,I.r)("Tweet",e,t)}(T,l);ne&&(re=(0,Z.jsx)(Q,{tweet:ne}))}else re=(0,Z.jsx)(ie,{});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(J,{site:c}),(0,Z.jsxs)(s.default,{children:[(0,Z.jsx)("meta",{property:"og:title",content:G}),(0,Z.jsx)("meta",{property:"og:site_name",content:c.name}),(0,Z.jsx)("meta",{name:"twitter:title",content:G}),(0,Z.jsx)("meta",{property:"twitter:domain",content:c.domain}),y.km&&(0,Z.jsx)("meta",{name:"twitter:creator",content:"@".concat(y.km)}),$&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("meta",{name:"description",content:$}),(0,Z.jsx)("meta",{property:"og:description",content:$}),(0,Z.jsx)("meta",{name:"twitter:description",content:$})]}),Y?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,Z.jsx)("meta",{name:"twitter:image",content:Y}),(0,Z.jsx)("meta",{property:"og:image",content:Y})]}):(0,Z.jsx)("meta",{name:"twitter:card",content:"summary"}),z&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("link",{rel:"canonical",href:z}),(0,Z.jsx)("meta",{property:"og:url",content:z}),(0,Z.jsx)("meta",{property:"twitter:url",content:z})]}),(0,Z.jsx)("title",{children:G})]}),(0,Z.jsx)(L,{site:c}),A&&(0,Z.jsx)(h(),{className:"notion-lite"}),(0,Z.jsx)(f.c,{bodyClassName:u()(R().notion,k===c.rootNotionPageId&&"index-page"),components:{pageLink:function(e){var t=e.href,r=e.as,n=e.passHref,i=e.prefetch,s=e.replace,c=e.scroll,l=e.shallow,u=e.locale,d=(0,o.Z)(e,ge);return(0,Z.jsx)(a.default,{href:t,as:r,passHref:n,prefetch:i,replace:s,scroll:c,shallow:l,locale:u,children:(0,Z.jsx)("a",je({},d))})},code:j.E,collection:x.F,collectionRow:v.o,modal:ve,equation:xe},recordMap:l,rootPageId:c.rootNotionPageId,fullPage:!A,darkMode:B.value,previewImages:!1!==c.previewImages,showCollectionViewDropdown:!1,showTableOfContents:K,minTableOfContentsItems:3,defaultPageIcon:y.SH,defaultPageCover:y.yN,defaultPageCoverPosition:y.Wx,mapPageUrl:U,mapImageUrl:O,searchNotion:F,pageFooter:ee,pageAside:re,footer:(0,Z.jsx)(te,{isDarkMode:B.value,toggleDarkMode:B.toggle})}),(0,Z.jsx)(se,{})]})},be=function(e){var t=e.statusCode,r="Error";return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(J,{}),(0,Z.jsxs)(s.default,{children:[(0,Z.jsx)("meta",{property:"og:site_name",content:r}),(0,Z.jsx)("meta",{property:"og:title",content:r}),(0,Z.jsx)("title",{children:r})]}),(0,Z.jsx)("div",{className:R().container,children:(0,Z.jsxs)("main",{className:R().main,children:[(0,Z.jsx)("h1",{children:"Error Loading Page"}),t&&(0,Z.jsxs)("p",{children:["Error code: ",t]}),(0,Z.jsx)("img",{src:"/error.png",alt:"Error",className:R().errorImage})]})})]})}},7696:function(e){e.exports={pageSocial:"PageSocial_pageSocial__2WqHl",action:"PageSocial_action__2zgVt",actionBg:"PageSocial_actionBg__3CigO",actionBgPane:"PageSocial_actionBgPane__gbBkL",facebook:"PageSocial_facebook__3o4sf",twitter:"PageSocial_twitter__-BgFt",linkedin:"PageSocial_linkedin__nElHT",github:"PageSocial_github__slQ0z",medium:"PageSocial_medium__xqvNJ",email:"PageSocial_email__22NP5",links:"PageSocial_links__3pCg6"}},1230:function(e){e.exports={container:"styles_container__34prM",loadingIcon:"styles_loadingIcon__3Ke2b",spinner:"styles_spinner__307xT",main:"styles_main__2iNpi",errorImage:"styles_errorImage__1yOPE",footer:"styles_footer__1r_c6",copyright:"styles_copyright__3kWHj",settings:"styles_settings__1ed8a",social:"styles_social__235gY",toggleDarkMode:"styles_toggleDarkMode__1icXg",twitter:"styles_twitter__WwfaA",github:"styles_github__32xIr",linkedin:"styles_linkedin__1XGvB",comments:"styles_comments__eWSFD",utterances:"styles_utterances__3A-24",pageActions:"styles_pageActions__3AS89",likeTweet:"styles_likeTweet__1MKrv",retweet:"styles_retweet__3elI5",githubCorner:"styles_githubCorner__1WYyN",octoArm:"styles_octoArm__LVchX","octocat-wave":"styles_octocat-wave__13zbz"}}}]);