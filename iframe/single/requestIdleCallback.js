var i = 0
var repeat = 0

function unImportWork(deadline) {
  while (deadline.timeRemaining() && i < 1000000000) {
    for (let a = 0;a < 10000; a++){}
    i += 10000
  }

  if (i < 1000000000) {
    repeat++
    requestIdleCallback(unImportWork)
  } else {
    console.log('done', repeat)
  }
}

requestIdleCallback(unImportWork)




var i = 0
for (;i < 1000000000; i++) {}
console.log('done')
