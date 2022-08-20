"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[1075],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),r=t(6010),o="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),o=t(2389),l=t(7392),s=t(7094),i=t(2466),u=t(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,o,p=e.lazy,m=e.block,g=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(k,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(n=null!=g?g:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),P=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,r.useState)(N),I=O[0],C=O[1],j=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=P[v];null!=x&&x!==I&&k.some((function(e){return e.value===x}))&&C(x)}var D=function(e){var n=e.currentTarget,t=j.indexOf(n),a=k[t].value;a!==I&&(E(n),C(a),null!=v&&T(v,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},k.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},2708:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=(t(9960),t(9877)),s=t(2360),i=["components"],u={},c="Enable P2P Networking",d={unversionedId:"stake-pool-guides/p2p-networking",id:"stake-pool-guides/p2p-networking",title:"Enable P2P Networking",description:"You will have to upgrade the whole pool to P2P at the same time. I could not get tx's into my core node till P2P was enabled on it.",source:"@site/docs/stake-pool-guides/p2p-networking.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/p2p-networking",permalink:"/docs/stake-pool-guides/p2p-networking",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/p2p-networking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wireguard Guide",permalink:"/docs/stake-pool-guides/wireguard-guide"},next:{title:"Other Cardano Guides",permalink:"/docs/cardano-developer-guides/"}},p={},m=[],g={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enable-p2p-networking"},"Enable P2P Networking"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will have to upgrade the whole pool to P2P at the same time. I could not get tx's into my core node till P2P was enabled on it."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a bug in 1.34.1 that causes issues with cardano-cli query command. CNCLI relies on this command and does not work correctly. If you really want to use 1.34.1 with P2P enabled and CNCLI you will need to build cardano-node with the following tagged version of ouroboros-network."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sed -i 's/tag: 4fac197b6f0d2ff60dc3486c593b68dc00969fbf/tag: 48ff9f3a9876713e87dc302e567f5747f21ad720/g' cabal.project\n\n")))),(0,o.kt)("p",null,"Edit your mainnet-config.json or testnet-config.json. I add them just above ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"defaultBackends": [')),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="${NODE_CONFIG}-config.json"',title:'"${NODE_CONFIG}-config.json"'},'"TestEnableDevelopmentNetworkProtocols": true,\n"EnableP2P": true,\n"MaxConcurrencyBulkSync": 2,\n"MaxConcurrencyDeadline": 4,\n"TargetNumberOfRootPeers": 50,\n"TargetNumberOfKnownPeers": 50,\n"TargetNumberOfEstablishedPeers": 25,\n"TargetNumberOfActivePeers": 10,\n')),(0,o.kt)("p",null,"Edit the topology file."),(0,o.kt)(l.Z,{groupId:"CONFIG_NET",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Testnet",label:"Testnet P2P Relay",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="testnet-topology.json"',title:'"testnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n             { "address": "<Block Producer IP or DNS hostname>", "port": 6000, "valency": 1, "name": "My Core Node"}\n          ],\n          "advertise": false\n        }\n      }\n    ]\n  },\n  "PublicRoots": [\n    {\n      "publicRoots" : {\n        "accessPoints": [\n          { "address": "relays-new.cardano-testnet.iohkdev.io", "port": 3001, "valency": 2, "name": "IOG"}\n        ],\n        "advertise": true\n      }\n    }\n  ],\n  "useLedgerAfterSlot": 0\n}\n'))),(0,o.kt)(s.Z,{value:"Mainnet",label:"Mainnet P2P Relay",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n             { "address": "<Block Producer IP or DNS hostname>", "port": 3000, "valency": 1, "name": "My Core Node"}\n          ],\n          "advertise": false\n        }\n      }\n    ]\n  },\n  "PublicRoots": [\n    {\n      "publicRoots" : {\n        "accessPoints": [\n          { "address": "relays-new.cardano-mainnet.iohkdev.io", "port": 3001, "valency": 2, "name": "OTG"}\n        ],\n        "advertise": true\n      }\n    }\n  ],\n  "useLedgerAfterSlot": 0\n}\n')))),(0,o.kt)(l.Z,{groupId:"CONFIG_NET",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Testnet",label:"Testnet P2P Core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="testnet-topology.json"',title:'"testnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n            { "address": "<Relay 1 IP or DNS hostname>", "port": 6001, "valency": 1, "name": "Server in Germany"},\n            { "address": "<Relay 2 IP or DNS hostname>", "port": 6002, "valency": 1, "name": "Server in USA"}\n          ],\n          "advertise": false\n        },\n       "valency": 2\n      }\n    ]\n  },\n  "PublicRoots": []\n}\n'))),(0,o.kt)(s.Z,{value:"Mainnet",label:"Mainnet P2P Core",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n            { "address": "<Relay 1 IP or DNS hostname>", "port": 3001, "valency": 1, "name": "Server in Germany"},\n            { "address": "<Relay 2 IP or DNS hostname>", "port": 3002, "valency": 1, "name": "Server in USA"}\n          ],\n          "advertise": false\n        },\n       "valency": 2\n      }\n    ]\n  },\n  "PublicRoots": []\n}\n')))),(0,o.kt)("p",null,"Restart the node and check they are syncing up. Look for ('",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Started opening Ledger DB")),"')."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"journalctl -f --output=cat -u cardano-node\n")),(0,o.kt)("p",null,"You can reload the networking stack without having restart the service with this bash function. Add this to the bottom of your .bashrc file and source it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano ~/.bashrc\n")),(0,o.kt)("p",null,"Add this to the bottom and source the changes into Bash. Change pidof to match the name of your cardano-node systemd service."),(0,o.kt)(l.Z,{groupId:"CONFIG_NET",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"SPOS",label:"SPOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.bashrc"',title:'"~/.bashrc"'},"cardano-reload() {\n   CPID=$(pidof cardano-node)\n   kill -SIGHUP ${CPID}\n   echo ${CPID}\n}\n"))),(0,o.kt)(s.Z,{value:"CNTools",label:"CNTools",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.bashrc"',title:'"~/.bashrc"'},"cardano-reload() {\n   CPID=$(pidof cnode)\n   kill -SIGHUP ${CPID}\n   echo ${CPID}\n}\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"source ~/.bashrc\n")))}f.isMDXComponent=!0}}]);