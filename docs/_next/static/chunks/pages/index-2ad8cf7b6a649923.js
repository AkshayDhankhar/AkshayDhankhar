(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(o,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(7961)}])},7961:function(o,t,e){"use strict";e.r(t),e.d(t,{default:function(){return F}});var r=e(5893),n=e(7462),s=e(3366),a=e(7294),i=e(6010),c=e(9894),l=e(6523),p=e(9766),g=e(8528);const h=["sx"];function u(o){const{sx:t}=o,e=(0,s.Z)(o,h),{systemProps:r,otherProps:a}=(o=>{const t={systemProps:{},otherProps:{}};return Object.keys(o).forEach((e=>{g.Gc[e]?t.systemProps[e]=o[e]:t.otherProps[e]=o[e]})),t})(e);let i;return i=Array.isArray(t)?[r,...t]:"function"===typeof t?(...o)=>{const e=t(...o);return(0,p.P)(e)?(0,n.Z)({},r,e):r}:(0,n.Z)({},r,t),(0,n.Z)({},a,{sx:i})}var w=e(9718);const d=["className","component"];var v=e(9981);const m=function(o={}){const{defaultTheme:t,defaultClassName:e="MuiBox-root",generateClassName:p,styleFunctionSx:g=l.Z}=o,h=(0,c.ZP)("div")(g);return a.forwardRef((function(o,a){const c=(0,w.Z)(t),l=u(o),{className:g,component:v="div"}=l,m=(0,s.Z)(l,d);return(0,r.jsx)(h,(0,n.Z)({as:v,ref:a,className:(0,i.Z)(g,p?p(e):e),theme:c},m))}))}({defaultTheme:(0,e(8081).Z)(),defaultClassName:"MuiBox-root",generateClassName:v.Z.generate});var x=m,f=e(5408),y=e(8700),j=e(1496),b=e(4502);const z=["component","direction","spacing","divider","children"];function Z(o,t){const e=a.Children.toArray(o).filter(Boolean);return e.reduce(((o,r,n)=>(o.push(r),n<e.length-1&&o.push(a.cloneElement(t,{key:`separator-${n}`})),o)),[])}const k=(0,j.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(o,t)=>[t.root]})((({ownerState:o,theme:t})=>{let e=(0,n.Z)({display:"flex"},(0,f.k9)({theme:t},(0,f.P$)({values:o.direction,breakpoints:t.breakpoints.values}),(o=>({flexDirection:o}))));if(o.spacing){const r=(0,y.hB)(t),n=Object.keys(t.breakpoints.values).reduce(((t,e)=>(null==o.spacing[e]&&null==o.direction[e]||(t[e]=!0),t)),{}),s=(0,f.P$)({values:o.direction,base:n}),a=(0,f.P$)({values:o.spacing,base:n}),i=(t,e)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=e?s[e]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,y.NA)(r,t)}};var n};e=(0,p.Z)(e,(0,f.k9)({theme:t},a,i))}return e})),_=a.forwardRef((function(o,t){const e=u((0,b.Z)({props:o,name:"MuiStack"})),{component:a="div",direction:i="column",spacing:c=0,divider:l,children:p}=e,g=(0,s.Z)(e,z),h={direction:i,spacing:c};return(0,r.jsx)(k,(0,n.Z)({as:a,ownerState:h,ref:t},g,{children:l?Z(p,l):p}))}));var P=_,B=e(7192),N=e(8216),S=e(8979);function W(o){return(0,S.Z)("MuiTypography",o)}(0,e(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const C=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],M=(0,j.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t[`align${(0,N.Z)(e.align)}`],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((({theme:o,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&o.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),R={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},E={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var T=a.forwardRef((function(o,t){const e=(0,b.Z)({props:o,name:"MuiTypography"}),a=(o=>E[o]||o)(e.color),c=u((0,n.Z)({},e,{color:a})),{align:l="inherit",className:p,component:g,gutterBottom:h=!1,noWrap:w=!1,paragraph:d=!1,variant:v="body1",variantMapping:m=R}=c,x=(0,s.Z)(c,C),f=(0,n.Z)({},c,{align:l,color:a,className:p,component:g,gutterBottom:h,noWrap:w,paragraph:d,variant:v,variantMapping:m}),y=g||(d?"p":m[v]||R[v])||"span",j=(o=>{const{align:t,gutterBottom:e,noWrap:r,paragraph:n,variant:s,classes:a}=o,i={root:["root",s,"inherit"!==o.align&&`align${(0,N.Z)(t)}`,e&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,B.Z)(i,W,a)})(f);return(0,r.jsx)(M,(0,n.Z)({as:y,ref:t,ownerState:f,className:(0,i.Z)(j.root,p)},x))})),$={header:{name:"Rahul Sharma",title:"Senior Software Engineer",description:"I'm technical enthusiast who does web development. Passionate to contribute open-source projects and make cool products."}};var A=function(){return(0,r.jsxs)(x,{sx:{display:"grid",gridAutoColumns:"1fr",gap:1,p:2,background:"white"},children:[(0,r.jsxs)(P,{sx:{gridRow:"1",gridColumn:"span 3"},children:[(0,r.jsx)(T,{variant:"h4",component:"h1",sx:{fontWeight:500},children:$.header.name}),(0,r.jsx)(T,{variant:"body",component:"h2",color:"text.secondary",children:$.header.title})]}),(0,r.jsx)(x,{sx:{gridRow:"1",gridColumn:"span 1",display:"flex",justifyContent:"end"}})]})};var O=function(){return(0,r.jsxs)(P,{p:2,sx:{background:"white"},children:[(0,r.jsx)(T,{variant:"h6",component:"h1",sx:{fontWeight:500},children:"What I Do"}),(0,r.jsx)(T,{variant:"body2",component:"h3",color:"text.secondary",pt:1,children:$.header.description})]})},q=["https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg","https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg","https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg","https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg","https://www.vectorlogo.zone/logos/angular/angular-ar21.svg","https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg","https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg","https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg","https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg","https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg","https://www.vectorlogo.zone/logos/json/json-ar21.svg","https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg","https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg","https://www.vectorlogo.zone/logos/bitbucket/bitbucket-ar21.svg","https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg","https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg","https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg","https://www.vectorlogo.zone/logos/arangodb/arangodb-ar21.svg","https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg","https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg","https://www.vectorlogo.zone/logos/redis/redis-ar21.svg","https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg","https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg","https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg","https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg","https://www.vectorlogo.zone/logos/nginx/nginx-ar21.svg","https://www.vectorlogo.zone/logos/mochajs/mochajs-ar21.svg","https://www.vectorlogo.zone/logos/chaijs/chaijs-ar21.svg","https://www.vectorlogo.zone/logos/socketio/socketio-ar21.svg"];var D=function(){return(0,r.jsxs)(x,{p:2,sx:{background:"white"},children:[(0,r.jsx)(T,{variant:"h6",component:"h1",sx:{fontWeight:500,pb:2},children:"Skills"}),q.map((function(o){return(0,r.jsx)(x,{component:"span",pr:1,pb:1,children:(0,r.jsx)("img",{height:"50",width:"100px",src:o})},o)}))]})},I=[{title:"Senior Software Enginner",org:"Meesho, Bangalore",time:"Jan 2021 \u2013 Present",responsiblities:[]}];var J=function(){return(0,r.jsxs)(x,{p:2,sx:{background:"white"},children:[(0,r.jsx)(T,{variant:"h6",component:"h1",sx:{fontWeight:500,pb:2},children:"Experience"}),I.map((function(o){return(0,r.jsxs)(x,{children:[(0,r.jsxs)(P,{spacing:1,direction:"row",children:[(0,r.jsx)(T,{variant:"h5",component:"h2",sx:{fontWeight:400},children:o.title}),(0,r.jsxs)(T,{variant:"body",component:"h3",color:"text.secondary",children:["(",o.org,")"]})]}),(0,r.jsx)(T,{variant:"body2",component:"p",color:"text.secondary",children:o.time}),(0,r.jsx)(x,{pt:1,children:o.responsiblities.map((function(o){return(0,r.jsxs)(T,{variant:"body2",component:"p",color:"text.secondary",children:["\u25cf ",o]},o)}))})]},o.org)}))]})},L=e(9008),X=function(){var o=$.header,t="".concat(o.name," - ").concat(o.title);return(0,r.jsxs)(L.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{property:"og:title",content:t},"title"),(0,r.jsx)("meta",{property:"og:description",content:o.description},"description")]})};function F(){return(0,r.jsxs)(P,{spacing:.5,children:[(0,r.jsx)(X,{}),(0,r.jsx)(A,{}),(0,r.jsx)(O,{}),(0,r.jsx)(D,{}),(0,r.jsx)(J,{})]})}},9008:function(o,t,e){o.exports=e(5443)}},function(o){o.O(0,[774,888,179],(function(){return t=8581,o(o.s=t);var t}));var t=o.O();_N_E=t}]);