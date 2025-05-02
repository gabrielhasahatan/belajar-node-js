import {Console, error} from 'console'
import fs from 'fs'

// const logFile = fs.writeFileSync('console.mjs.txt')
//menulis log bukan kepada file melainkan ke dalam terminal atau console biasanya 
const logFile = fs.createWriteStream('console-app.log')
const errFile = fs.createWriteStream('console-err.log')

const log = new Console({
    stdout : logFile,
    //untuk error
    stderr : errFile
})

log.info('Hii')
log.error(new Error)