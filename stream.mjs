import { createWriteStream as writer, createReadStream as reader } from "fs";

//mengalirkan data perlahan lahan
//stream mendatangkan data secara tahap pertahap data / tidak langsung sekaligus semua

//contoh misal memakai fs/file system, nanti klo buat website asli streamnya dibalas menggunakan server
//NON BLOCKING BERARTI BISA JADI, DIBACA DULU ISI FILENYA
const write = writer("target.log");
write.write("GAB");
write.close();

const read = reader("target.log");

//pake listener data, ketika datanya siap maka apa yg akan dilakukan
//sama seperti .addListener
//bisa pake .read() atau addListener


read.on("data", (data) => {
  //kita decoding biar bisa kita baca karna bentuknya Buffer
  console.log(data.toString());
  read.close();
});
