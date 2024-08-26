const { Worker } = require('node:worker_threads')

const buffer = new SharedArrayBuffer(4)
const view = new Int32Array(buffer)
const now = Date.now()
let count = 128

for (let i = 0; i < 128; i++) {
  const worker = new Worker('./worker-node.js')
  worker.postMessage({ buffer, name: i })
  worker.on('message', () => {
    console.log(`Ready; id=${i}, count=${--count}, time=${Date.now() - now}ms`)
    if (count === 0) {
      Atomics.notify(view,0)
    }
  })
}
