---
title: javascript元素和鼠标距离
date: 2019-11-26 11:47:20
tags:
---
```javascript
// 返回元素的宽度（包含内边距和边框, 不包含外边距）
dom.offsetWidth

// 返回元素的高度（包含内边距和边框, 不包含外边距）
dom.offsetHeight

// 返回元素的宽度（包含内边距, 不包含边框外边距）
dom.clientWidth

// 返回元素的高度（包含内边距, 不包含边框外边距）
dom.clientHeight

// 滚动条的横向距离, 该值可读可写
dom.scrollLeft

// 滚动条的竖向距离, 该值可读可写
dom.scrollTop

// 返回元素总宽度, 无滚动条时与clientWidth相同, 有滚动条时 dom.scrollWidth - dom.clientWidth = MAX_SCROLL_TOP 最长横移距离
dom.scrollWidth

// 返回元素总高度, 无滚动条时与clientWidth相同, 有滚动条时 dom.scrollWidth - dom.clientWidth = MAX_SCROLL_TOP 最长横移距离
dom.scrollHeight

// 元素距离父元素左上角的横向距离
dom.offsetLeft

// 元素距离父元素左上角的纵向距离
dom.offsetTop

// 鼠标事件中的距离

// 鼠标相对于浏览器左上角的横向距离（不随滚动条滚动而改变）
event.clientX

// 鼠标相对于浏览器左上角的纵向距离（不随滚动条滚动而改变）
event.clientY

// 鼠标相对于浏览器左上角的横向距离（随滚动条滚动而改变）
event.pageX

// 鼠标相对于浏览器左上角的纵向距离（随滚动条滚动而改变）
event.pageY

// 鼠标相对于屏幕左上角的横向距离（多屏情况, 第二屏左上角screenX为第一屏宽度）
event.screenX

// 鼠标相对于屏幕左上角的纵向距离
event.screenY

// 鼠标相对于event.target左上角的横向距离
event.offsetX

// 鼠标相对于event.target左上角的纵向距离
event.offsetY
```

