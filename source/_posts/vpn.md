---
title: VPN 搭建
date: 2019-03-21 12:02:26
tags: 环境配置
---
# Strongswan
```
apt-get install strongswan
apt-get install strongswan-plugin-xauth-noauth

iptables -t nat -A POSTROUTING -s 10.11.10.0/24 -o ens4 -j MASQUERADE
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
    ike = aes256-sha256-modp1024,3des-sha1-modp1024,aes256-sha1-modp1024!
    esp = aes256-sha256,3des-sha1,aes256-sha1!
    left=%defaultroute
    fragmentation=yes
    leftauth=psk
    leftsubnet=0.0.0.0/0
    right=%any
    rightauth=psk
    rightauth2=xauth
    rightdns=8.8.8.8,8.8.4.4
    rightsourceip=10.11.1.0/24
    reauth=yes
    auto=add
# 防火墙开放500 4500 端口
```

# Strongswan 客户端
```
config setup

conn toserver
  keyexchange=ikev1
  left=%any
  leftid=yu
  leftsourceip=%config
  leftauth=psk
  leftauth2=xauth
  leftfirewall=yes
  leftsubnet=192.168.10.100/27
  right=104.243.31.52
  rightid=104.243.31.52
  rightauth=psk
  rightauth2=xauth
  rightsubnet=10.11.1.0/24
  xauth_identity=yu
  auto=start
  ike = aes256-sha256-modp1024,3des-sha1-modp1024,aes256-sha1-modp1024!
  esp = aes256-sha256,3des-sha1,aes256-sha1!
  margintime=1m
  rekeyfuzz=100%
  rekey=yes
  closeaction=restart
  keyingtries=%forever
```

# Shadowsock
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

# dante
```bash
apt-get install dante
vim /etc/dante.conf

logoutput: stderr
internal: eth0 port = 1080
external: eth0
# 验证账户：username 不验证账户：none
method: none
user.privileged: root
user.notprivileged: nobody
user.libwrap: nobody
compatibility: sameport
compatibility: reuseaddr
extension: bind

client pass {
  from: 0.0.0.0/0 to: 0.0.0.0/0
  log: connect disconnect error
}

pass {
  from: 0.0.0.0/0 to: 0.0.0.0/0
  command: bind
  log: connect disconnect error
}

pass {
  from: 0.0.0.0/0 to: 0.0.0.0/0
  command: bindreply udpreply
  log: connect error
}

pass {
  from: 0.0.0.0/0 to: 0.0.0.0/0 port 1-65535
  protocol: tcp udp
}

pass {
  from: 0.0.0.0/0 to: 0.0.0.0/0 port 1-65535
  command: udpassociate
}

/etc/init.d/dante restart/start/stop
```