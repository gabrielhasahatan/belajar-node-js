import { setTimeout,setInterval } from "timers/promises";


//untuk promis harus import,  bisa tanpa promise misal pake callback
console.log('mulai');
const nama= await setTimeout(2000,'gabriel ')
console.log('selesai');
console.log(nama);


for await (const time of setInterval(1000,'gabb')){
    console.log(time);
    
}