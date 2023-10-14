"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"ergo-developer-guides/example_ergo_config_file_light",id:"ergo-developer-guides/example_ergo_config_file_light",title:"example_ergo_config_file_light",description:"",source:"@site/docs/ergo-developer-guides/example_ergo_config_file_light.md",sourceDirName:"ergo-developer-guides",slug:"/ergo-developer-guides/example_ergo_config_file_light",permalink:"/docs/ergo-developer-guides/example_ergo_config_file_light",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/ergo-developer-guides/example_ergo_config_file_light.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ergo {\n    node {\n        mining = false\n        extraIndex = false\n\n        ## for light weight nipopow node using just block headers for state\n        ## uncomment the below stateType, blocksToKeep (for last 3 days), and nipopowBootstrap\n        stateType = "digest"\n        blocksToKeep = 1440\n\n        utxo {\n            # Download and apply UTxO set snapshot and full-blocks after that\n            utxoBootstrap = true\n\n            # How many utxo set snapshots to store, 0 means that they are not stored at all\n            storingUtxoSnapshots = 2\n\n            # How many utxo set snapshots for a height with the same id we need to find in p2p network\n            # in order to start downloading it\n            p2pUtxoSnapshots = 2\n        }\n        # Settings releated to headers-chain bootstrapping via NiPoPows\n        nipopow {\n            # Download PoPoW proof on node utxoBootstrap\n            nipopowBootstrap = true\n\n            #how many different proofs we are downloading from other peers\n            # and compare with each other, before choosing the best one\n            p2pNipopows = 2\n        }\n    }\n}\nscorex {\n    restApi {\n        # node which exposes restApi in firewall should define publicly accessible URL of it\n        # you will need to enable port forwarding from logging into your router for 9053\n        # publicUrl = "http://xxx.xxx.xxx.xxx:9053"\n        # apiKeyHash = "CHANGE_ME_HASH"\n    }\n    network {\n        # For below declared address do not include "http://"!\n        # you will need to enable port forwarding from logging into your router for 9030\n        # declaredAddress = "xxx.xxx.xxx.xxx:9030"\n        # nodeName = "my-ergo-node"\n    }\n}\n')))}u.isMDXComponent=!0}}]);