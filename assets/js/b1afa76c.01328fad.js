"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4347],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={description:"Setup chrony, start prometheus and fix up gLiveView."},l="Finishing Up",c={unversionedId:"stake-pool-guides/m1-native-macos-11-build/finishing-up",id:"stake-pool-guides/m1-native-macos-11-build/finishing-up",title:"Finishing Up",description:"Setup chrony, start prometheus and fix up gLiveView.",source:"@site/docs/stake-pool-guides/m1-native-macos-11-build/finishing-up.md",sourceDirName:"stake-pool-guides/m1-native-macos-11-build",slug:"/stake-pool-guides/m1-native-macos-11-build/finishing-up",permalink:"/docs/stake-pool-guides/m1-native-macos-11-build/finishing-up",draft:!1,editUrl:"https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/m1-native-macos-11-build/finishing-up.md",tags:[],version:"current",frontMatter:{description:"Setup chrony, start prometheus and fix up gLiveView."},sidebar:"tutorialSidebar",previous:{title:"Node Build",permalink:"/docs/stake-pool-guides/m1-native-macos-11-build/node-build"},next:{title:"Basic Stake Pool Networking \ud83d\udcab",permalink:"/docs/stake-pool-guides/basic-stake-pool-networking"}},p={},u=[{value:"Chrony",id:"chrony",level:3},{value:"Prometheus/Node Exporter",id:"prometheusnode-exporter",level:3},{value:"gLiveView",id:"gliveview",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"finishing-up"},"Finishing Up"),(0,i.kt)("h3",{id:"chrony"},"Chrony"),(0,i.kt)("p",null,"At the time of writing this the brew install of chrony does not create the necessary system service .plist file so we need to create one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'##############################################################\n# Create the .plist service definition\nsudo nano /opt/homebrew/opt/chrony/homebrew.mxcl.chrony.plist\n\n# Add the following to the file:\n\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n        <key>Label</key>\n        <string>homebrew.mxcl.chrony</string>\n        <key>ProgramArguments</key>\n        <array>\n                <string>/opt/homebrew/sbin/chronyd</string>\n        </array>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>StandardErrorPath</key>\n        <string>/var/log/chronyd.err.log</string>\n        <key>StandardOutPath</key>\n        <string>/var/log/chronyd.log</string>\n</dict>\n</plist>\n\n# Save and exit nano\n##############################################################\n\n# Create the run folder for Chrony\nsudo mkdir /var/run/chrony\n')),(0,i.kt)("p",null,"Now we need to create the /etc/chrony.conf file which the service will use. I just copied the one from my other block producer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"##############################################################\nsudo nano /etc/chrony.conf\n\n# Add the following to the file:\n\npool time.google.com        iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool time.euro.apple.com    iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool time.apple.com         iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool ntp.ubuntu.com         iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\n\n# This directive specify the location of the file containing ID/key pairs for\n# NTP authentication.\nkeyfile /etc/chrony.keys\n\n# This directive specify the file into which chronyd will store the rate\n# information.\ndriftfile /var/lib/chrony/chrony.drift\n\n# Uncomment the following line to turn logging on.\n#log tracking measurements statistics\n\n# Log files location.\nlogdir /var/log/chrony\n\n# Stop bad estimates upsetting machine clock.\nmaxupdateskew 5.0\n\n# This directive enables kernel synchronisation (every 11 minutes) of the\n# real-time clock. Note that it can\u2019t be used along with the 'rtcfile' directive.\nrtcsync\n\n# Step the system clock instead of slewing it if the adjustment is larger than\n# one second, but only in the first three clock updates.\nmakestep 0.1 -1\n\nleapsectz right/UTC\n\nlocal stratum 10\n\n# Save and exit nano\n##############################################################\n\n# Fire up chrony using Brew\nsudo brew services start chrony\n\n# Verify chrony started successfully - should see one line:\nps aux | grep \"[c]hronyd\"\n\n# If something is hosed, check the logs:\nless /var/log/system.log\nless /var/log/chronyd.err.log\nless /var/log/chronyd.log\n")),(0,i.kt)("h3",{id:"prometheusnode-exporter"},"Prometheus/Node Exporter"),(0,i.kt)("p",null,"For the mini M1 the thermal readings aren't available per node_exporter's default thermal collector. So we need to shut off that collector so logs don't fill up. Let's also\nadd a textfile exporter directory so we can collect custom stats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"##############################################################\nnano /opt/homebrew/etc/node_exporter.args\n\n# Add these two lines:\n--collector.textfile.directory=/opt/homebrew/opt/node_exporter/stats\n--no-collector.thermal\n\n# Save and exit nano\n##############################################################\n\n# Create the textfile collector directory\nmkdir /opt/homebrew/opt/node_exporter/stats\n")),(0,i.kt)("p",null,"Register the services with launchctl and start 'em up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# Start prometheus\nsudo brew services start prometheus\n\n# Start the node-exporter\nsudo brew services start node_exporter\n\n# Verify they are registered and started\nsudo brew services list\n\n# Should see this:\nName          Status  User File\nnode_exporter started root /Library/LaunchDaemons/homebrew.mxcl.node_exporter.plist\nprometheus    started root /Library/LaunchDaemons/homebrew.mxcl.prometheus.plist\n")),(0,i.kt)("p",null,"At this point if you have a Grafana instance on your network you should be able to add the M1 into the mix. I won't cover how to do that here."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"I am noticing that some of the M1 metrics are named slightly differently than the Ubuntu metrics and some are not available at all - like thermal zones. If you are using Grafana you'll need to play with the metrics to get them correct."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you turned on the M1 firewall you'll need to ensure port 9090 is available if you're going to add the M1 to Grafana if the Grafana server is sitting elsewhere on your network."))),(0,i.kt)("h3",{id:"gliveview"},"gLiveView"),(0,i.kt)("p",null,"The normal guild operators env and gLiveView.sh scripts will complain out of the box on the macOS. So, we need to tweak them a little bit."),(0,i.kt)("p",null,'Unfortunately this requires us to change stuff in the "Do NOT modify code below" section of gLiveView.sh. Which means if you don\'t specify the ',(0,i.kt)("strong",{parentName:"p"},"-u")," option it'll see the script has changed and ask you to download the new one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'##############################################################\nnano ~/pi-pool/scripts/gLiveView.sh\n\n# Change the shebang line to this so we use the new shell:\n#!/usr/bin/env bash\n\n# This is the only change that will cause gLiveView.sh to ask for script updates so you\'ll need to use the -u option. MacOS BSD doesn\'t have a workaround for ps.\n# Change this line:\nread -ra proc_data <<<"$(ps -q ${CNODE_PID} -o pcpu= -o rss=)"\n# to this:\nread -ra proc_data <<<"$(ps -p ${CNODE_PID} -o pcpu= -o rss=)"\n\n# Save and exit nano\n##############################################################\n\n##############################################################\nnano ~/pi-pool/scripts/env\n\n# Change the shebang line to this so we use the new shell:\n#!/usr/bin/env bash\n\n# Add the following 5 lines right above the # Do NOT modify code below # line:\n# special mapping of coreutils for MacOS\nif [[ $(uname) == Darwin ]]; then\n   sed () { gsed "$@"; }\n   head () { ghead "$@"; }\nfi\n\n# Save and exit nano\n##############################################################\n')),(0,i.kt)("p",null,"You should now be able to run gLiveView.sh with the -u option and it should work:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"~/pi-pool/scripts/gLiveView.sh -u")))}h.isMDXComponent=!0}}]);