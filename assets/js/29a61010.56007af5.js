"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[1075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),s=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:g,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,i.U)(),[P,w]=(0,o.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=g){const e=v[g];null!=e&&e!==P&&h.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==P&&(O(t),w(a),null!=g&&N(g,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:I,onClick:I},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":P===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=(n(9960),n(5488)),l=n(5162);const s={},i="Enable P2P Networking",c={unversionedId:"stake-pool-guides/p2p-networking",id:"stake-pool-guides/p2p-networking",title:"Enable P2P Networking",description:"You will have to upgrade the whole pool to P2P at the same time. I could not get tx's into my core node till P2P was enabled on it.",source:"@site/docs/stake-pool-guides/p2p-networking.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/p2p-networking",permalink:"/docs/stake-pool-guides/p2p-networking",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/p2p-networking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wireguard Guide",permalink:"/docs/stake-pool-guides/wireguard-guide"},next:{title:"Hardware",permalink:"/docs/hardware/hw"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enable-p2p-networking"},"Enable P2P Networking"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You will have to upgrade the whole pool to P2P at the same time. I could not get tx's into my core node till P2P was enabled on it.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"There is a bug in 1.34.1 that causes issues with cardano-cli query command. CNCLI relies on this command and does not work correctly. If you really want to use 1.34.1 with P2P enabled and CNCLI you will need to build cardano-node with the following tagged version of ouroboros-network."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sed -i 's/tag: 4fac197b6f0d2ff60dc3486c593b68dc00969fbf/tag: 48ff9f3a9876713e87dc302e567f5747f21ad720/g' cabal.project\n\n"))),(0,o.kt)("p",null,"Edit your mainnet-config.json or testnet-config.json. I add them just above ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"defaultBackends": [')),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="${NODE_CONFIG}-config.json"',title:'"${NODE_CONFIG}-config.json"'},'"TestEnableDevelopmentNetworkProtocols": true,\n"EnableP2P": true,\n"MaxConcurrencyBulkSync": 2,\n"MaxConcurrencyDeadline": 4,\n"TargetNumberOfRootPeers": 50,\n"TargetNumberOfKnownPeers": 50,\n"TargetNumberOfEstablishedPeers": 25,\n"TargetNumberOfActivePeers": 10,\n')),(0,o.kt)("p",null,"Edit the topology file."),(0,o.kt)(r.Z,{groupId:"CONFIG_NET",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Testnet",label:"Testnet P2P Relay",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="testnet-topology.json"',title:'"testnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n             { "address": "<Block Producer IP or DNS hostname>", "port": 6000, "valency": 1, "name": "My Core Node"}\n          ],\n          "advertise": false\n        }\n      }\n    ]\n  },\n  "PublicRoots": [\n    {\n      "publicRoots" : {\n        "accessPoints": [\n          { "address": "relays-new.cardano-testnet.iohkdev.io", "port": 3001, "valency": 2, "name": "IOG"}\n        ],\n        "advertise": true\n      }\n    }\n  ],\n  "useLedgerAfterSlot": 0\n}\n'))),(0,o.kt)(l.Z,{value:"Mainnet",label:"Mainnet P2P Relay",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n             { "address": "<Block Producer IP or DNS hostname>", "port": 3000, "valency": 1, "name": "My Core Node"}\n          ],\n          "advertise": false\n        }\n      }\n    ]\n  },\n  "PublicRoots": [\n    {\n      "publicRoots" : {\n        "accessPoints": [\n          { "address": "relays-new.cardano-mainnet.iohkdev.io", "port": 3001, "valency": 2, "name": "OTG"}\n        ],\n        "advertise": true\n      }\n    }\n  ],\n  "useLedgerAfterSlot": 0\n}\n')))),(0,o.kt)(r.Z,{groupId:"CONFIG_NET",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Testnet",label:"Testnet P2P Core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="testnet-topology.json"',title:'"testnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n            { "address": "<Relay 1 IP or DNS hostname>", "port": 6001, "valency": 1, "name": "Server in Germany"},\n            { "address": "<Relay 2 IP or DNS hostname>", "port": 6002, "valency": 1, "name": "Server in USA"}\n          ],\n          "advertise": false\n        },\n       "valency": 2\n      }\n    ]\n  },\n  "PublicRoots": []\n}\n'))),(0,o.kt)(l.Z,{value:"Mainnet",label:"Mainnet P2P Core",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n            { "address": "<Relay 1 IP or DNS hostname>", "port": 3001, "valency": 1, "name": "Server in Germany"},\n            { "address": "<Relay 2 IP or DNS hostname>", "port": 3002, "valency": 1, "name": "Server in USA"}\n          ],\n          "advertise": false\n        },\n       "valency": 2\n      }\n    ]\n  },\n  "PublicRoots": []\n}\n')))),(0,o.kt)("p",null,"Restart the node and check they are syncing up. Look for ('",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Started opening Ledger DB")),"')."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"journalctl -f --output=cat -u cardano-node\n")),(0,o.kt)("p",null,"You can reload the networking stack without having restart the service with this bash function. Add this to the bottom of your .bashrc file and source it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano ~/.bashrc\n")),(0,o.kt)("p",null,"Add this to the bottom and source the changes into Bash. Change pidof to match the name of your cardano-node systemd service."),(0,o.kt)(r.Z,{groupId:"CONFIG_NET",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"SPOS",label:"SPOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.bashrc"',title:'"~/.bashrc"'},"cardano-reload() {\n   CPID=$(pidof cardano-node)\n   kill -SIGHUP ${CPID}\n   echo ${CPID}\n}\n"))),(0,o.kt)(l.Z,{value:"CNTools",label:"CNTools",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.bashrc"',title:'"~/.bashrc"'},"cardano-reload() {\n   CPID=$(pidof cnode)\n   kill -SIGHUP ${CPID}\n   echo ${CPID}\n}\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"source ~/.bashrc\n")))}m.isMDXComponent=!0}}]);