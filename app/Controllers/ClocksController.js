import { setHTML } from "../Utils/Writer.js"


function _getClock() {
    let date = new Date().toLocaleTimeString()
    setHTML('time', date)
}

setInterval(_getClock, 1000)



export class ClocksController {
    constructor() {
        _getClock()
    }
}