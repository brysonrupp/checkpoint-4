export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.status = data.weather[0].description
        this.icon = data.weather[0].icon
    }





    weatherSwapT() {
        let temp = ((this.temp - 273.15) * 1.8) + 32
        return Math.floor(temp)
    }

    weatherSwapC() {
        let celcius = (this.temp - 273.15)
        return Math.floor(celcius)
    }
}
