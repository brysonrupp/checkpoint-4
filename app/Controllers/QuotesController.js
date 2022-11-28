import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawQuote() {
    console.log('drawingQuote');
    let quote = appState.quote
    setHTML('quote', quote.content)
    setText('quote-author', quote.author)
}





export class QuotesController {
    constructor() {
        this.getQuote()
        appState.on('quote', _drawQuote)
    }



    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.error(error.message)
        }
    }


}