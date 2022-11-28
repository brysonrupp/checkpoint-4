import { appState } from "../AppState.js";
import { inspireService } from "../Services/InspiresService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPicture() {
    let inspire = appState.inspire
    document.querySelector('body').style.backgroundImage = `url(${inspire.imgUrl})`
    setHTML('author', inspire.ImageTemplate)
}








export class InspireController {
    constructor() {
        // console.log('hey from controller');
        this.getImage()
        appState.on('inspire', _drawPicture)
    }

    async getImage() {
        try {
            await inspireService.getImage()
        } catch (error) {
            Pop.error(error.message)
            console.error(error);
        }
    }

    async
}