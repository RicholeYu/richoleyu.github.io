---
title: 常用命令
date: 2019-09-04 14:38:38
tags: Linux
---
```
# 创建 ssh key
ssh-keygen -t rsa -C “dfyu@xtremeprog.com”

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

# Item2 lszrz
服务端 安装 apt-get install lszrz
客户端 安装 Item2 expect
# gos 命令
export LC_CTYPE=en_US
expect /Users/yudafu/500/tool/$1
# expect 文件
spawn ssh root@XX.XXX -p 50022
expect "*password*"
send "password\n"
expect "*root*"
send "ssh root@XXXXX -p 52222\n"
expect "*password*"
send "cd www/web\n"
interact

# ab 压力测试 n 请求数 c 并发数 -p post数据文件
ab -n 400 -c 20 -T "application/json" -p test.json "http://localhost:8080"；
```
