"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),r=a(6010),i=a(2466),l=a(6775),s=a(1980),d=a(7392),c=a(12);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,d]=h({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=s??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var k=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=d[a].value;n!==l&&(u(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(f,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},4051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),i=a(5162);const l={},s="Static Build",d={unversionedId:"stake-pool-guides/updating-a-cardano-node/static-build",id:"stake-pool-guides/updating-a-cardano-node/static-build",title:"Static Build",description:"This guide follows the same setup as our Pi-Node guide and image so you may need to adjust sections based on your node's environment and setup.",source:"@site/docs/stake-pool-guides/updating-a-cardano-node/static-build.mdx",sourceDirName:"stake-pool-guides/updating-a-cardano-node",slug:"/stake-pool-guides/updating-a-cardano-node/static-build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/static-build",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/updating-a-cardano-node/static-build.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/using-dynamic-build"},next:{title:"Rotate KES",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes"}},c={},u=[{value:"Overview \ud83d\uddd2",id:"overview-",level:3},{value:"Download the cardano-node &amp; cli",id:"download-the-cardano-node--cli",level:2},{value:"Static binaries and Cardano node configuration files are provided by [ZW3RK] pool\ud83d\ude4f and can be found at our Github repository.",id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository",level:3},{value:"Check if cardano-node is running already",id:"check-if-cardano-node-is-running-already",level:3},{value:"Replace the old binaries and config files with the new ones",id:"replace-the-old-binaries-and-config-files-with-the-new-ones",level:2},{value:"Check your cardano-node version",id:"check-your-cardano-node-version",level:3},{value:"Output:",id:"output",level:4},{value:"Check your cardano-cli version",id:"check-your-cardano-cli-version",level:3},{value:"Output:",id:"output-1",level:4},{value:"Download &amp; Replace the Cardano node configuration files (Optional)",id:"download--replace-the-cardano-node-configuration-files-optional",level:3},{value:"Download Database snapshot",id:"download-database-snapshot",level:2},{value:"Restart the Cardano Node",id:"restart-the-cardano-node",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"static-build"},"Static Build"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide follows the same setup as our ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide and image")," so you may need to adjust sections based on your node's environment and setup.")),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("h4",{parentName:"admonition",id:"current-official-cardano-node-version-811"},"Current Official Cardano Node Version: 8.1.1")),(0,o.kt)("h3",{id:"overview-"},"Overview \ud83d\uddd2"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download Cardano Node Static build & configuration file"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Extract the file's content"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check if you already have Cardano Node service running",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Safely shutdown your Cardano node if it is running"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace the old binaries with the new cardano-node and cardano-cli"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check cardano-node and cli version is updated to the current version"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace old configuration files with new ones (if needed)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Restart your Cardano Node"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that node has started properly")),(0,o.kt)("h2",{id:"download-the-cardano-node--cli"},"Download the cardano-node & cli"),(0,o.kt)("h3",{id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository"},"Static binaries and Cardano node configuration files are provided by ",(0,o.kt)("a",{parentName:"h3",href:"https://armada-alliance.com/identities/zw3rk"},"[","ZW3RK","]")," pool\ud83d\ude4f and can be found at our ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/armada-alliance/cardano-node-binaries/tree/main/static-binaries"},"Github repository"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wget -O 8_1_1.zip https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/8_1_1.zip?raw=true\n")),(0,o.kt)("p",null,"Extract the content from the zip file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"unzip 8_1_1.zip\n")),(0,o.kt)("h3",{id:"check-if-cardano-node-is-running-already"},"Check if cardano-node is running already"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"We need to make sure we do not have a cardano-node already running. If we do we must shut it down before proceeding."))),(0,o.kt)("p",null,"You can check if you have a cardano-node process already running a few ways like using ",(0,o.kt)("inlineCode",{parentName:"p"},"htop")," or by checking your systemd service."),(0,o.kt)("p",null,"If you have been following our ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," you can check your cardano-node status and stop it using the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\ncardano-service stop\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you use Linux's ",(0,o.kt)("inlineCode",{parentName:"p"},"htop")," service just check for a processing running starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node run")," and use ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGINT")," to terminate the process.")),(0,o.kt)("h2",{id:"replace-the-old-binaries-and-config-files-with-the-new-ones"},"Replace the old binaries and config files with the new ones"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," and your cardano-node & cli in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.local/bin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv cardano-node/* ~/.local/bin\n")),(0,o.kt)("h3",{id:"check-your-cardano-node-version"},"Check your cardano-node version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node --version\n")),(0,o.kt)("h4",{id:"output"},"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node 8.1.1 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n")),(0,o.kt)("h3",{id:"check-your-cardano-cli-version"},"Check your cardano-cli version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli --version\n")),(0,o.kt)("h4",{id:"output-1"},"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli 8.1.1 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n")),(0,o.kt)("h3",{id:"download--replace-the-cardano-node-configuration-files-optional"},"Download & Replace the Cardano node configuration files (Optional)"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This step is not needed every time you update your node, typically you only need to update/replace config files after hard fork events when moving into new eras of the ",(0,o.kt)("a",{parentName:"p",href:"https://roadmap.cardano.org/en/"},"Cardano blockchain"),".")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Mainnet",label:"Mainnet",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget https://book.world.dev.cardano.org/environments/mainnet/config.json\nwget https://book.world.dev.cardano.org/environments/mainnet/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/mainnet/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/mainnet/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/mainnet/topology.json\nwget https://book.world.dev.cardano.org/environments/mainnet/conway-genesis.json\n"))),(0,o.kt)(i.Z,{value:"Pre-Production",label:"Pre-Production",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget https://book.world.dev.cardano.org/environments/preprod/config.json\nwget https://book.world.dev.cardano.org/environments/preprod/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/preprod/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/preprod/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/preprod/topology.json\nwget https://book.world.dev.cardano.org/environments/preprod/conway-genesis.json\n"))),(0,o.kt)(i.Z,{value:"Preview",label:"Preview",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget https://book.world.dev.cardano.org/environments/preview/config.json\nwget https://book.world.dev.cardano.org/environments/preview/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/preview/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/preview/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/preview/topology.json\nwget https://book.world.dev.cardano.org/environments/preview/conway-genesis.json\n")))),(0,o.kt)("h2",{id:"download-database-snapshot"},"Download Database snapshot"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Go ",(0,o.kt)("a",{parentName:"p",href:"https://csnapshots.io/"},"to cnsapshots")," if you want to download a Snapshot of the Database for whatever network you need.\nThis will greatly reduce time to sync the chain for your node if using Mainnet or Preproduction networks.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv /path/to/downloaded/snapshot/db $NODE_HOME\n\n")),(0,o.kt)("h2",{id:"restart-the-cardano-node"},"Restart the Cardano Node"),(0,o.kt)("p",null,"Now we just need to restart our cardano-node service if you are using our ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," use this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service start\n")),(0,o.kt)("p",null,"Wait a few seconds or so then check the status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\n")))}h.isMDXComponent=!0}}]);