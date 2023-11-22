const key = "e16d5e591c5e74de081570b2280827ea";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon =  "https://openweathermap.org/img/wn/04n@2x.png"
async function getWeather(city){
    const response = await fetch(url + city + `&appid=${key}`);
    const data = await response.json();
    if(data.cod == "404"){ 
        document.querySelector(".city").innerHTML = "City not found!!";
        return;
    }
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".min-max").innerHTML = data.main.temp_min + "°C" + "/" + data.main.temp_max + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    document.querySelector("figcaption").innerHTML = data.weather[0].description;
}
searchBtn.addEventListener("click", ()=>{
    getWeather(searchBox.value);
})
searchBox.addEventListener("keypress", (e)=>{
    if(e.key=="Enter")
    getWeather(searchBox.value);
})