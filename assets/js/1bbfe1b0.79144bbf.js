"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[3531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),s=a,k=c["".concat(d,".").concat(s)]||c[s]||p[s]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o="Hardware",i={unversionedId:"hardware/hw",id:"hardware/hw",title:"Hardware",description:"Resource Requirements",source:"@site/docs/hardware/hw.md",sourceDirName:"hardware",slug:"/hardware/hw",permalink:"/docs/hardware/hw",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/hardware/hw.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enable P2P Networking",permalink:"/docs/stake-pool-guides/p2p-networking"},next:{title:"Other Cardano Guides",permalink:"/docs/cardano-developer-guides/"}},d={},u=[{value:"Resource Requirements",id:"resource-requirements",level:2},{value:"Testnet",id:"testnet",level:2},{value:"Mainnet",id:"mainnet",level:2},{value:"Hardware Recommendation List",id:"hardware-recommendation-list",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hardware"},"Hardware"),(0,a.kt)("h2",{id:"resource-requirements"},"Resource Requirements"),(0,a.kt)("p",null,"This page will consist of hardware necessary for running a stake pool or relay node on the cardano blockchain for both testnet and mainnet use."),(0,a.kt)("p",null,'As of "insert current date XD" the cardano-node/cli software requirements are:'),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("h4",{parentName:"admonition",id:"the-ram-cpu-and-data-storage-resource-requirements-are-much-higher-for-mainnet-vs-testnet-if-you-decide-to-use-a-raspberry-pi-4-or-any-other-single-board-computer-with-limited-ram-on-mainnet-you-will-experience-downtime-due-to-things-like-garbage-collection-or-end-of-epoch-calculations-and-need-to-monitor-your-node-frequently-to-restart-it-once-it-hits-its-limits"},"The RAM, CPU, and Data Storage resource requirements are much higher for mainnet vs testnet. If you decide to use a Raspberry Pi 4 or any other single board computer with limited RAM on mainnet you will experience downtime due to things like garbage collection or end of epoch calculations and need to monitor your node frequently to restart it once it hits its limits.")),(0,a.kt)("h2",{id:"testnet"},"Testnet"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"CPU"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"),(0,a.kt)("th",{parentName:"tr",align:null},"Disk Space/Storage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2 or more cores"),(0,a.kt)("td",{parentName:"tr",align:null},"4GB or more"),(0,a.kt)("td",{parentName:"tr",align:null},"75GB or more")))),(0,a.kt)("h2",{id:"mainnet"},"Mainnet"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"CPU"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"),(0,a.kt)("th",{parentName:"tr",align:null},"Disk Space/Storage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2 or more cores"),(0,a.kt)("td",{parentName:"tr",align:null},"16GB or more"),(0,a.kt)("td",{parentName:"tr",align:null},"150GB or more")))),(0,a.kt)("h2",{id:"hardware-recommendation-list"},"Hardware Recommendation List"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Mainnet use")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Testnet use")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Link")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mac Mini M1 16 GB RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mac Mini M1 8 GB RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"NO"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Honeycomb LX2 up to 64 GB RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Firefly ROC-RK3588S-PC 16GB RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 8GB RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"NO"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);