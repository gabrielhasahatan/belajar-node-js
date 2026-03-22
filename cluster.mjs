import cluster from "cluster"
import os from "os"
import process from "process"
import http from "http"

if (cluster.isPrimary) {
    console.log(`primary : ${process.ppid}`);

    // ketika menjalankan fork berarti dia akan menajalakankan workernya yang dimana utk sementara workernya merupakan file ini dan file ini akan menjadi worker bukan primary lagi
    for (let index = 0; index < os.cpus().length; index++) {
    cluster.fork()
    }
    cluster.addListener("exit",(worker)=>{
        console.log(`Worker ${worker.id} is exit`);
        // ketika ada worker mati maka akan dihidupakn kembali
    cluster.fork()
        
    })
}

if (cluster.isWorker) {

    const server = http.createServer((req,res)=>{
        res.write(`Process worker : ${process.pid}`)
        res.end()
        process.exit()
    })

    server.listen(3000)
    console.log(`Start cluster worker ${process.pid}`);
    
}