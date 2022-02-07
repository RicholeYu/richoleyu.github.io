---
title: co函数
date: 2019-11-26 14:59:07
tags:
---
### 简单实现浏览器使用的co函数 支持以下类型
* Promise类型
* javascript基本数据类型
* 函数
* async 函数
* generator函数
* generator对象

```javascript
function co (generatorFnc) {
  console.log("co start", generatorFnc.name)
  return new Promise(resolve => {
    dealNext(generatorFnc(), null, resolve)
  }).then(res => {
    console.log("co end", generatorFnc.name)
    return res
  })
}

function dealNext(generator, nextValue, resolve) {
  let generatorNext = generator.next(nextValue)
  let value = generatorNext.value
  let done = generatorNext.done
  if (done) { // 判断generator函数是否完成
    resolve(value)
  } else if (value instanceof Promise) {  // Prmise类型
    value.then(res => dealNext(generator, res, resolve)).catch(err => dealNext(generator, err, resolve))
  } else if (typeof value === "function") { // 函数类型
    if (value.constructor.name === "GeneratorFunction") { // generator函数
      co(value).then(res => dealNext(generator, res, resolve))
    } else { // 普通函数
      dealNext(generator, value(), resolve)
    }
  } else if (value.toString() === "[object Generator]") { // generator对象
    new Promise(resolve => dealNext(value, null, resolve)).then(res => dealNext(generator, res, resolve))
  } else { // 其他值 直接返回
    dealNext(generator, value, resolve)
  }
}

function * testFunction () {
  const constValue = 5
  const promiseValue = new Promise (resolve => setTimeout(() => resolve(10), 4000))
  let asyncFuncResult = yield asyncFunction(4, 8)
  console.log(`asyncFuncResult ${asyncFuncResult}`)
  let constResult = yield constValue
  console.log(`constResult ${constResult}`)
  let promiseResult = yield promiseValue
  console.log(`promiseResult ${promiseResult}`)
  let generatorResult = yield generatorFunction()
  console.log(`generatorResult ${generatorResult}`)
  let generatorResult1 = yield generatorFunction
  console.log(`generatorResult1 ${generatorResult1}`)
  return asyncFuncResult + constResult + promiseResult + generatorResult + generatorResult1
}

async function asyncFunction (c, d) {
  let a = await new Promise(resolve => setTimeout(() => resolve(3), 3000))
  let b = await new Promise(resolve => setTimeout(() => resolve(4), 4000))
  return a + b + c + d
}

function * generatorFunction () {
  let a = yield new Promise(resolve => setTimeout(() => resolve(3), 1000))
  let b = yield new Promise(resolve => setTimeout(() => resolve(4), 1000))
  return a + b
}

co(function* () {
  const testFunctionResult = yield co(testFunction)
  console.log(`testFunctionResult ${testFunctionResult} `)
  co(testFunction).then(testFunctionResult1 => console.log(
    `testFunctionResult1 ${testFunctionResult1}`
  ))
})

```