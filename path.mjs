import path from "path";
import os from "os"
const file = os.homedir()

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.delimiter);

// //liat nama setelah .titik (extension name)
console.log(path.extname(file));

console.log(os.freemem());
console.table(os.cpus());

console.table(os.networkInterfaces())