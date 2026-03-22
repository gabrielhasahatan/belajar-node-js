//liat parrent-worker
import { parentPort, threadId } from "worker_threads";

//setiap proses dijalankan diworker ini
function berhitung(data) {
  for (let i = 0; i < data; i++) {
    //thread parent itu satu tapi ketika parent ngirim sesuatu ke worker, worker akan membuat threadId yang berbeda
    console.log(`thread : ${threadId} send : ${i}`);
    parentPort.postMessage(`post mess ${i}, thread : ${threadId}`);
  }
}

//parent dari worker ini
parentPort.addEventListener("message", ({ data }) => {
  berhitung(data);
  parentPort.close();
});
