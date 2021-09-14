---
title: ssh反向代理
---

<table>
  <tr>
    <th>机器</th>
    <th>IP</th>
    <th>用户名</th>
    <th>备注</th>
  </tr>
  <tr>
    <td>A</td>
    <td>10.21.32.106</td>
    <td>root</td>
    <td>目标服务器，处于内网</td>
  </tr>
  <tr>
    <td>B</td>
    <td>123.123.123.123</td>
    <td>root</td>
    <td>外网服务器，相当于桥梁的作用</td>
  </tr>
<table>

### 反向代理
`ssh -fCNR`

### 正向代理
`ssh -fCNL`

```
-f 后台执行ssh指令
-C 允许压缩数据
-N 不执行远程指令
-R 将远程主机(服务器)的某个端口转发到本地端指定机器的指定端口
-L 将本地机(客户机)的某个端口转发到远端指定机器的指定端口
-p 指定远程主机的端口
```

#### 首先在A上面操作：
建立A机器到B及其的反向代理
```
# ssh -fCNR [B机器IP或省略]:[B机器端口]:[A机器的IP]:[A机器端口] [登陆B机器的用户名@服务器IP]
ssh -fCNR 2222:localhost:22 root@123.123.123.123
```


#### 接着在B上面操作
建立B机器的正向代理，用来做转发
```
ssh -fCNL [A机器IP或省略]:[A机器端口]:[B机器的IP]:[B机器端口] [登陆B机器的用户名@B机器的IP]
ssh -fCNL *:2222:localhost:2222 root@localhost
```

检验是否已经启动了可以使用`ps aux | grep ssh`指令来查看


#### ssh不稳定，使用更加稳定的autossh
```
# 设置ssh免密登陆
ssh-copy-id 内网用户名@外网IP -p指定转发的端口
apt-get install autossh
# A机器执行
autossh -M 2223 -fCNR 2222:localhost:22 root@richole.cn
# B机器执行
autossh -fCNL *:2222:nuc.com:2222 root@localhost
```