"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4804],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6379:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={},c="Update Pools Registration Certificate",s={unversionedId:"stake-pool-guides/pi-pool-tutorial/update-registration-cert",id:"stake-pool-guides/pi-pool-tutorial/update-registration-cert",title:"Update Pools Registration Certificate",description:"Query the chain for protocol parameters, store them in a file named params.json.",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/update-registration-cert",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rotate KES",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes"},next:{title:"CNCLI Leader Logs",permalink:"/docs/stake-pool-guides/leader-logs"}},p={},u=[{value:"Create a new pool certificate",id:"create-a-new-pool-certificate",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-pools-registration-certificate"},"Update Pools Registration Certificate"),(0,r.kt)("p",null,"Query the chain for protocol parameters, store them in a file named params.json."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cd ${NODE_HOME}\ncardano-cli query protocol-parameters \\\n  --${CONFIG_NET} \\\n  --out-file $NODE_HOME/params.json\n")),(0,r.kt)("p",null,"If you plan to edit your poolMetaData.json file do so now, run the below command and move poolMetaDataHash.txt to your cold machine. If your poolMetaData.json is not being edited head over to your cold machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli stake-pool metadata-hash \\\n  --pool-metadata-file poolMetaData.json > poolMetaDataHash.txt\n")),(0,r.kt)("h2",{id:"create-a-new-pool-certificate"},"Create a new pool certificate"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"--metadata-url must be 64 characters or less."))),(0,r.kt)("p",null," Open or create a file name registration-cert.txt. Use this file to edit the below command before you issue it. It's also handy to leave this file on the cold machine for any future edits. Below is 1,000 ada pledge, 340 cost and a 1% margin. Refer back to the core guide if you are using more than one relay."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cold Offline"',title:'"Cold','Offline"':!0},"cd ${NODE_HOME}\nnano registration-cert.txt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cold Offline"',title:'"Cold','Offline"':!0},"cardano-cli stake-pool registration-certificate \\\n  --cold-verification-key-file ${HOME}/cold-keys/node.vkey \\\n  --vrf-verification-key-file vrf.vkey \\\n  --pool-pledge 10000000000 \\\n  --pool-cost 340000000 \\\n  --pool-margin 0.01 \\\n  --pool-reward-account-verification-key-file stake.vkey \\\n  --pool-owner-stake-verification-key-file stake.vkey \\\n  --${CONFIG_NET} \\\n  --single-host-pool-relay <r1.example.com> \\\n  --pool-relay-port 3001 \\\n  --metadata-url <https://example.com/poolMetaData.json> \\\n  --metadata-hash $(cat poolMetaDataHash.txt) \\\n  --out-file pool.cert\n")),(0,r.kt)("p",null,"Once you are satisfied with your edits copy the command, save the file and issue it in your terminal."),(0,r.kt)("p",null,"Issue a delegation certificate from ",(0,r.kt)("strong",{parentName:"p"},"stake.skey")," & ",(0,r.kt)("strong",{parentName:"p"},"node.vkey"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cold Offline"',title:'"Cold','Offline"':!0},"cardano-cli stake-address delegation-certificate \\\n  --stake-verification-key-file stake.vkey \\\n  --cold-verification-key-file ${HOME}/cold-keys/node.vkey \\\n  --out-file deleg.cert\n")),(0,r.kt)("p",null,"Move ",(0,r.kt)("strong",{parentName:"p"},"pool.cert"),", ",(0,r.kt)("strong",{parentName:"p"},"deleg.cert")," to your online core machine."),(0,r.kt)("p",null,"Query the current slot number or tip of the chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"slotNo=$(cardano-cli query tip --${CONFIG_NET} | jq -r '.slot')\necho slotNo: ${slotNo}\n")),(0,r.kt)("p",null,"Query the wallets utxo history and build variables for a transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},'cardano-cli query utxo --address $(cat payment.addr) --${CONFIG_NET} > fullUtxo.out\n\ntail -n +3 fullUtxo.out | sort -k3 -nr > balance.out\n\ncat balance.out\n\ntx_in=""\ntotal_balance=0\nwhile read -r utxo; do\n  in_addr=$(awk \'{ print $1 }\' <<< "${utxo}")\n  idx=$(awk \'{ print $2 }\' <<< "${utxo}")\n  utxo_balance=$(awk \'{ print $3 }\' <<< "${utxo}")\n  total_balance=$((${total_balance}+${utxo_balance}))\n  echo TxHash: ${in_addr}#${idx}\n  echo ADA: ${utxo_balance}\n  tx_in="${tx_in} --tx-in ${in_addr}#${idx}"\ndone < balance.out\ntxcnt=$(cat balance.out | wc -l)\necho Total ADA balance: ${total_balance}\necho Number of UTXOs: ${txcnt}\n')),(0,r.kt)("p",null,"Build temporary ",(0,r.kt)("strong",{parentName:"p"},"tx.tmp")," to hold information while we build our raw transaction file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli transaction build-raw \\\n  ${tx_in} \\\n  --tx-out $(cat payment.addr)+${total_balance} \\\n  --invalid-hereafter $(( ${currentSlot} + 10000)) \\\n  --fee 0 \\\n  --certificate-file pool.cert \\\n  --certificate-file deleg.cert \\\n  --out-file tx.tmp\n")),(0,r.kt)("p",null,"Calculate the transaction fee."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"fee=$(cardano-cli transaction calculate-min-fee \\\n  --tx-body-file tx.tmp \\\n  --tx-in-count ${txcnt} \\\n  --tx-out-count 1 \\\n  --${CONFIG_NET} \\\n  --witness-count 3 \\\n  --byron-witness-count 0 \\\n  --protocol-params-file params.json | awk '{ print $1 }')\n  echo fee: ${fee}\n")),(0,r.kt)("p",null,"Calculate output that comes back to you (change)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"txOut=$((${total_balance}-${fee}))\necho txOut: ${txOut}\n")),(0,r.kt)("p",null,"Build your ",(0,r.kt)("strong",{parentName:"p"},"tx.raw")," (unsigned) transaction file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli transaction build-raw \\\n  ${tx_in} \\\n  --tx-out $(cat payment.addr)+${txOut} \\\n  --invalid-hereafter $(( ${slotNo} + 10000)) \\\n  --fee ${fee} \\\n  --certificate-file pool.cert \\\n  --certificate-file deleg.cert \\\n  --out-file tx.raw\n")),(0,r.kt)("p",null,"Move ",(0,r.kt)("strong",{parentName:"p"},"tx.raw")," to your cold offline machine."),(0,r.kt)("p",null,"Sign the transaction with your ",(0,r.kt)("strong",{parentName:"p"},"payment.skey"),", ",(0,r.kt)("strong",{parentName:"p"},"node.skey")," & ",(0,r.kt)("strong",{parentName:"p"},"stake.skey"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cold Offline"',title:'"Cold','Offline"':!0},"cardano-cli transaction sign \\\n  --tx-body-file tx.raw \\\n  --signing-key-file payment.skey \\\n  --signing-key-file ${HOME}/cold-keys/node.skey \\\n  --signing-key-file stake.skey \\\n  --${CONFIG_NET} \\\n  --out-file tx.signed\n")),(0,r.kt)("p",null,"Move ",(0,r.kt)("strong",{parentName:"p"},"tx.signed")," back to your core node & submit the transaction to the blockchain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli transaction submit \\\n  --tx-file tx.signed \\\n  --${CONFIG_NET}\n")),(0,r.kt)("p",null,"If you lower your pledge you need to wait two epochs before you can remove the ada or your pledge will show as unmet and you will be assigned and forge blocks but neither you nor your delegators will be paid."))}m.isMDXComponent=!0}}]);