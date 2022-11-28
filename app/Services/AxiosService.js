export const WeatherApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather/',
    timeout: 8000,
})

export const QuotesApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes/',
    timeout: 8000,
})

export const ImagesApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images/',
    timeout: 8000,
})

// export const NotesApi = new axios.create({
//     baseURL: 'https://bcw-sandbox.herokuapp.com/api/bryson/todos',
//     timeout: 8000,
// })