"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9357],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(7294),r=n(6010),a="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(7462),r=n(7294),a=n(2389),l=n(7392),s=n(7094),i=n(2466),u=n(6010),d="tabList_uSqn",c="tabItem_LplD";function p(e){var t,n,a,p=e.lazy,m=e.block,h=e.defaultValue,y=e.values,f=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=y?y:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),P=N.tabGroupChoices,T=N.setTabGroupChoices,I=(0,r.useState)(w),O=I[0],x=I[1],E=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=P[f];null!=j&&j!==O&&k.some((function(e){return e.value===j}))&&x(j)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),o=k[n].value;o!==O&&(S(t),x(o),null!=f&&T(f,o))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=E.indexOf(e.currentTarget)+1;n=E[o]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:D,onClick:D},a,{className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,a.Z)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}},1382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=n(9877),s=n(2360),i=["components"],u={description:"This section will help with understanding the relay and block producer topology."},d="Basic Stake Pool Networking \ud83d\udcab",c={unversionedId:"stake-pool-guides/basic-stake-pool-networking",id:"stake-pool-guides/basic-stake-pool-networking",title:"Basic Stake Pool Networking \ud83d\udcab",description:"This section will help with understanding the relay and block producer topology.",source:"@site/docs/stake-pool-guides/basic-stake-pool-networking.mdx",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/basic-stake-pool-networking",permalink:"/docs/stake-pool-guides/basic-stake-pool-networking",draft:!1,editUrl:"https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/basic-stake-pool-networking.mdx",tags:[],version:"current",frontMatter:{description:"This section will help with understanding the relay and block producer topology."},sidebar:"tutorialSidebar",previous:{title:"Finishing Up",permalink:"/docs/stake-pool-guides/m1-native-macos-11-build/finishing-up"},next:{title:"Add adapools Metrics to Grafana \ud83d\udcca",permalink:"/docs/stake-pool-guides/add-adapools-info-to-grafana"}},p={},m=[{value:"Assumptions",id:"assumptions",level:2},{value:"Overview",id:"overview",level:2},{value:"CUSTOM_PEERS=&quot;10.20.30.3**:<strong>6000</strong>|<strong>138.197.71.216</strong>:**6000&quot;",id:"custom_peers10203036000138197712166000",level:4},{value:"Pool Registration",id:"pool-registration",level:2},{value:"DNS Client",id:"dns-client",level:2},{value:"DNS Client Examples",id:"dns-client-examples",level:3}],h={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-stake-pool-networking-"},"Basic Stake Pool Networking \ud83d\udcab"),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"For the sake of this tutorial we are assuming that the Raspberry Pi nodes you are running are in your home and connected to either your ISP's internet router or a separate switch connected to your ISP's internet router. Your nodes should have a firewall configured with as few ports open as possible and with your firewall rules as specific as possible. Furthermore, your ISP's internet router should also have firewall settings configured. If you are not familiar with them, leaving the firewall defaults from your ISP are generally okay."),(0,a.kt)("p",null,"If you have a block producer running, at a minimum it's firewall rules should have it's node port available only to your configured relay IPs and then the port you use for ssh. If you want to monitor your block producer metrics using Grafana, you'll also need to provide access to the Grafana port. Same thing if you want to monitor your relays."),(0,a.kt)("p",null,"We are not network experts here. This is only provided as a point of general understanding of how the node topology and network interact."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Your ",(0,a.kt)("strong",{parentName:"p"},"relay nodes")," should be pointed to other remote relay nodes and your block producer. Your ",(0,a.kt)("strong",{parentName:"p"},"block producer")," should only be pointing to your relay nodes."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"relay node",label:"Relay Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "Producers": [\n    {\n      "addr": "block producers private IPv4",\n      "port": 6000,\n      "valency": 1\n    },\n    {\n      "addr": "138.197.71.216",\n      "port": 3001,\n      "valency": 1\n    },\n    {\n      "addr": "107.23.17.23",\n      "port": 3001,\n      "valency": 1\n    },\n    {\n      "addr": "3.140.154.176",\n      "port": 6002,\n      "valency": 1\n    }\n  ]\n}\n'))),(0,a.kt)(s.Z,{value:"block producer",label:"Block Producer",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "Producers": [\n    {\n      "addr": "10.20.30.1",\n      "port": 6001,\n      "valency": 1\n    },\n    {\n      "addr": "10.20.30.2",\n      "port": 6002,\n      "valency": 1\n    }\n  ]\n}\n')))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"addr")," and ",(0,a.kt)("strong",{parentName:"p"},"port")," entries above should be the IP addresses of your relay nodes. That's it. Your block producer should have firewall entries restricting access to only these IP addresses on the port you are running your block producer on. Example ufw firewall status below running the block producer on port 6000."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=" sudo ufw status"',title:'"',sudo:!0,ufw:!0,'status"':!0},"To                         Action      From\n--                         ------      ----\n6000/tcp                   ALLOW       10.20.30.1\n6000/tcp                   ALLOW       10.20.30.2\n")),(0,a.kt)("p",null,"The first example ",(0,a.kt)("strong",{parentName:"p"},"addr")," line above ",(0,a.kt)("strong",{parentName:"p"},"10.20.30.3")," is your block producer's IP address and ",(0,a.kt)("strong",{parentName:"p"},"port 6000")," is the port you are running your block producer on. This object should be the exact same on your other relays."),(0,a.kt)("p",null,"The other three objects are remote peers. You can set those manually or you can use the ",(0,a.kt)("strong",{parentName:"p"},"topologyUpdater.sh")," script from Guild operators. If you choose to use the topologyUpdater.sh be sure you set the ",(0,a.kt)("strong",{parentName:"p"},"CUSTOM","_","PEERS")," line in the script correctly before you run it. This is a pipe-delimited set of addr:port:valency pairs of peers that you want the script to add to your final topology.json file. This line should include your block producer. Default valency is 1 (one) if not specified. Example showing the first two objects from the mainnet-topology.json file above:"),(0,a.kt)("h4",{id:"custom_peers10203036000138197712166000"},"CUSTOM","_",'PEERS="10.20.30.3',"*","*",":",(0,a.kt)("strong",{parentName:"h4"},"6000"),"|",(0,a.kt)("strong",{parentName:"h4"},"138.197.71.216"),":","*","*",'6000"'),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Set ",(0,a.kt)("strong",{parentName:"p"},"valency")," to 0 (zero) to disable a remote peer if you do not wish to delete the peer entirely from the file."))),(0,a.kt)("h2",{id:"pool-registration"},"Pool Registration"),(0,a.kt)("p",null,"When you create your stake pool's ",(0,a.kt)("strong",{parentName:"p"},"pool.json")," metadata file you will notice a section called ",(0,a.kt)("strong",{parentName:"p"},"poolRelays"),". This is where you would add ",(0,a.kt)("strong",{parentName:"p"},"public")," relays, visible to others. You can add them as static IPs or as a domain name, such as ",(0,a.kt)("strong",{parentName:"p"},"north.acme.com"),". If you are running more than one relay on your internal network you will need to have them assigned to different ports, such as 6001 and 6002."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="pool.json"',title:'"pool.json"'},'"poolRelays": [\n    {\n      "relayType": "dns",\n      "relayEntry": "north.acme.com",\n      "relayPort": "6001"\n    },\n    {\n      "relayType": "dns",\n      "relayEntry": "north.acme.com",\n      "relayPort": "6002"\n    }\n  ],\n')),(0,a.kt)("p",null,"A typical home network will only expose a single external IP address to the world, dynamically assigned by your ISP (Internet Service Provider). Dynamically assigned external IP leases can be relatively static for a good long period, but this is not guaranteed and you should consider registering a domain name so you can use dns entries in the pool.json instead. Otherwise, each time your external IP address changes you'll have to re-register your pool with a new IP for your relays."),(0,a.kt)("h2",{id:"dns-client"},"DNS Client"),(0,a.kt)("p",null,"Unless you have a static IP address assigned by your ISP, at some point you're going to have to consider setting up a dynamic DNS client that runs on your internal network and broadcasts your external IP address assigned by your ISP to your dynamic dns domain provider, such as Google domains. Then whenever your ISP changes your external dynamic IP address, your DNS client will see that, push the new IP address to your domain provider and there should be next to no impact to your domain addresses."),(0,a.kt)("h3",{id:"dns-client-examples"},"DNS Client Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/domains/answer/6147083?hl=en"},"ddclient")),(0,a.kt)("li",{parentName:"ul"},"no-ip"),(0,a.kt)("li",{parentName:"ul"},"namecheap.com openwrt ddns-scripts")),(0,a.kt)("p",null,"Was this information helpful? Earn rewards with us! ",(0,a.kt)("a",{parentName:"p",href:"/docs/delegate"},"Consider delegating some ADA"),"."))}y.isMDXComponent=!0}}]);