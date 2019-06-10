---
title: docker
date: 2017-12-05 00:44:46
tags: Linux
---
```
#查看当前所下载的镜像
docker images

#下载镜像
docker pull mongo

#查看当前所运行的容器，-a参数（包括已关机的容器）
docker ps -a

#开机容器
docker start 容器名/ID

#关机容器
docker stop 容器名/ID

#重命名容器
docker rename 容器id 新容器名

#删除容器
docker rm 容器名/ID

#删除全部容器
docker rm $(docker ps -a)

#进入容器
docker exec -it 容器名/ID bash

#复制文件到容器
docker cp 本地文件路径 容器名:容器文件路径

#复制容器文件到本地
docker cp 容器名:容器文件路径 本地文件路径

# docker 新建 mongodb 
docker run -d -p 27017:27017 mongo --auth

# 进入容器，创建root账号
use admin
db.createUser({
    user: 'root',
    pwd: 'root',
    roles: [{
        role: 'root',
        db: 'admin'
    }]
})

# 验证账号
db.auth('root', 'root')

# 通过admin连接数据库
mongodb://root:root@127.0.0.1:27017/?authSource=admin

#docker 新建 redis
docker run -d -p 6379:6379 redis --requirepass "root"

#开机自动启动容器
docker update --restart=always 容器名/ID

#退出容器
exit
```

