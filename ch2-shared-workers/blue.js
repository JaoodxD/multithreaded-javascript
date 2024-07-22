console.log('blue.js')

const worker = new SharedWorker('shared-worker.js')

worker.port.onmessage = (event) => {
  console.log('EVENT', event.data)
}

globalThis.addEventListener('beforeunload', () => {
  worker.port.postMessage('close')
})
