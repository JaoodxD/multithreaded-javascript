self.onmessage = ({ data: { buffer, name } }) => {
  const view = new Int32Array(buffer)
  console.log(`Worker ${name} has started`)
  const result = Atomics.wait(view, 0, 0, 1000)
  console.log(`Worker ${name} waked with ${result} code`);
}
