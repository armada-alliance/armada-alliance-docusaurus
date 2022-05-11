"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[402],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Rotate KES",c={unversionedId:"stake-pool-guides/pi-pool-tutorial/rotate-kes",id:"stake-pool-guides/pi-pool-tutorial/rotate-kes",title:"Rotate KES",description:"It is best to rename the old kes.vkey, kes.skey & node.cert files beforehand. Append the date. I tend to use mv instead of cp. This way I do not start creating copies of files.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/stake-pool-guides/pi-pool-tutorial/rotate-kes.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/rotate-kes",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pi-Cold",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/cold-offline"},next:{title:"Update Pools Registration Certificate",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rotate-kes"},"Rotate KES"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is best to rename the old ",(0,o.kt)("strong",{parentName:"p"},"kes.vkey"),", ",(0,o.kt)("strong",{parentName:"p"},"kes.skey")," & ",(0,o.kt)("strong",{parentName:"p"},"node.cert")," files beforehand. Append the date. I tend to use mv instead of cp. This way I do not start creating copies of files."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You only need ",(0,o.kt)("strong",{parentName:"p"},"kes.skey"),", ",(0,o.kt)("strong",{parentName:"p"},"node.cert")," and ",(0,o.kt)("strong",{parentName:"p"},"vrf.skey")," on your Core node."))),(0,o.kt)("p",null,"Determine KES period by querying current slot number divided by slots per KES period found in genesis file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cd $NODE_HOME\nslotNo=$(cardano-cli query tip --mainnet | jq -r '.slot')\nslotsPerKESPeriod=$(cat $NODE_FILES/mainnet-shelley-genesis.json | jq -r '.slotsPerKESPeriod')\nkesPeriod=$((${slotNo} / ${slotsPerKESPeriod}))\nstartKesPeriod=${kesPeriod}\necho startKesPeriod: ${startKesPeriod}\n")),(0,o.kt)("p",null,"Generate a new KES key pair."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli node key-gen-KES \\\n  --verification-key-file kes.vkey \\\n  --signing-key-file kes.skey\n")),(0,o.kt)("p",null,"Move ",(0,o.kt)("strong",{parentName:"p"},"kes.vkey")," to your ",(0,o.kt)("strong",{parentName:"p"},"Cold Offline")," machine & issue a new node.cert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cold Offline"',title:'"Cold','Offline"':!0},"cd $NODE_HOME\nchmod u+rwx $HOME/cold-keys\ncardano-cli node issue-op-cert \\\n  --kes-verification-key-file kes.vkey \\\n  --cold-signing-key-file $HOME/cold-keys/node.skey \\\n  --operational-certificate-issue-counter $HOME/cold-keys/node.counter \\\n  --kes-period <startKesPeriod> \\\n  --out-file node.cert\nchmod a-rwx $HOME/cold-keys\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The cold.counter in your cold-keys folder keeps track of how many times you have rotated your kes pair."))),(0,o.kt)("p",null,"Move ",(0,o.kt)("strong",{parentName:"p"},"node.cert")," back to Core & restart the cardano-service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-service restart\n")))}m.isMDXComponent=!0}}]);