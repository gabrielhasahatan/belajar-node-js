//liat parrent-worker
import {parentPort,threadId} from 'worker_threads'

function berhitung(data){
    for (let i = 0; i < data; i++) {
        console.log(`thread : ${threadId} send : ${i}`);    
        parentPort.postMessage(`post mess ${i}, thread : ${threadId}`)
    }
}

parentPort.addEventListener('message',({data})=>{
    berhitung(data)
    parentPort.close()
})