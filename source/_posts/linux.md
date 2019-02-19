---
title: linux
date: 2019-02-19 16:25:44
tags: Linux
---
```
# http-server 创建https 服务
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
http-server -S -C cert.pem -o
```