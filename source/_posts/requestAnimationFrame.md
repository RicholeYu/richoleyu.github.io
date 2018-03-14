---
title: requestAnimationFrame
date: 2018-03-14 14:33:03
tags: 动画
---
CANVAS中 使用 递归requestAnimationFrame 代替 计数器渲染动画

```javascript

    // 解决requestAnimationFrame 的浏览器兼容，不支持的浏览器已每秒60帧设置
    let _RequestAnimationFrame = function (callback) {
            window.setTimeout(callback, 1000 / 60);
        },
        requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame ||
                                _RequestAnimationFrame;

    window.requestAnimationFrame = requestAnimationFrame;


    // 显示一帧
    function oneFrameCanvas () {
        渲染一帧动画
        render();

        // 递归反复显示一帧画面
        window.requestAnimationFrame(oneFrameCanvas);
    }
    
```
