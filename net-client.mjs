import net from "net";



//keiinget web-worker di async jir lempar lemparan data
const conn = net.createConnection({ 
    port: 3000, 
    host: "localhost" 
 });

conn.on('data',(data)=>{
    console.log(`log client : ${data.toString()}`);
    
})

setInterval(() => {
    //pake \r\n alias enter biar data ke enter
    conn.write("client ngirim balik")
}, 3000);