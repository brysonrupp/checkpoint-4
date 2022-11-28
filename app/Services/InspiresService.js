import { appState } from "../AppState.js"
import { Inspire } from "../Models/Inspire.js"
import { ImagesApi } from "./AxiosService.js"

class InspireService {
    async getImage() {
        const res = await ImagesApi.get()
        appState.inspire = new Inspire(res.data)
        // console.log(appState.inspire, 'got image');
    }



}







export const inspireService = new InspireService()