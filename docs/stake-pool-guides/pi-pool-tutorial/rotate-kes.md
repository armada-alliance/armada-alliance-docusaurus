

# Rotate KES

:::info

You only generate a new KES pair and opcert if you have made a block in the previous KES period. It used to be you would rotate within the 92 days regardless but this has changed. Counter starts at 0 and only increments if a block has been forged.

It is best to rename the old **kes.vkey**, **kes.skey** & **node.cert** files beforehand. Append the date. I tend to use mv instead of cp. This way I do not start creating copies of files.

:::

:::caution

You only need **kes.skey**, **node.cert** and **vrf.skey** on your Core node.

:::

Determine KES period by querying current slot number divided by slots per KES period found in genesis file.


```bash title="Core"
cd $NODE_HOME
slotNo=$(cardano-cli query tip --mainnet | jq -r '.slot')
slotsPerKESPeriod=$(cat $NODE_FILES/mainnet-shelley-genesis.json | jq -r '.slotsPerKESPeriod')
kesPeriod=$((${slotNo} / ${slotsPerKESPeriod}))
startKesPeriod=${kesPeriod}
echo startKesPeriod: ${startKesPeriod}
```

Generate a new KES key pair.


```bash title="Core"
cardano-cli node key-gen-KES \
  --verification-key-file kes.vkey \
  --signing-key-file kes.skey
```


Move **kes.vkey** to your **Cold Offline** machine & issue a new node.cert.


```bash title="Cold Offline"
cd $NODE_HOME
chmod u+rwx $HOME/cold-keys
cardano-cli node issue-op-cert \
  --kes-verification-key-file kes.vkey \
  --cold-signing-key-file $HOME/cold-keys/node.skey \
  --operational-certificate-issue-counter $HOME/cold-keys/node.counter \
  --kes-period <startKesPeriod> \
  --out-file node.cert
chmod a-rwx $HOME/cold-keys
```



:::caution

The cold.counter in your cold-keys folder keeps track of how many times you have rotated your kes pair.

:::

Move **node.cert** back to Core & restart the cardano-service.


```bash title="Core"
cardano-service restart
```