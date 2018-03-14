---
title: vim
date: 2017-12-11 00:40:31
tags: Linux
---

````
#置配置文件到/root/.vim/.vimrc 解决中文乱码 或 /etc/vim/.vimrc
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8


#解决复制粘贴造成的格式混乱
:set paste

#显示文件行号
:set nu
````
