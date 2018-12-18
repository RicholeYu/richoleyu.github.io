---
title: msys2
date: 2018-12-17 18:23:15
tags: Linux
---
错误：无法提交处理 (无效或已损坏的软件包 (PGP 签名))
修改/etc/pacman.conf
设置SigLevel = Never

```
# msys2 常用环境配置

# 安装命令
pacman -S 
# 卸载命令
pacman -Rs 

# node、git、npm等命令不要用pacman安装，修改.bashrc 新增环境变量使用windows同一套命令
export PATH=/c/git:$PATH

# VSCODE 集成MSYS2 终端 设置 settings.json
"terminal.integrated.shell.windows": "D:\\program\\msys64\\usr\\bin\\bash.exe",
"terminal.integrated.shellArgs.windows": [
    "--login"
],
"terminal.integrated.env.windows": {
    "CHERE_INVOKING": "1"
},
```