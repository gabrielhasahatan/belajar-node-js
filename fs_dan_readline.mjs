import { stdin, stdout } from "node:process";
import { readFileSync as _readFileSync, writeFile, readFile } from "fs";
import { createInterface } from "node:readline";
import { readFileSync } from "node:fs";

const rl = createInterface({
  input: stdin,
  output: stdout,
});
//baca dulu datanya kemudian tampung datanya
const bacaData = _readFileSync("contact.json", "utf-8");
//tampung disini biar kita push lagi kemudian kita write file isi tampungan ini serta data barunya
//parse mengubah string json menjadi object / array
const userData = JSON.parse(bacaData)
console.log({userData});

rl.question("Siapa Nama kamu?", (nama) => {
  console.log(`Hii ${nama}`);
  rl.question("Berapa No hp kamu?", (nohp) => {
    console.log(`No hp anda ${nohp}`);
    const datanya = {nama,nohp}
    userData.push(datanya)
    rl.close();

    writeFile("contact.json", JSON.stringify(userData), (err) => {
      if (err) console.log(err);
      //sekarang aku paham perbedaan menggunakan fs sync dan async,kalo sync bisa kita tampung kalo async nilainya menggunakan callbacknya langsung
      readFile("contact.json",'utf-8',(err,data)=>{
        if (err) console.log(err);
        console.log(data);
        
      });
      // console.log(readFileSync('contact.json','utf-8'));
      
    });

  });
});
