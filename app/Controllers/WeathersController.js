import { appState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
    console.log('drawingWeather');
    let weather = appState.weather
    setHTML('weather', weather.temp)
}


export class WeathersController {
    constructor() {
        this.getWeather()
        appState.on('weather', _drawWeather)
    }


    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            Pop.error(error.message)
        }
    }
}

