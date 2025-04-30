//secara default itu utf8, kalo kita buat base64 dengan kata "GABRIEL" bakalan aneh dan tak di mengerti dlm base64
//NOTE : Encoding merubah kode ke dalam bentuk misal acak
//sedangkan Decoding mengubah kode acak tersebut menjadi bisa terbaca oleh manusia
const buffer = Buffer.from("GABRIEL","base64")
console.log(buffer);

//jadi bebas kita decode ke manapun termasuk string base64 atau utf8(defaultnya)
console.log(buffer.toString("base64"));
console.log(buffer.toString("hex"));
const buff2=Buffer.from("R0FCUklFTA==","base64")
//secara default toString parameternya utf-8,jadi gaperlu masukin utf-8 lagi di parameternya
console.log(buff2.toString("utf-8"));

