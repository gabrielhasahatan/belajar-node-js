import { writeFile } from "fs";

writeFile('test.txt','dari file fs.mjs',(err)=>{
    if (err) {
        console.log('err');
    }
})