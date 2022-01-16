---
title: Vim 配置
date: 2017-12-11 00:40:31
tags: Linux
---

````
# .vimrc配置文件
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8
inoremap ( ()<ESC>i
inoremap [ []<ESC>i
inoremap { {<CR>}<ESC>O<TAB>
inoremap < <><ESC>i
inoremap ' ''<ESC>i
inoremap " ""<ESC>i
set number
set wildmenu
set shiftwidth=2
set softtabstop=2
set smarttab
set hlsearch
set incsearch
# 解决复制粘贴造成的格式混乱
:set paste
# 显示文件行号

h或退格: 左移一个字符
l或空格: 右移一个字符
j: 下移一行
k: 上移一行
gj: 移动到一段内的下一行
gk: 移动到一段内的上一行
+或Enter: 把光标移至下一行第一个非空白字符
-: 把光标移至上一行第一个非空白字符
w: 前移一个单词，光标停在下一个单词开头
W: 移动下一个单词开头，但忽略一些标点
e: 前移一个单词，光标停在下一个单词末尾
E: 移动到下一个单词末尾，如果词尾有标点，则移动到标点
b: 后移一个单词，光标停在上一个单词开头
B: 移动到上一个单词开头，忽略一些标点
gb: 在v模式中的选中相同单词
dd: 删除行
cc: 删除行并保持原有的缩进 进入插入模式kj
(: 前移1句
): 后移1句
{: 前移1段
}: 后移1段
fc: 把光标移到同一行的下一个c字符处
Fc: 把光标移到同一行的上一个c字符处
tc: 把光标移到同一行的下一个c字符前
Tc: 把光标移到同一行的上一个c字符后
p: 粘贴
]p: 粘贴并自动缩进粘贴的代码
y: 复制
yw: 复制单词
yt(: 复制到( 内的内容
*: 向下查找当前单词
#: 向上查找当前单词

c删除并进入编辑模式
cw: 删除从光标开始的单词
ct(: 删除从光标开始到(前的单词
ci(: 删除当前(...)区域内所有内容
ci": 删除当前"..."区域内所有内容
d删除不进入编辑模式
dw: 删除从光标开始的单词
dt(: 删除从光标开始到(前的单词
di(: 删除当前(...)区域内所有内容
di": 删除当前"..."区域内所有内容
ctrl+f: 下翻一屏
ctrl+b: 上翻一屏
ctrl+d: 下翻半屏
ctrl+u: 上翻半屏
ctrl+e: 向下滚动一行
ctrl+y: 向上滚动一行
n%: 到文件n%的位置
zz: 将当前行移动到屏幕中央
zt: 将当前行移动到屏幕顶端
zb: 将当前行移动到屏幕底端

0: 移动到行首
nG: 到文件第n行
H: 把光标移到屏幕最顶端一行
M: 把光标移到屏幕中间一行
L: 把光标移到屏幕最底端一行
gg: 到文件头部
gi: 回到上次编辑的地方
G: 到文件尾部

ma: 在当前位置设置标记a
`a: 把光标移到标志a
`.: 把光标移到上次修改文件位置

zM: 折叠所有
zR: 展开所有
zc: 收起
zo: 展开

ctrlw + h: 切到左边分屏
ctrlw + l: 切到右边分屏

选中 u 改为小写
选中 U 改为大写
guw 单词改为小写
gUw 单词改为大写
gd 跳转至定义处
>% 缩进块中内容
<% 反缩进块中内容

vip: 选中一段

<leader><leader> w: 快速选中前面的单词
<leader><leader> j: 快速选中上面的单词
<leader><leader> k: 快速选中下面的单词

````
