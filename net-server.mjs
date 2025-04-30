import net from 'net'

//ini sisi servernya
const server = net.createServer((client)=>{
    //parameter client nya bentuknya stream alias bisa di writeable atau readable
    client.on('data',(data)=>{
        //ini readablenya
        console.log(`server : ${data.toString()}`);
        //ini writeable nya
        client.write(`sisi server mengembalikan ${data.toString()}`)
    })
})

//ketika dijalankan karna ini dari servernya, dia akan menunggu koneksi dari sisi clientnya
server.listen(3000,'localhost',()=>{
    console.log('berjalan, menunggu sisi client');
    
})