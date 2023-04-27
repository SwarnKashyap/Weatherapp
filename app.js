const API_KEY = `361d09616673cceb2e017766dc221360`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

const form = document.querySelector("form")
console.log(form)
const weather=document.querySelector("#weather")
const search= document.querySelector("#search")

const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response =await fetch(url)
    const data = await response.json()
    console.log(data)
    return showWeather(data)
    
}

const showWeather= (data) =>{
    weather.innerHTML = ` 
    <div>
    <h1>${data.main.temp} degree celcius</h1>
    <h4 style="text-align: center">${data.weather[0].main}</h4>
    <h4 style="text-align: center"> Wind Speed ${data.wind.speed}</h4>
    </div>
    `
}
console.log("swarn")
form.addEventListener(
    "submit",
    function(event){
        console.log("swarn")
        getWeather(search.value)
        event.preventDefault()
    }
)