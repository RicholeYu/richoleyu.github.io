---
title: VPN 搭建
date: 2019-03-21 12:02:26
tags: 环境配置
---
# Strongswan
```
# 修改apt源增加以下几列
vim /etc/apt/sources.list
deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse  
deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
apt-get update
apt-get install strongswan
apt-get install strongswan-plugin-xauth-noauth

# 增加转发规则 内网ip端
iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o eth0 -j MASQUERADE
iptables -L -t nat

# 修改转发规则
echo 1 >> /proc/sys/net/ipv4/ip_forward
vim /etc/sysctl.conf
net.ipv4.ip_forward=1
net.ipv6.conf.all.forwarding=1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
sysctl -p

# 网卡mtu设置为1500
ifconfig eth0 mtu 1500 up

# 增加账号
vim /etc/ipsec.secrets
: PSK "123"
yu : XAUTH "yu"

# 增加配置
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
    rightsourceip=10.0.0.4/20
    auto=add

# 重启服务
service strongswan restart
ipsec restart

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
