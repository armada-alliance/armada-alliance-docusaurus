"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[3494],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),o=t(6010),r="tabItem_OmH5";function s(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),o=t(7294),r=t(2389),s=t(7392),i=t(7094),l=t(2466),c=t(6010),p="tabList_uSqn",d="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,m=e.block,h=e.defaultValue,k=e.values,g=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,s.l)(b,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(n=null!=h?h:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),T=w.tabGroupChoices,E=w.setTabGroupChoices,O=(0,o.useState)(y),C=O[0],$=O[1],S=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=T[g];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&$(j)}var P=function(e){var n=e.currentTarget,t=S.indexOf(n),a=b[t].value;a!==C&&(_(n),$(a),null!=g&&E(g,a))},H=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;t=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;t=S[o]||S[S.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return S.push(e)},onKeyDown:H,onFocus:P,onClick:P},r,{className:(0,c.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),u?(0,o.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},5854:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),s=t(9877),i=t(2360),l=["components"],c={description:"How to get your Stake Pools Slot Assignments for next Epoch"},p="CNCLI Leader Logs \ud83d\udcd1",d={unversionedId:"stake-pool-guides/leader-logs",id:"stake-pool-guides/leader-logs",title:"CNCLI Leader Logs \ud83d\udcd1",description:"How to get your Stake Pools Slot Assignments for next Epoch",source:"@site/docs/stake-pool-guides/leader-logs.mdx",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/leader-logs",permalink:"/docs/stake-pool-guides/leader-logs",draft:!1,editUrl:"https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/leader-logs.mdx",tags:[],version:"current",frontMatter:{description:"How to get your Stake Pools Slot Assignments for next Epoch"},sidebar:"tutorialSidebar",previous:{title:"Static Build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/static-build"},next:{title:"Wireguard Guide",permalink:"/docs/stake-pool-guides/wireguard-guide"}},u={},m=[{value:"Build CNCLI (thanks to @AndrewWestberg)",id:"build-cncli-thanks-to-andrewwestberg",level:2},{value:"Prepare Rust Environment and install Rustup",id:"prepare-rust-environment-and-install-rustup",level:3},{value:"Build cncli",id:"build-cncli",level:3},{value:"Run cncli sync and deploy it as a service",id:"run-cncli-sync-and-deploy-it-as-a-service",level:2},{value:"Create the leaderlog-stake-snapshot-v4.sh script (thanks to @sayshar)",id:"create-the-leaderlog-stake-snapshot-v4sh-script-thanks-to-sayshar",level:3},{value:"Run leaderlog script",id:"run-leaderlog-script",level:3}],h={toc:m};function k(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cncli-leader-logs-"},"CNCLI Leader Logs \ud83d\udcd1"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CNCLI method still works, but before you start building, take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/asnakep/ScheduledBlocks"},"this method")," by ",(0,r.kt)("a",{parentName:"p",href:"https://www.adasnakepool.com/"},"ADA Snake Pool"),"."),(0,r.kt)("p",{parentName:"div"},'"Lightweight and Portable Scheduled Blocks Checker for Next, Current and Previous Epochs. No cardano-node Required, data is taken from blockfrost.io and armada-alliance.com."'))),(0,r.kt)("h2",{id:"build-cncli-thanks-to-andrewwestberg"},"Build CNCLI ","(","thanks to ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/AndrewWestberg"},"@AndrewWestberg"),")"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Running it on your block-producing/Core node is the convenient way, but to save resources you may build and run cncli on another ","(","i.e. your monitoring",")"," device. Therefore you will need to get the stake-snapshot.json from one of your running nodes and copy the genesis files and the vrf.skey from your Core to the particular device."))),(0,r.kt)("h3",{id:"prepare-rust-environment-and-install-rustup"},"Prepare Rust Environment and install Rustup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir -p $HOME/.cargo/bin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,r.kt)("p",null,"Choose Option 1 ","(","default",")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"source $HOME/.cargo/env\n\nrustup install stable\n\nrustup default stable\n\nrustup update\n\nrustup component add clippy rustfmt\n")),(0,r.kt)("p",null,"Install any necessary packages. Your system may already have most to all of these."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update -y && sudo apt install -y automake \\ \nbuild-essential pkg-config libffi-dev libgmp-dev \\ \nlibssl-dev libtinfo-dev libsystemd-dev zlib1g-dev \\ \nmake g++ tmux git jq wget libncursesw5 libtool autoconf\n"))),(0,r.kt)(i.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update -y\n")))),(0,r.kt)("h3",{id:"build-cncli"},"Build cncli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# If you don't have a $HOME/git folder you can create one using:\n# mkdir $HOME/git\n\ncd $HOME/git\n\ngit clone --recurse-submodules https://github.com/AndrewWestberg/cncli\n\ncd cncli\n")),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AndrewWestberg/cncli"},"https://github.com/AndrewWestberg/cncli")," for the latest tag name and adjust the command below. For the time of writing this, it's v3.1.4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"git checkout <latest_tag_name>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# This will take some time on a Raspberry Pi - be patient, it'll git r dun.\n# Grab some coffee, check the strawberries, whatever.\n\ncargo install --path . --force\n")),(0,r.kt)("p",null,"Check if the installation was successful and locate ",(0,r.kt)("inlineCode",{parentName:"p"},"cncli")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cncli --version\n\ncommand -v cncli\n\necho $PATH\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"command -v")," should show you where the ",(0,r.kt)("inlineCode",{parentName:"p"},"cncli")," executable currently lives, ",(0,r.kt)("inlineCode",{parentName:"p"},".cargo/bin"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"echo")," command will show what's on your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,r.kt)("p",null,"You should have ",(0,r.kt)("inlineCode",{parentName:"p"},".local/bin")," on your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", but in case you don't ","(","Core should have it",")",", do it now and add it to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Monitor"',title:'"Monitor"'},'mkdir -p $HOME/.local/bin\necho PATH="$HOME/.local/bin:$PATH" >> $HOME/.bashrc\nsource $HOME/.bashrc\n')),(0,r.kt)("p",null,"Move ",(0,r.kt)("inlineCode",{parentName:"p"},"cncli")," from it's current location to ",(0,r.kt)("inlineCode",{parentName:"p"},".local/bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv <path/to>/cncli $HOME/.local/bin/cncli\n")),(0,r.kt)("h2",{id:"run-cncli-sync-and-deploy-it-as-a-service"},"Run cncli sync and deploy it as a service"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CNCLI sync creates an sqlite3 database ","(","cncli.db",")",", and needs to be connected to your running core-node. The guide assumes you have followed the armada-alliance guide so far and use the same folder structure."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir -p $HOME/pi-pool/cncli\n\nsudo nano /etc/systemd/system/cncli-sync.service\n")),(0,r.kt)("p",null,"Paste the following, adjust ip and port, save and exit."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"[Unit]\nDescription=CNCLI Sync\nAfter=multi-user.target\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nLimitNOFILE=131072\nExecStart=/home/ada/.local/bin/cncli sync --host <your_core_ip> --port <your_core_port> --db /home/ada/pi-pool/cncli/cncli.db\nKillSignal=SIGINT\nSuccessExitStatus=143\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=cncli-sync\n\n[Install]\nWantedBy=multi-user.target\n"))),(0,r.kt)(i.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"[Unit]\nDescription=CNCLI Sync\nAfter=multi-user.target\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nLimitNOFILE=131072\nExecStart=/home/ada/.local/bin/cncli sync --host 127.0.0.1 --port <cardano_node_port> --db $HOME/pi-pool/cncli/cncli.db\nKillSignal=SIGINT\nSuccessExitStatus=143\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=cncli-sync\n\n[Install]\nWantedBy=multi-user.target\n")))),(0,r.kt)("p",null,"Enable the service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo systemctl daemon-reload\n\nsudo systemctl enable cncli-sync.service\n\nsudo systemctl start cncli-sync.service\n")),(0,r.kt)("p",null,"Make the cncli.db writable ","(","needed for the following script",")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/pi-pool/cncli\n\nsudo chmod a+w cncli.db\n")),(0,r.kt)("h3",{id:"create-the-leaderlog-stake-snapshot-v4sh-script-thanks-to-sayshar"},"Create the leaderlog-stake-snapshot-v4.sh script ","(","thanks to ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/sayshar"},"@sayshar"),")"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"    mkdir -p $HOME/pi-pool/scripts\n    sudo nano $HOME/pi-pool/scripts/leaderlog-stake-snapshot-v4.sh\n"))),(0,r.kt)(i.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"    sudo nano $HOME/pi-pool/scripts/leaderlog-stake-snapshot-v4.sh\n")))),(0,r.kt)("p",null,"Paste the following, adjust parameters, save and exit."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'#!/bin/bash\n\n##############################################################\n###################   To be filled  ##########################\n##############################################################\n\nPOOLID="type pool ID"\n\nVRFSKEY=$HOME/pi-pool/cncli/vrf.skey\n\nBYRON=$HOME/pi-pool/cncli/mainnet-byron-genesis.json\n\nSHELLEY=$HOME/pi-pool/cncli/mainnet-shelley-genesis.json\n\nCNCLIDB=$HOME/pi-pool/cncli/cncli.db #Ensure you point to the correct folder after running cncli sync.\n\nTZ="America/Los_Angeles" #https://en.wikipedia.org/wiki/List_of_tz_database_time_zones [default: America/Los_Angeles].\n\nEPOCH="current" #prev or next for last and next epoch respectively. Default is current.\n\n##############################################################\n\n\nif [ "$EPOCH" = "current" ] || [ "$EPOCH" = "prev" ] || [ "$EPOCH" = "next" ]; then\n    if [ "$EPOCH" = "current" ]; then\n               echo ""\n                echo "Please be patient. Generating leaderlogs for the current epoch."\n            echo ""\n        POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeSet/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeSet/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "next" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the next epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeMark/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeMark/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "prev" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the previous epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeGo/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeGo/ {print $NF+0}\'`\n    fi\n    cncli leaderlog --pool-id $POOLID --pool-vrf-skey $VRFSKEY --byron-genesis $BYRON --shelley-genesis $SHELLEY --pool-stake $POOLSTAKE --active-stake $ACTIVESTAKE --db $CNCLIDB --tz $TZ --ledger-set $EPOCH > slot.json\nelse\n        echo ""\n          echo "Invalid EPOCH entry"\n        echo ""\nfi\n\nif [ -f ./slot.json ]; then\n    epoch=`cat slot.json | awk \'$1 ~ /"epoch":/ {print $NF+0}\'`\n    mv slot.json slot_$epoch.json\n    echo ""\n    echo "Previewing leaderlogs slots for epoch $epoch"\n    echo ""\n    cat slot_$epoch.json\n    echo ""    \n    if [ -f ./slot_.json ]; then\n        rm slot_.json\n    fi\n    else\n    echo ""\n    echo "Leaderlogs could not be generated. Please check parameters and try again. Also ensure system has adequate RAM if failure repeats."\n    echo ""\nfi\n'))),(0,r.kt)(i.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'#!/bin/bash\n\n##############################################################\n###################   To be filled  ##########################\n##############################################################\n\nPOOLID="type pool ID"\n\nVRFSKEY=$HOME/pi-pool/vrf.skey\n\nBYRON=$HOME/pi-pool/files/mainnet-byron-genesis.json\n\nSHELLEY=$HOME/pi-pool/files/mainnet-shelley-genesis.json\n\nCNCLIDB=$HOME/pi-pool/cncli/cncli.db #Ensure you point to the correct folder after running cncli sync.\n\nTZ="America/Los_Angeles" #https://en.wikipedia.org/wiki/List_of_tz_database_time_zones [default: America/Los_Angeles].\n\nEPOCH="current" #prev or next for last and next epoch respectively. Default is current.\n\n##############################################################\n\nif [ ! -f stake-snapshot.json ];then\n    cardano-cli query stake-snapshot --stake-pool-id $POOLID --mainnet > stake-snapshot.json\n    echo ""\n    cat stake-snapshot.json\n    echo ""\nelse\n    ANS="N"\n    echo ""\n    echo "The file stake-snapshot.json is detected. Would you like to recreate it? y/N"\n    echo ""\n    read ANS\nfi\n\nif [ $ANS = "y" ] || [ $ANS = "Y" ]; then\n    echo ""\n        echo "Generating new stake-snapshot.json."\n        echo ""\n        cardano-cli query stake-snapshot --stake-pool-id $POOLID --mainnet > stake-snapshot.json\n    echo ""\n    echo "Previewing stake-snapshot.json"\n    echo ""\n        cat stake-snapshot.json\n    echo ""\nelse\n        echo ""\n        echo "Previewing stake-snapshot.json"\n    echo ""\n    cat stake-snapshot.json\n    echo ""\nfi\n\nif [ "$EPOCH" = "current" ] || [ "$EPOCH" = "prev" ] || [ "$EPOCH" = "next" ]; then\n    if [ "$EPOCH" = "current" ]; then\n               echo ""\n                echo "Please be patient. Generating leaderlogs for the current epoch."\n            echo ""\n        POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeSet/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeSet/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "next" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the next epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeMark/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeMark/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "prev" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the previous epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeGo/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeGo/ {print $NF+0}\'`\n    fi\n    cncli leaderlog --pool-id $POOLID --pool-vrf-skey $VRFSKEY --byron-genesis $BYRON --shelley-genesis $SHELLEY --pool-stake $POOLSTAKE --active-stake $ACTIVESTAKE --db $CNCLIDB --tz $TZ --ledger-set $EPOCH > slot.json\nelse\n        echo ""\n          echo "Invalid EPOCH entry"\n        echo ""\nfi\n\nif [ -f ./slot.json ]; then\n    epoch=`cat slot.json | awk \'$1 ~ /"epoch":/ {print $NF+0}\'`\n    mv slot.json slot_$epoch.json\n    echo ""\n    echo "Previewing leaderlogs slots for epoch $epoch"\n    echo ""\n    cat slot_$epoch.json\n    echo ""    \n    if [ -f ./slot_.json ]; then\n        rm slot_.json\n    fi\n    else\n    echo ""\n    echo "Leaderlogs could not be generated. Please check parameters and try again. Also ensure system has adequate RAM if failure repeats."\n    echo ""\nfi\n')))),(0,r.kt)("p",null,"Make it executable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo chmod +x leaderlog-stake-snapshot-v4.sh\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'If you installed cncli on your Core continue with "Run leaderlog script", otherwise you have to do some more steps.'))),(0,r.kt)("p",null,"Run the following command on your Core. Make sure to add your pool id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli query stake-snapshot --stake-pool-id <your_pool_id> --mainnet > stake-snapshot.json\n")),(0,r.kt)("p",null,"Then copy ",(0,r.kt)("inlineCode",{parentName:"p"},"vrf.skey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet-byron-genesis.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet-shelley-genesis.json")," ",(0,r.kt)("inlineCode",{parentName:"p"},"stake-snapshot.json")," from your Core to your cncli device. ","(","via USB-stick, scp or rsync...",")"," Move them to the right directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Monitor"',title:'"Monitor"'},"mv /path/to/vrf.skey $HOME/pi-pool/cncli/vrf.skey\nmv /path/to/mainnet-byron-genesis.json $HOME/pi-pool/cncli/mainnet-byron-genesis.json\nmv /path/to/mainnet-shelley-genesis.json $HOME/pi-pool/cncli/mainnet-shelley-genesis.json\nmv /path/to/stake-snapshot.json $HOME/pi-pool/scripts/stake-snapshot.json\n")),(0,r.kt)("h3",{id:"run-leaderlog-script"},"Run leaderlog script"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every time you run the script you need a fresh stake-snapshot.json, except your stake didn't change for the last few epochs."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/pi-pool/scripts\n./leaderlog-stake-snapshot-v4.sh\n")),(0,r.kt)("p",null,"The schedule is saved to slot","_",(0,r.kt)("inlineCode",{parentName:"p"},"number-of-epoch"),".json."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The script calculates the schedule for the current epoch by default. You can run it for the next epoch 1.5 days before. ","(","Or at 70% into the current epoch.",")",' Just change the epoch parameter in the script from "current" to "next".'))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be careful to keep your block leader schedule private, as attackers could use this information to strategically attack your pool."))))}k.isMDXComponent=!0}}]);