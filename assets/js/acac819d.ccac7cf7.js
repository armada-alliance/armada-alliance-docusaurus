"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4662],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(h,r(r({ref:a},c),{},{components:t})):n.createElement(h,r({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),o=t(6010);const i="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(7462),o=t(7294),i=t(6010),r=t(2389),l=t(7392),d=t(7094),s=t(2466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){var a;const{lazy:t,block:r,defaultValue:p,values:m,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,l.l)(b,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,d.U)(),[w,T]=(0,o.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&b.some((a=>a.value===e))&&T(e)}const C=e=>{const a=e.currentTarget,t=_.indexOf(a),n=b[t].value;n!==w&&(O(a),T(n),null!=h&&N(h,String(n)))},x=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}null==(a=t)||a.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},b.map((e=>{let{value:a,label:t,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>_.push(e),onKeyDown:x,onFocus:C,onClick:C},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function m(e){const a=(0,r.Z)();return o.createElement(p,(0,n.Z)({key:String(a)},e))}},4051:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=t(7462),o=(t(7294),t(3905)),i=t(5488),r=t(5162);const l={},d="Static Build",s={unversionedId:"stake-pool-guides/updating-a-cardano-node/static-build",id:"stake-pool-guides/updating-a-cardano-node/static-build",title:"Static Build",description:"This guide follows the same setup as our Pi-Node guide and image so you may need to adjust sections based on your node's environment and setup.",source:"@site/docs/stake-pool-guides/updating-a-cardano-node/static-build.mdx",sourceDirName:"stake-pool-guides/updating-a-cardano-node",slug:"/stake-pool-guides/updating-a-cardano-node/static-build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/static-build",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/updating-a-cardano-node/static-build.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/using-dynamic-build"},next:{title:"Rotate KES",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes"}},c={},u=[{value:"Overview \ud83d\uddd2",id:"overview-",level:3},{value:"Download the cardano-node &amp; cli",id:"download-the-cardano-node--cli",level:2},{value:"Static binaries and Cardano node configuration files are provided by [ZW3RK] pool\ud83d\ude4f and can be found at our Github repository.",id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository",level:3},{value:"Check if cardano-node is running already",id:"check-if-cardano-node-is-running-already",level:3},{value:"Replace the old binaries and config files with the new ones",id:"replace-the-old-binaries-and-config-files-with-the-new-ones",level:2},{value:"Check your cardano-node version",id:"check-your-cardano-node-version",level:3},{value:"Output:",id:"output",level:4},{value:"Check your cardano-cli version",id:"check-your-cardano-cli-version",level:3},{value:"Output:",id:"output-1",level:4},{value:"Download &amp; Replace the Cardano node configuration files (Optional)",id:"download--replace-the-cardano-node-configuration-files-optional",level:3},{value:"Download Database snapshot",id:"download-database-snapshot",level:2},{value:"Restart the Cardano Node",id:"restart-the-cardano-node",level:2}],p={toc:u};function m(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"static-build"},"Static Build"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide follows the same setup as our ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide and image")," so you may need to adjust sections based on your node's environment and setup.")),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("h4",{parentName:"admonition",id:"current-official-cardano-node-version-1353"},"Current Official Cardano Node Version: 1.35.3")),(0,o.kt)("h3",{id:"overview-"},"Overview \ud83d\uddd2"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download Cardano Node Static build & configuration file"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Extract the file's content"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check if you already have Cardano Node service running",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Safely shutdown your Cardano node if it is running"))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace the old binaries with the new cardano-node and cardano-cli"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check cardano-node and cli version is updated to the current version"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace old configuration files with new ones (if needed)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Restart your Cardano Node"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that node has started properly")),(0,o.kt)("h2",{id:"download-the-cardano-node--cli"},"Download the cardano-node & cli"),(0,o.kt)("h3",{id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository"},"Static binaries and Cardano node configuration files are provided by ",(0,o.kt)("a",{parentName:"h3",href:"https://armada-alliance.com/identities/zw3rk"},"[","ZW3RK","]")," pool\ud83d\ude4f and can be found at our ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/armada-alliance/cardano-node-binaries/tree/main/static-binaries"},"Github repository"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wget -O 1_35_3.zip https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/1_35_3.zip?raw=true\n")),(0,o.kt)("p",null,"Extract the content from the zip file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"unzip 1_35_3.zip\n")),(0,o.kt)("h3",{id:"check-if-cardano-node-is-running-already"},"Check if cardano-node is running already"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Now we need to make sure we do not have a cardano-node already running. If we do we must shut it down before proceeding."))),(0,o.kt)("p",null,"You can check if you have a cardano-node process already running a few ways like using ",(0,o.kt)("inlineCode",{parentName:"p"},"htop")," or by checking your systemd service."),(0,o.kt)("p",null,"If you have been following our ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," you can check your cardano-node status and stop it using the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\ncardano-service stop\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you use Linux's ",(0,o.kt)("inlineCode",{parentName:"p"},"htop")," service just check for a processing running starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node run")," and use ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGINT")," to terminate the process.")),(0,o.kt)("h2",{id:"replace-the-old-binaries-and-config-files-with-the-new-ones"},"Replace the old binaries and config files with the new ones"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," and your cardano-node & cli in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.local/bin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv cardano-node/* ~/.local/bin\n")),(0,o.kt)("h3",{id:"check-your-cardano-node-version"},"Check your cardano-node version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node --version\n")),(0,o.kt)("h4",{id:"output"},"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node 1.35.3 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n")),(0,o.kt)("h3",{id:"check-your-cardano-cli-version"},"Check your cardano-cli version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli --version\n")),(0,o.kt)("h4",{id:"output-1"},"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli 1.35.3 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n")),(0,o.kt)("h3",{id:"download--replace-the-cardano-node-configuration-files-optional"},"Download & Replace the Cardano node configuration files (Optional)"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This step is not needed every time you update your node, typically you only need to update/replace config files after hard fork events when moving into new eras of the ",(0,o.kt)("a",{parentName:"p",href:"https://roadmap.cardano.org/en/"},"Cardano blockchain"),".")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Mainnet",label:"Mainnet",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget https://hydra.iohk.io/build/7654130/download/1/mainnet-config.json\nwget https://hydra.iohk.io/build/7654130/download/1/mainnet-byron-genesis.json\nwget https://hydra.iohk.io/build/7654130/download/1/mainnet-shelley-genesis.json\nwget https://hydra.iohk.io/build/7654130/download/1/mainnet-alonzo-genesis.json\nwget https://hydra.iohk.io/build/7654130/download/1/mainnet-topology.json\n"))),(0,o.kt)(r.Z,{value:"Testnet",label:"Testnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget https://hydra.iohk.io/build/7654130/download/1/testnet-config.json\nwget https://hydra.iohk.io/build/7654130/download/1/testnet-byron-genesis.json\nwget https://hydra.iohk.io/build/7654130/download/1/testnet-shelley-genesis.json\nwget https://hydra.iohk.io/build/7654130/download/1/testnet-alonzo-genesis.json\nwget https://hydra.iohk.io/build/7654130/download/1/testnet-topology.json\n")))),(0,o.kt)("h2",{id:"download-database-snapshot"},"Download Database snapshot"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://armada-alliance.com/stake-pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"},"OTG pool")," for providing an up to date  snapshot of the Cardano blockchain to help speed up sync times for a node dramatically.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cd $NODE_HOME && rm -rf db\nwget -r -np -nH -R "index.html*" -e robots=off https://$NODE_CONFIG.adamantium.online/db/\n')),(0,o.kt)("h2",{id:"restart-the-cardano-node"},"Restart the Cardano Node"),(0,o.kt)("p",null,"Now we just need to restart our cardano-node service if you are using our ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," use this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service start\n")),(0,o.kt)("p",null,"Wait a few seconds or so then check the status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\n")))}m.isMDXComponent=!0}}]);