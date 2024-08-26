
self.onmessage = ({ buffer, name }) => {
  self.postMessage('ready')
  const view = new Int32Array(buffer)
  console.log(`Worker ${name} has started`)
  const result = Atomics.wait(view, 0, 0)
  console.log(`Worker ${name} waked with ${result} code`);

}
