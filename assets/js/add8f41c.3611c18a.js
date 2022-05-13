"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7784],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),o="tabItem_OmH5";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),o=a(2389),i=a(7392),l=a(7094),s=a(2466),c=a(6010),d="tabList_uSqn",u="tabItem_LplD";function m(e){var t,a,o,m=e.lazy,p=e.block,h=e.defaultValue,k=e.values,g=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(w,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!w.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.U)(),T=b.tabGroupChoices,x=b.setTabGroupChoices,j=(0,r.useState)(y),C=j[0],_=j[1],A=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=T[g];null!=E&&E!==C&&w.some((function(e){return e.value===E}))&&_(E)}var O=function(e){var t=e.currentTarget,a=A.indexOf(t),n=w[a].value;n!==C&&(S(t),_(n),null!=g&&x(g,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=A.indexOf(e.currentTarget)+1;a=A[n]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;a=A[r]||A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,c.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},f)},w.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return A.push(e)},onKeyDown:I,onFocus:O,onClick:O},o,{className:(0,c.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),m?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},2443:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(9877),l=a(2360),s=["components"],c={title:"Cardano Native Asset (NFT)",description:"Make NFT's or Native Assets on Cardano"},d="Cardano Native Asset (NFT) \ud83d\udcb0",u={unversionedId:"cardano-developer-guides/nft-native-assets",id:"cardano-developer-guides/nft-native-assets",title:"Cardano Native Asset (NFT)",description:"Make NFT's or Native Assets on Cardano",source:"@site/docs/cardano-developer-guides/nft-native-assets.mdx",sourceDirName:"cardano-developer-guides",slug:"/cardano-developer-guides/nft-native-assets",permalink:"/docs/cardano-developer-guides/nft-native-assets",draft:!1,editUrl:"https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/docs/cardano-developer-guides/nft-native-assets.mdx",tags:[],version:"current",frontMatter:{title:"Cardano Native Asset (NFT)",description:"Make NFT's or Native Assets on Cardano"},sidebar:"tutorialSidebar",previous:{title:"Other Cardano Guides",permalink:"/docs/cardano-developer-guides/"},next:{title:"Cardano Submit Transaction API Tutorial \ud83d\udce6",permalink:"/docs/cardano-developer-guides/cardano-submit-tx-api-tutorial"}},m={},p=[{value:"Who is this guide for?",id:"who-is-this-guide-for",level:2},{value:"Benefits of NFT&#39;s on Cardano",id:"benefits-of-nfts-on-cardano",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Verify everything is set up properly on our machine \u2699\ufe0f",id:"verify-everything-is-set-up-properly-on-our-machine-\ufe0f",level:3},{value:"Verify our node.js version is correct and is on v14.16.1",id:"verify-our-nodejs-version-is-correct-and-is-on-v14161",level:4},{value:"Video Walk-through:",id:"video-walk-through",level:4},{value:"Create our project directory and initial setup",id:"create-our-project-directory-and-initial-setup",level:2},{value:"Next, we make our src folder/directory and then create the Cardano client.",id:"next-we-make-our-src-folderdirectory-and-then-create-the-cardano-client",level:3},{value:"Video Walk-through",id:"video-walk-through-1",level:4},{value:"Create a local wallet",id:"create-a-local-wallet",level:2},{value:"Verify balance wallet balance is Zero, then we fund the wallet",id:"verify-balance-wallet-balance-is-zero-then-we-fund-the-wallet",level:4},{value:"Video Walk-through",id:"video-walk-through-2",level:4},{value:"Mint our Native-Asset/NFT on Cardano",id:"mint-our-native-assetnft-on-cardano",level:2},{value:"For reference:",id:"for-reference",level:4},{value:"Create our mint-asset.js script",id:"create-our-mint-assetjs-script",level:3},{value:"Sending your NFT back to Daedulus or Yoroi wallet",id:"sending-your-nft-back-to-daedulus-or-yoroi-wallet",level:2},{value:"Final Steps to view your NFT",id:"final-steps-to-view-your-nft",level:3},{value:"Video Walk-through",id:"video-walk-through-3",level:3}],h={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cardano-native-asset-nft-"},"Cardano Native Asset (NFT) \ud83d\udcb0"),(0,o.kt)("h2",{id:"who-is-this-guide-for"},"Who is this guide for?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For people who want to make NFT's or Native Assets on Cardano"),(0,o.kt)("li",{parentName:"ul"},"For people who know about Cardano")),(0,o.kt)("h2",{id:"benefits-of-nfts-on-cardano"},"Benefits of NFT's on Cardano"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low transaction fees"),(0,o.kt)("li",{parentName:"ul"},"Native on the blockchain")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We made this tutorial for use with ",(0,o.kt)("strong",{parentName:"p"},"Raspberry-Pi-ARM")," machines running on ",(0,o.kt)("strong",{parentName:"p"},"Linux OS")," so make sure to download the ",(0,o.kt)("strong",{parentName:"p"},"correct")," node.js for your ",(0,o.kt)("strong",{parentName:"p"},"local machine/CPU and OS"),". Currently, the Cardano-node and Cardano-cli are meant to be built from source on Linux machines. Any other OS will have its own build complexities, and we do not cover them in any of our tutorials as of right now. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cardano.org/projects/cardano-node/en/latest/getting-started/install.html"},"How to build Cardano Node from source")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using a Raspberry Pi machine ",(0,o.kt)("a",{parentName:"p",href:"https://docs.armada-alliance.com/learn/beginner-guide-1/raspi-node"},"here")," is an easy-to-follow tutorial we made to get a Cardano Relay Node running."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cardano-node / cardano-cli set up on local machine"),(0,o.kt)("li",{parentName:"ul"},"Make sure you have a Cardano node running and fully synced to the database"),(0,o.kt)("li",{parentName:"ul"},"Make sure node.js installed")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"#Copy/Paste this into your terminal if node.js is not installed\ncurl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -\nsudo apt-get install -y nodejs\n")),(0,o.kt)("h3",{id:"verify-everything-is-set-up-properly-on-our-machine-\ufe0f"},"Verify everything is set up properly on our machine \u2699\ufe0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"#Copy/paste into terminal window\ncardano-cli version; cardano-node version\n")),(0,o.kt)("p",null,"Your output should look like this \ud83d\udc47"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli 1.34.1 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\ncardano-node 1.34.1 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n")),(0,o.kt)("h4",{id:"verify-our-nodejs-version-is-correct-and-is-on-v14161"},"Verify our node.js version is correct and is on v14.16.1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"#Copy/paste into terminal window\nnode -v\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"v14.19.0\n")),(0,o.kt)("h4",{id:"video-walk-through"},"Video Walk-through:"),(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/oP3jZyPxB-I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"create-our-project-directory-and-initial-setup"},"Create our project directory and initial setup"),(0,o.kt)("p",null,"Make sure our ",(0,o.kt)("inlineCode",{parentName:"p"},"$NODE_HOME")," environment variable exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# check for $NODE_HOME\necho $NODE_HOME\n")),(0,o.kt)("p",null,"If the above command didn't return anything, you need to set the",(0,o.kt)("inlineCode",{parentName:"p"},"$NODE_HOME"),"bash environment variable or use a static path for the Cardano node's socket location in 'db' C in your Cardano node directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_Terminal"',title:'">_Terminal"'},'export NODE_HOME="/home/ada/pi-pool"\n# Change this to where cardano-node creates socket\nexport CARDANO_NODE_SOCKET_PATH="$NODE_HOME/db/socket"\n')),(0,o.kt)("p",null,"Now let's make our projects directory then create our ",(0,o.kt)("span",{style:{color:"blue"}},"package.json")," file and install the ",(0,o.kt)("span",{style:{color:"blue"}},"cardanocli-js")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir cardano-minter\ncd cardano-minter\nnpm init -y #creates package.json)\nnpm install cardanocli-js --save\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Copy the Cardano node genesis latest build number from the IOHK hydra website"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hydra.iohk.io/job/Cardano/cardano-node/cardano-deployment/latest-finished/download/1/index.html"},"https://hydra.iohk.io/job/Cardano/cardano-node/cardano-deployment/latest-finished/download/1/index.html")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Create a bash shell script to Download the latest Genesis config file needed"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano fetch-config.sh\n")),(0,o.kt)(i.Z,{groupId:"nodeConfig",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"testnet",label:"TESTNET",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"echo export NODE_BUILD_NUM=$(curl https://hydra.iohk.io/job/Cardano/iohk-nix/cardano-deployment/latest-finished/download/1/index.html | grep -e \"build\" | sed 's/.*build\\/\\([0-9]*\\)\\/download.*/\\1/g') >> $HOME/.bashrc\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/testnet-shelley-genesis.json\n"))),(0,o.kt)(l.Z,{value:"mainnet",label:"MAINNET",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"echo export NODE_BUILD_NUM=$(curl https://hydra.iohk.io/job/Cardano/iohk-nix/cardano-deployment/latest-finished/download/1/index.html | grep -e \"build\" | sed 's/.*build\\/\\([0-9]*\\)\\/download.*/\\1/g') >> $HOME/.bashrc\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/mainnet-shelley-genesis.json\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now we need to give permissions to our new script to execute then we will run our script and download the genesis files.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo chmod +x fetch-config.sh\n./fetch-config.sh\n")),(0,o.kt)("h3",{id:"next-we-make-our-src-folderdirectory-and-then-create-the-cardano-client"},"Next, we make our src folder/directory and then create the Cardano client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir src\ncd src\nnano cardano.js\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using testnet make sure you have the correct testnet-magic version number. You can find the current testnet version ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.iohk.io/build/7926804/download/1/testnet-shelley-genesis.json"},"here")," or simply look in your ",(0,o.kt)("span",{style:{color:"blue"}},"testnet-shelley-genesis.json")," file in your cardano node directory."))),(0,o.kt)(i.Z,{groupId:"nodeConfig",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"testnet",label:"TESTNET",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/cardano.js"',title:'"src/cardano.js"'},'const CardanocliJs = require("cardanocli-js");\nconst os = require("os");\nconst path = require("path");\n\nconst dir = path.join(os.homedir(), "cardano-minter");\nconst shelleyPath = path.join(\n  os.homedir(),\n  "pi-pool/files",\n  "testnet-shelley-genesis.json"\n);\n\nconst cardanocliJs = new CardanocliJs({\n//   era: "mary",\n  network: \'testnet-magic 1097911063\',\n  dir,\n  shelleyGenesisPath: shelleyPath,\n});\n\nmodule.exports = cardanocliJs\n'))),(0,o.kt)(l.Z,{value:"mainnet",label:"MAINNET",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/cardano.js"',title:'"src/cardano.js"'},'const CardanocliJs = require("cardanocli-js");\nconst os = require("os");\nconst path = require("path");\n\nconst dir = path.join(os.homedir(), "cardano-minter");\nconst shelleyPath = path.join(\n  os.homedir(),\n  "pi-pool/files",\n  "mainnet-shelley-genesis.json"\n);\n\nconst cardanocliJs = new CardanocliJs({\n//   era: "mary",\n  network: \'mainnet\',\n  dir,\n  shelleyGenesisPath: shelleyPath,\n});\n\nmodule.exports = cardanocliJs\n')))),(0,o.kt)("h4",{id:"video-walk-through-1"},"Video Walk-through"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"createproject",label:"1. Create Project",default:!0,mdxType:"TabItem"},(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/Xkx9vdibbq0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)(l.Z,{value:"genesisfile",label:"2. Get Cardano genisis files",mdxType:"TabItem"},(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/X5cRGA0qyQE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)(l.Z,{value:"cardanojs",label:"3. Setup Cardano client",mdxType:"TabItem"},(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/-fnaF3FWL3k",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h2",{id:"create-a-local-wallet"},"Create a local wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano create-wallet.js\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/create-wallet.js"',title:'"src/create-wallet.js"'},'const cardano = require("./cardano");\n\nconst createWallet = (account) => {\n  cardano.addressKeyGen(account);\n  cardano.stakeAddressKeyGen(account);\n  cardano.stakeAddressBuild(account);\n  cardano.addressBuild(account);\n  return cardano.wallet(account);\n};\n\ncreateWallet("ADAPI");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ..\nnode src/create-wallet.js\n")),(0,o.kt)("h4",{id:"verify-balance-wallet-balance-is-zero-then-we-fund-the-wallet"},"Verify balance wallet balance is Zero, then we fund the wallet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, we need to create a get-balance.js script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd src\nnano get-balance.js\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/get-balance.js"',title:'"src/get-balance.js"'},'// create get-balance.js\nconst cardano = require("./cardano");\n\nconst sender = cardano.wallet("ADAPI");\n\nconsole.log(sender.balance());\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now, Check the balance of our wallet.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ..\nnode src/get-balance.js\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We can go ahead and send some funds (ADA) into our wallet we created, wait a few minutes, and then check the balance again to make sure the transaction was successful.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using testnet you must get your tADA from the testnet faucet ",(0,o.kt)("a",{parentName:"p",href:"https://developers.cardano.org/en/testnets/cardano/tools/faucet/"},"here"),"."))),(0,o.kt)("h4",{id:"video-walk-through-2"},"Video Walk-through"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Create local wallet",label:"Create local wallet",default:!0,mdxType:"TabItem"},(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/a8uWUc0O3DE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)(l.Z,{value:"Send ADA to wallet",label:"Send ADA to wallet",mdxType:"TabItem"},(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/Mm1ZOciiNaE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h2",{id:"mint-our-native-assetnft-on-cardano"},"Mint our Native-Asset/NFT on Cardano"),(0,o.kt)("p",null,'Before we proceed to mint our Native Asset we must have a few things taken care of. We need to first get our "asset" onto our ',(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/#install"},"IPFS")," node and generate the IPFS link. If you do not know about IPFS or what it actually does we recommend having a read through the documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.io"},"here")," or watching this ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5Uj6uR3fp-U"},"video"),"."),(0,o.kt)("p",null,"Since we are using an image file to be our asset we should upload a smaller thumbnail-sized version of our image (ideally less than 1MB). This will be used on sites like ",(0,o.kt)("a",{parentName:"p",href:"https://pool.pm"},"pool.pm")," to display our assets nicely in our wallets. We then upload the full-size image as our source image."),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download ",(0,o.kt)("a",{parentName:"li",href:"https://ipfs.io/#install"},"IPFS")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Upload your asset's files to IPFS"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Get our image thumbnail IPFS link"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Get the src IPFS link")),(0,o.kt)("h4",{id:"for-reference"},"For reference:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"image (thumbnail version) - ipfs://QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"src (full-size version) - ipfs://Qmaou5UzxPmPKVVTM9GzXPrDufP55EDZCtQmpy3T64ab9N"))),(0,o.kt)("h3",{id:"create-our-mint-assetjs-script"},"Create our mint-asset.js script"),(0,o.kt)("p",null,"This script has three main components:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Generate policy id")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Define your metadata")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Create mint transaction"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano mint-asset.js\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/mint-asset.js"',title:'"src/mint-asset.js"'},'const cardano = require("./cardano")\n\n// 1. Get the wallet\n\nconst wallet = cardano.wallet("ADAPI")\n\n// 2. Define mint script\n\nconst mintScript = {\n    keyHash: cardano.addressKeyHash(wallet.name),\n    type: "sig"\n}\n\n// 3. Create POLICY_ID\n\nconst POLICY_ID = cardano.transactionPolicyid(mintScript)\n\n// 4. Define ASSET_NAME\n\nconst ASSET_NAME = "TimeWarpBerry"\n\n// Convert Asset ASCII name to HEX\n\nconst ASSET_NAME_HEX = ASSET_NAME.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("");\n\n\n// 5. Create ASSET_ID\n\nconst ASSET_ID = POLICY_ID + "." + ASSET_NAME_HEX\n\n// 6. Define metadata\n\nconst metadata = {\n    721: {\n        [POLICY_ID]: {\n            [ASSET_NAME]: {\n                name: ASSET_NAME,\n                image: "ipfs://QmUxRuzTi3UZS33rfqXzbD4Heut7zwtGUhuD7qSv7Qt584",\n                description: "Time Warp Berry NFT",\n                type: "image/png",\n                src: "ipfs://QmUxRuzTi3UZS33rfqXzbD4Heut7zwtGUhuD7qSv7Qt584",\n                // other properties of your choice\n                authors: ["PIADA", "SBLYR"]\n            }\n        }\n    }\n}\n\n// 7. Define transaction\n\nconst tx = {\n    txIn: wallet.balance().utxo,\n    txOut: [\n        {\n            address: wallet.paymentAddr,\n            value: { ...wallet.balance().value, [ASSET_ID]: 1 }\n        }\n    ],\n    mint: [\n        { action: "mint", quantity: 1, asset: ASSET_ID, script: mintScript },\n      ],\n    metadata,\n    witnessCount: 2\n}\n\n\n\nif(Object.keys(tx.txOut[0].value).includes("undefined")|| Object.keys(tx.txIn[0].value.includes("undefinded"))){\n    delete tx.txOut[0].value.undefined\n    delete tx.txIn[0].value.undefined\n}\n\n// 8. Build transaction\n\nconst buildTransaction = (tx) => {\n\n    const raw = cardano.transactionBuildRaw(tx)\n    const fee = cardano.transactionCalculateMinFee({\n        ...tx,\n        txBody: raw\n    })\n\n    tx.txOut[0].value.lovelace -= fee\n\n    return cardano.transactionBuildRaw({ ...tx, fee })\n}\n\nconsole.log(tx)\nconst raw = buildTransaction(tx)\n\n// 9. Sign transaction\n\nconst signTransaction = (wallet, tx) => {\n\n    return cardano.transactionSign({\n        signingKeys: [wallet.payment.skey, wallet.payment.skey ],\n        txBody: tx\n    })\n}\n\nconst signed = signTransaction(wallet, raw)\n\n// 10. Submit transaction\n\nconst txHash = cardano.transactionSubmit(signed)\n\nconsole.log(txHash)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Run the minting script, then wait a few moments to check the balance in our wallet"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ..\nnode src/mint-asset.js\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Video Walk-through:")),(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/qTzLgMyJC7s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"sending-your-nft-back-to-daedulus-or-yoroi-wallet"},"Sending your NFT back to Daedulus or Yoroi wallet"),(0,o.kt)("p",null,"Now we must create a new script to send our newly minted NFT to a wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd cardano-minter/src\nnano send-back-asset-to-wallet.js\n")),(0,o.kt)("p",null,"There are few main parts we have to this script in order to send the asset:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the wallet"),(0,o.kt)("li",{parentName:"ol"},"Define the transaction"),(0,o.kt)("li",{parentName:"ol"},"Build the transaction"),(0,o.kt)("li",{parentName:"ol"},"Calculate the fee"),(0,o.kt)("li",{parentName:"ol"},"Pay the fee by subtracting it from the sender's utxo"),(0,o.kt)("li",{parentName:"ol"},"Build the final transaction"),(0,o.kt)("li",{parentName:"ol"},"Sign the transaction"),(0,o.kt)("li",{parentName:"ol"},"Submit the transaction")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="cardano-minter/src/send-back-asset-to-wallet.js"',title:'"cardano-minter/src/send-back-asset-to-wallet.js"'},'const cardano = require("./cardano");\n\n// 1. get the wallet\n// 2. define the transaction\n// 3. build the transaction\n// 4. calculate the fee\n// 5. pay the fee by subtracting it from the sender utxo\n// 6. build the final transaction\n// 7. sign the transaction\n// 8. submit the transaction\n\nconst sender = cardano.wallet("ADAPI");\n\nconsole.log(\n  "Balance of Sender wallet: " +\n    cardano.toAda(sender.balance().amount.lovelace) +\n    " ADA"\n);\n\nconst receiver =\n  "addr_test1qqqydvg5wzd6twvernsjcdjd9akmygyqp7gky7zpm0hrmq3ccwlnumzzuum6k6ja2k47g5dv2p4kwt753mpjjzx8fsmsq2aj0p";\n\nconst txInfo = {\n  txIn: cardano.queryUtxo(sender.paymentAddr),\n  txOut: [\n    {\n      address: sender.paymentAddr,\n      amount: {\n        lovelace: sender.balance().amount.lovelace - cardano.toLovelace(1.5),\n      },\n    },\n    {\n      address: receiver,\n      amount: {\n        lovelace: cardano.toLovelace(1.5),\n       "9e57c3a4aa769063ab4963e3e2fc18aeafb6808b3adbc3f1670a9c00.54696d65576172704265727279": 1,\n      },\n    },\n  ],\n};\n\nconst raw = cardano.transactionBuildRaw(txInfo);\n\nconst fee = cardano.transactionCalculateMinFee({\n  ...txInfo,\n  txBody: raw,\n  witnessCount: 1,\n});\n\n//pay the fee by subtracting it from the sender utxo\ntxInfo.txOut[0].amount.lovelace -= fee;\n\n//create final transaction\nconst tx = cardano.transactionBuildRaw({ ...txInfo, fee });\n\n//sign the transaction\nconst txSigned = cardano.transactionSign({\n  txBody: tx,\n  signingKeys: [sender.payment.skey],\n});\n\n//subm transaction\nconst txHash = cardano.transactionSubmit(txSigned);\nconsole.log("TxHash: " + txHash);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ..\nnode src/send-back-asset-to-wallet.js\n")),(0,o.kt)("h3",{id:"final-steps-to-view-your-nft"},"Final Steps to view your NFT"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"View your nft in your wallet"),(0,o.kt)("li",{parentName:"ol"},"View your asset on cardanoassets.com"),(0,o.kt)("li",{parentName:"ol"},"View your asset on pool.pm (see the actual picture)"),(0,o.kt)("li",{parentName:"ol"},"Show the original minting metadata"),(0,o.kt)("li",{parentName:"ol"},"Open the src and image ipfs links in your browser to prove that it worked")),(0,o.kt)("h3",{id:"video-walk-through-3"},"Video Walk-through"),(0,o.kt)("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/awxVkFbWoKM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"If you liked this tutorial and want to see more like it please consider staking your ADA with any of our Alliance's")," ",(0,o.kt)("a",{parentName:"p",href:"https://armada-alliance.com/stake-pools"},(0,o.kt)("strong",{parentName:"a"},"Stake Pools")),(0,o.kt)("strong",{parentName:"p"},", or giving a one-time donation to our Alliance")," ",(0,o.kt)("a",{parentName:"p",href:"https://cointr.ee/armada-alliance"},(0,o.kt)("strong",{parentName:"a"},"https://cointr.ee/armada-alliance")),(0,o.kt)("strong",{parentName:"p"},".")))))}k.isMDXComponent=!0}}]);