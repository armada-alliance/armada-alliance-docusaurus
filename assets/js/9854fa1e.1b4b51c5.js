"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:c,defaultValue:m,values:g,groupId:f,className:h}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:b.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,i.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[O,P]=(0,n.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&y.some((t=>t.value===e))&&P(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),r=y[a].value;r!==O&&(E(t),P(r),null!=f&&N(f,String(r)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;a=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var n;const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},y.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},8246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={description:"Flash image"},s="Download & Flash",u={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",id:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",title:"Download & Flash",description:"Flash image",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash.md",tags:[],version:"current",frontMatter:{description:"Flash image"},sidebar:"tutorialSidebar",previous:{title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/"},next:{title:"Logging in Securely",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/logging-in-securely"}},p={},d=[{value:"Flash Image",id:"flash-image",level:2}],c={toc:d};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"download--flash"},"Download & Flash"),(0,n.kt)("h2",{id:"flash-image"},"Flash Image"),(0,n.kt)("p",null,"Download, install & open ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/raspberrypi/rpi-imager/releases/latest"},"Raspberry Pi Imager"),". Plug in your target USB drive."),(0,n.kt)("p",null,"Ubuntu users can download and install with snapd."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update\nsudo apt install snapd\nsudo snap install rpi-imager\n")),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Older models of the Pi4B 8GB need to have their boot loader updated to boot from USB. If your image won't boot remove the USB3 drive and use rpi-imager to flash Pi 4 EEPROM boot recovery to an sd card."),(0,n.kt)("p",{parentName:"admonition"},"Plug the Pi into a monitor, insert the sd card and power up. Once you see a green screen you should be good to boot from your USB3 drive. Newer versions are shipping with a USB boot capable boot loader. ",(0,n.kt)("strong",{parentName:"p"},"Feeling lucky?")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Choose OS -> Misc utility images -> Bootloader -> USB Boot")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md"},"https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5123).Z,width:"1366",height:"844"})),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Pre configured Pi-Node.img.gz",label:"Pre configured Pi-Node.img.gz",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Obtain Pi-Node.img.gz file")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Download Pi-Node")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Within Raspberry Pi Imager")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Choose OS -> Use custom")),(0,n.kt)("p",null,"Locate the .img.gz file you downloaded & wish to flash."),(0,n.kt)("p",null,"Locate your target drive & write it to disk."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4262).Z,width:"680",height:"418"}))),(0,n.kt)(l.Z,{value:"Fresh Ubuntu 22.04 LTS installation",label:"Fresh Ubuntu 22.04 LTS installation",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Within Raspberry Pi Imager")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Download Ubuntu Server 22.04 (RPI 3/4/400)")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cdimage.ubuntu.com/ubuntu-server/jammy/daily-preinstalled/current/jammy-preinstalled-server-arm64+raspi.img.xz"},"Raspberry Pi Generic (64-bit ARM) preinstalled server image")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Choose OS -> Use custom")),(0,n.kt)("p",null,"Locate the .img.gz file you downloaded & wish to flash. Locate your target drive & write it to disk."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4262).Z,width:"680",height:"418"})))))}m.isMDXComponent=!0},4262:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom-os-4520505f2502c6754c7cf5dbb6705892.png"},5123:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/otgpoltut4-e7f06b6ddafa36e9b9839a2f8251f3a1.png"}}]);