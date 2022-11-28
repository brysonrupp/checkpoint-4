import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { WeatherApi } from "./AxiosService.js";

class WeathersService {
    async getWeather() {
        const res = await WeatherApi.get()
        console.log(res.data);
        appState.weather = new Weather(res.data)
    }
}


export const weathersService = new WeathersService()