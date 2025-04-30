import dns from 'dns/promises'
import dnsCallback from 'dns'


//kalo pake promise
const test =await dns.lookup('www.google.com')
console.log(test);


//lihat perbedaannya
dnsCallback.lookup('www.google.com',(err,res,familly)=>{
    if (err) return 'err bro'
    console.log(`${res} dan ${familly}`);
    
})