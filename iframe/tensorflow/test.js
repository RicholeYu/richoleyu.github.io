let model = tf.sequential()
const num = 70000
const time = 300
const times = 1000
const v = 1

function calc (num) {
  return 2 * num + 1
}

function translate (x) {
  return [x]
}

async function runAndSave () {
  const input = Number(document.getElementById('input').value)
  model.add(tf.layers.dense({
    units: 10,
    inputShape: [v]
  }))
  model.add(tf.layers.dense({
    units: 1
  }))
  const learningRate = 0.8;
  const adam = tf.train.adam(learningRate);
  model.compile({loss: 'meanSquaredError', optimizer: adam})
  // 学习阶段
  console.log(`开始进行${num}次训练`)
  for (let index = 0; index <= num; index += times) {
    index !== 0 && console.log(`已进行${index}次模型训练`)
    if (index < num) {
      const xss = (new Array(times)).fill(1).map(() => Math.random())
      const yss = xss.map(item => calc(item))
      // console.log(xss, xss.map(translate), yss)
      await model.fit(
        tf.tensor(xss.map(translate), [times, v]),
        tf.tensor1d(yss),
        { opochs: time }
      )
    }
  }
  console.log('模型训练完毕')
  const output = model.predict(tf.tensor(translate(input), [1, v]))
  console.log(`预测结果: ${Number(Array.from(output.dataSync())[0].toFixed(2))}`)
  console.log(`实际结果: ${calc(input)}`)
  await model.save('localstorage://calc');
  console.log('训练模型已存储')
}

async function loadModelAndRun () {
  const input = Number(document.getElementById('input').value)
  model = await tf.loadLayersModel('localstorage://calc');
  console.log(`实际结果: ${calc(input)}`)
  const output = model.predict(tf.tensor(translate(input), [1, v]))
  console.log(`预测结果: ${Number(Array.from(output.dataSync())[0].toFixed(2))}`)
}


document.getElementById('run').onclick = runAndSave
document.getElementById('load').onclick = loadModelAndRun


// const xss = (new Array(num)).fill(1).map((item, index) => index + 1)
// const yss = xss.map((item, index) => (item * 2))
// console.log(xss, yss)
// // 为训练生成一些合成数据
// const xs = tf.tensor2d(xss, [num, 1]);
// const ys = tf.tensor2d(yss, [num, 1]);

// // 使用数据训练模型
// model.fit(xs, ys, {epochs: 100}).then(() => {
// // 在该模型从未看到过的数据点上使用模型进行推理

//   const result = model.predict(tf.tensor2d([num], [1, 1]))
//   const a = result.dataSync()
//   console.log(a)
//   // 打开浏览器开发工具查看输出
// });

