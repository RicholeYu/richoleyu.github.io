---
title: hexo
date: 2017-12-05 00:14:37
tags:
---

```
# blog配置

# pull hexo
git clone git@github.com:RicholeYu/richoleyu.github.io.git

# pull 远程分支hexo到本地分支hexo
git fetch origin hexo:hexo

git checkout hexo

# 删除本地master分支，对我们操作blog没什么用，主要存放博客的静态文件，在master上修改静态文件，可以修改博客样式
git branch -D master

# 创建新的博客
hexo new "新博客"

# 本地预览博客
hexo s

# 发布博客
hexo clean && hexo d

# 发布完博客之后，把hexo分支改动，push上去
git add -A
git commit -m "update"
git push origin hexo:hexo
```
