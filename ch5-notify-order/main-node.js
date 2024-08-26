const { Worker } = require('node:worker_threads')

const buffer = new SharedArrayBuffer(4)
const view = new Int32Array(buffer)

for (let i = 0; i < 4; i++) {
  const worker = new Worker('./worker-node.js')
  worker.postMessage({ buffer, name: i })
}

setTimeout(() => {
  Atomics.notify(view, 0, 3)
}, 500)
