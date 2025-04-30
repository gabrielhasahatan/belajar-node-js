import process from "process"
//tanpa import juga bisa tapi lebih baik di import secara eksplisit

//lihat di dokumentasi procces untuk melihat event event yang sudah disediakan dari tindakan user
process.addListener('exit',(code)=>{
    console.log(`kode exit ${code}`)
})

console.log(process.version);

//coba jalankan node (nama file) param1 param2 param3
console.log(process.argv);

process.exit(10)
