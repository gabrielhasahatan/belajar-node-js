import { report } from "process"

report.reportOnFatalError=true
report.reportOnSignal = true


report.reportOnUncaughtException=true
report.filename ="hasil.json"
const er =()=>{
    throw new Error("UPSSS")
}

er()