---
title: ssh反向代理
date: 2022-01-16 19:02:26
tags: 环境配置
---

#### 设置外网主机sshd_config GatewayPorts yes
#### 设置内网主机到外网主机的免密登录
ssh-copy-id root@104.243.31.52
#### kill掉所有autossh任务
ps -ef | grep ssh
#### ssh
autossh -M 2223 -fCNR 2222:localhost:22 root@104.243.31.52
#### mysql
autossh -M 3307 -fCNR 3306:localhost:3306 root@104.243.31.52
#### redis
autossh -M 6380 -fCNR 6379:localhost:6379 root@104.243.31.52
#### mongo
autossh -M 27018 -fCNR 27017:localhost:27017 root@104.243.31.52

#### 查看外网主机ssh端口连接
netstat -anp | grep ssh