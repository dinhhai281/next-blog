(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QeBL:function(e,t,a){"use strict";a.r(t);a("E9XD");var n=a("Nhdc"),r=a("zLVn"),l=a("sKyC"),i=a("wZsY"),c=a("MAJE"),o=a("q1tI"),m=a.n(o),g=Object(l.a)((function(e,t){var a=e.tagLabel,n=e.createdDate,l=e.timeLabel,o=e.label,g=e.summary,s=Object(r.a)(e,["tagLabel","createdDate","timeLabel","label","summary"]);return m.a.createElement(i.c,Object.assign({p:10,bg:"gray.800",align:"flex-start",borderRadius:4},s,{ref:t}),m.a.createElement(c.a,{color:"white",textTransform:"uppercase",letterSpacing:2,fontSize:"xs"},a),m.a.createElement(i.c,{align:"flex-start",spacing:0},m.a.createElement(c.a,{color:"gray.500",fontSize:"xs",textTransform:"capitalize"},n),m.a.createElement(c.a,{color:"gray.500",fontSize:"xs",textTransform:"capitalize"},l)),m.a.createElement(c.a,{color:"white",fontSize:"2xl",lineHeight:"32px"},o),m.a.createElement(c.a,{color:"gray.400",fontSize:"sm"},g))})),s=a("ZHYT"),u=a("E9O5"),b=a("kCIJ");function f(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function d(e){return function t(a){return 0===arguments.length||f(a)?t:e.apply(this,arguments)}}function h(e){return function t(a,n){switch(arguments.length){case 0:return t;case 1:return f(a)?t:d((function(t){return e(a,t)}));default:return f(a)&&f(n)?t:f(a)?d((function(t){return e(t,n)})):f(n)?d((function(t){return e(a,t)})):e(a,n)}}}var v=h((function(e,t){return Number(e)-Number(t)})),A=function(e){var t=e.title,a=e.posts,r=e.onActive,l=Object(u.b)("colors",["gray.800","pink.600","gray.900"]),f=l[0],d=l[1],h=l[2],A=Object(o.useRef)(null),E=Object(o.useRef)(null),p=Object(s.b)(),w=Object(o.useState)(!1),k=w[0],x=w[1];return Object(o.useEffect)((function(){var e,a,n,l,i,c,o,m,g;null!==(e=E.current)&&void 0!==e&&e.offsetHeight&&null!==(a=A.current)&&void 0!==a&&a.offsetTop&&k&&(p>=(null===(n=E.current)||void 0===n?void 0:n.offsetHeight)+(null===(l=A.current)||void 0===l?void 0:l.offsetTop)||p<=A.current.offsetTop)&&x(!1),null!==(i=E.current)&&void 0!==i&&i.offsetHeight&&null!==(c=A.current)&&void 0!==c&&c.offsetTop&&p>=(null===(o=A.current)||void 0===o?void 0:o.offsetTop)-64&&p<(null===(m=E.current)||void 0===m?void 0:m.offsetHeight)+(null===(g=A.current)||void 0===g?void 0:g.offsetTop)&&!k&&(null==r||r(t),x(!0))}),[p]),m.a.createElement(i.b,{ref:E,direction:"column",py:{base:4,lg:0},spacing:4,mb:{base:8,md:2},w:"100%"},m.a.createElement(n.a,{height:10,d:{md:"none"}},(function(e){return m.a.createElement(n.b,{px:e?8:0,h:e?16:10,borderBottom:"1px solid",animate:{position:e?"fixed":"static",background:e?""+f:""+h,borderBottomColor:e?""+d:""+f,opacity:e?[0,1]:1},transition:{duration:.4},top:0,left:0,w:"100%",d:"flex",alignItems:"center"},m.a.createElement(c.a,{color:"white",fontSize:"md",mb:0,textTransform:"uppercase",letterSpacing:2,h:10,d:"flex",alignItems:"center"},t))})),m.a.createElement(c.a,{d:{base:"none",md:"flex"},fontSize:"2xl",color:"white",ref:A},t),a.sort((function(e,t){return[t.frontmatter.date,e.frontmatter.date].map(Date.parse).reduce(v)})).map((function(e){var t=e.frontmatter,a=e.id,n=e.excerpt;return m.a.createElement(g,{tagLabel:t.tags.split(",").join(" | "),createdDate:t.date,timeLabel:t.duration+" minutes",label:t.title,summary:n,key:a,as:b.Link,to:t.path})})))},E=a("v7Hm"),p=a("tofy"),w=a("wCIg"),k=a("6cby"),x=a("3L07"),j=a("U6LL"),D=a("BXwj"),B=a("pr4h"),I=a("yGVr");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var M=o.forwardRef((function(e,t){var a=e.htmlWidth,n=e.htmlHeight,r=e.alt,l=G(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",y({width:a,height:n,ref:t,alt:r},l))})),T=Object(l.a)((function(e,t){var a=e.fallbackSrc,n=e.fallback,r=e.src,l=e.align,i=e.fit,c=e.loading,m=e.ignoreFallback,g=e.crossOrigin,s=G(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),u=null!=c||m,b=Object(I.a)(y({},e,{ignoreFallback:u})),f=y({ref:t,objectFit:i,objectPosition:l},u?s:Object(D.h)(s,["onError","onLoad"]));return"loaded"!==b?n||o.createElement(j.a.img,y({as:M,className:"chakra-image__placeholder",src:a},f)):o.createElement(j.a.img,y({as:M,src:r,crossOrigin:g,loading:c,className:"chakra-image"},f))}));B.a&&(T.displayName="Image");var O=a("Zm5K"),J=a.n(O),C=function(e){var t=e.index,a=e.label,r=e.isActive,l=Object(u.b)("colors",["gray.500","white"]),i=l[0],c=l[1],g=Object(o.useCallback)((function(e){return e?"active":"inactive"}),[]),s={active:{width:"3rem",backgroundColor:c},inactive:{width:"1.5rem",backgroundColor:i}},b={active:{color:c},inactive:{color:i}};return m.a.createElement(p.a,{color:"gray.300",w:"100%",align:"center"},m.a.createElement(n.c,{mr:4,variants:b,animate:g(r)},t.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})),m.a.createElement(n.b,{h:"1px",bgColor:"gray.500",alignSelf:"center",mr:4,w:6,variants:s,animate:g(r)}),m.a.createElement(n.c,{variants:b,animate:g(r)},a))},N=function(e){var t=e.activeKey;return m.a.createElement(i.c,{mt:8,align:"flex-start",w:"50%",spacing:4},m.a.createElement(C,{index:1,label:"Programming",isActive:"Programming"===t}),m.a.createElement(C,{index:2,label:"Cooking",isActive:"Cooking"===t}))},S=function(e){var t=e.githubData,a=e.activeKey;return m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{h:"calc(100vh - 2.5rem)",w:{base:"50%"},d:{base:"none",lg:"block"}}," "),m.a.createElement(p.a,{direction:"column",h:{lg:"calc(100vh - 4.5rem)"},pos:{lg:"fixed"},w:{base:"100%",lg:"50%"},maxW:{lg:"460px"}},m.a.createElement(i.c,null,m.a.createElement(E.a,{w:{base:"100%"},mb:{base:8}},m.a.createElement(c.a,{color:"white",fontWeight:600,fontSize:"3rem",lineHeight:"4rem"},m.a.createElement(b.FormattedMessage,{id:"home.greeting",values:{name:"Hai Dinh Nguyen"}}))),m.a.createElement(E.a,{w:{base:"100%"},mb:{base:6}},m.a.createElement(c.a,{color:"gray.500",fontSize:"sm",lineHeight:7},m.a.createElement(b.FormattedMessage,{id:"home.intro"})))),m.a.createElement(N,{activeKey:a}),m.a.createElement(w.a,null),m.a.createElement(p.a,{w:{base:"100%"},align:"center",justify:{base:"space-between",lg:"flex-start"}},m.a.createElement(p.a,{align:"center",mr:{base:0,lg:12}},m.a.createElement(k.a,{src:t.data.viewer.avatarUrl,size:"md",mr:2}),"\\",m.a.createElement(c.a,{color:"white",fontSize:["md","lg"]},t.data.viewer.name)),m.a.createElement(x.a,{variant:"outline",leftIcon:m.a.createElement(T,{src:J.a,alt:"github logo",boxSize:4,objectFit:"cover"}),iconSpacing:4,color:"gray.300",size:"sm",_hover:{bg:"gray.600",color:"white"},as:"a",href:"https://github.com/"+t.data.viewer.login,target:"__blank"},"Github"))))},F=a("5pGj");t.default=function(e){var t=e.data,a=Object(o.useState)(""),r=a[0],l=a[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement(n.d,{title:"Welcome"}),m.a.createElement(F.a,{maxW:"100%",px:[8],py:{base:4,lg:12},minH:"100vh",background:"gray.900",centerContent:!0},m.a.createElement(i.b,{as:"main",direction:{base:"column",lg:"row"},spacing:0,maxW:"7xl",w:"100%"},m.a.createElement(S,{githubData:t.allGithubData.nodes[0],activeKey:r}),m.a.createElement(i.c,{w:{base:"100%",lg:"50%"}},m.a.createElement(A,{title:"Programming",posts:t.allMarkdownRemark.nodes,onActive:l}),m.a.createElement(A,{title:"Cooking",posts:t.allMarkdownRemark.nodes,onActive:l})))))}},Zm5K:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7cd95f1abbd1d5a4844a.js.map