"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7760],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=r,y=c["".concat(i,".").concat(m)]||c[m]||p[m]||a;return o?n.createElement(y,l(l({ref:t},d),{},{components:o})):n.createElement(y,l({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5162:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(7294),r=o(6010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:o,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:o},t)}},5488:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(7462),r=o(7294),a=o(6010),l=o(2389),s=o(7392),i=o(7094),u=o(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,o;const{lazy:l,block:c,defaultValue:m,values:y,groupId:h,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=y?y:f.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),b=(0,s.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(o=f.find((e=>e.props.default)))?void 0:o.props.value)?t:f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.U)(),[P,T]=(0,r.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==P&&k.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,o=I.indexOf(t),n=k[o].value;n!==P&&(O(t),T(n),null!=h&&N(h,String(n)))},S=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{var n;const t=I.indexOf(e.currentTarget)+1;o=null!=(n=I[t])?n:I[0];break}case"ArrowLeft":{var r;const t=I.indexOf(e.currentTarget)-1;o=null!=(r=I[t])?r:I[I.length-1];break}}null==(t=o)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},g)},k.map((e=>{let{value:t,label:o,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>I.push(e),onKeyDown:S,onFocus:E,onClick:E},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=o?o:t)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},5214:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=o(7462),r=(o(7294),o(3905)),a=o(5488),l=o(5162);const s={description:"This section will help with understanding the relay and block producer topology."},i="Basic Stake Pool Networking",u={unversionedId:"stake-pool-guides/basic-stake-pool-networking",id:"stake-pool-guides/basic-stake-pool-networking",title:"Basic Stake Pool Networking",description:"This section will help with understanding the relay and block producer topology.",source:"@site/docs/stake-pool-guides/basic-stake-pool-networking.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/basic-stake-pool-networking",permalink:"/docs/stake-pool-guides/basic-stake-pool-networking",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/basic-stake-pool-networking.md",tags:[],version:"current",frontMatter:{description:"This section will help with understanding the relay and block producer topology."},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/docs/networking-guides/"},next:{title:"Wireguard Guide",permalink:"/docs/stake-pool-guides/wireguard-guide"}},d={},p=[{value:"Assumptions",id:"assumptions",level:2},{value:"Overview",id:"overview",level:2},{value:"CUSTOM_PEERS=&quot;10.20.30.3**:<strong>6000</strong>|<strong>138.197.71.216</strong>:**6000&quot;",id:"custom_peers10203036000138197712166000",level:4},{value:"Pool Registration",id:"pool-registration",level:2},{value:"DNS Client",id:"dns-client",level:2},{value:"DNS Client Examples",id:"dns-client-examples",level:3}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-stake-pool-networking"},"Basic Stake Pool Networking"),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"For the sake of this tutorial we are assuming that the Raspberry Pi nodes you are running are in your home and connected to either your ISP's internet router or a separate switch connected to your ISP's internet router. Your nodes should have a firewall configured with as few ports open as possible and with your firewall rules as specific as possible. Furthermore, your ISP's internet router should also have firewall settings configured. If you are not familiar with them, leaving the firewall defaults from your ISP are generally okay."),(0,r.kt)("p",null,"If you have a block producer running, at a minimum it's firewall rules should have it's node port available only to your configured relay IPs and then the port you use for ssh. If you want to monitor your block producer metrics using Grafana, you'll also need to provide access to the Grafana port. Same thing if you want to monitor your relays."),(0,r.kt)("p",null,"We are not network experts here. This is only provided as a point of general understanding of how the node topology and network interact."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Your ",(0,r.kt)("strong",{parentName:"p"},"relay nodes")," should be pointed to other remote relay nodes and your block producer. Your ",(0,r.kt)("strong",{parentName:"p"},"block producer")," should only be pointing to your relay nodes."),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"relay node",label:"Relay Node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "Producers": [\n    {\n      "addr": "block producers private IPv4",\n      "port": 6000,\n      "valency": 1\n    },\n    {\n      "addr": "138.197.71.216",\n      "port": 3001,\n      "valency": 1\n    },\n    {\n      "addr": "107.23.17.23",\n      "port": 3001,\n      "valency": 1\n    },\n    {\n      "addr": "3.140.154.176",\n      "port": 6002,\n      "valency": 1\n    }\n  ]\n}\n'))),(0,r.kt)(l.Z,{value:"block producer",label:"Block Producer",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="mainnet-topology.json"',title:'"mainnet-topology.json"'},'{\n  "Producers": [\n    {\n      "addr": "10.20.30.1",\n      "port": 6001,\n      "valency": 1\n    },\n    {\n      "addr": "10.20.30.2",\n      "port": 6002,\n      "valency": 1\n    }\n  ]\n}\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"addr")," and ",(0,r.kt)("strong",{parentName:"p"},"port")," entries above should be the IP addresses of your relay nodes. That's it. Your block producer should have firewall entries restricting access to only these IP addresses on the port you are running your block producer on. Example ufw firewall status below running the block producer on port 6000."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=" sudo ufw status"',title:'"',sudo:!0,ufw:!0,'status"':!0},"To                         Action      From\n--                         ------      ----\n6000/tcp                   ALLOW       10.20.30.1\n6000/tcp                   ALLOW       10.20.30.2\n")),(0,r.kt)("p",null,"The first example ",(0,r.kt)("strong",{parentName:"p"},"addr")," line above ",(0,r.kt)("strong",{parentName:"p"},"10.20.30.3")," is your block producer's IP address and ",(0,r.kt)("strong",{parentName:"p"},"port 6000")," is the port you are running your block producer on. This object should be the exact same on your other relays."),(0,r.kt)("p",null,"The other three objects are remote peers. You can set those manually or you can use the ",(0,r.kt)("strong",{parentName:"p"},"topologyUpdater.sh")," script from Guild operators. If you choose to use the topologyUpdater.sh be sure you set the ",(0,r.kt)("strong",{parentName:"p"},"CUSTOM","_","PEERS")," line in the script correctly before you run it. This is a pipe-delimited set of addr:port:valency pairs of peers that you want the script to add to your final topology.json file. This line should include your block producer. Default valency is 1 (one) if not specified. Example showing the first two objects from the mainnet-topology.json file above:"),(0,r.kt)("h4",{id:"custom_peers10203036000138197712166000"},"CUSTOM","_",'PEERS="10.20.30.3',"*","*",":",(0,r.kt)("strong",{parentName:"h4"},"6000"),"|",(0,r.kt)("strong",{parentName:"h4"},"138.197.71.216"),":","*","*",'6000"'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Set ",(0,r.kt)("strong",{parentName:"p"},"valency")," to 0 (zero) to disable a remote peer if you do not wish to delete the peer entirely from the file.")),(0,r.kt)("h2",{id:"pool-registration"},"Pool Registration"),(0,r.kt)("p",null,"When you create your stake pool's ",(0,r.kt)("strong",{parentName:"p"},"pool.json")," metadata file you will notice a section called ",(0,r.kt)("strong",{parentName:"p"},"poolRelays"),". This is where you would add ",(0,r.kt)("strong",{parentName:"p"},"public")," relays, visible to others. You can add them as static IPs or as a domain name, such as ",(0,r.kt)("strong",{parentName:"p"},"north.acme.com"),". If you are running more than one relay on your internal network you will need to have them assigned to different ports, such as 6001 and 6002."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="pool.json"',title:'"pool.json"'},'"poolRelays": [\n    {\n      "relayType": "dns",\n      "relayEntry": "north.acme.com",\n      "relayPort": "6001"\n    },\n    {\n      "relayType": "dns",\n      "relayEntry": "north.acme.com",\n      "relayPort": "6002"\n    }\n  ],\n')),(0,r.kt)("p",null,"A typical home network will only expose a single external IP address to the world, dynamically assigned by your ISP (Internet Service Provider). Dynamically assigned external IP leases can be relatively static for a good long period, but this is not guaranteed and you should consider registering a domain name so you can use dns entries in the pool.json instead. Otherwise, each time your external IP address changes you'll have to re-register your pool with a new IP for your relays."),(0,r.kt)("h2",{id:"dns-client"},"DNS Client"),(0,r.kt)("p",null,"Unless you have a static IP address assigned by your ISP, at some point you're going to have to consider setting up a dynamic DNS client that runs on your internal network and broadcasts your external IP address assigned by your ISP to your dynamic dns domain provider, such as Google domains. Then whenever your ISP changes your external dynamic IP address, your DNS client will see that, push the new IP address to your domain provider and there should be next to no impact to your domain addresses."),(0,r.kt)("h3",{id:"dns-client-examples"},"DNS Client Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/domains/answer/6147083?hl=en"},"ddclient")),(0,r.kt)("li",{parentName:"ul"},"no-ip"),(0,r.kt)("li",{parentName:"ul"},"namecheap.com openwrt ddns-scripts")),(0,r.kt)("p",null,"Was this information helpful? Earn rewards with us! ",(0,r.kt)("a",{parentName:"p",href:"/docs/delegate"},"Consider delegating some ADA"),"."))}m.isMDXComponent=!0}}]);