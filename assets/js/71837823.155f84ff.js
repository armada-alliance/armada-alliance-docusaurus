"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4498],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1920:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={description:"Create a Telegram bot and group to be used as an alert notification channel within Grafana"},s="Grafana Alerts with Telegram",d={unversionedId:"stake-pool-guides/grafana-alerts-with-telegram",id:"stake-pool-guides/grafana-alerts-with-telegram",title:"Grafana Alerts with Telegram",description:"Create a Telegram bot and group to be used as an alert notification channel within Grafana",source:"@site/docs/stake-pool-guides/grafana-alerts-with-telegram.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/grafana-alerts-with-telegram",permalink:"/docs/stake-pool-guides/grafana-alerts-with-telegram",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/grafana-alerts-with-telegram.md",tags:[],version:"current",frontMatter:{description:"Create a Telegram bot and group to be used as an alert notification channel within Grafana"},sidebar:"tutorialSidebar",previous:{title:"CNCLI Leader Logs",permalink:"/docs/stake-pool-guides/leader-logs"},next:{title:"Add adapools Metrics to Grafana",permalink:"/docs/stake-pool-guides/add-adapools-info-to-grafana"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Telegram bot",id:"create-a-telegram-bot",level:3},{value:"Create a Telegram group",id:"create-a-telegram-group",level:3},{value:"Add your bot to the new group",id:"add-your-bot-to-the-new-group",level:3},{value:"Find your groups Chat ID",id:"find-your-groups-chat-id",level:3},{value:"Create a notification channel in Grafana",id:"create-a-notification-channel-in-grafana",level:2},{value:"Add profile image for your bot",id:"add-profile-image-for-your-bot",level:3},{value:"Add a dashboard for monitoring",id:"add-a-dashboard-for-monitoring",level:2}],p={toc:u};function h(e){var a=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grafana-alerts-with-telegram"},"Grafana Alerts with Telegram"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Prometheus data source working in Grafana & a Telegram account. To get alerts it is best to have Grafana on a Pi in another location or on a vps. This way if your internet goes down you will still be alerted."),(0,o.kt)("p",null,"What I do is connect Grafana to a Prometheus endpoint through a Wireguard VPN on my core. I have a local Grafana and a remote Grafana using the same data source. One dashboard on the remote Grafana has alerts that use Telegram."),(0,o.kt)("h3",{id:"create-a-telegram-bot"},"Create a Telegram bot"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/botfather"},"https://t.me/botfather")," in Telegram and create a new bot and give it a name and username, then copy your API access token."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"/newbot"),(0,o.kt)("p",{parentName:"blockquote"},"Grafana","_","Alerts"),(0,o.kt)("p",{parentName:"blockquote"},"my","_","_","pool","_","_","bot")),(0,o.kt)("p",null,"Something like that. Get creative."),(0,o.kt)("h3",{id:"create-a-telegram-group"},"Create a Telegram group"),(0,o.kt)("p",null,"In Telegram you can create a group by clicking on the \ud83d\udcddsymbol next to the search bar. You can go back and add an image and change the name later."),(0,o.kt)("h3",{id:"add-your-bot-to-the-new-group"},"Add your bot to the new group"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Return to Bot Father if you need a link to your bot or if you need the api token."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://t.me/botfather"},"https://t.me/botfather")))),(0,o.kt)("p",null,"Open botfather Follow the t.me link to your bot. Start to enable the bot and click on the three dots and 'Add to Group'. Add your bot to your new group."),(0,o.kt)("h3",{id:"find-your-groups-chat-id"},"Find your groups Chat ID"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may have to post in your new group if you cannot find the chat.id that starts with a - sign. Also Firefox displays the json returned in an easier to read format than Chrome."))),(0,o.kt)("p",null,"Paste your bots API token into the url below. Determine your Chat ID. Starts with - sign like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://api.telegram.org/bot\\<YOUR BOT API TOKEN>/getUpdates\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ID will start with a - sign like above",src:t(7849).Z,width:"570",height:"753"})),(0,o.kt)("h2",{id:"create-a-notification-channel-in-grafana"},"Create a notification channel in Grafana"),(0,o.kt)("p",null,"Click the bell icon in Grafanas left hand vertical menu and choose notification channels. Choose 'Add channel'. Give it a name and choose Telegram under type. Enter the token and the chat id value you copied earlier. Click test and you should get a green 'test notification sent' and a message in your new group. If so go ahead and click save."),(0,o.kt)("h3",{id:"add-profile-image-for-your-bot"},"Add profile image for your bot"),(0,o.kt)("p",null,"Return to ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/botfather"},"botfather")," and type /setuserpic choose your bot and click the paperclip icon to choose the image."),(0,o.kt)("h2",{id:"add-a-dashboard-for-monitoring"},"Add a dashboard for monitoring"),(0,o.kt)("p",null,"Grafana Alerts are only available for 'time series' & 'graph (old)' type panels, not always how we would look at the data. Let's create a new dashboard with graph type panels we need for alerts."),(0,o.kt)("p",null,"I am currently working on an alerts dashboard that can be added to Grafana and will add it to the dashboards repo when it is ready. Please feel free to share your dashboard with the alliance."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Collection of Armada Alliance Dashboards")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/armada-alliance/dashboards"},"https://github.com/armada-alliance/dashboards")))))}h.isMDXComponent=!0},7849:function(e,a,t){a.Z=t.p+"assets/images/alert.chat.id-b73e260d697daa30bc56d511cfd6779f.png"}}]);