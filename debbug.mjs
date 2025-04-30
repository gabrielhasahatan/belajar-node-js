function name(params) {
    debugger;
    return `hi ${params}`
}

debugger;
//kenapa function diatas tidak dijalankan debugnya?, karena belum dijalankan dibawah ini
const p = name('pee')
console.log(p);