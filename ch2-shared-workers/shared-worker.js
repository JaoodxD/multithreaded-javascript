const ID = Math.floor(Math.random() * 999999)
console.log('shared-worker.js', ID)

const ports = new Set()

self.onconnect = event => {
  const port = event.ports[0]
  ports.add(port)
  console.log('CONN', ID, ports.size)
  port.onmessage = event => {
    if (event.data === 'close') {
      ports.delete(port)
      return
    }
    console.log('MESSAGE', ID, event.data)

    for (const p of ports) {
      p.postMessage([ID, event.data])
    }
  }
}
