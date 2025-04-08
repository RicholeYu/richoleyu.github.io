# Docker镜像加速

## Dockerfile 示例

```Dockerfile
FROM docker.1ms.run/node:23
WORKDIR /app
copy . /app
cmd ["node","index.js"]
```