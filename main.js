// Catch html elements
const cityInput = document.querySelector('.inputText')
const findButton = document.querySelector('.findButton')
//Listen Find Button
findButton.addEventListener('click', () => {
    //Send input value to function for API call
    getData(cityInput.value)
})
function getData(input) {
    console.log(input)
    const API_KEY = "88bbf112f99bfb21c11d2ea5f9857b08"
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric&lang=tr`
    //get promise with fetch and convert to json
    fetch(Url) //fetch url
        .then(response => response.json()) //convert to json
        .then(data => { //reach data from json
            const { name, sys: { country }, main: { temp, feels_like, humidity }, wind: { speed }, weather: [{ description }] } = data;
            // take data from json to js
            const city = document.querySelector('#city')
            const temperature = document.querySelector('#temperature')
            const weatherDesc = document.querySelector('#weather')
            const feel = document.querySelector('#feels-like')
            const hum = document.querySelector('#humidity')
            const wind = document.querySelector('#wind')
            //send data from js to html
            city.textContent = `${name},${country}`
            temperature.innerText = `${temp.toFixed(1)}`
            hum.textContent = `Nem: %${humidity}`
            wind.innerHTML = `Ruzgar: ${speed} km/s`
            weatherDesc.textContent = `Hava Durumu: ${description}`
            feel.innerText = `Hissedilen: ${feels_like}`
        })
        .catch(error => console.log(error))
    cityInput.value = ''
    cityInput.focus()
}