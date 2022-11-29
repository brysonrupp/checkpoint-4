export const WeatherApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather/',

})

export const QuotesApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes/',

})

export const ImagesApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images/',

})

export const NotesApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/bryson/todos',

})