export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.status = data.weather[0].description
        this.icon = data.weather[0].icon
        this.bool = true
        this.f = Math.floor(((this.kelvin - 273.15) * 1.8) + 32)
        this.c = Math.floor(this.kelvin - 273.15)


    }



    get listTemplate() {
        return `
    <div>${this.icon}</div>
    <div>${this.f}</div>
    <div>${this.c}</div
    `
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
