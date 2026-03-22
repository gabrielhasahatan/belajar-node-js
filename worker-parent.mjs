import { threadId, Worker } from "worker_threads";
//parent hanya menjalankan workernya saja

//karna berjalannya paralel posisi output console.log nya tidak menentu 
const worker1 = new Worker('./worker.mjs')
const worker2 = new Worker('./worker.mjs')


//thread parent itu satu tapi ketika parent ngirim sesuatu ke worker, worker akan membuat threadId yang berbeda 
worker1.addListener('message',(value)=>{
console.log(`data dari worker1 : ${value} : threadParrent ${threadId}`);
})

worker2.addListener('message',(value)=>{
console.log(`data dari worker2 : ${value} : threadParrent ${threadId}`);
})
//semua dimulai dari sini / parent-worker
worker1.postMessage(10)
worker2.postMessage(11)

//2 worker untuk memaasikan bahwa 2 thread yang berbeda