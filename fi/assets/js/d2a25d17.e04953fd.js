"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[679],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=s,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9415:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=t(7462),s=t(3366),r=(t(7294),t(3905)),i=["components"],o={},c="Cardano NFT Collection Tutorial \ud83d\udc5b",l={unversionedId:"cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon",id:"cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon",title:"Cardano NFT Collection Tutorial \ud83d\udc5b",description:"THIS GUIDE IS DEPRECATED",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon.md",sourceDirName:"cardano-developer-guides",slug:"/cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon",permalink:"/armada-alliance-docusaurus/fi/docs/cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Other Cardano Guides",permalink:"/armada-alliance-docusaurus/fi/docs/cardano-developer-guides/"},next:{title:"Cardano Submit Transaction API Tutorial \ud83d\udce6",permalink:"/armada-alliance-docusaurus/fi/docs/cardano-developer-guides/cardano-submit-tx-api-tutorial"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"6. Upload and pin our data to IPFS",id:"6-upload-and-pin-our-data-to-ipfs",level:3},{value:"Before you continue to the minting process, please understand the importance of minting policies and their scripts!",id:"before-you-continue-to-the-minting-process-please-understand-the-importance-of-minting-policies-and-their-scripts",level:4},{value:"7. Create an &quot;open&quot; or &quot;unlocked&quot; minting policy and script (Optional)",id:"7-create-an-open-or-unlocked-minting-policy-and-script-optional",level:3},{value:"8. Create a &quot;time-locked&quot; minting policy and script (Recommended)",id:"8-create-a-time-locked-minting-policy-and-script-recommended",level:3},{value:"9. Create a script to get our policy ID",id:"9-create-a-script-to-get-our-policy-id",level:3},{value:"9. Define the mint transaction",id:"9-define-the-mint-transaction",level:3},{value:"10. Send assets back to wallet",id:"10-send-assets-back-to-wallet",level:3}],m={toc:p};function u(e){var n=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cardano-nft-collection-tutorial-"},"Cardano NFT Collection Tutorial \ud83d\udc5b"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"this-guide-is-deprecated"},"THIS GUIDE IS DEPRECATED"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cardano-node / cardano-cli set up on local machine (",(0,r.kt)("a",{parentName:"li",href:"https://docs.cardano.org/projects/cardano-node/en/latest"},"https://docs.cardano.org/projects/cardano-node/en/latest"),")"),(0,r.kt)("li",{parentName:"ul"},"Node.js installed version 14"),(0,r.kt)("li",{parentName:"ul"},"cardano-cli-js package installed"),(0,r.kt)("li",{parentName:"ul"},"cardano-minter repo from the previous tutorial")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,r.kt)("strong",{parentName:"h5"},"If you haven't already, please watch our video from the previous NFT tutorial \ud83d\ude0e")," :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/OeOliguGn7Y%22"},'https://youtu.be/OeOliguGn7Y"')," %}"),(0,r.kt)("h3",{parentName:"div",id:"clone-the-cardano-minter-repo-if-you-havent-already"},"Clone the cardano-minter repo if you haven't already..."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/armada-alliance/cardano-minter\ncd cardano-minter\n")),(0,r.kt)("h3",{parentName:"div",id:"install-additional-dependencies"},"Install additional dependencies"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"npm install form-data dotenv axios lodash sharp promise-parallel-throttle --save\n")),(0,r.kt)("h2",{parentName:"div",id:"now-lets-start-with-the-tutorial-"},"Now, let's start with the tutorial \ud83d\ude0a"),(0,r.kt)("h3",{parentName:"div",id:"1-create-our-initial-assets"},"1. Create our initial assets"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},'While in the "cardano-minter" directory create a script that will generate our assets in a nicely formatted JSON file called "assets.json".')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"nano create-initial-assets-json.js\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * This script is responsible for generating the initial\n * assets.json that can later be adjusted to fit your specific needs\n *\n * You can define:\n * 1. amount of assets\n * 2. whether you want to start the collection with either 1 or 0\n * 3. what the mimeType is (jpeg, png or gif)\n */\n\nconst times = require(\'lodash/times\')\nconst fs = require("fs").promises\n\nconst AMOUNT_OF_ASSETS = 15\nconst START_WITH_ZERO = true\nconst MIME_TYPE = \'image/png\'\n\nasync function main() {\n\n    const assets = times(AMOUNT_OF_ASSETS).map(i => {\n\n        const number = START_WITH_ZERO ? i : i + 1\n        const id = `PIADA${number}` // PIADA0\n\n        const [extension] = MIME_TYPE.split("/").reverse() // png\n\n        return {\n            id,\n            name: `PIADA #${number}`,\n            // description: "", \n            image: `images/${id}_thumbnail.${extension}`, // images/PIADA0_thumbnail.png\n            src: `images/${id}.${extension}`, // images/PIADA0.png\n            type: MIME_TYPE,\n            // add whatever like below\n            authors: ["PIADA", "SBLYR"],\n            website: "https://ada-pi.io"\n        }\n    })\n\n    await fs.writeFile(__dirname + \'/assets.json\', JSON.stringify(assets, null, 2))\n}\n\nmain()\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"node src/create-initial-assets-json.js\n")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Your assets.json file should look like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/armada-alliance/cardano-minter-collection/blob/master/src/assets.json"},"this"),".")),(0,r.kt)("h3",{parentName:"div",id:"2-download-random-images-for-testing"},"2. Download random images for testing"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Make a folder called images to download the test images into"),(0,r.kt)("li",{parentName:"ul"},"Create a script that will go and grab the images from the internet and download them into the images folder")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"cd src\nnano download-test-images.js\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * This script expect the assets.json to exist\n * inside the src directory there should be a reference\n * to a filepath on the local file system relative to the `src` dir\n */\n\nconst random = require('lodash/random')\nconst axios = require('axios')\nconst fs = require('fs').promises\n\nconst assets = require(\"./assets.json\")\n\nasync function main() {\n\n    await Promise.all(\n        assets.map(async asset => {\n\n            const { data } = await axios.get(`https://source.unsplash.com/640x400?cat&v=${random()}`, { responseType: 'arraybuffer' })\n            console.log(`[${asset.name}] downloaded random cat image`)\n\n            await fs.writeFile(__dirname + '/' + asset.src, data)\n            console.log(`[${asset.name}] image saved to \"${asset.src}\"`)\n        })\n    )\n}\n\nmain()\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"node src/download-test-images.js\n")),(0,r.kt)("h3",{parentName:"div",id:"3-extend-metadatajson-with-thumbnails-optional"},"3. Extend metadata.json with thumbnails (optional)"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"generate thumbnails based on images from the metadata.json and give them the same name with ",(0,r.kt)("inlineCode",{parentName:"li"},"_thumbnail")," tag added to the name")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"cd src\nnano generate-thumbnails.js\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs').promises\nconst sharp = require(\"sharp\")\n\nconst generateThumbnail = (filePath, data) => new Promise(resolve => {\n\n    sharp(data)\n        .resize(300) // 640x400 (640 -> 200)  \n        .toFile(filePath, resolve)\n})\n\nconst assets = require('./assets.json')\n\nasync function main() {\n\n    await Promise.all(\n        assets.map(async asset => {\n\n            const data = await fs.readFile(__dirname + '/' + asset.src)\n\n            await generateThumbnail(__dirname + \"/\" + asset.image, data)\n            console.log(`[${asset.name}] thumbnail generated at \"${asset.image}\"`)\n        })\n    )\n}\n\nmain()\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"node src/generate-thumbnails.js\n")),(0,r.kt)("h3",{parentName:"div",id:"4-create-our-pinatacloud-account-to-get-our-api-keys"},"4. Create our ",(0,r.kt)("a",{parentName:"h3",href:"https://pinata.cloud"},"pinata.cloud")," account to get our API keys"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Create an account"),(0,r.kt)("li",{parentName:"ol"},"Create API keys")),(0,r.kt)("h3",{parentName:"div",id:"5-need-to-safely-store-our-api-keys"},"5. Need to safely store our API keys"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"create .env file and paste in our keys")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano .env\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PINATA_API_KEY='Enter Your API Key'\nPINATA_API_SECRET='Enter Your API Secret Key'\n")),(0,r.kt)("h3",{id:"6-upload-and-pin-our-data-to-ipfs"},"6. Upload and pin our data to IPFS"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Read ",(0,r.kt)("a",{parentName:"h5",href:"https://docs.ipfs.io/how-to/pin-files/#three-kinds-of-pins"},"this article "),"to learn more about why we want to Pin our NFTs to IPFS. :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'First, we need to make a script called pin-to-ipfs.js, this script will "upload" and Pin our images to IPFS using the pinata.cloud API.'))),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"nano pin-to-ipfs.js\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const dotenv = require('dotenv')\ndotenv.config()\nconst axios = require(\"axios\")\nconst FormData = require('form-data')\nconst fs = require('fs')\n\nconst pinata = axios.create({\n    baseURL: 'https://api.pinata.cloud',\n    headers: {\n        pinata_api_key: process.env.PINATA_API_KEY,\n        pinata_secret_api_key: process.env.PINATA_API_SECRET\n    }\n})\n\nmodule.exports = async (name, filePath) => {\n\n    let data = new FormData()\n    data.append('file', fs.createReadStream(filePath))\n\n    const metadata = JSON.stringify({\n        name\n    })\n\n    data.append('pinataMetaData', metadata)\n\n    const pinataOptions = JSON.stringify({\n        cidVersion: 0,\n        customPinPolicy: {\n            regions: [\n                {\n                    id: 'FRA1',\n                    desiredReplicationCount: 1\n                },\n                {\n                    id: 'NYC1',\n                    desiredReplicationCount: 1\n                }\n            ]\n        }\n    })\n\n    data.append('pinataOptions', pinataOptions)\n\n    const response = await pinata.post('/pinning/pinFileToIPFS', data, {\n        maxBodyLength: 'Infinity', // this is needed to prevent axios from erroring out with large files\n        headers: {\n            'Content-Type': `multipart/form-data; boundary=${data._boundary}`\n        }\n    }).catch(e => {\n\n        if (e.response) {\n            console.log(e.response.error)\n        } else {\n            console.log(e.message)\n        }\n    })\n\n    const hash = response.data.IpfsHash\n\n    return {\n        hash,\n        ipfsLink: `ipfs://${hash}`,\n        httpLink: `https://ipfs.io/ipfs/${hash}`\n    }\n}\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\nnode src/pin-to-ipfs.js\n")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},'Next, we can create a script called pin-images-to-ipfs.js, this will run through our images/assets and "pin" the images to IPFS using our local node.')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\nnano pin-images-to-ipfs.js\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs").promises\nconst pinToIpfs = require("./pin-to-ipfs")\nconst Throttle = require("promise-parallel-throttle")\n\nconst assets = require("./assets.json")\n\nasync function main() {\n\n    const updated_assets = await Throttle.sync(\n        assets.map(asset => async () => {\n\n            const { ipfsLink: image, httpLink: imageLink } = await pinToIpfs(`${asset.id}_image`, __dirname + "/" + asset.image)\n            console.log(`[${asset.name}] pinned image to ipfs (${imageLink})`)\n\n            const { ipfsLink: src, httpLink: srcLink } = await pinToIpfs(`${asset.id}_src`, __dirname + "/" + asset.src)\n            console.log(`[${asset.name}] pinned image to ipfs (${srcLink})`)\n\n            return {\n                ...asset,\n                image,\n                src\n            }\n        })\n    )\n\n    // write updated assets to assets.json\n    await fs.writeFile(__dirname + \'/assets.json\', JSON.stringify(updated_assets, null, 2))\n\n    console.log(\'written updates to assets.json\')\n}\n\nmain()\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node src/pin-images-to-ipfs.js\n")))),(0,r.kt)("h4",{id:"before-you-continue-to-the-minting-process-please-understand-the-importance-of-minting-policies-and-their-scripts"},"Before you continue to the minting process, please understand the importance of minting policies and their scripts!"),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Read the Cardano Documentation on "'),(0,r.kt)("a",{parentName:"p",href:"https://docs.cardano.org/projects/cardano-node/en/latest/reference/simple-scripts.html#Step-1---construct-the-tx-body"},(0,r.kt)("strong",{parentName:"a"},"Scripts")),(0,r.kt)("strong",{parentName:"p"},'" and/or watch a video we made discussing the subject:')),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/v6q66zcFqew%22"},'https://youtu.be/v6q66zcFqew"')," %}"),(0,r.kt)("h3",{id:"7-create-an-open-or-unlocked-minting-policy-and-script-optional"},'7. Create an "open" or "unlocked" minting policy and script (Optional)'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will create an open minting policy script and export it in JSON and TXT format.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\nnano create-mint-policy.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs")\nconst cardano = require("./cardano")\n\nconst wallet = cardano.wallet("PIADA")\n\nconst mintScript = {\n    keyHash: cardano.addressKeyHash(wallet.name),\n    type: "sig"\n}\n\nfs.writeFileSync(__dirname + "/mint-policy.json", JSON.stringify(mintScript, null, 2))\nfs.writeFileSync(__dirname + "/mint-policy-id.txt", cardano.transactionPolicyid(mintScript))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node src/create-mint-policy.js\n")),(0,r.kt)("h3",{id:"8-create-a-time-locked-minting-policy-and-script-recommended"},'8. Create a "time-locked" minting policy and script (Recommended)'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Create a "time-locked" minting policy script and export it in JSON and TXT format.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd src\nnano create-time-locked-mint-policy.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs")\nconst cardano = require("./cardano")\n\nconst wallet = cardano.wallet("PIADA")\n\nconst { slot } = cardano.queryTip()\n\nconst SLOTS_PER_EPOCH = 5 * 24 * 60 * 60 // 432000\n\nconst mintScript = {\n    type: "all",\n    scripts: [\n        {\n            slot: slot + (SLOTS_PER_EPOCH * 5),\n            type: "before"\n        },\n        {\n            keyHash: cardano.addressKeyHash(wallet.name),\n            type: "sig"\n        }\n    ]\n}\n\nfs.writeFileSync(__dirname + "/mint-policy.json", JSON.stringify(mintScript, null, 2))\nfs.writeFileSync(__dirname + "/mint-policy-id.txt", cardano.transactionPolicyid(mintScript))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node src/create-time-locked-mint-policy.js\n")),(0,r.kt)("h3",{id:"9-create-a-script-to-get-our-policy-id"},"9. Create a script to get our policy ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We want to make a script that can get our Policy ID to be used in other parts of our program")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\nnano get-policy-id.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const cardano = require("./cardano")\nconst mintScript = require("./mint-policy.json")\n\nmodule.exports = () => {\n\n    const policyId = cardano.transactionPolicyid(mintScript)\n\n    return {\n        policyId,\n        mintScript\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node src/get-policy-id.js\n")),(0,r.kt)("h3",{id:"9-define-the-mint-transaction"},"9. Define the mint transaction"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"build mint transaction with metadata.json"),(0,r.kt)("li",{parentName:"ol"},"calc fee"),(0,r.kt)("li",{parentName:"ol"},"rebuild"),(0,r.kt)("li",{parentName:"ol"},"sign"),(0,r.kt)("li",{parentName:"ol"},"submit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\nnano mint-multiple-assets.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const cardano = require("./cardano")\nconst getPolicyId = require("./get-policy-id")\nconst assets = require("./assets.json")\n\nconst wallet = cardano.wallet("PIADA")\n\nconst { policyId: POLICY_ID, mintScript } = getPolicyId()\n\nconst metadata_assets = assets.reduce((result, asset) => {\n\n    const ASSET_ID = asset.id // PIADA0\n\n    // remove id property from the asset metadata\n    const asset_metadata = {\n        ...asset\n    }\n\n    delete asset_metadata.id\n\n    return {\n        ...result,\n        [ASSET_ID]: asset_metadata\n    }\n}, {})\n\nconst metadata = {\n    721: {\n        [POLICY_ID]: {\n            ...metadata_assets\n        }\n    }\n}\n\nconst txOut_value = assets.reduce((result, asset) => {\n\n    const ASSET_ID = POLICY_ID + "." + asset.id\n    result[ASSET_ID] = 1\n    return result\n\n}, {\n    ...wallet.balance().value\n})\n\nconst mint_actions = assets.map(asset => ({ action: "mint", amount: 1, token: POLICY_ID + "." + asset.id }))\n\nconst tx = {\n    txIn: wallet.balance().utxo,\n    txOut: [\n        {\n            address: wallet.paymentAddr,\n            amount: txOut_value\n        }\n    ],\n     mint: {\n        actions: mint_actions,\n        script: [mintScript]\n    },\n    metadata,\n    witnessCount: 2\n}\n\nconst buildTransaction = (tx) => {\n\n    const raw = cardano.transactionBuildRaw(tx)\n    const fee = cardano.transactionCalculateMinFee({\n        ...tx,\n        txBody: raw\n    })\n\n    tx.txOut[0].value.lovelace -= fee\n\n    return cardano.transactionBuildRaw({ ...tx, fee })\n}\n\nconst raw = buildTransaction(tx)\n\n// 9. Sign transaction\n\nconst signTransaction = (wallet, tx, script) => {\n\n     return cardano.transactionSign({\n        signingKeys: [wallet.payment.skey, wallet.payment.skey],\n        txBody: tx\n    })\n}\n\nconst signed = signTransaction(wallet, raw, mintScript)\n\n// 10. Submit transaction\n\nconst txHash = cardano.transactionSubmit(signed)\n\nconsole.log(txHash)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node src/mint-multiple-assets.js\n")),(0,r.kt)("h3",{id:"10-send-assets-back-to-wallet"},"10. Send assets back to wallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make a script to send multiple assets back to a wallet in a single transaction.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\nnano send-multiple-assets-back-to-wallet.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const cardano = require("./cardano")\nconst assets = require("./assets.json")\nconst getPolicyId = require(\'./get-policy-id\')\n\nconst sender = cardano.wallet("PIADA")\n\nconsole.log(\n    "Balance of Sender address" +\n    cardano.toAda(sender.balance().amount.lovelace) + " ADA"\n)\n\nconst { policyId: POLICY_ID } = getPolicyId()\n\nfunction sendAssets({ receiver, assets }) {\n\n    const txOut_amount_sender = assets.reduce((result, asset) => {\n\n        const ASSET_ID = POLICY_ID + "." + asset\n        delete result[ASSET_ID]\n        return result\n    }, {\n        ...sender.balance().amount\n    })\n\n    const txOut_amount_receiver = assets.reduce((result, asset) => {\n\n        const ASSET_ID = POLICY_ID + "." + asset\n        result[ASSET_ID] = 1\n        return result\n    }, {})\n\n    // This is depedent at the network, try to increase this amount of ADA\n    // if you get an error saying: OutputTooSmallUTxO\n    const MIN_ADA = 3\n\n    const txInfo = {\n        txIn: cardano.queryUtxo(sender.paymentAddr),\n        txOut: [\n            {\n                address: sender.paymentAddr,\n                amount: {\n                    ...txOut_amount_sender,\n                    lovelace: txOut_amount_sender.lovelace - cardano.toLovelace(MIN_ADA)\n                }\n            },\n            {\n                address: receiver,\n                amount: {\n                    lovelace: cardano.toLovelace(MIN_ADA),\n                    ...txOut_amount_receiver\n                }\n            }\n        ]\n    }\n\n    const raw = cardano.transactionBuildRaw(txInfo)\n\n    const fee = cardano.transactionCalculateMinFee({\n        ...txInfo,\n        txBody: raw,\n        witnessCount: 1\n    })\n\n    txInfo.txOut[0].amount.lovelace -= fee\n\n    const tx = cardano.transactionBuildRaw({ ...txInfo, fee })\n\n    const txSigned = cardano.transactionSign({\n        txBody: tx,\n        signingKeys: [sender.payment.skey]\n    })\n\n    const txHash = cardano.transactionSubmit(txSigned)\n\n    console.log(txHash)\n}\n\nsendAssets({\n    receiver: "addr1qylm539axczhyvdh90f6c09ptrz8asa4hgq8u5shkw3v9vjae9ftypmc8tmd2rrwngdxm4sr3tpzmxw4zyg3z7vttpwsl0alww",\n    assets: assets.map(asset => asset.id)\n})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node src/send-multiple-assets-back-to-wallet.js\n")))}u.isMDXComponent=!0}}]);