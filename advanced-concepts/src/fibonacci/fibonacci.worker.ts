import { parentPort } from 'worker_threads';

const fibonnaci = (n = 10) => {
  if (n < 2) return n;

  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

// parentPort.on('message', ({ n, id }) => {
//   const result = fibonnaci(n);

//   parentPort.postMessage({ result, id });
// });

module.exports = (n: number) => fibonnaci(n);
