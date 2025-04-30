import readline from "readline";
import readlinePromise from "readline/promises";

// const input = readline.createInterface({
//     //input atau outputnya mau gimana??, kita pake stdin nya si process
//   input: process.stdin,
//   output: process.stdout,
// });

// input.question('siapa kau ',(name)=>{
//     console.log(`hii ${name}`);
//     input.close()
// })

const iput = readlinePromise.createInterface({
  input : process.stdin,
  output :process.stdout
})

const hasil =await iput.question('hii')
const hasil2 =await iput.question('hii kedua')

console.log(hasil)
console.log(hasil2)

iput.close()