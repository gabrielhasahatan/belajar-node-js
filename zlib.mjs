import zlib from 'zlib'
import fs from 'fs'

//mengkompresi menggunakan Gzip
const source = fs.readFileSync('zlib.mjs')       
const result =zlib.gzipSync(source)
// console.log(result);
fs.writeFileSync('zlib.mjs.txt',result)

//mengdekompres
const dekompres = fs.readFileSync('zlib.mjs.txt')
const hasil = zlib.unzipSync(dekompres)
console.log(hasil.toString());
