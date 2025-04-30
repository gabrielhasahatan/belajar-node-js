import { readFile } from "fs";
import { promisify } from "util"
import util from 'util'

//kalo satu parameter saja bakal mereturn apapun ke string
const satu = util.format('WIWOK DETOK')

const angka = 1

//sebelum ada `${}` dulu menggunakan .format seperti ini
//mirip c++ jir

const dua = util.format('Hallo %d',angka)
console.log({dua});

//bisa json juga
const person ={
    nama:'gab',
    umur:'20'
}

//kalo pake ${}
console.log(`hallo ${JSON.stringify(person)}`);
console.log(util.format(`hallo %j`,person));


console.log(util.types.isStringObject(person))


//promisify intinya mengubah function callback menjadi function yang promise
const readFileAsync = promisify(readFile);

async function bacaFile() {
  try {
    const data = await readFileAsync('target.log', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

bacaFile();
