---
description: Turn Pi-Node into an active Cardano relay
keywords: [guides, cardano relay, cardano node, cardano stake pool, rasbperry pi, armada alliance, ubuntu]
---
# Pi-Relay

To turn Pi-Node into an active relay we have to follow the following steps:

## 1. Configure hostname

To set a fully qualified domain name (FQDN) for our relay edit /etc/hostname & /etc/hosts.

```bash title=">_ Terminal"
sudo nano /etc/hostname
```

Replace ubuntu with your desired FQDN.

```bash title=">_ Terminal"
r1.example.com
```

Save and exit.

```bash title=">_ Terminal"
sudo nano /etc/hosts
```

Edit the file accordingly, take note that you may not be using the 192.168.1.xxx IP range.

```bash title="/etc/hosts"
127.0.0.1 localhost
127.0.1.1 r1.example.com r1

# The following lines are desirable for IPv6 capable hosts
::1 ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
ff02::3 ip6-allhosts

```

Save and exit.

## 2. Network

### 2.1 Configure static IP

Open **50-cloud-init.yaml** and replace the contents of the file with below.

:::tip Netplan configuration examples

[Netplan configuration examples](https://netplan.io/examples/)

:::

:::caution

Be sure to use an address on your LAN subnet. In this example I am using **192.168.1.xxx**. Your network may very well be using a different private range.

:::

```bash title=">_ Terminal"
sudo nano /etc/netplan/50-cloud-init.yaml
```

```yaml title="/etc/netplan/50-cloud-init.yaml"
# This file is generated from information provided by the datasource.  Changes
# to it will not persist across an instance reboot.  To disable cloud-init's
# network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.151/24
      gateway4: 192.168.1.1
      nameservers:
# Home router IP & QUAD9 https://quad9.net/
          addresses: [192.168.1.1, 9.9.9.9, 149.112.112.112]

```

Create a file named **99-disable-network-config.cfg** to disable cloud-init.

```bash title=">_ Terminal"
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Add the following, save and exit.

```bash title="/etc/cloud/cloud.cfg.d/99-disable-network-config.cfg"
network: {config: disabled}
```

Apply your changes.

```
sudo netplan apply
```

### 2.2 Configure service port

Open the ~/.adaenv file and change the port it listens on. For R1 or my first relay I will designate port 3001.

```bash title=">_ Terminal"
nano $HOME/.adaenv
```

```bash title="~/.adaenv"
export NODE_PORT=3001
```

Save and exit. **ctrl+x then y**.

Enable cardano-service at boot & restart the service to load changes.

```bash title=">_ Terminal"
cardano-service enable
cardano-service restart
```

### 2.3 Forward port on router

:::danger

Do not forward a port to your Core machine it only connects to your relay(s) on your LAN.

:::

Log into your router and forward port 3001 to your relay nodes LAN IPv4 address port 3001. Second relay forward port 3002 to LAN IPv4 address for relay 2 to port 3002.

### 2.4 Topology Updater

```bash title=">_ Terminal"
cd $NODE_HOME/scripts
```

Configure the script to match your environment.

:::caution

If you are using IPv4 leave CNODE_HOSTNAME the way it is. The service will pick up your public IP address on it's own. I repeat only change the port to 3001. For DNS change only the first instance. Do not edit "CHANGE ME" further down in the file.

:::

```bash title=">_ Terminal"
cd ${NODE_HOME}/scripts/
```

```bash title=">_ Terminal"
nano topologyUpdater.sh
```

Run the updater once to confirm it is working.

```bash title=">_ Terminal"
./topologyUpdater.sh
```

Should look similar to this.

> `{ "resultcode": "201", "datetime":"2021-05-20 10:13:40", "clientIp": "1.2.3.4", "iptype": 4, "msg": "nice to meet you" }`


## 3. Enable cron job

Enable the cron job by removing the # character from crontab.

```bash title=">_ Terminal"
crontab -e
```

```bash title="crontab"
33 * * * * /home/ada/pi-pool/scripts/topologyUpdater.sh
```

Save and exit.

## 4. Wait for service on boarding (4 hours).

After four hours of on boarding your relay(s) will start to be available to other peers on the network. **topologyUpdater.sh** will create a list in $\{NODE_HOME}/logs.

## 5. Prune list of best (8) peers.

Open your topolgy file and use **ctrl+k** to cut the entire line of any peer over 5,000 miles away.

:::caution

Remember to remove the last entries comma in your list or cardano-node will fail to start.

:::

```bash title=">_ Terminal"
nano ${NODE_HOME}/files/${NODE_CONFIG}-topology.json
```

## 6. Enable blockfetch tracing

```bash title=">_ Terminal"
sed -i ${NODE_FILES}/mainnet-config.json \
    -e "s/TraceBlockFetchDecisions\": false/TraceBlockFetchDecisions\": true/g"
```

Reboot your new relay and let it sync back to the tip of the chain.

Use gLiveView.sh to view peer info.

```bash title=">_ Terminal"
cd /home/ada/pi-pool/scripts
./gLiveView.sh
```

Many operators block icmp syn packets(ping) because of a security flaw that was patched a decade ago. So expect to see --- for RTT because we are not receiving a response from that server.

More incoming connections is generally a good thing, it increases the odds that you will get network data sooner. Though you may want to put a limit on how many connect. The only way to stop incoming connections would be to block the IPv4 address with ufw.

## 7. Edit the alias name for Prometheus

Last thing we can do is change the alias name Prometheus is serving to Grafana. You will have to go into Grafana and edit the panels alias accordingly as well.

```bash title=">_ Terminal"
sudo nano /etc/prometheus/prometheus.yml
```

:::caution


In an upcoming guide I will show how to have Prometheus running on a separate Pi scraping data from the pool instead of having Prometheus using system resources on those machines.

For now you can change the alias name Prometheus is serving to Grafana:


>  alias: 'N1'


to

> alias: 'R1'


:::

:::danger 

This is a yaml file and indentation has to be correct.

:::


```bash title="/etc/prometheus/prometheus.yml"
global:
  scrape_interval:     15s # By default, scrape targets every 15 seconds.

  # Attach these labels to any time series or alerts when communicating with
  # external systems (federation, remote storage, Alertmanager).
  external_labels:
    monitor: 'codelab-monitor'

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label job=<job_name> to any timeseries scraped from this config.
  - job_name: 'Prometheus' # To scrape data from the cardano node
    scrape_interval: 5s
    static_configs:
#      - targets: ['<CORE PRIVATE IP>:12798']
#        labels:
#          alias: 'C1'
#          type:  'cardano-node'
#      - targets: ['<RELAY PRIVATE IP>:12798']
#        labels:
#          alias: 'R1'
#          type:  'cardano-node'
      - targets: ['localhost:12798']
        labels:
          alias: 'R1'
          type:  'cardano-node'

#      - targets: ['<CORE PRIVATE IP>:9100']
#        labels:
#          alias: 'C1'
#          type:  'node'
#      - targets: ['<RELAY PRIVATE IP>:9100']
#        labels:
#          alias: 'R1'
#          type:  'node'
      - targets: ['localhost:9100']
        labels:
          alias: 'R1'
          type:  'node'
```

Update, save and exit.

## 8. Reboot

Reboot the server and give it a while to sync back up. That is just about it. Please feel free to join our Telegram channel for support. [https://t.me/armada_alli](https://t.me/armada_alli)
