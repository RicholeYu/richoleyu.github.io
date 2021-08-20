---
title: MongoDB
date: 2018-10-09 12:12:42
tags:
---
mongod --auth --config D:\data\mongod.cfg --service --serviceName
net start mongodb
```
#新建管理员用户
use admin
db.createUser({ "user": "root", "pwd": "ddainn1314", "roles": [{ "role": "root", "db": "admin" }] })

#用户验证
use admin
db.auth("root", "ddainn1314")

#使用数据库
use 数据库名字
db.表名.find({})

#数据库导出
mongoexport -d 数据库名 -c 表名 -o 导出文件路径 -u root -p ddainn1314 --type json --authenticationDatabase admin

#数据库导入
mongoimport -d 数据库名 -c 表名  -u root -p ddainn1314 --file 导入文件路径 --type json --authenticationDatabase admin

#mongo链接
mongodb://root:ddainn1314@$localhost:27017/shop?authSource=admin

#关闭mongodb
db.shutdownServer()
```