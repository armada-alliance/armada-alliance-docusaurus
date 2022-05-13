"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4255],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={description:"Running a Cardano full node with a Docker image"},l="Cardano Node Docker Image for ARM64 devices \ud83d\udc33",d={unversionedId:"stake-pool-guides/docker-pool-guide",id:"stake-pool-guides/docker-pool-guide",title:"Cardano Node Docker Image for ARM64 devices \ud83d\udc33",description:"Running a Cardano full node with a Docker image",source:"@site/docs/stake-pool-guides/docker-pool-guide.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/docker-pool-guide",permalink:"/docs/stake-pool-guides/docker-pool-guide",draft:!1,editUrl:"https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/docker-pool-guide.md",tags:[],version:"current",frontMatter:{description:"Running a Cardano full node with a Docker image"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/stakepoolscripts"},next:{title:"Raspi-Node Guide \ud83c\udf53",permalink:"/docs/stake-pool-guides/Raspberry-pi-os"}},c={},m=[{value:"Why using docker image to run a Cardano node?",id:"why-using-docker-image-to-run-a-cardano-node",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Check the running status of the docker container",id:"check-the-running-status-of-the-docker-container",level:2},{value:"Stop/Restart/Delete the Docker Cardano node",id:"stoprestartdelete-the-docker-cardano-node",level:2},{value:"Monitor the Docker Cardano node with gLiveView",id:"monitor-the-docker-cardano-node-with-gliveview",level:2},{value:"Check the scheduled slots of the block production node",id:"check-the-scheduled-slots-of-the-block-production-node",level:2}],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cardano-node-docker-image-for-arm64-devices-"},"Cardano Node Docker Image for ARM64 devices \ud83d\udc33"),(0,r.kt)("p",null,"In this project you will find the files to build a docker image on Linux containing all the needed files to run a Cardano full node.\nThe docker image can run on any arm64 device (such as a RaspberryPi, Mac Mini M1, etc.). The node can be configured as a relay or block production node."),(0,r.kt)("h2",{id:"why-using-docker-image-to-run-a-cardano-node"},"Why using docker image to run a Cardano node?"),(0,r.kt)("p",null,"The elegant thing about a Cardano node deployed as a Docker image is that it can be installed seamlessly and launched out of the box.\nIf you ever decide to remove it, you only have to delete one file - the image. Another advantage is that the created image can run on any\noperating system where Docker is installed. Using Docker reduces the complexity and effort of setting up a Cardano node compared to the traditional way\n(for example, you don't have to deal with systemd settings)."),(0,r.kt)("h2",{id:"system-requirements"},"System requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU: ARM64 processor min 2 cores at 2GHz or faster."),(0,r.kt)("li",{parentName:"ul"},"Memory: 12GB of RAM."),(0,r.kt)("li",{parentName:"ul"},"Storage: 50 GB."),(0,r.kt)("li",{parentName:"ul"},"OS: Linux (recommended Ubuntu)"),(0,r.kt)("li",{parentName:"ul"},"Additional Software: Docker"),(0,r.kt)("li",{parentName:"ul"},"Broadband: 10 Mbps +")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you intend to use a Raspberry Pi 8GB RAM for the deployment of this docker image, please follow our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.armada-alliance.com/learn/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup"},"Server Setup guide")," first.\nThis guide describes how to optimize the Hardware to satisfy the above listed system requirements. "))),(0,r.kt)("h1",{id:"1install-docker"},"1.Install Docker"),(0,r.kt)("p",null,"The installation of Docker varies from operating system to operating system. For this reason, we share some helpful and good installation\nguide links for the different operating systems."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/speedwing/cardano-staking-pool-edu/blob/master/DOCKER.md"},"Install Docker on Linux (Ubuntu)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"Install Docker on MacOs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Install Docker on Windows"))),(0,r.kt)("h1",{id:"2-set-up-the-environment--download-files"},"2. Set-up the Environment & Download Files"),(0,r.kt)("p",null,"Create the repositories on your host system first. They will hold the files to build the docker image as well as the Cardano node configuration files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ${HOME}\nsudo mkdir Cardano-node-docker\ncd Cardano-node-docker\nsudo mkdir -p node/db && sudo mkdir -p node/files && sudo mkdir -p dockerfiles/files\n")),(0,r.kt)("p",null,"The files to build the docker images will be downloaded from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jterrier84/Cardano-node-docker"},"MINI1 pool GitHub")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd dockerfiles\nsudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/armada-cn-arm64.dockerfile\nsudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/build.sh\nsudo chmod +x build.sh\ncd files\nsudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/files/run.sh\nsudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/files/tx-submit-service\nsudo chmod +x run.sh\nsudo chmod +x tx-submit-service\ncd ${HOME}/Cardano-node-docker/node\nsudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/node/run-node.sh\nsudo chmod +x run-node.sh\n")),(0,r.kt)("p",null,"Download the latest official Cardano node configuration files from the IOHK repository and store them on our host system."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'For the sake of this tutorial we will download and set up the configuration files for the Cardano testnet. If you need the files for the mainnet\njust replace "testnet" with "mainnet" here below.'))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As the configuration files might require modifications over time, it is way more practical to have them stored on the host,\nrather than have them stored inside the Docker container. Our Cardano Docker node will have access to these files from the container. "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cd ${HOME}/Cardano-node-docker/node/files\nexport NODE_CONFIG="testnet"\nexport NODE_BUILD_NUM=$(curl https://hydra.iohk.io/job/Cardano/iohk-nix/cardano-deployment/latest-finished/download/1/index.html | grep -e "build" | sed \'s/.*build\\/\\([0-9]*\\)\\/download.*/\\1/g\') \nsudo wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-config.json\nsudo wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-byron-genesis.json\nsudo wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-shelley-genesis.json\nsudo wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-alonzo-genesis.json\nsudo wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-topology.json\nsudo wget -O tx-submit-mainnet-config.yaml https://raw.githubusercontent.com/input-output-hk/cardano-node/master/cardano-submit-api/config/tx-submit-mainnet-config.yaml\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The directory /files contains the downloaded Cardano node configuration files."),(0,r.kt)("p",{parentName:"div"},"The /db directory will host the Cardano blockchain once the Docker node is started. It is important that the blockchain data\nare stored on the host system and not inside the Docker container, otherwise the entire blockchain would be deleted every time\nthe Docker container is removed."))),(0,r.kt)("h1",{id:"3-build-the-cardano-node-docker-image"},"3. Build the Cardano node docker image"),(0,r.kt)("p",null,"At this point it's time to build the docker image. The image will include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"cardano-node & cardano-cli v1.34.1 - Cardano binaries to run the node (Download compiled binaries from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/armada-alliance/cardano-node-binaries"},"Armada Alliance GitHub"),") "),(0,r.kt)("li",{parentName:"ol"},"gLiveView - Monitoring tool for the Cardano node"),(0,r.kt)("li",{parentName:"ol"},"ScheduledBlocks - Tool to query the scheduled slots for a block production node. (Credits for this tool goes to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/asnakep/ScheduledBlocks"},"SNAKE POOL"),")"),(0,r.kt)("li",{parentName:"ol"},"Cardano Submit Transaction API - API to connect with a Cardano wallet (e.g. Nami) to send transactions via your own full node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ${HOME}/Cardano-node-docker/dockerfiles\nsudo ./build.sh\n")),(0,r.kt)("p",null,"The process might take some minutes."),(0,r.kt)("p",null,"Once the process is done, you can use the command to see the list of all Docker images on your host system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker images\n")),(0,r.kt)("p",null,"You should see your Cardano node docker image in the list, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"REPOSITORY              TAG            IMAGE ID       CREATED          SIZE\narmada/armada-cn        1.34.1         da4414775ce6   37 seconds ago   619MB\n<none>                  <none>         f3891eef21e4   3 minutes ago    1.09GB\n")),(0,r.kt)("p",null,'All we need is the "armada/armada-cn" image. You can delete the others in the list to free up space on your harddrive, e.g.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker rmi f3891eef21e4 \n")),(0,r.kt)("h1",{id:"4-start-node"},"4. Start node"),(0,r.kt)("p",null,"Let's first configure the run-node.sh script to match your host system environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ${HOME}/Cardano-node-docker/node\nsudo nano run-node.sh\n")),(0,r.kt)("p",null,"Edit the configuration section according to your setup."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are running the node as relay node, you can ignore the paramter CN_KEY_PATH."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Important: Change the directory paths CN_CONFIG_PATH and CN_DB_PATH to the corresponding locations on your host. "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'##Configuration for relay and block producing node\nCNIMAGENAME="armada/armada-cn"                                   ## Name of the Cardano docker image\nCNVERSION="1.34.1"                                               ## Version of the cardano-node. It must match with the version of the docker i>\nCNNETWORK="testnet"                                              ## Use "mainnet" if connecting node to the mainnet\nCNMODE="relay"                                                   ## Use "bp" if you configure the node as block production node\nCNPORT="3001"                                                    ## Define the port of the node\nCNPROMETHEUS_PORT="12799"                                        ## Define the port for the Prometheus metrics\nCN_CONFIG_PATH="/home/julienterrier/Cardano-node-docker/node/files" ## Path to the folder where the Cardano config files are stored on the host>\nCN_DB_PATH="/home/julienterrier/Cardano-node-docker/node/db"     ## Path to the folder where the Cardano database (blockchain) will be stored o>\nCN_RTS_OPTS="+RTS -N2 -I0.1 -Iw3600 -A64m -AL128M -n4m -F1.1 -H3500M -O3500M -RTS"      ## RTS optimization parameters\nCN_BF_ID=""                                                      ## Your blockfrost.io project ID (for ScheduledBlock script)\nCN_POOL_ID=""                                                    ## Your stake pool ID (for ScheduledBlock script)\nCN_POOL_TICKER=""                                                ## Your pool ticker (for ScheduledBlock script)\nCN_VRF_SKEY_PATH=""                                              ## Name of the vrf.skey file. It must be located in the same directory as CN_KEY_PATH (for ScheduledBlock script)\nCN_KEY_PATH=""                                                   ## Path to the folder where the OP certificate and keys are stored on the host system (for block production node only)\n')),(0,r.kt)("p",null,"After making the changes, save and close the file."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+o & ENTER & Ctrl+x")),(0,r.kt)("p",null,"You can now run the docker image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo ./run-node.sh\n")),(0,r.kt)("h2",{id:"check-the-running-status-of-the-docker-container"},"Check the running status of the docker container"),(0,r.kt)("p",null,"You can check the running status of the docker container at any time with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker ps -a\n")),(0,r.kt)("p",null,"If the docker node started successfully, you might see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'CONTAINER ID   IMAGE                     COMMAND                  CREATED          STATUS                    PORTS                                                                                      NAMES\nfed0cfbf7d86   armada/armada-cn:1.34.1   "bash title=">_ Terminal" -c /home/carda\u2026"   12 seconds ago   Up 10 seconds (healthy)   0.0.0.0:3001->3001/tcp, :::3001->3001/tcp, 0.0.0.0:12799->12798/tcp, :::12799->12798/tcp   cardano-node-testnet-1.34.1\n')),(0,r.kt)("p",null,"You can also check the logs of the running cardano-node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker logs -f {CONTAINER ID}\n")),(0,r.kt)("p",null,"To exit the logs press ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+c")),(0,r.kt)("h2",{id:"stoprestartdelete-the-docker-cardano-node"},"Stop/Restart/Delete the Docker Cardano node"),(0,r.kt)("p",null,"To stop the running Cardano node execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker stop {CONTAINER ID}\n")),(0,r.kt)("p",null,"A stopped container can be started again with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker start {CONTAINER ID}\n")),(0,r.kt)("p",null,"A stopped container can also be deleted. Once deleted, it can not be started with the command above again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker rm {CONTAINER ID}\n")),(0,r.kt)("p",null,"If you like to start the node again, after having removed the docker container, just run the run-node.sh script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo ${HOME}/Cardano-node-docker/node/run-node.sh\n")),(0,r.kt)("h2",{id:"monitor-the-docker-cardano-node-with-gliveview"},"Monitor the Docker Cardano node with gLiveView"),(0,r.kt)("p",null,"While the docker Cardano node is running, you can monitor its status with the tool gLiveView."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker exec -it {CONTAINER ID} /home/cardano/pi-pool/scripts/gLiveView.sh\n")),(0,r.kt)("h2",{id:"check-the-scheduled-slots-of-the-block-production-node"},"Check the scheduled slots of the block production node"),(0,r.kt)("p",null,"Our Docker image contains the ScheduledBlocks python script from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/asnakep/ScheduledBlocks"},"SNAKE pool"),". This tool allows to\nquery the blockchain for the scheduled slots for your block production node."),(0,r.kt)("p",null,"Before using the script, make sure that the right configurations are set in our shell script run-node.sh. Set the following variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'CN_BF_ID="mainnetd9PBzlK7KB7wWko8NTKUwJIsHfvEKNaV"               ## Your blockfrost.io project ID (for ScheduledBlock script)\nCN_POOL_ID="c3e7025ebae638e994c149e5703e82619b31897c9e1d64fc684f81c2"   ## Your stake pool ID (for ScheduledBlock script)\nCN_POOL_TICKER="MINI1"                                           ## Your pool ticker (for ScheduledBlock script)\nCN_VRF_SKEY_PATH="scheduledblocks.vrf.skey"                      ## Name of the vrf.skey file. It must be located in the same directory as CN_KEY_PATH (for ScheduledBlock script)\nCN_KEY_PATH="/home/julienterrier/Cardano-node-docker/node/files/.keys"  ## Path to the folder where the OP certificate and keys are stored on the host system\n')),(0,r.kt)("p",null,"Start the ScheduledBlocks.py script and follow the instructions on the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"docker exec -it {CONTAINER ID} python3 /home/cardano/pi-pool/scripts/ScheduledBlocks/ScheduledBlocks.py\n")),(0,r.kt)("h1",{id:"run-node-in-p2p-peer-to-peer-mode"},"Run node in P2P (peer-to-peer) mode"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h1",{parentName:"div",id:"run-node-in-p2p-peer-to-peer-mode-1"},"Run node in P2P (peer-to-peer) mode"))),(0,r.kt)("p",null,"Although P2P can be enabled on Node version 1.34.1, IOHK does not yet recommend using it because it has not yet been officially released."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"In order for a node to connect to other peers in the network, a mechanism must be set in place. On Cardano the actual official mechanism\nforsees the use of a static network topology file, where the IP adress and port number of known peers can be configured. To automate this process, a tool\ncalled ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cardano-community/guild-operators/blob/alpha/docs/Scripts/topologyupdater.md"},"TopologyUpdater")," exists. IOHK is working on a more decentralized mechanism, called ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cardano.org/explore-cardano/cardano-network/p2p-networking"},"peer-to-peer networking."),"\nThe P2P networking doesn't require the configuration of a static network topology file anymore. "),(0,r.kt)("p",null,"To configure P2P on a relay node, we need to make some changes in the ",(0,r.kt)("em",{parentName:"p"},"-topology.json and "),"-config.json files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cd ${HOME}/Cardano-node-docker/node/files\nsed -i \'s+"TurnOnLogging": true,+"TurnOnLogging": true,\\n  "TestEnableDevelopmentNetworkProtocols": true,\\n  "EnableP2P": true,\\n  "MaxConcurrencyBulkSync": 2,\\n  "MaxConcurrencyDeadline": 4,\\n  "TargetNumberOfRootPeers": 50,\\n  "TargetNumberOfKnownPeers": 50,\\n  "TargetNumberOfEstablishedPeers": 25,\\n  "TargetNumberOfActivePeers": 10,+\' *-config.json\n')),(0,r.kt)("p",null,"Open the *-topology.json file with the nano editor and replace the entire content with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano testnet-topology.json  ##use mainnet-topology.json for mainnet\n")),(0,r.kt)("p",null,"Don't forget to enter the IP and Port of your block production node in the respective lines below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n            {\n              "address": "[IP block Production node]",\n              "port": [Port block production node]\n            }\n          ],\n          "advertise": false\n        },\n        "valency": 1\n      }\n    ]\n  },\n  "PublicRoots": [\n    {\n      "publicRoots" : {\n        "accessPoints": [\n          {\n            "address": "relays-new.cardano-mainnet.iohk.io",\n            "port": 3001\n          }\n        ],\n        "advertise": true\n      },\n      "valency": 1\n    }\n  ],\n  "useLedgerAfterSlot": 0\n} \n')),(0,r.kt)("p",null,"To configure P2P on the block production node, the steps are the same as above, only the content of the *-topology.json is different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'{\n  "LocalRoots": {\n    "groups": [\n      {\n        "localRoots": {\n          "accessPoints": [\n            {\n              "address": "[IP Relay 1]",\n              "port": [Port Relay 1]\n            },\n            {\n              "address": "[IP Relay 2]",\n              "port": [Port Relay 2]\n            }\n          ],\n          "advertise": false\n        },\n        "valency": 2\n      }\n    ]\n  },\n  "PublicRoots": []\n}\n')),(0,r.kt)("p",null,"Your nodes are now ready to run in P2P mode."))}p.isMDXComponent=!0}}]);