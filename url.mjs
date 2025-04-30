import {URL} from 'url'


//simple saja buat mendapatkan informasi url
const href = new URL('https://www.youtube.com/watch?v=b39Xqf5iyjo&t=10040s')

console.log({host : href.host});
console.log({hash : href.hash});
console.log({hostname : href.hostname});
console.log({pw : href.password});
console.log({path : href.pathname});
const paramV = href.searchParams
paramV.forEach((data,key)=>{
    console.log(`${key} : ${data}`);
    
});
