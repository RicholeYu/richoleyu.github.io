---
title: 常用命令
date: 2019-09-04 14:38:38
tags: Linux
---
```
# nvm 安装
git clone https://github.com/creationix/nvm.git /usr/local/bin/nvm

# http-server 创建https 服务
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem

# http-server (-g gzip, -S https, -C cert, -o 打开浏览器)
http-server -S -C cert.pem -o -g

# 加速puppeteer
PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors npm i puppeteer -S

# git tag
git tag -a tag_name -m "tag description"
git push --tag

# git 显示中文
git config --global core.quotepath false

# ab 压力测试 n 请求数 c 并发数 -p post数据文件
ab -n 400 -c 20 -T "application/json" -p test.json "http://localhost:8080"；
```
