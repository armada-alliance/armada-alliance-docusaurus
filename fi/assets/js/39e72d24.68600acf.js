"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9193],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9244:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={description:"Command line prerequisites, compiling the node and node setup."},l="Node Build",d={unversionedId:"stake-pool-guides/m1-native-macos-11-build/node-build",id:"stake-pool-guides/m1-native-macos-11-build/node-build",title:"Node Build",description:"Command line prerequisites, compiling the node and node setup.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/stake-pool-guides/m1-native-macos-11-build/node-build.md",sourceDirName:"stake-pool-guides/m1-native-macos-11-build",slug:"/stake-pool-guides/m1-native-macos-11-build/node-build",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/m1-native-macos-11-build/node-build",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/m1-native-macos-11-build/node-build.md",tags:[],version:"current",frontMatter:{description:"Command line prerequisites, compiling the node and node setup."},sidebar:"tutorialSidebar",previous:{title:"M1: Native macOS 11 Build",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/m1-native-macos-11-build/"},next:{title:"Finishing Up",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/m1-native-macos-11-build/finishing-up"}},c={},u=[{value:"Going Headless",id:"going-headless",level:3},{value:"Build the Node",id:"build-the-node",level:3},{value:"Setup User Environment",id:"setup-user-environment",level:3},{value:"Create System Services",id:"create-system-services",level:3},{value:"Configuration Files",id:"configuration-files",level:3}],p={toc:u};function h(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-build"},"Node Build"),(0,r.kt)("h3",{id:"going-headless"},"Going Headless"),(0,r.kt)("p",null,"Fire up putty or your favorite terminal app from another machine on your network and connect to your M1's IP address. If you're on the macOS terminal skip the ssh part here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh <user>@<ip address>\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you turned Remote Login on it should connect and ask for a password. At some point you should setup a SSH key and share it with your M1 so you don't need a password, but I won't cover that here."))),(0,r.kt)("p",null,"Once on the command prompt, lets brew install a few things."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'# Install Homebrew for package management\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n# Stop snooping on me!\nbrew analytics off\n\n# Install some necessary GNU stuff for MacOS\nbrew install bash coreutils gnu-sed htop wget chrony prometheus node_exporter wireguard-tools\n\n# Change the shell for your user to the newer shell\nchsh -s /opt/homebrew/bin/bash\n')),(0,r.kt)("h3",{id:"build-the-node"},"Build the Node"),(0,r.kt)("p",null,"I followed the guide below word for word. You've already installed XCode and Homebrew so skip that. Once finished you should have the necessary packages installed and a working 1.33 (or newer) version of cardano-node and cardano-cli."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Take note of the callouts for the M1 and use the references for $HOME/.bashrc not $HOME/.zshrc."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.cardano.org/docs/get-started/installing-cardano-node#macos"},"Cardano Developer Guides: Installing Cardano Node on macOS")),(0,r.kt)("h3",{id:"setup-user-environment"},"Setup User Environment"),(0,r.kt)("p",null,"Following the build, let's setup a few things in the terminal. You'll notice here I am using a $HOME/pi-pool directory. My old block producer was created from the Armada Alliance image which uses this path instead of the usual /opt/cardano/cnode you'll find in the Cardano docs. Adjust accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'##############################################################\n# Add a .bash_profile if it doesn\'t already exist\nnano ~/.bash_profile\n\n# Add these lines to the file:\neval "$(/opt/homebrew/bin/brew shellenv)"\ntest -f ~/.bashrc && source ~/.bashrc\n\n# Save and exit nano\n##############################################################\n\n# Create the directory for the blockchain db files\nmkdir -p $HOME/pi-pool/db\n\n# Create the directory for the node configuration files\nmkdir $HOME/pi-pool/files\n\n# Create the directory for the core key files\nmkdir $HOME/pi-pool/keys\n\n# Create the directory for the node logs\nmkdir $HOME/pi-pool/logs\n\n# Create the directory for the node related scripts\nmkdir $HOME/pi-pool/scripts\n\n##############################################################\n# Make some changes to the .bashrc file\nnano ~/.bashrc\n\n# Add the following to the bottom of the file:\n\nexport CARDANO_NODE_SOCKET_PATH="$HOME/pi-pool/db/socket"\nexport GENESIS_BLOCK_HASH="8e4d2a343f3dcf9330ad9035b3e8d168e6728904262f2c434a4f8f934ec7b676"\n\ncardano-service() {\n    sudo launchctl "$1" cardano.service\n}\n\n# Save and exit nano\n##############################################################\n\n# Source the new changes into your shell\nsource ~/.bashrc\n')),(0,r.kt)("p",null,"Allow the pooladmin group that we created earlier access to start/stop the node without sudo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"##############################################################\n# Create a pooladmin sudoers file\nsudo visudo /etc/sudoers.d/pooladmin\n\n# Add the following to this file:\n\n%pooladmin ALL=NOPASSWD: /bin/launchctl stop cardano.service\n%pooladmin ALL=NOPASSWD: /bin/launchctl start cardano.service\n\n# Save and exit by typing :wq\n##############################################################\n")),(0,r.kt)("h3",{id:"create-system-services"},"Create System Services"),(0,r.kt)("p",null,"Create the cardano-service file in ","~","/.local/bin and then we'll add it as a system service to the macOS launchctl utility."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'##############################################################\n# Add the cardano-service file\nnano ~/.local/bin/cardano-service\n\n# Add the following to the file adjusting your port accordingly:\n\n#!/usr/bin/env bash\nNODE=${HOME}/pi-pool\nPORT=3000\nHOSTADDR=0.0.0.0\nTOPOLOGY=${NODE}/files/mainnet-topology.json\nDBPATH=${NODE}/db\nSOCKETPATH=${NODE}/db/socket\nCONFIG=${NODE}/files/mainnet-config.json\n\n# If you are running this node as a block producer adjust these lines:\nKES_SK="${NODE}/keys/<KES>.skey"\nVRF_SK="${NODE}/keys/<VRF>.skey"\nOPCERT="${NODE}/keys/<NODE>.opcert"\n\n# TODO: Uncomment one of the run lines below. If you are not running as a block\n# producer then remove the KES_SK, VRF_SK and OPCERT variables from the line.\n\n# For an 8GB M1 use this:\n#$HOME/.local/bin/cardano-node +RTS -N4 -I0.1 -Iw3600 -A32M -AL128M -n4m -F1.1 -H3500M -O3500M -RTS run --config $CONFIG --topology $TOPOLOGY --database-path $DBPATH --socket-path $SOCKETPATH --host-addr $HOSTADDR --port $PORT --shelley-kes-key $KES_SK --shelley-vrf-key $VRF_SK --shelley-operational-certificate $OPCERT\n\n# For a 16GB M1 use this:\n#$HOME/.local/bin/cardano-node +RTS -N4 -I0.1 -Iw39600 -A64M -AL256M -n16m -F0.3 -O12G -M23G -c99 -Mgrace=1G -C0 -T -RTS run --config $CONFIG --topology $TOPOLOGY --database-path $DBPATH --socket-path $SOCKETPATH --host-addr $HOSTADDR --port $PORT --shelley-kes-key $KES_SK --shelley-vrf-key $VRF_SK --shelley-operational-certificate $OPCERT\n\n# Save and exit nano\n##############################################################\n\n# Make it executable\nchmod +x ~/.local/bin/cardano-service\n')),(0,r.kt)("p",null,"Create the launchctl system service .plist file. This will add the cardano-service file we just created to the system so that it starts automatically on a reboot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'##############################################################\n# Create the .plist service definition\nsudo nano /Library/LaunchDaemons/cardano.service.plist\n\n# Add the following to the file. Note: change ???? under UserName to your\n# user name and also in the ProgramArguments.\n\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n        <key>Label</key>\n        <string>cardano.service</string>\n        <key>UserName</key>\n        <string>????</string>\n        <key>ProgramArguments</key>\n        <array>\n                <string>/Users/????/.local/bin/cardano-service</string>\n        </array>\n        <key>RunAtLoad</key>\n        <false/>\n        <key>ProcessType</key>\n        <string>Interactive</string>\n</dict>\n</plist>\n\n# Save and exit nano\n##############################################################\n\n# Load the new system service definition\nsudo launchctl load /Library/LaunchDaemons/cardano.service.plist\n\n# Verify the service definition was loaded successfully\nsudo launchctl list cardano.service\n')),(0,r.kt)("h3",{id:"configuration-files"},"Configuration Files"),(0,r.kt)("p",null,"At this point you should now have the system service loaded. Now we are ready to pull over the necessary config files and database snapshot onto the M1 from another relay on our network before we can start the node."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"If you have an existing block producer or relay on your network, you can rsync the ","~","/pi-pool files over which makes things easy. If you do not you'll need to get the Cardano config files. The Armada Alliance has them available ",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/armada-alliance/cardano-node-binaries/tree/main/config-files/1.30.1-mainnet-config"},"here"),". :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Assuming you have an existing relay on your network, ssh into that relay. I do and I have the directory structure ","~","/pi-pool available on this relay. From the relay, perform the following rsync commands:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# Replace ???? instances with your M1 user name\n\n# rsync the pi-pool config files over from a different node on your network\nrsync -a ~/pi-pool/files/ <user>@<M1 IP address>:/Users/????/pi-pool/files\n\n# rsync the pi-pool script files over from a different node on your network\nrsync -a ~/pi-pool/scripts/ <user>@<M1 IP address>:/Users/????/pi-pool/scripts\n\n# If your M1 will be a block producer, you need to rsync the pi-pool keys over \n# from your existing block producer on your network.\nrsync -a ~/pi-pool/keys/ <user>@<M1 IP address>:/Users/????/pi-pool/keys\n")),(0,r.kt)("p",{parentName:"div"},"At this point you need to adjust the ","~","/pi-pool/files/",(0,r.kt)("strong",{parentName:"p"},"mainnet-config.json")," and the ","~","/pi-pool/files/",(0,r.kt)("strong",{parentName:"p"},"mainnet-topology.json")," on your M1 to account for any changes in paths and topology depending on whether you're running as a relay or block producer."),(0,r.kt)("h3",{parentName:"div",id:"db-files"},"db Files"),(0,r.kt)("p",{parentName:"div"},"Now for the database snapshot we have a couple options. Easiest and quickest will be to use the already synced ","~","/pi-pool/db folder from the existing relay you just did the rsync commands above."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Stop the cardano-node service on the existing relay"),(0,r.kt)("li",{parentName:"ul"},"Run the following rsync command on the relay to pull the /db folder over to your M1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rsync -a ~/pi-pool/db/ <user>@<M1 IP address>:/Users/????/pi-pool/db")),(0,r.kt)("li",{parentName:"ul"},"Give it some time, there's a lot here"))),(0,r.kt)("li",{parentName:"ul"},"Start the cardano-node service back up on the existing relay")),(0,r.kt)("h3",{parentName:"div",id:"start-the-node"},"Start the Node!"),(0,r.kt)("p",{parentName:"div"},"Using the service shortcut functions we created in the ","~","/.bashrc file we can now do this:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'# Fire up the node :)\ncardano-service start\n\n# Stop the node using this:\ncardano-service stop\n\n# Verify the node is running - should see one line:\nps aux | grep "[c]ardano-node"\n# or\nsudo htop\n\n# If something is hosed, check the system log for information:\nless /var/log/system.log\n')))),(0,r.kt)("p",null,"If you turned on the M1 firewall you'll need to ensure the port you used in the cardano-service file is available.\n:::"))}h.isMDXComponent=!0}}]);