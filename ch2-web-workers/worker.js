console.log('hello from worker.js')

self.onmessage = (msg) => {
  console.log('message from main:', msg.data)

  self.postMessage('message, sent by the worker')
}
