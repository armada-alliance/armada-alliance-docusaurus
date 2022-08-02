"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[301],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(6010),o="tabItem_OmH5";function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(7294),o=a(2389),r=a(7392),i=a(7094),s=a(2466),p=a(6010),m="tabList_uSqn",d="tabItem_LplD";function u(e){var t,a,o,u=e.lazy,c=e.block,h=e.defaultValue,k=e.values,f=e.groupId,g=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),T=(0,r.l)(y,(function(e,t){return e.value===t.value}));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,i.U)(),N=_.tabGroupChoices,w=_.setTabGroupChoices,x=(0,l.useState)(b),O=x[0],Z=x[1],C=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=N[f];null!=I&&I!==O&&y.some((function(e){return e.value===I}))&&Z(I)}var S=function(e){var t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==O&&(E(t),Z(n),null!=f&&w(f,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var l=C.indexOf(e.currentTarget)-1;a=C[l]||C[C.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,p.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},g)},y.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:S,onClick:S},o,{className:(0,p.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),u?(0,l.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},387:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=a(7462),l=a(3366),o=(a(7294),a(3905)),r=a(9877),i=a(2360),s=["components"],p={description:"How to use the stakepoolscripts to start a pool, rotate KES, update pool data, claim rewards and send transactions."},m="Introduction",d={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/stakepoolscripts",id:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/stakepoolscripts",title:"Introduction",description:"How to use the stakepoolscripts to start a pool, rotate KES, update pool data, claim rewards and send transactions.",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/stakepoolscripts.mdx",sourceDirName:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/stakepoolscripts",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/stakepoolscripts",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/stakepoolscripts.mdx",tags:[],version:"current",frontMatter:{description:"How to use the stakepoolscripts to start a pool, rotate KES, update pool data, claim rewards and send transactions."},sidebar:"tutorialSidebar",previous:{title:"Pi-Cold",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/cold-offline"},next:{title:"Raspi-Node Guide",permalink:"/docs/stake-pool-guides/Raspberry-pi-os"}},u={},c=[{value:"Workflow",id:"workflow",level:2},{value:"Create and fund a wallet",id:"create-and-fund-a-wallet",level:2},{value:"Create the pool&#39;s keys and certificates",id:"create-the-pools-keys-and-certificates",level:2},{value:"Confirm successful registration",id:"confirm-successful-registration",level:3},{value:"pool.vet",id:"poolvet",level:3},{value:"adapools.org",id:"adapoolsorg",level:3},{value:"pooltool.io",id:"pooltoolio",level:3}],h={toc:c};function k(e){var t=e.components,p=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Now that everything is set up let's start creating the pool. Please read the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gitmachtl/scripts"},"official documentation")," Martin of ",(0,o.kt)("a",{parentName:"p",href:"https://stakepool.at/"},"ATADA")," pool provides to get a better understanding of the scripts. His tutorial is much more detailed and covers a lot of options. Thank you Martin!"),(0,o.kt)("p",null,"This tutorial on the other hand is for the basics. It contains everything necessary to get a stake pool running and some other fundamental operations. It should help to get a nice and easy workflow."),(0,o.kt)("p",null,"The transfer with the USB device is fully automated. It just needs to be mounted at the current working environment,\nwhich should also work automated.\nIf not, mount it with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo mount ~/usb_transfer"),". Make sure to unmount every time before removing ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo umount ~/usb_transfer"),". "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide assumes, that you are always in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/pool_keys")," when running a script on the offline machine and in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/pi-pool")," on the core."))),(0,o.kt)("h1",{id:"prerequisits-on-the-cold-machine"},"Prerequisits on the cold machine"),(0,o.kt)("p",null,"Let's begin with a directory for your keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd\nmkdir pool_keys\ncd pool_keys\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Also make sure the offline machine's time is correct, you'll have to do this everytime you use it!"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"timedatectl\ntimedatectl set-time xxxxx\n")),(0,o.kt)("h1",{id:"create-a-stake-pool"},"Create a stake pool"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Basically everything is created offline. Make sure that you never expose your secret keys to an online environment and back them up, multiple times best case. The only keys you need on your core are: kes-xxx.skey, vrf.skey and node-xxx.opcert."))),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1726).Z,width:"794",height:"1123"})),(0,o.kt)("h2",{id:"create-and-fund-a-wallet"},"Create and fund a wallet"),(0,o.kt)("p",null,"First of all you'll need a wallet and with it a staking key. Create the keys and name the wallet accordingly."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"03a_genStakingPaymentAddr.sh wallet_name cli\n")))),(0,o.kt)("p",null,"Now copy the addresses to your core to fund the new wallet. You'll need your fresh USB drive for that."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh attach wallet_name.payment.addr\n01_workOffline.sh attach wallet_name.staking.addr\n")))),(0,o.kt)("p",null,"Switch the USB drive from offline to online machine.\nExtract the address files."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh extract\n")))),(0,o.kt)("p",null,"Retrieve the address and send some funds to your new wallet. You'll need at least 502 ADA + tx fees + your pledge."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cat wallet_name.payment.addr\n")))),(0,o.kt)("p",null,"Query the balance and wait until the new UTXO shows up."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_queryAddress.sh wallet_name.payment\n")))),(0,o.kt)("p",null,"When the funds arrived copy the UTXO data to your offline machine. "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh add wallet_name.payment\n")))),(0,o.kt)("p",null,"Generate a transaction to register the staking address.\nIt will be submitted later on."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"03b_regStakingAddrCert.sh wallet_name.staking \n")))),(0,o.kt)("h2",{id:"create-the-pools-keys-and-certificates"},"Create the pool's keys and certificates"),(0,o.kt)("p",null,"Generate the keys for your core node."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"04a_genNodeKeys.sh pool_name cli\n04b_genVRFKeys.sh pool_name\n04c_genKESKeys.sh pool_name\n04d_genNodeOpCert.sh pool_name\n")))),(0,o.kt)("p",null,"Generate your stakepool certificate and metadata.json."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"05a_genStakepoolCert.sh pool_name\n")))),(0,o.kt)("p",null,"This creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"pool_name.pool.json")," file, which you can edit according to your needs and wishes.\nEverything is calculated in lovelaces. (Reminder: 1 ADA = 1,000,000 lovelace)\nSo in this case we get a pool with 100k ADA pledge, 340 ADA fixed cost (minimum) and 1% margin."),(0,o.kt)("p",null,"Add as many of your relays as you want. Either ip or dns based."),(0,o.kt)("p",null,"Pool description can contain up to 255 characters. "),(0,o.kt)("p",null,"poolMetaUrl points to the Metadata file, which you need to upload later. Github is a popular choice, if you don't want to use your own server.  "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"poolMetaUrl can only be 64 characters long.\nMake sure it points to the raw file.\nIn case you need to shorten the URL you can do it by creating an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"pool_name.metadata.json"),", upload it\nand shorten the URL. Make sure the short URL doesn't expire. Later replace it with the actual file. "))),(0,o.kt)("p",null,"You may also add an URL to an ",(0,o.kt)("inlineCode",{parentName:"p"},"extended.metadata.json"),", which holds more information like the URL to your logo etc.\nJust create the file on your local machine, it's quite self-explanatory.\nThe png icon is limited to 64x64 while the logo could use 400x400 pixels. jpg works aswell."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"pool_name.pool.json",label:"pool_name.pool.json",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'{\n   "poolName": "pool_name",  \n   "poolOwner": [\n      {\n      "ownerName": "wallet_name",\n      "ownerWitness": "local"\n      }\n   ],\n   "poolRewards": "wallet_name",\n   "poolPledge": "100000000000",    \n   "poolCost": "340000000",\n   "poolMargin": "0.01"\n   "poolRelays": [\n      {\n      "relayType": "dns",\n      "relayEntry": "relay.mypool.com",\n      "relayPort": "3001"\n      }\n      {\n      "relayType": "ip",\n      "relayEntry": "x.x.x.x (ipv4 of relay)",\n      "relayPort": "3002"\n      }\n   ],\n   "poolMetaName": "This is my Pool",\n   "poolMetaDescription": "This is the description of my Pool!",\n   "poolMetaTicker": "POOL",\n   "poolMetaHomepage": "https://mypool.com",\n   "poolMetaUrl": "https://mypool.com/pool_name.metadata.json",\n   "poolExtendedMetaUrl": "",\n   "---": "--- DO NOT EDIT BELOW THIS LINE ---"\n}\n'))),(0,o.kt)(i.Z,{value:"extended.metadata.json",label:"extended.metadata.json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'{\n    "info": {\n        "url_png_icon_64x64": "",\n        "url_png_logo": "",\n        "location": "",\n        "social": {\n            "twitter_handle": "",\n            "telegram_handle": "",\n            "facebook_handle": "",\n            "youtube_handle": "",\n            "twitch_handle": "",\n            "discord_handle": "",\n            "github_handle": ""\n        },\n        "company": {\n            "name": "",\n            "city": "",\n            "country": ""\n                    },\n        "about": {\n            "me": "",\n            "server": "",\n        "company": ""\n        },\n    "my-pool-ids": {\n        "0": ""\n    },\n    "when-satured-then-recommend": {\n        "0": ""\n    }\n    }\n   \n}\n')))),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"05a_genStakepoolCert.sh pool_name")," again. This will generate the pool_name.pool.cert file and the actual pool_name.metadata.json.\nLater you can upload the metadata.json to the URL you specified in the previous step. Do not edit it anymore or the hash won't fit!\nIf you want to change something, change it in the pool_name.pool.json and run ",(0,o.kt)("inlineCode",{parentName:"p"},"05a_genStakepoolCert.sh pool_name")," again."),(0,o.kt)("p",null,"Delegate to your own pool as owner. (Pledge) "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"05b_genDelegationCert.sh pool_name wallet_name\n")))),(0,o.kt)("p",null,"Generate the stakepool registration transaction. The script also attaches the new pool_name.metadata.json to the offline transfer file."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"05c_regStakepoolCert.sh pool_name wallet_name.payment\n")))),(0,o.kt)("p",null,"Now attach the files needed by the core."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh attach pool_name.vrf.skey\n01_workOffline.sh attach pool_name.kes-xxx.skey\n01_workOffline.sh attach pool_name.node-xxx.opcert\n")))),(0,o.kt)("p",null,"You are done with the offline part. Unmount and bring your USB drive to the core again."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh extract\n")))),(0,o.kt)("p",null,"For convenience rename the core files so you don't have to change the startup script every KES rotation."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv pool_name.kes-xxx.skey kes.skey\nmv pool_name.vrf.skey vrf.skey\nmv pool_name.node-xxx.opcert node.cert\n")))),(0,o.kt)("p",null,"Now change the startup script and add the three files."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano $HOME/.local/bin/cardano-service\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#!/bin/bash\n. /home/ada/.adaenv\n\nTOPOLOGY=${NODE_FILES}/${NODE_CONFIG}-topology.json\nDB_PATH=${NODE_HOME}/db\nCONFIG=${NODE_FILES}/${NODE_CONFIG}-config.json\nKES=${NODE_HOME}/kes.skey\nVRF=${NODE_HOME}/vrf.skey\nCERT=${NODE_HOME}/node.cert\ncardano-node +RTS -N4 --disable-delayed-os-memory-return -RTS run \\\n  --topology ${TOPOLOGY} \\\n  --database-path ${DB_PATH} \\\n  --socket-path ${CARDANO_NODE_SOCKET_PATH} \\\n  --port ${NODE_PORT} \\\n  --config ${CONFIG} \\\n  --shelley-kes-key ${KES} \\\n  --shelley-vrf-key ${VRF} \\\n  --shelley-operational-certificate ${CERT}\n")),(0,o.kt)("p",null,"Restart the service."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service restart\n")))),(0,o.kt)("p",null,"While your core is starting you can transfer the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool_name.metadata.json")," to your local machine and upload it to the prepared URL.\nDo the same with the extended metadata and your logos, if you have made them."),(0,o.kt)("p",null,"Check the status of the core. When it's up again you can submit the transactions.\nFirst the staking key registration, then repeat the same command for the stake pool registration."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh execute\n")))),(0,o.kt)("h3",{id:"confirm-successful-registration"},"Confirm successful registration"),(0,o.kt)("h3",{id:"poolvet"},"pool.vet"),(0,o.kt)("p",null,"pool.vet is a website for pool operators to check the validity of their stake pools on chain data. You can check this site ",(0,o.kt)("a",{parentName:"p",href:"https://pool.vet/"},"Pool.vet")," for problems and clues as to how to fix them."),(0,o.kt)("h3",{id:"adapoolsorg"},"adapools.org"),(0,o.kt)("p",null,"You should create an account and claim your pool here at ",(0,o.kt)("a",{parentName:"p",href:"https://adapools.org/"},"adapools.org.")),(0,o.kt)("h3",{id:"pooltoolio"},"pooltool.io"),(0,o.kt)("p",null,"You should also create an account and claim your pool here on ",(0,o.kt)("a",{parentName:"p",href:"https://pooltool.io"},"pooltool.io"),"."),(0,o.kt)("h1",{id:"rotate-kes-keys"},"Rotate KES keys"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to rotate your KES keys and node certificate before! they expire."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before starting check ",(0,o.kt)("inlineCode",{parentName:"p"},"timedatectl")," on your offline machine and adjust, if needed."))),(0,o.kt)("p",null,"Create the new KES keypair. You will notice that the counter increments automatically."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"04c_genKESKeys.sh pool_name\n")))),(0,o.kt)("p",null,"Create a new operational certificate."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"04d_genNodeOpCert.sh pool_name\n")))),(0,o.kt)("p",null,"Now attach the new files."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh attach pool_name.vrf.skey\n01_workOffline.sh attach pool_name.kes-xxx.skey\n01_workOffline.sh attach pool_name.node-xxx.opcert\n")))),(0,o.kt)("p",null,"Unmount and bring the USB drive to the core.\nStop the node and extract the files."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service stop\n01_workOffline.sh extract\n")))),(0,o.kt)("p",null,"Now rename/move them to match the startup script.\nThen start again. That's it."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv pool_name.kes-xxx.skey kes.skey\nmv pool_name.vrf.skey vrf.skey\nmv pool_name.node-xxx.opcert node.cert\ncardano-service start \n")))),(0,o.kt)("h1",{id:"update-pool-registration"},"Update pool registration"),(0,o.kt)("p",null,"First get up-to-date information from the core via your USB drive."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh add wallet_name.payment\n")))),(0,o.kt)("p",null,"Switch to the offline machine and edit the values you want to change in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool_name.pool.json"),"."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"chmod 600 pool_name.pool.json\nnano pool_name.pool.json\nchmod 400 pool_name.pool.json\n")))),(0,o.kt)("p",null,"Create a new certificate ",(0,o.kt)("inlineCode",{parentName:"p"},"pool_name.pool.cert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pool_name.metadata.json"),"."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"05a_genStakepoolCert.sh pool_name\n")))),(0,o.kt)("p",null,"Create the registration transaction. If the metadata didn't change you don't need to attach it to the transfer file."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"05c_regStakepoolCert.sh pool_name wallet_name.payment\n")))),(0,o.kt)("p",null,"Now switch to the core.\nFirst, if you changed the metadata, ",(0,o.kt)("inlineCode",{parentName:"p"},"01_workOffline.sh extract")," and upload it.\nOtherwise skip this step and submit the transaction directly. "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh execute\n")))),(0,o.kt)("h1",{id:"claim-rewards"},"Claim rewards"),(0,o.kt)("p",null,"First get up-to-date information from the core via your USB drive."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh add wallet_name.payment\n01_workOffline.sh add wallet_name.staking\n")))),(0,o.kt)("p",null,"Switch over to the offline machine."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_claimRewards.sh wallet_name.staking wallet_name.payment\n")))),(0,o.kt)("p",null,"Back to the core."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh execute\n")))),(0,o.kt)("h1",{id:"send-a-simple-transaction"},"Send a simple transaction"),(0,o.kt)("p",null,"First get up-to-date information from the core via your USB drive.\nCreate a ",(0,o.kt)("inlineCode",{parentName:"p"},"other_wallet.payment.addr")," which contains the address (and only the address) you want to send your ADA to."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh add wallet_name.payment\n01_workOffline.sh attach other_wallet.payment.addr\n")))),(0,o.kt)("p",null,"Bring everything over to the cold machine and create the transaction.\nThis will send 1000 ADA from your pledge wallet to the other wallet.\n(Again everything in lovelaces. 1 ADA = 1000000 lovelace)"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"offline",label:"offline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh extract\n01_sendLovelaces.sh wallet_name.payment other_wallet.payment 1000000000\n")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to meet your pledge at any time. And some ADA for transactions fees on top aren't bad."))),(0,o.kt)("p",null,"USB transfer and submitting at your core."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"core",label:"core",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"01_workOffline.sh execute\n")))))}k.isMDXComponent=!0},1726:function(e,t,a){t.Z=a.p+"assets/images/offline_workflow-6e8e18cb928553a0ac5d27ebb4e20691.jpg"}}]);