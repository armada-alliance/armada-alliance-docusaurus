"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[3427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},o="Part 1: Getting your Raspberry Pi (rpi) Setup",l={unversionedId:"ergo-developer-guides/part1-raspi-setup",id:"ergo-developer-guides/part1-raspi-setup",title:"Part 1: Getting your Raspberry Pi (rpi) Setup",description:"Time Allotment:",source:"@site/docs/ergo-developer-guides/part1-raspi-setup.md",sourceDirName:"ergo-developer-guides",slug:"/ergo-developer-guides/part1-raspi-setup",permalink:"/docs/ergo-developer-guides/part1-raspi-setup",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/ergo-developer-guides/part1-raspi-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Running an Ergo Full Node on a Headless Raspberry Pi",permalink:"/docs/ergo-developer-guides/"},next:{title:"Part 2: Ergo Full Node Setup",permalink:"/docs/ergo-developer-guides/part2-ergo-full-node"}},s={},p=[{value:"Full Kit Equipment",id:"full-kit-equipment",level:2},{value:"Operating System (OS) Flashing Setup",id:"operating-system-os-flashing-setup",level:2},{value:"Hardware Assembly &amp; Checking Pi IP Address",id:"hardware-assembly--checking-pi-ip-address",level:3},{value:"Getting into your rpi",id:"getting-into-your-rpi",level:3},{value:"Update the pi and config updates",id:"update-the-pi-and-config-updates",level:3},{value:"External Hardware Mounting if booting from the SD Card",id:"external-hardware-mounting-if-booting-from-the-sd-card",level:2},{value:"Find the external drive device name",id:"find-the-external-drive-device-name",level:4},{value:"delete the default partitions",id:"delete-the-default-partitions",level:4},{value:"Create new partition with desired file type",id:"create-new-partition-with-desired-file-type",level:4},{value:"create a new filesystem",id:"create-a-new-filesystem",level:4},{value:"mount the drive and ensure it mounts on restart",id:"mount-the-drive-and-ensure-it-mounts-on-restart",level:4},{value:"References:",id:"references",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"part-1-getting-your-raspberry-pi-rpi-setup"},"Part 1: Getting your Raspberry Pi (rpi) Setup"),(0,n.kt)("p",null,"Time Allotment:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1hr to order parts (if you don't have it). Estimate ~$200 USD."),(0,n.kt)("li",{parentName:"ul"},"1hr-3hr to execute (depending on skill level and snags)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rpi-bare-front-view.jpeg",src:a(4489).Z,width:"2210",height:"1578"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"full-kit-hardware",src:a(949).Z,width:"2911",height:"2434"})),(0,n.kt)("h2",{id:"full-kit-equipment"},"Full Kit Equipment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Micro SD card 8Gb+ & Adapter, ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/s?k=micro+sd+card&rh=n%3A516866%2Cp_n_feature_two_browse-bin%3A6518304011&crid=YXIYMGJA97E7&nav_sdd=aps&rnid=6518301011&sprefix=micro+sd+card&ref=nb_sb_ss_w_sbl-tr-t1_micro-sd-card_k0_1_13_2"},"Recommend: Amazon 32gb card ~$15"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See rpi docs for sd cards ",(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/documentation/computers/getting-started.html#sd-cards-for-raspberry-pi"},"here")),(0,n.kt)("li",{parentName:"ul"},"Check your computer for an SD Flash Drive slot (else you'll need to buy an external usb ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Reader-uni-Adapter-Aluminum-Memory/dp/B08P1T8R46/ref=sr_1_2?crid=2DL6CI2GH2MEM&keywords=sd%2Bcard%2Bexternal%2Bloader&qid=1694879165&sprefix=sd%2Bcard%2Bexternal%2Bloade%2Caps%2C121&sr=8-2&th=1"},"loader"),")."))),(0,n.kt)("li",{parentName:"ol"},"Raspberry Pi 3b+ or 4 (tutorial is on a 3b+), ",(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/products/"},"Pi Shop"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Raspberry-Model-2019-Quad-Bluetooth/dp/B07TC2BK1X/ref=sr_1_3?crid=3KZWTBP69R65N&keywords=raspberry%2Bpi&qid=1694884282&sprefix=raspberry%2Bpi%2Caps%2C138&sr=8-3&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&th=1"},"Recommend: Amazon Pi 4 ~$70"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"I would probably go with a Pi 4 and 4-to-8GB RAM. The 4s also seem like they are in stock, 3b+ have been sold out."),(0,n.kt)("li",{parentName:"ul"},"You might need a ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/s?k=ethernet+cord+1ft&i=computers&rh=n%3A172463%2Cp_n_feature_ten_browse-bin%3A23555330011&dc&ds=v1%3AIBQGTMGU7%2BnNpwAG01LyZDeAYOOPSm0prjnrjrhh%2ByM&crid=1Z6K45XA6F1R4&qid=1694885121&rnid=23555276011&sprefix=ethernet+cord+1f%2Ccomputers%2C124&ref=sr_nr_p_n_feature_ten_browse-bin_2"},"1ft USB cord")," if the rpi is close to your router, recommend hard line connection, though wifi is okay too "))),(0,n.kt)("li",{parentName:"ol"},"External Solid State Drive (SSD) memory, ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Crucial-MX500-NAND-SATA-Internal/dp/B078211KBB/ref=d_pd_sim_sccl_4_1/147-8461889-8258503?pd_rd_w=58YeQ&content-id=amzn1.sym.2351c4aa-bb60-45da-95b0-d52caf1c26f1&pf_rd_p=2351c4aa-bb60-45da-95b0-d52caf1c26f1&pf_rd_r=PJW12MM5M27HTY3TJ7VH&pd_rd_wg=FyYif&pd_rd_r=46296c39-6582-4147-9883-869c83e46687&pd_rd_i=B078211KBB&th=1"},"Recommend: Amazon SATA SSD 1Tb ~$80")),(0,n.kt)("li",{parentName:"ol"},"SSD Case & Cord, ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/ORICO-External-Enclosure-Support-Tool-Free/dp/B01LY97QE8/ref=d_pd_sim_sccl_4_26/147-8461889-8258503?pd_rd_w=v30UK&content-id=amzn1.sym.2351c4aa-bb60-45da-95b0-d52caf1c26f1&pf_rd_p=2351c4aa-bb60-45da-95b0-d52caf1c26f1&pf_rd_r=CR5YJYDZ5K5ZMD98S98P&pd_rd_wg=t811H&pd_rd_r=b3838bb0-cdd9-45fa-81ff-c03d3fbba4cb&pd_rd_i=B01LY97QE8&th=1"},"Recommend: Amazon ORICO 2.5'' External Hard Drive Enclosure ~$7")),(0,n.kt)("li",{parentName:"ol"},"Raspberry Pi Power Cord, ",(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/products/type-c-power-supply/"},"Pi 4 Shop recommended ~$8"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Be careful! The Pi 3b+ has a different power cord than the Pi 4! The Pi 4 requires more power."),(0,n.kt)("li",{parentName:"ul"},"However, the Pi 4 power has a USB-C that can be used on the 3b+, I use it and works fine."))),(0,n.kt)("li",{parentName:"ol"},"Raspberry Pi Case, ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Flirc-Raspberry-Case-Gen2-Model/dp/B07349HT26/ref=sr_1_15?crid=355HS8YRL4UE8&keywords=raspberry%2Bpi%2Bcase%2Bmetal&qid=1694885842&s=pc&sprefix=raspberry%2Bpi%2Bcase%2Bmetal%2Ccomputers%2C124&sr=1-15&th=1"},"Recommend Amazon Flirc metal case"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Just make sure the case is a good heat sink, has a fan, or airflow.")))),(0,n.kt)("h1",{id:"setup--configuration"},"Setup & Configuration"),(0,n.kt)("h2",{id:"operating-system-os-flashing-setup"},"Operating System (OS) Flashing Setup"),(0,n.kt)("p",null,'This part covers "flashing" (writing) the raspberry pi Operating System (OS) into firmware memory.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\ud83d\udca1 HEADS-UP: The first tutorial trials flashed the OS right to the SD Card. It quickly became apparent the RAM & Log storage filled up the SD Card memory (30MB). In fact, you can actually flash and boot up right into the external USB storage drive, no mounting required either!")),(0,n.kt)("p",null,"Download the ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager"),"."),(0,n.kt)("p",null,"You could follow the ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/getting-started.html#installing-the-operating-system"},"Raspberry Pi Documentation: Installing the Operating System"),", however I found watching the following youtube video much more helpful and easier to get an idea of what we're doing: ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/wQJqwGVNHTM?si=GzJZh4_am2cLS1gL"},"Youtube: Headless Raspberry Pi Zero Setup"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Raspberry Pi Imager GUI"),(0,n.kt)("li",{parentName:"ul"},"Choose Raspberry Pi OS ",(0,n.kt)("strong",{parentName:"li"},"Lite"),' 64bit under "Raspberry Pi OS (other)"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"32-bit is the safe option. Seems 64bit OS is compatible and tested with the 3b+"),(0,n.kt)("li",{parentName:"ul"},"Lite for headless (no Desktop GUIs)"))),(0,n.kt)("li",{parentName:"ul"},"Plug in the external USB storage drive"),(0,n.kt)("li",{parentName:"ul"},"Choose the external memory to write to in the rpi GUI"),(0,n.kt)("li",{parentName:"ul"},"Bottom right click gear for advanced settings options"),(0,n.kt)("li",{parentName:"ul"},"Set hostname, rename raspberrypi to ",(0,n.kt)("strong",{parentName:"li"},'"headless"'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"you can use your own username but the headless is used in this tutorial"))),(0,n.kt)("li",{parentName:"ul"},"Yes Enable SSH"),(0,n.kt)("li",{parentName:"ul"},'Yes "Use password authentication"'),(0,n.kt)("li",{parentName:"ul"},"Fill in username and password to login to the rpi."),(0,n.kt)("li",{parentName:"ul"},"Update username to ",(0,n.kt)("strong",{parentName:"li"},'"pi"')," (or whatever name you want but pi is used here)"),(0,n.kt)("li",{parentName:"ul"},"Yes Enable it to connec to the wifi",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Note SSID is home "wifi name"'),(0,n.kt)("li",{parentName:"ul"},"Type in the password"))),(0,n.kt)("li",{parentName:"ul"},"Save"),(0,n.kt)("li",{parentName:"ul"},"Write")),(0,n.kt)("p",null,"The first time takes a few minutes, grab a coffee \u2615"),(0,n.kt)("h3",{id:"hardware-assembly--checking-pi-ip-address"},"Hardware Assembly & Checking Pi IP Address"),(0,n.kt)("p",null,"Assembly the rpi and connect it to your router. Trust me this saves time because you'll check your router for headless.local IP address. "),(0,n.kt)("p",null,"However, upon boot up it should connect on your wifi, and from your router page, you should be able to find it connected. (Type in your router 192.168.XXX.YYY into your browser)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Put the pi in the case"),(0,n.kt)("li",{parentName:"ul"},"Connect the flashed memory into in rpi"),(0,n.kt)("li",{parentName:"ul"},"Connect the rpi to power"),(0,n.kt)("li",{parentName:"ul"},"Connect it to your Internet Router hardlined via ethernet connection (easier to troubleshoot, can do wifi later)"),(0,n.kt)("li",{parentName:"ul"},"Put the SSD Drive into the case, but do not connect it to the rpi yet!"),(0,n.kt)("li",{parentName:"ul"},"Pi takes about 5 minutes to boot up. Wait 5 minutes before trying to ssh in.")),(0,n.kt)("h3",{id:"getting-into-your-rpi"},"Getting into your rpi"),(0,n.kt)("p",null,"Now this part can be daunting, but let's dive in."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open terminal (use your mac or windows search, type in terminal)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Unfamilar? Youtube "command line terminal tutorial <your_operating_system_here>" (e.g. command line terminal tutorial macos) ')))),(0,n.kt)("p",null,"Secure shell into the rpi, if setup correctly this should work."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh pi@headless.local\n")),(0,n.kt)("p",null,"Recall ",(0,n.kt)("inlineCode",{parentName:"p"},"pi")," is the username and ",(0,n.kt)("inlineCode",{parentName:"p"},"headless.local")," is the IP address."),(0,n.kt)("p",null,'If you get this warning "WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!" Odds are you already have known ssh keys into the pi. You\'ll need to delete them and basically start fresh.'),(0,n.kt)("p",null,"cd to home, then cd into the hidden ",(0,n.kt)("inlineCode",{parentName:"p"},".ssh")," folder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd\ncd .ssh\n")),(0,n.kt)("p",null,"Next you'll open the known_hosts folder which keeps the username public keys. You'll then delete all the former ",(0,n.kt)("a",{parentName:"p",href:"mailto:pi@headless.local"},"pi@headless.local")," logins"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano known_hosts\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl+k")," on the lines with headless to wipe them out (nice little trick)."),(0,n.kt)("p",null,"If there are still ssh failed attempts, in terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- cd //to home folder (directory)\n- cd .ssh //directories with a dot in front are hidden\n- nano known_hosts //to check ssh connections\n- (need to troubleshoot further...)\n- ssh? [Article: What is SSH?](https://www.makeuseof.com/what-is-ssh/)\n")),(0,n.kt)("h3",{id:"update-the-pi-and-config-updates"},"Update the pi and config updates"),(0,n.kt)("p",null,"Update & upgrade the pi packages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get upgrade \n")),(0,n.kt)("p",null,"This is where most of the configuration is done for the rpi. Feel free to explore it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo raspi-config\n")),(0,n.kt)("p",null,"Congrats! That's it (much easier to boot right from the external memory, already mounted and partitioned)."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"external-hardware-mounting-if-booting-from-the-sd-card"},"External Hardware Mounting if booting from the SD Card"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"IF"))," you chose the hard route, flashing and booting from the SD Card and using a separate external USB memory storage, you'll have to perform these steps."),(0,n.kt)("p",null,"This is to allow the external SSD drive memory to be attached and not freeze the rpi. This does not come default in Lite."),(0,n.kt)("p",null,"You'll probably notice your rpi did not boot up if you booted from the SD Card and have the external memory already connected."),(0,n.kt)("p",null,"You'll need to reboot (remove power) and disconnect the USB memory. Then start up."),(0,n.kt)("p",null,"This is a little involved so prepare yourself for battle!"),(0,n.kt)("p",null,"=====Mounting Hard Drive===="),(0,n.kt)("h4",{id:"find-the-external-drive-device-name"},"Find the external drive device name"),(0,n.kt)("p",null,"Lists all memory disks and partitions. More on ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/Fdisk"},"fdisk"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fdisk -l\n")),(0,n.kt)("p",null,"The SATA SSD external memory here is ",(0,n.kt)("inlineCode",{parentName:"p"},"Disk /dev/sda: 931.51 GiB"),". It is identified as ",(0,n.kt)("inlineCode",{parentName:"p"},"/dev/sda"),"."),(0,n.kt)("p",null,"It is by default listed with two partitions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Device      Start        End    Sectors   Size Type\n/dev/sda 409640 1953525127 1953115488 931.3G ext4\n")),(0,n.kt)("p",null,"Now we need to delete the partitions and create a new one with a desirable file storage type ext4 just in case it's not already ext4."),(0,n.kt)("h4",{id:"delete-the-default-partitions"},"delete the default partitions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fdisk /dev/sda\n")),(0,n.kt)("p",null,'You should see "Welcome to fdisk (util-linus version)"'),(0,n.kt)("p",null,"Type in ",(0,n.kt)("inlineCode",{parentName:"p"},"d")," to delete the partitions (repeat until they are all gone). "),(0,n.kt)("p",null,"Hit enter to default select the partition to delete."),(0,n.kt)("h4",{id:"create-new-partition-with-desired-file-type"},"Create new partition with desired file type"),(0,n.kt)("p",null,"Type in ",(0,n.kt)("inlineCode",{parentName:"p"},"n")," to create a new partition."),(0,n.kt)("p",null,"Hit enter for default 3 times"),(0,n.kt)("p",null,"You should see \"Created a new partition 1 of type 'Linux filesystem' and of size 931.5 GiB.\""),(0,n.kt)("p",null,"To check, type in ",(0,n.kt)("inlineCode",{parentName:"p"},"p")," for partition. Mine looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Command (m for help): p\nDisk /dev/sda: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors\nDisk model: 500SSD1         \nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 4096 bytes\nI/O size (minimum/optimal): 4096 bytes / 4096 bytes\nDisklabel type: gpt\nDisk identifier: A59F918E-3EBE-445F-8E0D-951CD93129C8\n\nDevice     Start        End    Sectors   Size Type\n/dev/sda1   2048 1953525134 1953523087 931.5G Linux filesystem\n")),(0,n.kt)("p",null,"To confirm, type in ",(0,n.kt)("inlineCode",{parentName:"p"},"w")," to write this to disk."),(0,n.kt)("p",null,'You should see "The partition table has been altered."'),(0,n.kt)("p",null,"To check:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fdisk -l\n")),(0,n.kt)("p",null,"My final version looks like this. Note the ",(0,n.kt)("inlineCode",{parentName:"p"},"dev/sda1")," Device name and ",(0,n.kt)("inlineCode",{parentName:"p"},"Disk identifier")," number. We'll need those later:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Disk /dev/sda: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors\nDisk model: 500SSD1         \nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 4096 bytes\nI/O size (minimum/optimal): 4096 bytes / 4096 bytes\nDisklabel type: gpt\nDisk identifier: A59F918E-3EBE-445F-8E0D-951CD93129C8\n\nDevice     Start        End    Sectors   Size Type\n/dev/sda1   2048 1953525134 1953523087 931.5G Linux filesystem\n")),(0,n.kt)("h4",{id:"create-a-new-filesystem"},"create a new filesystem"),(0,n.kt)("p",null,"What is a filesystem? ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/File_systems#Create_a_file_system"},"Arch Linux, filesystem, wiki"),", a goto resource says:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"In computing, a file system or filesystem controls how data is stored and retrieved. Without a file system, information placed in a storage medium would be one large body of data with no way to tell where one piece of information stops and the next begins. By separating the data into pieces and giving each piece a name, the information is easily isolated and identified." \n')),(0,n.kt)("p",null,"Let's make the filesystem of storage an ",(0,n.kt)("inlineCode",{parentName:"p"},"ext4")," type compatible with rpi OS / linux."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkfs -t ext4 /dev/sda1\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"dev/sda1")," is the new partition name pointer."),(0,n.kt)("h4",{id:"mount-the-drive-and-ensure-it-mounts-on-restart"},"mount the drive and ensure it mounts on restart"),(0,n.kt)("p",null,'If not already create, make a "mount" /mnt directory, and name a file within, here hd1 for harddrive1.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /mnt/hd1\n")),(0,n.kt)("p",null,"Next, change the permissions or ownership of the folder from super user root to regular user. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown $USER:$USER /mnt/hd1\n")),(0,n.kt)("p",null,"Note: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/chown"},"chmod"),' is the command to "change owner" or access to file systems.'),(0,n.kt)("li",{parentName:"ul"},"pi:pi in this tutorial is specific for user:user, where user:user is the general case. If not sure, type in ",(0,n.kt)("inlineCode",{parentName:"li"},"users")," in terminal.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo blkid\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man8/blkid.8.html"},"blkid")," locates or prints block devices. A ",(0,n.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/259193/what-is-a-block-device"},"block device"),' reads/writes to memory one "block" at a time.'),(0,n.kt)("p",null,"Grab the ",(0,n.kt)("inlineCode",{parentName:"p"},"/dev/sda1")," UUID #"),(0,n.kt)("p",null,"Here's what my output looks like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'pi@headless:/mnt $ sudo blkid\n/dev/mmcblk0p1: LABEL_FATBOOT="bootfs" LABEL="bootfs" UUID="9E81-4F92" BLOCK_SIZE="512" TYPE="vfat" PARTUUID="2ac7bef0-01"\n/dev/mmcblk0p2: LABEL="rootfs" UUID="cf2895ca-6dc2-4797-8040-f76ba1508f41" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="2ac7bef0-02"\n/dev/zram0: UUID="9ba6ae2f-9e71-4ee1-84f3-b5a32d78cf7f" TYPE="swap"\n/dev/sda1: UUID="38e049f5-e511-49a3-a784-f8dad186303c" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="17672728-73c0-ad44-b194-941fcccad345"\n')),(0,n.kt)("p",null,"Specifically ",(0,n.kt)("inlineCode",{parentName:"p"},"38e049f5-e511-49a3-a784-f8dad186303c")),(0,n.kt)("p",null,"Time to mount. What is mounting a drive? ",(0,n.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/3192/what-is-meant-by-mounting-a-device-in-linux"},"Stackexchange")," says:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"Mounting is the act of associating a storage device to a particular location in the directory tree."\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/fstab\n")),(0,n.kt)("p",null,"This gets inside the file to locate the mounted memory storage partition."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/Fstab"},"fstab")," is used to define how disk partitions, various other block devices, or remote file systems should be mounted into the file system."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"UUID=<UUID_number_here> /mnt/hd1 ext4 nosuid,nodev,nofail 0 1\n")),(0,n.kt)("p",null,"For me it is ",(0,n.kt)("inlineCode",{parentName:"p"},"UUID=38e049f5-e511-49a3-a784-f8dad186303c /mnt/hd1 ext4 nosuid,nodev,nofail 0 1")),(0,n.kt)("p",null,"nofail allows the server to boot if the drive is not inserted. Similar for the others."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mount -a\n")),(0,n.kt)("p",null,"To execute everything in the fstab file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"lsblk\n")),(0,n.kt)("p",null,"Lists the memory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pi@headless:~ $ lsblk\nNAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda           8:0    0 931.5G  0 disk \n\u2514\u2500sda1        8:1    0 931.5G  0 part /mnt/hd1\nmmcblk0     179:0    0  29.8G  0 disk \n\u251c\u2500mmcblk0p1 179:1    0   256M  0 part /boot\n\u2514\u2500mmcblk0p2 179:2    0  29.6G  0 part /\nzram0       254:0    0   5.7G  0 disk [SWAP]\n")),(0,n.kt)("p",null,"sda1 looks good"),(0,n.kt)("p",null,"To check the read write works"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /mnt/hd1/\ntouch test \n")),(0,n.kt)("p",null,"you'll get ",(0,n.kt)("inlineCode",{parentName:"p"},"touch: cannot touch 'test': Permission denied")),(0,n.kt)("p",null,"so ",(0,n.kt)("inlineCode",{parentName:"p"},"cd")," up a level and change mode on the directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\nsudo chmod -R 777 hd1 \n")),(0,n.kt)("p",null,"changes permissions in directory hd1 to read write "),(0,n.kt)("p",null,"To test it works"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd hd1 \ntouch test\n")),(0,n.kt)("p",null,"it should work now"),(0,n.kt)("p",null,"too make sure, we need to reboot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo reboot now \n")),(0,n.kt)("p",null,"ssh back in (takes 1-3 minutes to reboot)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh pi@headless.local\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /mnt/hd1 \ntouch test2\nls\n")),(0,n.kt)("p",null,'If you see "test" and "test2", you did it right.'),(0,n.kt)("p",null,"Now, the last thing is to make sure the newly mounted filesystems are read-write."),(0,n.kt)("p",null,"type in ",(0,n.kt)("inlineCode",{parentName:"p"},"mount"),' to see everything mounted and the "rw" for read-write.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mount\n")),(0,n.kt)("p",null,"You should see /dev/sda1 and read-write (rw) capable:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/dev/sda1 on /mnt/hd1 type ext4 (rw,nosuid,nodev,relatime)")),(0,n.kt)("p",null,"If it's not rw, make the mounting directory read-write:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mount -o remount,rw /mnt/hd1\n")),(0,n.kt)("p",null,"This enables you to move files from the home directory to the mounted sda1 storage in ",(0,n.kt)("inlineCode",{parentName:"p"},"/mnt/hd1")),(0,n.kt)("p",null,"Congrats! You made it. No small feat."),(0,n.kt)("h3",{id:"references"},"References:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/eQZdPlMH-X8?si=my9CWTv5gJ82yXq_"},"Youtube, Connect a HardDrive / USB Stick on a RaspberryPi (From Terminal) | 4K TUTORIAL, by SpaceRex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://armada-alliance.com/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/core-online#mount-the-drive-at-boot"},"Armada Alliance Doc, Pi-Node, Mount the drive at boot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.digikey.com/en/maker/blogs/2022/how-to-connect-a-drive-hddssd-to-a-raspberry-pi-or-other-linux-computers"},"Digikey how to mount an external harddrive"))))}m.isMDXComponent=!0},4489:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rpi-bare-front-view-86cce8fc0895667dfdb04da3b1b77566.jpeg"},949:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rpi-finished-seperate-top-view-94f680dc1ff082050be53c46e996f94d.jpeg"}}]);