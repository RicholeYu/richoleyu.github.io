var i = 0

setInterval(() => {
  document.getElementById('box').textContent = (++i % 2 === 1) ? '圆形' : '正方形'
}, 2000)