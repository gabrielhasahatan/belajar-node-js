import { threadId, Worker } from "worker_threads";
//karna berjalannya paralel posisi output console.log nya tidak menentu 
const worker1 = new Worker('./worker.mjs')
const worker2 = new Worker('./worker.mjs')

worker1.addListener('message',(value)=>{
console.log(`data untuk worker1 : ${value} : threadParrent ${threadId}`);
})

worker2.addListener('message',(value)=>{
console.log(`data untuk worker2 : ${value} : threadParrent ${threadId}`);
})

worker1.postMessage(10)
worker2.postMessage(11)