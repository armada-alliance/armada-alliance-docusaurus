"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7313],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),o=a(6010);const n="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(n,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),o=a(7294),n=a(6010),i=a(2389),l=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:a,block:i,defaultValue:c,values:m,groupId:h,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,l.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,s.U)(),[N,P]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,a=T.indexOf(t),r=k[a].value;r!==N&&(E(t),P(r),null!=h&&v(h,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,n.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":i},f)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:C,onClick:C},i,{className:(0,n.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},6566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(7462),o=(a(7294),a(3905)),n=a(5488),i=a(5162);const l={description:"A guide to building a 4 watt per Pi, Cardano Stake Pool.",title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",image:"/img/star-forge-parts.jpeg",keywords:["guides","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},s="Pi-Node Image & Guide",p={unversionedId:"stake-pool-guides/pi-pool-tutorial/README",id:"stake-pool-guides/pi-pool-tutorial/README",title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",description:"A guide to building a 4 watt per Pi, Cardano Stake Pool.",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/README.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/README.md",tags:[],version:"current",frontMatter:{description:"A guide to building a 4 watt per Pi, Cardano Stake Pool.",title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",image:"/img/star-forge-parts.jpeg",keywords:["guides","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},sidebar:"tutorialSidebar",previous:{title:"Pi-Node (Image Quick Start)",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-quick"},next:{title:"Download & Flash",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash"}},u={},d=[{value:"Why this guide?",id:"why-this-guide",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Shopping list",id:"shopping-list",level:3},{value:"Credit &amp; community",id:"credit--community",level:2},{value:"Downloads",id:"downloads",level:2},{value:"Links",id:"links",level:2}],c={toc:d};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pi-node-image--guide"},"Pi-Node Image & Guide"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The guide builds the image from a fresh install of Ubuntu. If you flashed the image you only need the guide as a reference. Head over to the quickstart to get synced up. The relay, core and cold guides will configure the the Pi-Node further. ")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Pi-Node.img.gz")," is a pre configured Cardano node that can be used for minting NFT's, submitting transactions and can be further configured into a relay or core node for stake pool creation. It is configured with everything you need to quickly bootstrap a synced node with Nginx proxypass of Grafana for TLS encryption with a self signed certificate, working topology updater and gLiveView."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9748).Z,width:"1280",height:"853"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is strongly recommended to work through the ",(0,o.kt)("a",{parentName:"p",href:"https://cardano-foundation.gitbook.io/stake-pool-course/"},"Stake Pool School")," course presented by the Cardano Foundation.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you would like to create a .img file of your work that can be flashed for reuse on other Raspberry Pi's you should build on an 8GB sd card. It will take less time to make an image. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/cardano-developer-guides/create-.img-file"},"image creation section"),".")),(0,o.kt)("h2",{id:"why-this-guide"},"Why this guide?"),(0,o.kt)("p",null,"Consolidate and organize the various guides into a single document that can be followed or referenced ",(0,o.kt)("em",{parentName:"p"},"specifically")," for running a pool using two (or more) Raspberry Pi 4B (the 8GB version) and one offline Pi for cold key operations."),(0,o.kt)("p",null,"Provide documentation of every step taken while building the Pi-Node image available for bootstrapping a synced cardano-node. A reference & guide."),(0,o.kt)("p",null,"The most popular guides out there are aimed at x86 architecture and '",(0,o.kt)("em",{parentName:"p"},"knowing what to throw away and knowing what to keep"),"' is not always clear. I aim to change that '",(0,o.kt)("em",{parentName:"p"},"with a little help from my friends"),"'. \ud83c\udfb8"),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"I have found a simple low plrofile usb3 stick works great. For example\n",(0,o.kt)("a",{parentName:"p",href:"https://www.pny.com/elite-x-fit-usb-3-1?sku=P-FDI256EXFIT-GE"},"https://www.pny.com/elite-x-fit-usb-3-1?sku=P-FDI256EXFIT-GE"))),(0,o.kt)("h3",{id:"shopping-list"},"Shopping list"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2 ",(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/products/raspberry-pi-4-model-b?variant=31994565689406"},"Pi4B 8GB")," version."),(0,o.kt)("li",{parentName:"ul"},"2 Drives : USB3 stick 256gb or larger"),(0,o.kt)("li",{parentName:"ul"},"A 3'rd 64bit capable Pi as an offline machine(Cold), like a pi-400."),(0,o.kt)("li",{parentName:"ul"},"Class 10 micro sd card 16GB or larger. "),(0,o.kt)("li",{parentName:"ul"},"Extra USB flash drives for backing up keys and configurations."),(0,o.kt)("li",{parentName:"ul"},"Consider a single 50+ watt power supply"),(0,o.kt)("li",{parentName:"ul"},"Consider a 5 volt gigabit switch"),(0,o.kt)("li",{parentName:"ul"},"Consider a case with a fan")),(0,o.kt)("h2",{id:"credit--community"},"Credit & community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Moritz Angermann | ",(0,o.kt)("a",{parentName:"li",href:"https://adapools.org/pool/e2c17915148f698723cb234f3cd89e9325f40b89af9fd6e1f9d1701a"},"zw3rk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alessandrokonrad"},"Alessandro konrad")," |",(0,o.kt)("a",{parentName:"li",href:"https://adapools.org/pool/2a748e3885f6f73320ad16a8331247b81fe01b8d39f57eec9caa5091"}," Berry")," (@berry_ales)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Chris-Graffagnino"},"Chris-Graffagnino"),"/",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Chris-Graffagnino/Jormungandr-for-Newbs/blob/master/docs/jormungandr_node_setup_guide.md"},"Setup Cardano Shelley staking node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/joinchat/wvTcCSpdjGllMmFk"},"Arming Cardano")," Telegram Group"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jamesachambers.com/new-raspberry-pi-4-bootloader-usb-network-boot-guide/"},"Legendary Technology: New Raspberry Pi 4 Bootloader USB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gitmachtl/scripts/"},"StakePool Operator Scripts (SPOS)")),(0,o.kt)("li",{parentName:"ul"},"[CoinCashew: guide-how-to-build-a-haskell-stakepool-node]","(",(0,o.kt)("a",{parentName:"li",href:"https://www.coincashew.com/coins/overview-ada/"},"https://www.coincashew.com/coins/overview-ada/"))),(0,o.kt)("h2",{id:"downloads"},"Downloads"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Pi-Node.img.gz")),(0,o.kt)("li",{parentName:"ul"},"Latest unofficial ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/armada-alliance/cardano-node-binaries"},"static & Dynamic arm binaries")),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi Imager (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/rpi-imager"},"rpi-imager"),")",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"update eeprom"),(0,o.kt)("li",{parentName:"ul"},"flash .img files/install Ubuntu"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Drewsif/PiShrink"},"PiShrink")),(0,o.kt)("li",{parentName:"ul"},"Latest chain snapshot for quicker sync")),(0,o.kt)(n.Z,{groupId:"NODE_CONFIG",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mainnet",label:"Mainnet",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'  wget -r -np -nH -R "index.html\\*" -e robots=off https://mainnet.adamantium.online/db/\n'))),(0,o.kt)(i.Z,{value:"testnet",label:"Testnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'  wget -r -np -nH -R "index.html\\*" -e robots=off https://testnet.adamantium.online/db/\n')))),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html"},"https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/forums/viewtopic.php?t=245931"},"https://www.raspberrypi.org/forums/viewtopic.php?t=245931"))))}m.isMDXComponent=!0},9748:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/star-forge-parts-29a03c2cc8b3216790af0717dea93f96.jpeg"}}]);