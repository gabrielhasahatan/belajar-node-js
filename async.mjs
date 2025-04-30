//secara default mjs sudah global code adalah async
function sample(){
   return Promise.resolve('Berhasil')
}

const test = await sample()
console.log(test);

//misal tanpa mjs alias js
async function jalankan() {
    const test = await sample()
    console.log(test);
}
jalankan()
