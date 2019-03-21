---
title: linux
date: 2019-02-19 16:25:44
tags: Linux
---
```
# http-server 创建https 服务
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
http-server -S -C cert.pem -o

# 替换文件某字符串
find -name '要查找的文件名' | xargs perl -pi -e 's|被替换的字符串|替换后的字符串|g'
```