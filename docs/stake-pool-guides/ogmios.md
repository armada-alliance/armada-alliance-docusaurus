# Setup guide for Ogmios proxied through Nginx with basic auth without TLS

:::caution Basic auth without TLS
This guide is not going to cover Nginx with TLS. Be aware that sending the basic auth username and password to Nginx will be clear text over the wire. For TLS with certbot and Nginx you will need a DNS name. This is a simple protection to prevent abuse. Use a simple password and know it can be read by 5 eyes.

:::

Grab the latest Ogmios binary here for your systems architecture.

[Ogmios latest release](https://github.com/CardanoSolutions/ogmios/releases)

Put it somewhere in system PATH. I use ~/.local/bin but you can put the binary in the same folder you keep cardano-node binary. This is what I'll use in this guide. Update accordingly.

### Make sure ~/.local/bin exists and grab the binary.

```
mkdir ~/.local/bin
mkdir ~/tmp
cd ~/tmp

# Replace URL with current release/architecture link.
wget https://github.com/CardanoSolutions/ogmios/releases/download/v6.3.0/ogmios-v6.3.0-aarch64-linux.zip
unzip ogmios-*
mv ~/tmp/ogmios/bin/ogmios ~/.local/bin
chmod +x ~/.local/bin/ogmios
```

Add ~/.local/bin to the users PATH

```
cd ~/.local/bin; echo "export PATH=\"$PWD:\$PATH\"" >> $HOME/.bashrc
source ~/.bashrc
```

## Confirm Ogmios is in PATH

```
ogmios version
```

### Create startup script & systemd unit file

Create a startup script for Ogmios edit below to correct socket and config.json locations.

```
nano ${HOME}/.local/bin/ogmios-service
```

```
#!/bin/bash
ogmios --host 127.0.0.1 --node-socket <path to cardano node socket> --node-config <path to cardano node config.json>
```

Make it executable.

```
chmod +x ${HOME}/.local/bin/ogmios-service

```

Test it. ctrl+c to exit.

```
${HOME}/.local/bin/ogmios-service

```

## Create the systemd unit file.

```
sudo tee /etc/systemd/system/ogmios.service <<EOF
# Ogmios Service
[Unit]
Description=Ogmios Service
After=network.target

[Service]
User=${USER}
ExecStart=/bin/bash -c "PATH=${HOME}/.local/bin:\$PATH exec ${HOME}/.local/bin/ogmios-service"
Restart=always
RestartSec=10
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
EOF
```

Start the service, confirm its running.

```
sudo systemctl start daemon-reload
sudo systemctl start ogmios.service
journalctl -u ogmios.service -f
```

If everything looks good enable start at boot.

```
sudo systemctl enable ogmios.service
```

## Install Nginx & apache-utils

```
sudo apt install nginx
sudo apt install apache2-utils
```

### Create Basic Authentication File

Create a basic authentication file to secure access to the Ogmios server:

```shell
sudo htpasswd -c /etc/nginx/.ogmios <username>
sudo chmod 640 /etc/nginx/.ogmios
```


### Create Nginx server block

```
sudo tee /etc/nginx/sites-available/ogmios > /dev/null <<EOF
server {
    listen 80 default_server;  # Listen on port 80 and make this the default server

    access_log /var/log/nginx/ogmios.access.log;
    error_log /var/log/nginx/ogmios.online.error.log;

    add_header X-Proxy-Cache \$upstream_cache_status;

    location / {
        auth_basic "You Shall Not Pass";
        auth_basic_user_file /etc/nginx/.ogmios;
        proxy_pass http://127.0.0.1:1337;
        proxy_redirect off;
        include proxy_params;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
EOF

```

Link it to sites enabled.

```
sudo ln -s /etc/nginx/sites-available/ogmios /etc/nginx/sites-enabled/
```

Ensure Nginx is happy with it.

```
sudo nginx -t
```

If everything is ok..

```
sudo service nginx restart
```

Ensure port 80 is open in your firewall. You should then be able to enter the servers public IP in your browser.


