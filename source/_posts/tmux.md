---
title: Tmux
date: 2017-12-04 23:17:17
tags: Linux
---
```
tmux (~代表ctrl b)
  命令
  查看会话 tmux ls
  关闭会话 tmux kill-session -t 序号
  进入会话 tmux attach -t 序号
  查看历史输出 ~ [ (通过上下，上一页下一页移动，q退出该模式)
  全屏当前panell ~ z (再次输入，则退出全屏)
  后台挂起tmux ~ d
  panel
    新建纵向分屏 ~ %
    新建横向分屏 ~ "
    显示分屏号码 ~ q
    切换下一个分屏 ~ o
    切换横向纵向分屏 ~ 空格
    关闭当前分屏 ~ x
  window
    新建窗口 ~ c
    切换至上一个窗口 ~ p
    切换至下一个窗口 ~ n
    通过选择来切换窗口 ~ w
    重命名窗口 ~ ,
    关闭当前窗口 ~ &
```
