---
title: VPN 搭建
date: 2019-03-21 12:02:26
tags: 环境配置
---
# Strongswan
```
apt-get install strongswan
apt-get install strongswan-plugin-xauth-noauth

iptables -t nat -A POSTROUTING -s 10.146.0.0/24 -o ens4 -j MASQUERADE
iptables -L -t nat

echo 1 >> /proc/sys/net/ipv4/ip_forward
vim /etc/sysctl.conf
net.ipv4.ip_forward=1
net.ipv6.conf.all.forwarding=1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
sysctl -p
ifconfig ens4 mtu 1500 up

vim /etc/ipsec.secrets
: PSK "123"
yu : XAUTH "yu"

vim /etc/ipsec.conf
config setup
    cachecrls=yes
    uniqueids=never #一个账号多台设备登陆
conn ios_android
    keyexchange=ikev1
    left=%defaultroute
    fragmentation=yes
    leftauth=psk
    leftsubnet=0.0.0.0/0
    right=%any
    rightauth=psk
    rightauth2=xauth
    rightdns=8.8.8.8,8.8.4.4
    rightsourceip=10.146.0.4/20
    auto=add

# 防火墙开放500 4500 端口
```

# Shadwosock
```
sudo apt-get install python-gevent python-pip
sudo pip install shadowsocks
touch shadow.json
{
"server":"0.0.0.0",
"server_port":8388,
"password":"密码与客户端配置一样",
"timeout":600,
"method":"aes-128-cfb"
}
ssserver -c shadow.json -d start
```