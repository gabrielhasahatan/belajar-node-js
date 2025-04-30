import {EventEmitter} from "events";

const event =new EventEmitter()

event.addListener('hii',(name)=>{
    console.log(`hii ${name}`)
})



//btw settimeout salah satu function global
setTimeout(() => {
    event.emit('hii','gab')
    
}, 2000);


